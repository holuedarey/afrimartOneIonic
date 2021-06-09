import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { ActivateAccModel } from 'src/app/shared/models/user.model';
import { Constants } from '../core/common/constant';
import { UserService } from '../core/http-services/user.service';
import { LoaderService } from '../core/loader.service';
import { StorageService } from '../core/storage.service';
@Component({
  selector: 'app-activation-link',
  templateUrl: './activation-link.page.html',
  styleUrls: ['./activation-link.page.scss'],
})
export class ActivationLinkPage implements OnInit {

  isloadingSettings = false;
  loadingText: string = '';
  activateForm: FormGroup;
  ActivateAccModel: ActivateAccModel = new ActivateAccModel();
  loading: boolean;
  time: boolean = true;
  countdown: any = 60;
  showResend : boolean = false;
  constructor(
    public formBuilder: FormBuilder,
    public storageService: StorageService,
    public userService: UserService,
    public router: Router,
    public LoaderService: LoaderService,
  ) {
    this.activateForm = this.formBuilder.group({
      token: new FormControl(
        (this.ActivateAccModel.token = ''),
        Validators.compose([Validators.required])
      ),
    });
  }


  ngOnInit() {
   
  }

  activateUser() {
    const token = this.activateForm.value.token

    this.LoaderService.showLoader('Activating Account! Please wait...', 10000, 'custom-loader-class');

    this.userService.verifyEmailCode(token).subscribe((data) => {
      if (data.status == true) {
        console.log('Activate User Success:' + JSON.stringify(data));
        this.LoaderService.hideLoader();
        this.loading = false;
        this.router.navigate(['/sign-in'])
        this.LoaderService.presentToast('Congratulations', `${data.message} Please Login`, 5000, 'success');
      } else {
        this.LoaderService.hideLoader();
        this.loading = false;
        // console.log('Signup User Else:' + JSON.stringify(data));
        this.LoaderService.presentToast('Invalid Details', `${data.message}` || `Please confirm your details`, 5000, 'warning')
      }
    }, error => {
      console.log(error)
    });
  }


  resendActivationLink() {
    this.showResend = true;
    this.time = false
    var interval = setInterval(() => {
      this.countdown = --this.countdown <= 0 ? 60 : this.countdown;
      if (this.countdown == 1) {
        this.time = true
        console.log('last element');
        clearInterval(interval);
        this.showResend = false;
      }
      // this.time = false;
      console.log('k :', this.countdown)
    }, 1000);
    const emailAddres = `${this.storageService.get(Constants.STORAGE_VARIABLES.REGISTER_EMAIL)}`;
    if(!emailAddres){
      console.log('email not found')
    }
    this.LoaderService.showLoader('Resending Account! Please wait...', 10000, 'custom-loader-class');
    this.userService.ResendEmailVerificationCode(emailAddres).subscribe((data) => {
      if (data.status == true) {
        console.log('Signup User Success:' + JSON.stringify(data));
        this.LoaderService.hideLoader();
        this.loading = false;
        this.LoaderService.presentToast('Congratulations', `${data.message}`, 2000, 'success');
      } else {
        this.LoaderService.hideLoader();
        this.loading = false;
        // console.log('Signup User Else:' + JSON.stringify(data));
        this.LoaderService.presentToast('Invalid Details', `${data.message}` || `Please confirm your details`, 5000, 'warning')
      }
    }, error => {
      console.log(error)
    });
  }

}
