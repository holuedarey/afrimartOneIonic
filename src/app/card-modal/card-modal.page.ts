import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import {
  ModalController,
  // LoadingController,
  ToastController,
} from '@ionic/angular';
import { CardModel } from 'src/app/shared/models/product.model';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { OrderService } from 'src/app/core/http-services/order.service';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import * as uni from '../globals/universal';
import * as moment from 'moment';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.page.html',
  styleUrls: ['./card-modal.page.scss'],
})
export class CardModalPage implements OnInit {
  cardForm: FormGroup;
  accVerified: boolean = false;
  maskMM: string = '';
  maskYY: string = '';
  cardModel: CardModel;
  currentUser: any;
  isLoading: boolean;
  verifiedCard: any;
  amt: number = 10;

  constructor(
    private modalCtrl: ModalController,
    private toastController: ToastController,
    public formBuilder: FormBuilder,
    // public loadingCtrl: LoadingController,
    private orderService: OrderService,
    private nativeStorage: NativeStorage,
    private authService: AuthenticationService
  ) {
    this.cardForm = this.formBuilder.group({
      card_number: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(16)])
      ),
      card_name: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(2)])
      ),
      mm: new FormControl('', Validators.compose([Validators.required])),
      yy: new FormControl('', Validators.compose([Validators.required])),
      cvc: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(3),
          Validators.minLength(3),
        ])
      ),
      checkAgree: new FormControl(
        false,
        Validators.compose([Validators.required, Validators.pattern('true')])
      ),
    });
    // this.cardForm = this.formBuilder.group({
    //   card_number: new FormControl(
    //     '4084084084084081',
    //     Validators.compose([Validators.required, Validators.minLength(16)])
    //   ),
    //   card_name: new FormControl(
    //     'Idigbe Eloka Anthony',
    //     Validators.compose([Validators.required, Validators.minLength(2)])
    //   ),
    //   mm: new FormControl('07', Validators.compose([Validators.required])),
    //   yy: new FormControl('20', Validators.compose([Validators.required])),
    //   cvc: new FormControl(
    //     '408',
    //     Validators.compose([
    //       Validators.required,
    //       Validators.maxLength(3),
    //       Validators.minLength(3),
    //     ])
    //   ),
    //   checkAgree: new FormControl(
    //     false,
    //     Validators.compose([Validators.required, Validators.pattern('true')])
    //   ),
    // });
    
  }

  ngOnInit() {
    this.nativeStorage.getItem('currentUser').then((x) => {
      this.currentUser = x;
      }
      );
  }
  async presentToast(
    header: string,
    msg: string,
    duration: number,
    color: string
  ) {
    const toast = await this.toastController.create({
      header: header,
      position: 'bottom',
      message: msg,
      duration: duration,
      // cssClass: 'custom-toast-class',
      color: color,
    });
    toast.present();
  }
  cardNumberHandlerMM(event: any) {
    //Get Card Type here
    console.log('MM: ' + event.target.value);
    this.maskMM = event.target.value;
  }
  cardNumberHandlerYY(event: any) {
    //Get Card Type here
    console.log('YY: ' + event.target.value);
    this.maskYY = event.target.value;
  }
  saveCard() {
    this.isLoading = true;
    let customerModel: any = {};
    customerModel.email = this.currentUser.user.email;
    customerModel.first_name = this.currentUser.user.fName;
    customerModel.last_name = this.currentUser.user.sName;
    customerModel.phone = this.currentUser.user.phone;

    this.orderService
      .fetchCustomer(customerModel.email)
      .then((data) => {
        if (data.status) {
          //Update Customer
          // console.log('Customer Fetch Success: ' + JSON.stringify(data));
          this.orderService
            .updateCustomer(customerModel)
            .then((data) => {
              // console.log('Customer Update Success: ' + JSON.stringify(data));
              if (data.data.customer_code != '') {
                (<any>window).window.PaystackPlugin.chargeCard(
                  (resp: any) => {
                    // this .loadingCtrl.dismiss();
                    console.log('charge successful: ', JSON.stringify(resp));
                    // this.trx = resp.reference.replace("trx_", "");
                    // this.resp = resp.gateway_response;
                    this.orderService
                      .verifyTransactions(resp.reference)
                      .then((data) => {
                        this.verifiedCard = data.data;
                        if (this.verifiedCard.reference == resp.reference) {
                          this.cardModel = new CardModel();
                          this.cardModel.authorizationCode = this.verifiedCard.authorization.authorization_code;
                          this.cardModel.bin = this.verifiedCard.authorization.bin;
                          this.cardModel.last4 = this.verifiedCard.authorization.last4;
                          this.cardModel.expMonth = this.verifiedCard.authorization.exp_month;
                          this.cardModel.expYear = this.verifiedCard.authorization.exp_year;
                          this.cardModel.channel = this.verifiedCard.authorization.channel;
                          this.cardModel.cardType = this.verifiedCard.authorization.card_type;
                          this.cardModel.bank = this.verifiedCard.authorization.bank;
                          this.cardModel.countryCode = this.verifiedCard.authorization.country_code;
                          this.cardModel.brand = this.verifiedCard.authorization.brand;
                          this.cardModel.isDefault = true;
                          this.orderService
                            .addCard(this.currentUser.token, this.cardModel)
                            .subscribe(
                              (data) => {
                                this.isLoading = false;
                                this.modalCtrl.dismiss({ card: data.data });
                                this.presentToast(
                                  'GREAT!',
                                  'Your card was successfully added to your account ',
                                  2000,
                                  'success'
                                );
                                console.log(
                                  'addCard: ' + JSON.stringify(data.data)
                                );
                              },
                              (err) => {
                                this.isLoading = false;
                                console.log(
                                  'addCard err: ' + JSON.stringify(err)
                                );
                                this.presentToast(
                                  'OOPS!',
                                  'We could not save your card at this time, Please try again soon!',
                                  2000,
                                  'error'
                                );
                              }
                            );
                          // console.log('addBankCard model: '+JSON.stringify(card));
                        }
                      });
                  },
                  (resp: any) => {
                    this.isLoading = false;
                    // console.log("charge Error: "+ JSON.stringify(resp),this.trx);
                    this.presentToast(
                      'CHARGE ERROR!',
                      JSON.stringify(resp),
                      2000,
                      'error'
                    );
                    // this.resp = resp.gateway_response;
                  },
                  {
                    cardNumber: this.cardForm.value.card_number,
                    expiryMonth: this.maskMM,
                    expiryYear: this.maskYY,
                    cvc: this.cardForm.value.cvc,
                    email: this.currentUser.user.email,
                    amountInKobo: uni.cal_online_charge(this.amt) * 100,
                  }
                );
              }
            })
            .catch((err) => {
              this.isLoading = false;
              // console.log('Customer Update Error: ' + JSON.stringify(err));
              this.presentToast(
                'Customer Update Error!',
                JSON.stringify(err),
                2000,
                'error'
              );
            });
        } else {
          //Create Customer
          this.orderService
            .createCustomer(customerModel)
            .then((data) => {
              console.log('Customer Creation Success: ' + JSON.stringify(data));
              if (data.data.customer_code != '') {
                (<any>window).window.PaystackPlugin.chargeCard(
                  (resp: any) => {
                    console.log('charge successful: ', JSON.stringify(resp));
                    this.orderService
                      .verifyTransactions(resp.reference)
                      .then((data) => {
                        this.verifiedCard = data.data;
                        if (this.verifiedCard.reference == resp.reference) {
                          this.cardModel = new CardModel();
                          this.cardModel.authorizationCode = this.verifiedCard.authorization.authorization_code;
                          this.cardModel.bin = this.verifiedCard.authorization.bin;
                          this.cardModel.last4 = this.verifiedCard.authorization.last4;
                          this.cardModel.expMonth = this.verifiedCard.authorization.exp_month;
                          this.cardModel.expYear = this.verifiedCard.authorization.exp_year;
                          this.cardModel.channel = this.verifiedCard.authorization.channel;
                          this.cardModel.cardType = this.verifiedCard.authorization.card_type;
                          this.cardModel.bank = this.verifiedCard.authorization.bank;
                          this.cardModel.countryCode = this.verifiedCard.authorization.country_code;
                          this.cardModel.brand = this.verifiedCard.authorization.brand;
                          this.cardModel.isDefault = true;
                          this.orderService
                            .addCard(this.currentUser.token, this.cardModel)
                            .subscribe(
                              (data) => {
                                this.isLoading = false;
                                this.modalCtrl.dismiss({ card: data.data });
                                this.presentToast(
                                  'GREAT!',
                                  'Your card was successfully added to your account ',
                                  2000,
                                  'success'
                                );
                                console.log(
                                  'addCard: ' + JSON.stringify(data.data)
                                );
                              },
                              (err) => {
                                this.isLoading = false;
                                console.log(
                                  'addCard err: ' + JSON.stringify(err)
                                );
                                this.presentToast(
                                  'OOPS!',
                                  'We could not save your card at this time, Please try again soon!',
                                  2000,
                                  'error'
                                );
                              }
                            );
                          // console.log('addBankCard model: '+JSON.stringify(card));
                        }
                      });
                  },
                  (resp: any) => {
                    this.isLoading = false;
                    // console.log("charge Error: "+ JSON.stringify(resp),this.trx);
                    this.presentToast(
                      'CHARGE ERROR!',
                      JSON.stringify(resp),
                      2000,
                      'error'
                    );
                    // this.resp = resp.gateway_response;
                  },
                  {
                    cardNumber: this.cardForm.value.card_number,
                    expiryMonth: this.maskMM,
                    expiryYear: this.maskYY,
                    cvc: this.cardForm.value.cvc,
                    email: this.currentUser.user.email,
                    amountInKobo: uni.cal_online_charge(this.amt) * 100,
                  }
                );
              }
            })
            .catch((err) => {
              this.isLoading = false;
              console.log('Create Customer Error: ' + JSON.stringify(err));
              this.presentToast(
                'Create Customer Error!',
                JSON.stringify(err),
                2000,
                'error'
              );
            });
        }
      })
      .catch((err) => {
        this.isLoading = false;
        console.log('Customer Fetch Error: ' + JSON.stringify(err));
        this.presentToast(
          'Customer Fetch Error!',
          JSON.stringify(err),
          2000,
          'error'
        );
      });
  }

  dismiss(): void {
    this.modalCtrl.dismiss({ dismissed: true });
  }
}
