 import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loaderToShow;
  constructor(
    public loadingController: LoadingController,
    public toast: ToastController,
  ) { }
  async showLoader(message, duration, cssClass) {
    this.loaderToShow = await this.loadingController.create({
      message: message,
      spinner: 'dots',
      duration:duration || 10000,
      cssClass: cssClass || "custom-loader-class"
      // showBackdrop:false
    });

    await this.loaderToShow.present();
  }

  async hideLoader() {
    await this.loadingController.dismiss(true);
  }

  async presentToast(header: string, msg: string, duration: number, color: string) {
    const toast = await this.toast.create({
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
