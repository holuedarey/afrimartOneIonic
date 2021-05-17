import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ProfileModel } from "src/app/shared/models/user.model";
import { UserService } from "src/app/core/http-services/user.service";
import { AuthenticationService } from "src/app/core/authentication/authentication.service";

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.page.html',
  styleUrls: ['./profile-details.page.scss'],
})
export class ProfileDetailsPage implements OnInit {
  ///Inputs
  title: string = 'Details';
  longSearch: boolean = false;
  showBackButton: boolean = true;
  loading: boolean = false;
  showSearch: boolean = true;
  ////////////////////
  profileForm: FormGroup;
  loadingText: string = "";
  profile: ProfileModel = new ProfileModel();
  currentUser: any;
  date:Date=new Date();

  constructor(
    private authService: AuthenticationService,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    private nativeStorage: NativeStorage,
    private toastController: ToastController,
    private userService: UserService
  ) {
    this.profileForm = this.formBuilder.group({
      fName: new FormControl(this.profile.fName, Validators.compose([Validators.required, Validators.minLength(2)])),
      sName: new FormControl(this.profile.sName, Validators.compose([Validators.required, Validators.minLength(2)])),
      email: new FormControl(this.profile.email),
      ext: new FormControl('+234', [Validators.required]),
      phone: new FormControl(this.profile.phone, Validators.compose([Validators.pattern("[0-9]{10}"), Validators.required, Validators.minLength(10)])),
      dob: new FormControl(this.profile.dob),     
      gender: new FormControl(this.profile.gender, Validators.compose([Validators.required]))
    });
   }
   ngOnInit() {
    this.nativeStorage.getItem('currentUser').then((x) => {
      this.currentUser = x;
      this.getProfile();
      }
      );
     
  }
  getProfile() {
    this.loading=true;
    this.loadingCtrl.create({ spinner: 'dots', message: 'Loading Profile! Please wait...', duration: 5000, cssClass: 'custom-loader-class' }).then((res) => {
      res.present(); res.onDidDismiss().then((dis) => { });
    });
    this.userService.getProfile(this.currentUser.token).subscribe(
      (data) => {        
        if (!data.error) {
          this.loadingCtrl.dismiss();
          this.profile = data.data;
          // console.log('this.profile:' + JSON.stringify(this.profile));   
          this.profileForm.setValue({
            fName: this.profile.fName,
            sName: this.profile.sName,
            email: this.profile.email,
            ext: '+234',
            phone: this.profile.phone.replace(this.profileForm.value.ext,''),
            dob: this.date,
            gender: this.profile.gender,
          });
          this.loading=false;
        } else {
          this.loading=false;
          this.loadingCtrl.dismiss();
          this.presentToast('Oops', 'There was an error getting your profile, Please try again', 4000, 'warning')
        }
      },
      (err) => {
        this.loading=false;
        this.loadingCtrl.dismiss();
        this.presentToast(err.message, err.errors, 4000, 'error')
      }
    );
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
  
  changeMobileCountry($event) {
    console.log('changeMobileCountry: ' + $event.value)
  }
  
  getSelectedType(event:any){
  }
  updateProfile(){
    this.profileForm.patchValue({phone:this.profileForm.value.ext+''+this.profileForm.value.phone});
    this.loadingCtrl.create({ spinner: 'dots', message: 'Loading Profile! Please wait...', duration: 5000, cssClass: 'custom-loader-class' }).then((res) => {
          res.present(); res.onDidDismiss().then((dis) => { });
        });
    return new Promise((res, rej) => {
      console.log('profileForm.value:' + JSON.stringify(this.profileForm.value));
      this.userService.updateProfile(this.currentUser.token,this.profileForm.value).subscribe(
        (data) => {
          this.loadingCtrl.dismiss();
          console.log("Updated: " + JSON.stringify(data))
          res(data);
          this.presentToast('', 'Profile updated successfully', 4000, 'success')
        },
        (err) => {
          this.loadingCtrl.dismiss();
          console.error(err);
          this.presentToast(err.message, err.errors, 4000, 'error')
          res(err);
        }
      );
    });
  }
}
