import { ModalController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { CardModalPage } from 'src/app/card-modal/card-modal.page';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { UserService } from 'src/app/core/http-services/user.service';

@Component({
  selector: 'app-my-cards',
  templateUrl: './my-cards.page.html',
  styleUrls: ['./my-cards.page.scss'],
})
export class MyCardsPage implements OnInit {
  ///Inputs
  title: string = 'My Cards';
  longSearch: boolean = false;
  showBackButton: boolean = true;
  loading: boolean = false;
  showSearch: boolean = true;
  ////////////////////
  accounts_cards: any;
  // lt_account_cards = new Array();
  cards_count: number = 0;
  currentUser: any;
  lt_cards: any;

  constructor(
    private nativeStorage: NativeStorage,
    private modalCtrl: ModalController,
    private authService: AuthenticationService,
    private userService: UserService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.loading=true;
    this.nativeStorage.getItem('currentUser').then((x) => {
      this.currentUser = x;
      this.userService.getProfile(this.currentUser.token).subscribe(
        (data) => {
          if (!data.error) {
            // console.log('this.profile:' + JSON.stringify(data.data));
            if (data.data.cards) {
              this.lt_cards = data.data.cards;
              this.nativeStorage.setItem('MyCards',data.data.cards);      
              this.nativeStorage.getItem("MyCards").then(data=>{
                if(data){console.log('Native MyCards:' + JSON.stringify(data)); }
              },
              err=>{console.error(err)});

              this.cards_count = this.lt_cards.length;
              this.loading=false;
            }
          } else {
            this.loading=false;
            this.presentToast(
              'OOPS',
              'There was an error getting your profile, Please try again',
              4000,
              'warning'
            );
          }
        },
        (err) => {
          this.loading=false;
          this.presentToast(err.message, err.errors, 4000, 'error');
        }
      );
    });
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
  async presentCardModal() {
    const modal = await this.modalCtrl.create({
      component: CardModalPage,
      componentProps: {},
    });
    return await modal.present().then(() => {
      modal.onWillDismiss().then((d) => {
        if (d.data.card) {
          console.log('New Card Data: ' + JSON.stringify(d.data.card));
          this.lt_cards = d.data.card;
          this.nativeStorage.setItem('MyCards',d.data.cards);
          this.cards_count = this.lt_cards.length;
        }
      });
    });
  }
  makeDefault(card){
    console.log('makeDefault:' + JSON.stringify(card));
  }
  deleteConfirm(card){
    console.log('deleteConfirm:' + JSON.stringify(card));
  }
}
