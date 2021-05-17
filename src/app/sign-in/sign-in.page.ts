import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController,NavController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { OrderService } from 'src/app/core/http-services/order.service';
import { LoginModel } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  ///Inputs
  title: string = 'Sign In';
  longSearch: boolean = false;
  showBackButton: boolean = true;
  loading: boolean = false;
  showSearch: boolean = false;
  ////////////////////
  loginForm: FormGroup;
  showPassword: boolean = false;
  passwordToggleIcon = 'eye-outline';
  isloadingSettings = false;
  loadingText: string = '';
  userData: any = {};
  isLoggedIn: boolean;
  loginModel: LoginModel = new LoginModel();
  users = { id: '', name: '', email: '', picture: { data: { url: '' } } };

  constructor(
    private authService: AuthenticationService,
    private orderService: OrderService,
    public router: Router,
    public loadingCtrl: LoadingController,
    private navCtrl:NavController,
    private toastController: ToastController,
    public formBuilder: FormBuilder,
    private nativeStorage: NativeStorage,
    private googlePlus: GooglePlus,
    private fb: Facebook
  ) {
    // this.loginForm = this.formBuilder.group({
    //   email: new FormControl(
    //     (this.loginModel.email = ''),
    //     Validators.compose([Validators.required, Validators.email])
    //   ),
    //   password: new FormControl(
    //     (this.loginModel.password = ''),
    //     Validators.compose([Validators.required])
    //   ),
    // });
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        (this.loginModel.email = 'tony@rubikpay.tech'),
        Validators.compose([Validators.required, Validators.email])
      ),
      password: new FormControl(
        (this.loginModel.password = 'Domdam@30'),
        Validators.compose([Validators.required])
      ),
    });
    
    // fb.getLoginStatus()
    //   .then((res) => {
    //     console.log(res.status);
    //     if (res.status === 'connect') {
    //       this.isLoggedIn = true;
    //     } else {
    //       this.isLoggedIn = false;
    //     }
    //   })
    //   .catch((e) => console.log(e));
  }
  togglePassword(): void {
    this.showPassword = !this.showPassword;
    if (this.passwordToggleIcon == 'eye-outline') {
      this.passwordToggleIcon = 'eye-off-outline';
    } else {
      this.passwordToggleIcon = 'eye-outline';
    }
  }
  ngOnInit() {}

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
  // getWishListItems(token) {
  //   this.orderService.getWishlist(token).subscribe(
  //     (data) => {
  //       if (!data.error) {
  //         this.nativeStorage.setItem('WishList',data.data)
  //       }
  //     },
  //     (err) => {
  //       console.error(err);
  //     }
  //   );
  // }
  loginUser() {
    this.loadingCtrl
      .create({
        spinner: 'dots',
        message: 'Signing in! Please wait...',
        duration: 5000,
        cssClass: 'custom-loader-class',
      })
      .then((res) => {
        res.present();
        res.onDidDismiss().then((dis) => {});
      });
    this.authService.login(this.loginForm.value).subscribe(
      (data) => {
        this.loginForm.reset();
        if (!data.error) {
          // console.log('loginUser:' + JSON.stringify(data.data));
          this.nativeStorage.setItem('currentUser',data.data).then(()=>{
            // console.log('loginUser:' + JSON.stringify(this.nativeStorage.getItem('currentUser')));
            this.orderService.getWishlist(data.data.token).subscribe(
              (w_data) => {
                // console.log('loginUgetWishlistser:' + JSON.stringify(w_data.data));
                if (!w_data.error) {
                  this.nativeStorage.setItem('WishList',w_data.data)
                  this.loadingCtrl.dismiss();
                  this.navCtrl.navigateForward('/app/profile');
                  this.presentToast(
                    '',
                    'WELCOME ' + data.data.user.fName.toUpperCase(),
                    2000,
                    'success'
                  );
                  // this.eventService.publishCartQty(50);
                }
              },
              (err) => {
                console.error('Wishlist err: ' + err);
                this.loadingCtrl.dismiss();
                this.presentToast(
                  'Sign In Error',
                  'An error occurred. Please try again!',
                  4000,
                  'error'
                );
              }
            );
          })
         
        } else {
          this.loadingCtrl.dismiss();
          this.presentToast(
            'Invalid Details',
            'Please confirm your details',
            2000,
            'warning'
          );
        }
      },
      (err) => {
        console.error('Sign In err: ' + err);
        this.loadingCtrl.dismiss();
        this.presentToast(
          'Sign In Error',
          'An error occurred. Please try again!',
          4000,
          'error'
        );
      }
    );
  }
  googleSignIn() {
    this.googlePlus
      .login({})
      .then((result) => {
        this.userData = result;
        console.log('this.userData: ' + JSON.stringify(this.userData));
        alert('this.userData: ' + JSON.stringify(this.userData));
      })
      .catch((err) => {
        this.userData = `Error ${console.log(JSON.stringify(err))}`;
        alert('Err: ' + JSON.stringify(this.userData));
      });
  }
  faceBookSignIn() {
    this.fb.getLoginStatus()
      .then((res) => {
        console.log(res.status);
        if (res.status === 'connect') {
          this.isLoggedIn = true;
        } else {
          // this.isLoggedIn = false;
          this.fb
          .login(['public_profile', 'email'])
          .then((res) => {
            if (res.status === 'connected') {
              this.isLoggedIn = true;
              console.log('this.userData: ' + JSON.stringify(res));
              alert('this.userData: ' + JSON.stringify(res));
              this.getUserDetail(res.authResponse.userID);
            } else {
              this.isLoggedIn = false;
            }
          })
          .catch((e) => {
            console.log('Error logging into Facebook', e);
            alert('Error logging into Facebook: ' + e);
          });
        }
      })
      .catch((e) => console.log(e));
    
  }
  getUserDetail(userid: any) {
    this.fb
      .api('/' + userid + '/?fields=id,email,name,picture', ['public_profile'])
      .then((res) => {
        console.log(res);
        this.users = res;
      })
      .catch((e) => {
        console.log(e);
      });
  }
  fbLogout() {
    this.fb
      .logout()
      .then((res) => (this.isLoggedIn = false))
      .catch((e) => console.log('Error logout from Facebook', e));
  }
}
