import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ToastController  } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import { RegisterModel } from "src/app/shared/models/user.model";
import { AuthenticationService } from "src/app/core/authentication/authentication.service";
import { UserService } from "src/app/core/http-services/user.service";
import { UtilityService } from "src/app/core/utility.service";
import { TermsOfServicePage } from '../terms-of-service/terms-of-service.page';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy.page';

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
  showPassword:boolean=false;
  passwordToggleIcon='lock-open-outline';
  isloadingSettings=false;
  loadingText:string="";

  constructor(
    private authService: AuthenticationService,
    private userService: UserService,
    private utilityService: UtilityService,
    public router: Router, 
    public loadingCtrl: LoadingController,
    public modalController: ModalController,
    private toastController: ToastController,
    public formBuilder: FormBuilder,
    ) {
      this.registerForm = this.formBuilder.group({  
        fName: new FormControl(this.register.fName='', Validators.compose([Validators.required,Validators.minLength(2)])),
        sName: new FormControl(this.register.sName = '', Validators.compose([Validators.required,Validators.minLength(2)])),
        email: new FormControl(this.register.email = '', Validators.compose([Validators.required, Validators.email])),
        // email: new FormControl(this.register.email = 'tony@rubikpay.tech', Validators.compose([Validators.required, Validators.email])),
        // phone: new FormControl(this.register.phone = '+2348098367527', Validators.compose([Validators.required, Validators.pattern("[+]{1}[2-4]{3}[0-9]{10}")])),
        ext: new FormControl('+234', [Validators.required]),
        phone: new FormControl(this.register.phone = '', Validators.compose([Validators.required, Validators.pattern("[0-9]{10}")])),
        password: new FormControl(this.register.password = '', Validators.compose([Validators.required,Validators.minLength(4)])),
        isChecked: new FormControl(false, Validators.compose([Validators.required,Validators.requiredTrue])),
        confirmPassword: new FormControl(false, Validators.compose([Validators.required,Validators.requiredTrue])),
        countryOperation: new FormControl(false, Validators.compose([Validators.required,Validators.requiredTrue])),
        prefferedLangauge: new FormControl(false, Validators.compose([Validators.required,Validators.requiredTrue])),
        affliateBank: new FormControl(false, Validators.compose([Validators.required,Validators.requiredTrue])),
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
  onCountryChange($event){
    console.log('onCountryChange: ' + $event.value)
  }
  changeMobileCountry($event) {
    // console.log('changeMobileCountry: ' + $event.value)
  }
  togglePassword():void{
    this.showPassword=!this.showPassword;
    if(this.passwordToggleIcon=='lock-open-outline'){
    this.passwordToggleIcon='lock-closed-outline'
    }
    else{
    this.passwordToggleIcon='lock-open-outline'
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
  signUp(){
    // console.log('Signup User:' + JSON.stringify(this.registerForm.value));
    this.registerForm.patchValue({phone:this.registerForm.value.ext+''+this.registerForm.value.phone});
    // console.log('Edited SignUp User ' + JSON.stringify(this.registerForm.value));
    this.loadingCtrl.create({ spinner: 'dots', message: 'Signing up! Please wait...', duration: 10000, cssClass: 'custom-loader-class' }).then((res) => {
      res.present(); res.onDidDismiss().then((dis) => { });
    });
    this.loading = true;
    this.authService.logout().then(isDone => {
      this.userService.register(this.registerForm.value).subscribe(
        (data) => {
          this.registerForm.reset();
          if (!data.error) {
            // console.log('Signup User Success:' + JSON.stringify(data));
            this.loadingCtrl.dismiss(); this.loading = false; 
            this.router.navigate(['/app/home'])
            this.presentToast('Congratulations', 'Your sign up was successful. Please check your email for verification details', 2000, 'success');
          } else {
            this.loadingCtrl.dismiss(); this.loading = false; 
            // console.log('Signup User Else:' + JSON.stringify(data));
            this.presentToast('Invalid Details', 'Please confirm your details', 2000, 'warning')
          }
        },
        (err) => {
          this.registerForm.patchValue({phone:this.registerForm.value.phone.replace(this.registerForm.value.ext,'')})
          this.loadingCtrl.dismiss(); this.loading = false; 
          // console.log('Signup User Error:' + JSON.stringify(err));
          if (err.error.errors[0] == 'email, Email already exist') {
            this.presentToast('Sign up Error', 'An email already exists. Please sign in or use another email!', 4000, 'error')
          }
          else{
            this.presentToast('Sign up Error', 'An error occurred. Please try again!', 4000, 'error')
          }
        }
      );
    }) 
    }


}
