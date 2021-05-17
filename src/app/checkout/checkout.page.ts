import { Component, OnInit } from '@angular/core';
import { AlertController ,LoadingController,ToastController} from '@ionic/angular';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import * as uni from '../globals/universal';
import { AddressModel, UserDataModel } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/core/http-services/user.service';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { OrderService } from "src/app/core/http-services/order.service";
import {
  CartPaymentDataModel,
  UpdatePaymentModel,
  UpdateOrderModel,
} from "src/app/shared/models/product.model";

import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  ///Inputs
  title: string = 'Checkout';
  longSearch: boolean = true;
  showBackButton: boolean = true;
  loading: boolean = false;
  showSearch: boolean = false;
  ////////////////////
  checkoutSegment: any = 'delivery';
  selectDeliveryType: any = 'door';
  PaymentType: any = 'po';
  voucher_code: any = '';
  products: any[] = [];
  fee: any = {};
  addresses: AddressModel[];
  defAddy: any;
  currentUser: UserDataModel;
  lt_cards: [any] = [{}];
  selectedCard: any;
  voucherValue: number = 500;
  paymentValues: CartPaymentDataModel;

  constructor(
    private nativeStorage: NativeStorage,
    public router: Router,
    public alertController: AlertController,
    public loadingCtrl: LoadingController,
    private toastController: ToastController,
    private userService: UserService,
    private authService: AuthenticationService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.nativeStorage.getItem('currentUser').then((x) => {
      this.currentUser = x;
      this.nativeStorage.getItem("CheckoutProducts").then(data=>{
        if(data){this.products = data; }
      },
      err=>{console.error(err)});
      this.nativeStorage.getItem("MyCards").then(data=>{
        if(data){
          this.lt_cards = data;
          this.selectedCard = this.lt_cards[0].authorizationCode;
          this.calCartFee();
        this.getAddresses();
         }
      },
      err=>{console.error(err)});
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
  calCartFee(): any {
    this.fee = uni.calCartFee(this.products);
  }
  getAddresses() {
    this.userService.getAddresses(this.currentUser.token).subscribe(
      (data) => {
        if (!data.error) {
          this.addresses = data.data;
          // console.log('Addresses: ' + JSON.stringify(this.addresses));
          this.defAddy = this.addresses.find((x) => x.isDefault);
          // console.log('defAddy: ' + JSON.stringify(this.defAddy));
          // this.selectedId = def ? def._id : null;
        }
      },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: err.message,
          text: err.errors.join(','),
          showConfirmButton: true,
        });
      }
    );
  }
  isSegmentActive(segment: string) {
    if (segment === this.checkoutSegment) {
      return true;
    } else {
      return false;
    }
  }
  segmentChanged(ev: any) {
    // console.log('Segment changed', ev.target.value);
    this.checkoutSegment = ev.target.value;
  }
  proceedToDelivery() {
    this.loading = false;
    this.checkoutSegment = 'delivery';
  }
  proceedToPayment() {
    this.checkoutSegment = 'payment';
  }
  proceedToSummary() {
    this.checkoutSegment = 'summary';
  }
  makePayment() {}
  showEditAddress() {
    console.log('showEditAddress');
  }
  getSelectedDelivery(ev: any) {
    // console.log('getSelectedDelivery', this.selectDeliveryType);
  }
  getPaymentType(ev: any) {
    // console.log('PaymentType', this.PaymentType);
  }
  getSelectedCard(ev: any) {
    // console.log('getSelectedCard', this.selectedCard);
  }
  selectChargeMethod(){
    if(this.PaymentType==='po'){
    this.presentAlertConfirmChargeCard();
    }else{
    this.podCheckOut();
    }
  }
  async presentAlertConfirmChargeCard() {
    const alert = await this.alertController.create({
      header: 'Charge Confirmation!',
      message: 'Complete this transaction?',
      cssClass: 'alertX',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            // console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'YES',
          cssClass: 'alertButton',
          handler: () => {
            this.chargeCard();
          },
        },
      ],
    });

    await alert.present();
  }
  chargeCard() {
    this.loading = true;
    let amountInKobo:number=Number(this.fee.total) * 100;
    this.loadingCtrl.create({spinner: 'dots',message: 'Processing Charge! Please wait...',duration: 60000,cssClass:'custom-loader-class'}).then((res)=>{
      res.present();
      res.onDidDismiss().then((dis) => {});
      let model = {
        authorization_code: this.selectedCard,
        email: this.currentUser.user.email,
        amount: amountInKobo,
      };
      console.log('Model: '+JSON.stringify(model))
      this.orderService.chargeCard(model).then(
        (data) => {
          console.log('PayStack Data: '+JSON.stringify(data)); 

          if (data.data.status == 'success') {
            let scheme=data.data.authorization.card_type;
            return new Promise((res, rej) => {
            const body: UpdateOrderModel = {
              addressId: this.defAddy._id,
              paymentMethod: "ondelivery",
              shippingType: this.selectDeliveryType,
            };
            console.log('UpdateOrderModel: '+JSON.stringify(body));
            // console.log('this.currentUser.token: '+JSON.stringify(this.currentUser.token));
            this.orderService.updateOrder(this.currentUser.token,body).subscribe(
              (dt) => {
                // console.log('orderService.updateOrder dt: '+JSON.stringify(dt));
                if (!dt.error) {
                  this
                    .confirmOrder()
                    .then((rs) => {
                      console.log('confirmOrder rs: '+JSON.stringify(rs));
                      res(rs);
                      const bodyPayment = new UpdatePaymentModel();
                      bodyPayment.amount = amountInKobo;
                      bodyPayment.ref = this.paymentValues._id;
                      bodyPayment.scheme = scheme;
                      bodyPayment.transferType = "Card";
                      bodyPayment.state = "completed";
                      bodyPayment.transferProvider = "paystack";
                      bodyPayment.transactionData = {
                        ref: data.data.reference,
                        account: this.currentUser.user.email,
                      };
                      console.log('Transaction body Data: '+JSON.stringify(bodyPayment)); 
                       this.orderService.updatePayment(this.currentUser.token,bodyPayment).subscribe(
                          (dt) => {
                            if (dt.message && dt.message.length > 0) {
                              this.loading = false;this.loadingCtrl.dismiss();
                              Swal.fire({
                                title: "WELL DONE",
                                text: "Your payment was successful",
                                icon: "success"
                              }).then(() => {
                                this.router.navigate(['/app/home']);
                              });
                            }
                          },
                          (err) => {
                            console.error(err);
                            this.loading = false;this.loadingCtrl.dismiss();
                            Swal.fire({
                              title: "OOPS",
                              text: "Payment notification failed! Please contact our support team",
                              icon: "error",
                            });
                          }
                        );
                    })
                    .catch(()=>{
                      this.loading = false;this.loadingCtrl.dismiss();
                    });
                } else {
                  Swal.fire({
                    icon: dt.error ? "error" : "success",
                    title: "Could not update your order at this time. Please try again!",
                    // text: data.error ? '' : 'Please check your mail to verify your account',
                    showConfirmButton: true,
                  });
                  this.loading = false;this.loadingCtrl.dismiss();
                }
              },
              (err) => {
                console.error(err);
                Swal.fire({
                  icon: "error",
                  title: err.message,
                  text: "Could not update your order at this time. Please try again!",
                  showConfirmButton: true,
                });
                this.loading = false;this.loadingCtrl.dismiss();
              }
            );
            });
            // this.presentToast('Welldone', 'Your payment was successfull!', 5000, 'success');
          } else {
            this.loading = false;this.loadingCtrl.dismiss();
            Swal.fire({
              title: "OOPS",
              text: "Could not save your transaction at this time. Please try again!",
              icon: "error",
            });
              // this.presentToast('', '', 3000, 'error');
          }
        },
        (error) => {
          console.log(error);
          this.loading = false;this.loadingCtrl.dismiss();
          Swal.fire({
            title: "OOPS",
            text: "An Error Occurred: Could not save your transaction at this time. Please try again!",
            icon: "error",
          });
            // this.presentToast('', '', 3000, 'error');
        }
      );
    });
   
    
  }
  podCheckOut(){
    this.loading = true;
    return new Promise((res, rej) => {
    const body: UpdateOrderModel = {
      addressId: this.defAddy._id,
      paymentMethod: "ondelivery",
      shippingType: this.selectDeliveryType,
    };
    console.log('UpdateOrderModel: '+JSON.stringify(body));
    // console.log('this.currentUser.token: '+JSON.stringify(this.currentUser.token));
    this.orderService.updateOrder(this.currentUser.token,body).subscribe(
      (dt) => {
        // console.log('orderService.updateOrder dt: '+JSON.stringify(dt));
        if (!dt.error) {
          this
            .confirmOrder()
            .then((rs) => {
              // console.log('confirmOrder rs: '+JSON.stringify(rs));
              res(rs);
              this.loading = false;
              Swal.fire({
                icon: "success",
                title: "Order has been confirmed",
                // text: data.error ? '' : 'Please check your mail to verify your account',
                showConfirmButton: true,
              }).then(() => {
                this.router.navigate(['/app/home']);
                // this.router.navigateByUrl("/orders" + result.value.data._id);
              });
            })
            .catch(()=>{
              this.loading = false;
            });
        } else {
          Swal.fire({
            icon: dt.error ? "error" : "success",
            title: "Could not update your order at this time. Please try again!",
            // text: data.error ? '' : 'Please check your mail to verify your account',
            showConfirmButton: true,
          });
          this.loading = false;
        }
      },
      (err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: err.message,
          text: "Could not update your order at this time. Please try again!",
          showConfirmButton: true,
        });
        this.loading = false;
      }
    );
    });
  }

  confirmOrder() {
    // const dis = this;
    return new Promise((res, rej) => {
      this.orderService.confirmOrder(this.currentUser.token).subscribe(
        (dt) => {
          if (!dt.error) {
            this.paymentValues = dt.data;
            // console.log('orderService.confirmOrder data: '+JSON.stringify(dt.data));
            res(dt);
          } else {
            Swal.fire({
              icon: dt.error ? "error" : "success",
              title: "Could not confirm your order at this time. Please try again!",
              // text: data.error ? '' : 'Please check your mail to verify your account',
              showConfirmButton: true,
            }).then(() => { });
          }
        },
        (err) => {
          Swal.fire({
            icon: "error",
            title: err.message,
            text: "Could not confirm your order at this time. Please try again!",
            showConfirmButton: true,
          });
          rej(err);
        }
      );
    });
  }

}
