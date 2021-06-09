import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';
import { LoadingController, ToastController  } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import { UserService } from "src/app/core/http-services/user.service";
import { AuthenticationService } from "src/app/core/authentication/authentication.service";
import { ChangePasswordModel } from 'src/app/shared/models/user.model';
import { LoaderService } from '../core/loader.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  showCurrentPassword:boolean=false;
  showNewPassword: boolean = false;
  showConfirmNewPassword: boolean = false;
  passwordToggleIconCur='eye';
  passwordToggleIconNew='eye';
  passwordToggleIconCon='eye';
  isloadingSettings=false;
  loadingText:string="";
  currentUser: any;
  changePasswordForm: FormGroup;
  changePassword: ChangePasswordModel = new ChangePasswordModel();
  loading: boolean;

   ///Inputs
   title: string = 'Change Password';
   longSearch: boolean = false;
   showBackButton: boolean = true;
  //  loading: boolean = false;
   showSearch: boolean = true;
  constructor(
    private authService: AuthenticationService,
    private userService: UserService,
    public router: Router, 
    private nativeStorage: NativeStorage,
    public loadingCtrl: LoadingController,
    private toastController: ToastController,
    public formBuilder: FormBuilder,
    private location: Location,
    public LoaderService: LoaderService,
    ) {
      this.changePasswordForm = this.formBuilder.group({ 
        oldPassword: new FormControl(this.changePassword.oldPassword, Validators.compose([Validators.required])),
        newPassword: new FormControl(this.changePassword.newPassword, Validators.compose([Validators.required])),
        confirmPassword: new FormControl(this.changePassword.confirmPassword, Validators.compose([Validators.required]))
      });
     }
  ionViewWillEnter() {
    // console.log(this.router['routerState'].snapshot.url);
  }
  myBackButton() {
    // console.log("this.location: " + this.location)
    this.location.back();
  }
  ngOnInit() {
    this.nativeStorage.getItem('currentUser').then((x) => {
      this.currentUser = x;
      
      }
      );
   
  }
  
  toggleCurrentPassword():void{
    this.showCurrentPassword = !this.showCurrentPassword;
    if(this.passwordToggleIconCur=='eye'){
    this.passwordToggleIconCur='eye-off'
    }
    else{
    this.passwordToggleIconCur='eye'
    }
    }
  toggleNewPassword(): void {
    this.showNewPassword = !this.showNewPassword;
    if (this.passwordToggleIconNew == 'eye') {
      this.passwordToggleIconNew = 'eye-off'
    }
    else {
      this.passwordToggleIconNew = 'eye'
    }
  }
  toggleConfirmNewPassword(): void {
    this.showConfirmNewPassword = !this.showConfirmNewPassword;
    if (this.passwordToggleIconCon == 'eye') {
      this.passwordToggleIconCon = 'eye-off'
    }
    else {
      this.passwordToggleIconCon = 'eye'
    }
  }
  doChangePassword(){
    console.log('Signup User:' + JSON.stringify(this.changePasswordForm.value));
    this.LoaderService.showLoader('Changing Passowrd! Please wait...',  5000,  'custom-loader-class' )
    this.loading = true;  
    this.userService.changePassword(this.changePasswordForm.value).subscribe(
        (data) => {
          this.changePasswordForm.reset();
          if (!data.error) {
            console.log('changePassword Success:' + JSON.stringify(data));
            this.authService.logout().then(isDone => {
              this.LoaderService.hideLoader();
              this.loading = false;
              this.router.navigate(['/sign-in'])
              this.LoaderService.presentToast('Congratulations', 'Password change was successful!', 2000, 'success');
            })    
            
          } else {
            this.LoaderService.hideLoader(); 
            this.loading = false;  
            console.log('changePassword Else:' + JSON.stringify(data));
            this.LoaderService.presentToast('Apologies', 'Password change was unsuccessful, Please try again', 2000, 'warning')
          }
        },
        (err) => {
          this.loadingCtrl.dismiss(); this.loading = false; 
          console.log('changePassword Error:' + JSON.stringify(err));
          this.LoaderService.presentToast('Sign up Error', 'An error occurred. Please try again!', 4000, 'error')
        }
      );
  }
}
