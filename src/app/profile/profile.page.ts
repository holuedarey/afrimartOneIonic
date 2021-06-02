import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, NavController, LoadingController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { Router } from '@angular/router';
import { UserDataModel } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/core/http-services/user.service';
import { ProductService } from 'src/app/core/http-services/product.service';
import { Constants } from '../core/common/constant';
import { StorageService } from '../core/storage.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  currentUser: any =  null;
  isAuthenticated: boolean = false;
  // currentUser: UserDataModel = this.authService.currentUserValue();

  profileForm: FormGroup;

  constructor(
    private nativeStorage: NativeStorage,
    private authService: AuthenticationService,
    private productService: ProductService,
    private userService: UserService,
    public router: Router,
    public alertController: AlertController,
    private toastController: ToastController,
    private navCtrl: NavController,
    private storageService: StorageService,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
  ) {
    console.log('Cons')
    console.log('constructor :: ', JSON.parse(localStorage.getItem(Constants.STORAGE_VARIABLES.USER)))
    
    
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

    //             // console.log('nativeStorage.MyCards:' + this.nativeStorage.getItem('MyCards'));
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

  ionViewWillEnter() {
    console.log('view about to enter');
    // console.log('constructor :: ', JSON.parse(localStorage.getItem(Constants.STORAGE_VARIABLES.USER)))
    if (this.authService.isAuthenticated()) {
      this.currentUser = JSON.parse(localStorage.getItem(Constants.STORAGE_VARIABLES.USER));
      console.log('user authenticated :: -> ');
    } else {
      this.currentUser = null;
    }
  }



  ngOnInit() {
    console.log('Init check:: ', this.authService.isAuthenticated())
    if (this.authService.isAuthenticated()) {
      this.currentUser = JSON.parse(localStorage.getItem(Constants.STORAGE_VARIABLES.USER));
      console.log('user authenticated :: -> ');
    } else {
      this.currentUser = null;
    }

    this.profileForm = this.formBuilder.group({
      fName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      lName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      phone: new FormControl('', Validators.compose([Validators.required, Validators.pattern("[0-9]{11}")])),
      countryOperation: new FormControl('', Validators.compose([Validators.required])),
      prefferedLangauge: new FormControl('', Validators.compose([Validators.required])),
      // affliateBank: new FormControl(false, Validators.compose([Validators.required])),
    });
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


  getImage() {

  }

  editProfile() {
    this.loadingCtrl
      .create({
        spinner: 'dots',
        message: 'Signing in! Please wait...',
        duration: 5000,
        cssClass: 'custom-loader-class',
      })
      .then((res) => {
        res.present();
        res.onDidDismiss().then((dis) => { });
      });

      console.log('payload ', this.profileForm.value)
    this.authService.login(this.profileForm.value).subscribe((data) => {
      this.loadingCtrl.dismiss();
      console.log(data.message);
      this.presentToast( 'Success',  `${data.message}`,   4000,  'success'  );
    }, error => {
      this.loadingCtrl.dismiss();
      this.presentToast( 'Sign In Error',  'An error occurred. Please try again!',   4000,  'error'  );
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
    this.storageService.clear_all();
    this.navCtrl.navigateBack('/app/home');
    // console.log('Profile Page:' + JSON.stringify(this.currentUser));
    this.presentToast('', 'Signed out successfully!', 2000, 'success');

    // this.nativeStorage.clear().then((isDone) => {
    //   this.currentUser=null;
    //   this.productService.logOutCart('0');
    //   this.navCtrl.navigateBack('/app/home');
    //   // console.log('Profile Page:' + JSON.stringify(this.currentUser));
    //   this.presentToast('', 'Signed out successfully!', 2000, 'success');
    // });
  }
}
