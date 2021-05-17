import { Component } from '@angular/core';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {NetworkService} from '../app/providers/network.service'
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  connectionStatus:any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private networkService: NetworkService,
    private nativeStorage: NativeStorage,
    private androidPermissions: AndroidPermissions
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault(); this.splashScreen.hide();
      this.checkPermissions();
      this.connectionStatus=this.networkService.getCurrentNetworkStatus();
      // console.log('App.ts: ' + this.connectionStatus);
    });
  }
  checkPermissions(){
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
      result => console.log('Has permission?',result.hasPermission),
      err =>  this.androidPermissions.requestPermissions([
        this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE, 
        this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
      ])
    );
   this.nativeStorage.setItem('NetworkStatus',0).then(
    () => console.log('Stored NetworkStatus!'),
    error => console.error('Error NetworkStatus', error)
  );
  }
  onSplashHide() {
    this.splashScreen.hide();
  }
}
