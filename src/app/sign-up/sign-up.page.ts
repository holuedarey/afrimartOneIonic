import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RegisterModel } from "src/app/shared/models/user.model";
import { AuthenticationService } from "src/app/core/authentication/authentication.service";
import { UserService } from "src/app/core/http-services/user.service";
import { UtilityService } from "src/app/core/utility.service";
import { TermsOfServicePage } from '../terms-of-service/terms-of-service.page';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy.page';
import { StorageService } from '../core/storage.service';
import { Constants } from '../core/common/constant';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  ///Inputs
  title: string = 'Sign Up';
  longSearch: boolean = false;
  showBackButton: boolean = true;
  loading: boolean = false;
  showSearch: boolean = false;
  ////////////////////
  registerForm: FormGroup;
  register: RegisterModel = new RegisterModel();
  showPassword: boolean = false;
  passwordToggleIcon = 'lock-open-outline';
  isloadingSettings = false;
  loadingText: string = "";

  constructor(
    private authService: AuthenticationService,
    private userService: UserService,
    private utilityService: UtilityService,
    public router: Router,
    public loadingCtrl: LoadingController,
    public modalController: ModalController,
    private toastController: ToastController,
    public formBuilder: FormBuilder,
    public storageService:StorageService,
  ) {
    this.registerForm = this.formBuilder.group({
      fName: new FormControl(this.register.firstname = '', Validators.compose([Validators.required, Validators.minLength(2)])),
      sName: new FormControl(this.register.lastname = '', Validators.compose([Validators.required, Validators.minLength(2)])),
      email: new FormControl(this.register.email = '', Validators.compose([Validators.required, Validators.email])),
      // email: new FormControl(this.register.email = 'tony@rubikpay.tech', Validators.compose([Validators.required, Validators.email])),
      // phone: new FormControl(this.register.phone = '+2348098367527', Validators.compose([Validators.required, Validators.pattern("[+]{1}[2-4]{3}[0-9]{10}")])),
      // ext: new FormControl('+234', [Validators.required]),
      phone: new FormControl('', Validators.compose([Validators.required, Validators.pattern("[0-9]{11}")])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)])),
      confirmPassword: new FormControl('', Validators.compose([Validators.required, Validators.requiredTrue])),
      isChecked: new FormControl(false, Validators.compose([Validators.required])),
      countryOperation: new FormControl('', Validators.compose([Validators.required])),
      prefferedLangauge: new FormControl('', Validators.compose([Validators.required])),
      // affliateBank: new FormControl(false, Validators.compose([Validators.required])),
      // callback: new FormControl(`${this.utilityService.getBaseUrl()}/auth/verify-email/`)
    }, { validator: this.checkPasswords });
  }

  ngOnInit() {
  }


  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value;
    return pass === confirmPass ? null : { notSame: true }
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
  onCountryChange($event) {
    console.log('onCountryChange: ' + $event.value)
  }
  changeMobileCountry($event) {
    // console.log('changeMobileCountry: ' + $event.value)
  }
  togglePassword(): void {
    this.showPassword = !this.showPassword;
    if (this.passwordToggleIcon == 'lock-open-outline') {
      this.passwordToggleIcon = 'lock-closed-outline'
    }
    else {
      this.passwordToggleIcon = 'lock-open-outline'
    }
  }
  async showTermsModal() {
    const modal = await this.modalController.create({
      component: TermsOfServicePage
    });
    return await modal.present();
  }
  async showPrivacyModal() {
    const modal = await this.modalController.create({
      component: PrivacyPolicyPage
    });
    return await modal.present();
  }
  signUp() {
    // this.registerForm.patchValue({phone:this.registerForm.value.ext+''+this.registerForm.value.phone});
    // console.log('Edited SignUp User ' + JSON.stringify(this.registerForm.value));
    const payload = {
      "organisation": "test-org",
      "firstname":this.registerForm.value.fName,
      "lastname": this.registerForm.value.sName,
      "username": this.registerForm.value.email.split('@')[0],
      "email": this.registerForm.value.email,
      "role": "user",
      // "phone":this.registerForm.value.phone ,
      "country": this.registerForm.value.countryOperation,
      "preferredLanguage": this.registerForm.value.prefferedLangauge,
      "password": this.registerForm.value.password
    }
    console.log('Signup User:' + JSON.stringify(payload));
    this.loadingCtrl.create({ spinner: 'dots', message: 'Signing up! Please wait...', duration: 10000, cssClass: 'custom-loader-class' }).then((res) => {
      res.present(); res.onDidDismiss().then((dis) => { });
    });
    this.loading = true;
    this.authService.logout().then(isDone => {
      this.storageService.set(Constants.STORAGE_VARIABLES.REGISTER_EMAIL, this.registerForm.value.email)
      this.userService.register(payload).subscribe(
        
        (data) => {
          console.log('Signup User Success:' + JSON.stringify(data));
          // this.registerForm.reset();
          if (data.status == true) {
            console.log('Signup User Success:' + JSON.stringify(data));
            this.loadingCtrl.dismiss(); 
            this.loading = false;
            this.router.navigate(['/activation-link'])
            this.presentToast('Congratulations', 'Your sign up was successful. Please check your email for verification details', 2000, 'success');
          } else {
            this.loadingCtrl.dismiss(); this.loading = false;
            // console.log('Signup User Else:' + JSON.stringify(data));
            this.presentToast('Invalid Details', `${data.message}`||  `Please confirm your details`, 5000, 'warning')
          }
        },
        (err) => {
          // this.registerForm.patchValue({ phone: this.registerForm.value.phone.replace(this.registerForm.value.ext, '') })
          this.loadingCtrl.dismiss(); 
          this.loading = false;
          console.log('Signup User Error:' + JSON.stringify(err));
          if (err.error.errors[0] == 'email, Email already exist') {
            this.presentToast('Sign up Error', 'An email already exists. Please sign in or use another email!', 4000, 'error')
          }
          else {
            this.presentToast('Sign up Error', 'An error occurred. Please try again!', 4000, 'error')
          }
        }
      );
    })
  }


}
