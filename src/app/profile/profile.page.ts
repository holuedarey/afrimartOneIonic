import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController ,NavController} from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { Router } from '@angular/router';
import { UserDataModel } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/core/http-services/user.service';
import { ProductService } from 'src/app/core/http-services/product.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  ///Inputs
  title: string = 'Profile';
  longSearch: boolean = false;
  showBackButton: boolean = true;
  loading: boolean = false;
  showSearch: boolean = true;
  ////////////////////
  currentUser: UserDataModel=null;
  // currentUser: UserDataModel = this.authService.currentUserValue();
  constructor(
    private nativeStorage: NativeStorage,
    private authService: AuthenticationService,
    private productService: ProductService,
    private userService: UserService,
    public router: Router,
    public alertController: AlertController,
    private toastController: ToastController,
    private navCtrl:NavController
  ) {
    console.log('Cons')
    this.nativeStorage.getItem('currentUser').then((value) => {
      if (value !== null) {
        this.currentUser = value;
        console.log('Profile Page:' + JSON.stringify(this.currentUser));
        this.userService.getProfile(this.currentUser.token).subscribe(
          (data) => {
            if (!data.error) {
              // console.log('this.profile:' + JSON.stringify(data.data));
              if (data.data.cards) {
                this.nativeStorage.setItem('MyCards',data.data.cards)
                
                // console.log('nativeStorage.MyCards:' + this.nativeStorage.getItem('MyCards'));
              }
            } else {
              this.presentToast(
                'Oops',
                'There was an error getting your profile, Please try again',
                4000,
                'warning'
              );
            }
          },
          (err) => {
            this.presentToast(err.message, err.errors, 4000, 'error');
          }
        );
        // console.log('Profile Page:' + JSON.stringify(this.currentUser));
      }
    });
  }
  
  ngOnInit() {
    console.log('Init')
    // this.nativeStorage.getItem('currentUser').then((value) => {
    //   if (value !== null) {
    //     this.currentUser = value;
    //     console.log('Profile Page:' + JSON.stringify(this.currentUser));
    //     this.userService.getProfile(this.currentUser.token).subscribe(
    //       (data) => {
    //         if (!data.error) {
    //           // console.log('this.profile:' + JSON.stringify(data.data));
    //           if (data.data.cards) {
    //             this.nativeStorage.setItem('MyCards',data.data.cards)
                
    //             console.log('nativeStorage.MyCards:' + this.nativeStorage.getItem('MyCards'));
    //           }
    //         } else {
    //           this.presentToast(
    //             'Oops',
    //             'There was an error getting your profile, Please try again',
    //             4000,
    //             'warning'
    //           );
    //         }
    //       },
    //       (err) => {
    //         this.presentToast(err.message, err.errors, 4000, 'error');
    //       }
    //     );
    //     // console.log('Profile Page:' + JSON.stringify(this.currentUser));
    //   }
    // });
  }


  getImage(){
    
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
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Logout Confirmation!',
      message: 'Are you sure you want to exit?',
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
            this.logOut();
          },
        },
      ],
    });

    await alert.present();
  }
  logOut() {
    this.nativeStorage.clear().then((isDone) => {
      this.currentUser=null;
      this.productService.logOutCart('0');
      this.navCtrl.navigateBack('/app/home');
      // console.log('Profile Page:' + JSON.stringify(this.currentUser));
      this.presentToast('', 'Signed out successfully!', 2000, 'success');
    });
  }
}
