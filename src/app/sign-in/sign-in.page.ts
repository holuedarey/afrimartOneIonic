import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
// import { Facebook } from '@ionic-native/facebook/ngx';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { OrderService } from 'src/app/core/http-services/order.service';
import { LoginModel } from 'src/app/shared/models/user.model';
import { StorageService } from '../core/storage.service';
import { Constants } from '../core/common/constant';
import { LoaderService } from '../core/loader.service';

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
  currentUser: any;

  constructor(
    private authService: AuthenticationService,
    private orderService: OrderService,
    public router: Router,
    private navCtrl: NavController,
    public formBuilder: FormBuilder,
    private nativeStorage: NativeStorage,
    private googlePlus: GooglePlus,
    private storageService: StorageService,
    public LoaderService:LoaderService,
    // private fb: Facebook
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
      user: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('',  Validators.compose([Validators.required])),
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
  ngOnInit() {

  }

  ionViewDidEnter() {
    console.log('view about to enter');
    if (this.authService.isAuthenticated()) {
      this.navCtrl.navigateForward('app/profile');
      console.log('user logged in');
    } else {
      this.currentUser = null;
    }
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
    this.LoaderService.showLoader('Signing in! Please wait...',5000,'custom-loader-class');
    this.loginForm.value['organisation'] = 'test-org';
    this.authService.login(this.loginForm.value).subscribe(
      (data) => {
        this.loginForm.reset();
        this.LoaderService.hideLoader();

        // console.log('loginUser:' + JSON.stringify(data.data));
        if (data.status) {
          console.log('loginUser:' + JSON.stringify(data.data));
          this.storageService.set(Constants.STORAGE_VARIABLES.TOKEN, data.data.token);
          this.storageService.set(Constants.STORAGE_VARIABLES.USER, JSON.stringify(data.data));
          console.log('set data :',this.storageService.get(Constants.STORAGE_VARIABLES.USER), this.storageService.get(Constants.STORAGE_VARIABLES.TOKEN));
          // this.presentToast('', 'WELCOME ' + data.data['firstname'], 2000, 'success');
          this.navCtrl.navigateForward('/app/home');
          // this.nativeStorage.setItem('currentUser', data.data).then(() => {
          //   this.navCtrl.navigateForward('/app/profile');
          //   this.presentToast('', 'WELCOME ' + data.data['message'], 2000, 'success');
          // })
        } else {
          this.LoaderService.hideLoader();
          this.LoaderService.presentToast( 'Invalid Details', 'Please confirm your details',  2000, 'warning'  );
        }
      },
      (err) => {
        console.error('Sign In err: ' + err);
        this.LoaderService.hideLoader();
        this.LoaderService.presentToast( 'Sign In Error', 'An error occurred. Please try again!', 4000,  'error'  );
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
  // faceBookSignIn() {
  //   this.fb.getLoginStatus()
  //     .then((res) => {
  //       console.log(res.status);
  //       if (res.status === 'connect') {
  //         this.isLoggedIn = true;
  //       } else {
  //         // this.isLoggedIn = false;
  //         this.fb
  //         .login(['public_profile', 'email'])
  //         .then((res) => {
  //           if (res.status === 'connected') {
  //             this.isLoggedIn = true;
  //             console.log('this.userData: ' + JSON.stringify(res));
  //             alert('this.userData: ' + JSON.stringify(res));
  //             this.getUserDetail(res.authResponse.userID);
  //           } else {
  //             this.isLoggedIn = false;
  //           }
  //         })
  //         .catch((e) => {
  //           console.log('Error logging into Facebook', e);
  //           alert('Error logging into Facebook: ' + e);
  //         });
  //       }
  //     })
  //     .catch((e) => console.log(e));

  // }
  // getUserDetail(userid: any) {
  //   this.fb
  //     .api('/' + userid + '/?fields=id,email,name,picture', ['public_profile'])
  //     .then((res) => {
  //       console.log(res);
  //       this.users = res;
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }
  // fbLogout() {
  //   this.fb
  //     .logout()
  //     .then((res) => (this.isLoggedIn = false))
  //     .catch((e) => console.log('Error logout from Facebook', e));
  // }
}
