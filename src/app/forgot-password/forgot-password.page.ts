import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from "src/app/core/http-services/user.service";
import { UtilityService } from "src/app/core/utility.service";
import { SendEmailVerificationCodeModel } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  ///Inputs
  title: string = 'Password Recovery';
  longSearch: boolean = false;
  showBackButton: boolean = true;
  loading: boolean = false;
  showSearch: boolean = false;
  ////////////////////
  sendEmailVerificationCodeForm: FormGroup;
  sendEmailVerificationCode: SendEmailVerificationCodeModel = new SendEmailVerificationCodeModel();

  constructor(
    private userService: UserService,
    private utilityService: UtilityService,
    public router: Router,
    public loadingCtrl: LoadingController,
    private toastController: ToastController,
    public formBuilder: FormBuilder
  ) {
    this.sendEmailVerificationCodeForm = new FormGroup({
      email: new FormControl(this.sendEmailVerificationCode.email, [Validators.required, Validators.email]),
      callback: new FormControl(`${this.utilityService.getBaseUrl()}/auth/verify-email/`)
    });
   }

  ngOnInit() {
  }
 
  async presentToast(header: string, msg: string, duration: number, color: string) {
    const toast = await this.toastController.create({
      header: header,
      position: 'bottom',
      message: msg,
      duration: duration,
      // cssClass: 'custom-toast-class',
      color: color
    });
    toast.present();
  }
  sendResetLink() {
    this.loading = true;
    this.loadingCtrl.create({ spinner: 'dots', message: 'Signing in! Please wait...', duration: 5000, cssClass: 'custom-loader-class' }).then((res) => {
      res.present(); res.onDidDismiss().then((dis) => { });
    });
    this.userService.sendEmailVerificationCode(this.sendEmailVerificationCodeForm.value).subscribe(
      (data) => {
        this.sendEmailVerificationCodeForm.reset();
        if (!data.error) {
          // console.log('loginUser:'+JSON.stringify(data.data));
          this.loadingCtrl.dismiss(); this.loading = false;
          this.router.navigate(['/sign-in'])
          this.presentToast('Congratulations', 'Your reset link has been sent. Please check your email for details', 2000, 'success');
        } else {
          this.loadingCtrl.dismiss(); this.loading = false;
          this.presentToast('Invalid Details', 'Please confirm your details', 2000, 'warning')
        }
      },
      (err) => {
        this.loadingCtrl.dismiss(); this.loading = false;
        this.presentToast('Sign up Error', 'An error occurred. Please try again!', 4000, 'error')
      }
    );
  }
}
