import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { ActivateAccModel  } from 'src/app/shared/models/user.model';
import { Constants } from '../core/common/constant';
import { UserService } from '../core/http-services/user.service';
import { StorageService } from '../core/storage.service';
@Component({
  selector: 'app-activation-link',
  templateUrl: './activation-link.page.html',
  styleUrls: ['./activation-link.page.scss'],
})
export class ActivationLinkPage implements OnInit {

  isloadingSettings = false;
  loadingText: string = '';
  activateForm:FormGroup;
  ActivateAccModel: ActivateAccModel = new ActivateAccModel();
  loading:boolean;

  constructor(
    public formBuilder:FormBuilder,
    public storageService:StorageService,
    public userService:UserService,
    public loadingCtrl:LoadingController,
    public toastController:ToastController,
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
    
    this.loadingCtrl.create({ spinner: 'dots', message: 'Activating Account! Please wait...', duration: 10000, cssClass: 'custom-loader-class' }).then((res) => {
      res.present(); res.onDidDismiss().then((dis) => { });
    });

    this.userService.verifyEmailCode(token).subscribe((data) => {
      if (data.status == true) {
        console.log('Activate User Success:' + JSON.stringify(data));
        this.loadingCtrl.dismiss(); 
        this.loading = false;
        this.router.navigate(['/sign-in'])
        this.presentToast('Congratulations', `${data.message} Please Login`, 5000, 'success');
      } else {
        this.loadingCtrl.dismiss(); this.loading = false;
        // console.log('Signup User Else:' + JSON.stringify(data));
        this.presentToast('Invalid Details', `${data.message}`||  `Please confirm your details`, 5000, 'warning')
      }
    }, error => {
      console.log(error)
    });
  }


  resendActivationLink(){
    const emailAddres = this.storageService.get(Constants.STORAGE_VARIABLES.REGISTER_EMAIL);
    if(emailAddres){

      const payload = {
        email : `${emailAddres}`,
        organisation   :'test-org'
      }
      
      this.loadingCtrl.create({ spinner: 'dots', message: 'Resending, Please wait...', duration: 10000, cssClass: 'custom-loader-class' }).then((res) => {
        res.present(); res.onDidDismiss().then((dis) => { });
      });

      this.userService.sendEmailVerificationCode(payload).subscribe((data) => {
        if (data.status == true) {
          console.log('Signup User Success:' + JSON.stringify(data));
          this.loadingCtrl.dismiss(); 
          this.loading = false;
          this.presentToast('Congratulations', `${data.message}`, 2000, 'success');
        } else {
          this.loadingCtrl.dismiss(); this.loading = false;
          // console.log('Signup User Else:' + JSON.stringify(data));
          this.presentToast('Invalid Details', `${data.message}`||  `Please confirm your details`, 5000, 'warning')
        }
      }, error => {
        console.log(error)
      });
    }
    
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
}
