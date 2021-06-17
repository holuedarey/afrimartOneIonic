import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { UserService } from '../core/http-services/user.service';
import { LoaderService } from '../core/loader.service';
import { StorageService } from '../core/storage.service';
import { ActivateAccModel } from '../shared/models/user.model';

@Component({
  selector: 'app-forget-verify',
  templateUrl: './forget-verify.page.html',
  styleUrls: ['./forget-verify.page.scss'],
})
export class ForgetVerifyPage implements OnInit {

  isloadingSettings = false;
  loadingText: string = '';
  activateForm:FormGroup;
  ActivateAccModel: ActivateAccModel = new ActivateAccModel();
  loading:boolean;

  constructor(
    public formBuilder:FormBuilder,
    public storageService:StorageService,
    public userService:UserService,
    public LoaderService:LoaderService,
    public router:Router,
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

  activateUser(){
    const token = this.activateForm.value.token
    this.LoaderService.showLoader('Activating Account! Please wait...', 10000,'custom-loader-class');
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
        this.LoaderService.presentToast('Invalid Details', `${data.message}`||  `Please confirm your details`, 5000, 'warning')
      }
    }, error => {
      console.log(error)
    });
  }

  
}
