import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController ,ToastController} from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Location } from '@angular/common';
import { ProductService } from 'src/app/core/http-services/product.service';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
// import { EventsServiceService } from '../../providers/events-service.service';
// import { Subscription } from 'rxjs';
import { UserDataModel } from 'src/app/shared/models/user.model';
import { SearchModalPage } from 'src/app/search-modal/search-modal.page';
import { RequestQoutePage } from 'src/app/request-qoute/request-qoute.page';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string = '';
  @Input() longSearch: boolean = false;
  @Input() showBackButton: boolean = true;
  @Input() isLoading: boolean = false;
  // @Input() noCart: boolean = false;
  @Input() showSearch: boolean = true;
  @Output() userStatusChange;

  currentUser: UserDataModel=null;
  cartTotal: number = 0;

  constructor(
    public router: Router,
    private location: Location,
    private nativeStorage: NativeStorage,
    public authService: AuthenticationService,
    private productService: ProductService, // private eventService: EventsServiceService
    private modalCtrl: ModalController,
    private toastController: ToastController
  ) {
    
    // this.nativeStorage.getItem('currentUser').then((value) => {
    //   if (value !== null) {
    //     this.currentUser = value;
    //     console.log('CurrentUser: '+JSON.stringify(this.currentUser));
    //     this.productService.cartQty.subscribe(
    //       (value) => {
    //         this.cartTotal = Number(value);
    //         console.log('this.cartTotal: '+this.cartTotal)
    //       }
    //     );
    //   }
    //   else{

    //   }
    // });
  }

  ngOnInit() {
    this.nativeStorage.getItem('currentUser').then((value) => {
      if (value !== null) {
        this.currentUser = value;
        console.log('CurrentUser: '+JSON.stringify(this.currentUser));
        this.productService.cartQty.subscribe(
          (value) => {
            this.cartTotal = Number(value);
            console.log('this.cartTotal: '+this.cartTotal)
          }
        );
      }
      else{

      }
    });
  }
  async presentToast(
    header: string,
    msg: string,
    duration: number,
    color: string
  ) {
    const toast = await this.toastController.create({
      header: header,
      position: 'bottom',
      message: msg,
      duration: duration,
      // cssClass: 'custom-toast-class',
      color: color,
    });
    toast.present();
  }
  async presentSearchModal() {
    const modal = await this.modalCtrl.create({
      component: SearchModalPage,
      componentProps: {},
    });
    return await modal.present().then((x) => {
      modal.onWillDismiss().then((d) => {
        if (d.data.reload) {
          // console.log('New Base User: '+JSON.stringify(d.data.reload));
          // this.bal = (d.data.reload.bal * 1) / 100;
        }
      });
    });
  }

  async presentQouteModal() {
    const modal = await this.modalCtrl.create({
      component: RequestQoutePage,
      componentProps: {},
    });
    return await modal.present().then((x) => {
      modal.onWillDismiss().then((d) => {
        if (d.data.reload) {
          // console.log('New Base User: '+JSON.stringify(d.data.reload));
          // this.bal = (d.data.reload.bal * 1) / 100;
        }
      });
    });
  }
  myBackButton() {
    this.location.back();
  }
  loadSearchModal() {
    // console.log('loadSearchModal');
    this.presentSearchModal();
  }
  goToCart() {
    if(this.currentUser){
      this.router.navigate(['/cart']);
    }
    else{
      this.presentToast(
        'Hello',
        'Please login to view your cart!',
        4000,
        'warning'
      );
    }
    
  }
}
