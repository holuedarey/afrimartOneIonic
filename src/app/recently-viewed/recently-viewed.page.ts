import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ToastController } from '@ionic/angular';
import { OrderService } from 'src/app/core/http-services/order.service';
import {
  ProductListModel,
  CartItems,
} from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/core/http-services/product.service';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.page.html',
  styleUrls: ['./recently-viewed.page.scss'],
})
export class RecentlyViewedPage implements OnInit {
  ///Inputs
  title: string = 'Recently Viewed';
  longSearch: boolean = false;
  showBackButton: boolean = true;
  loading: boolean = false;
  showSearch: boolean = true;
  ////////////////////
  products: CartItems[];
  recentlyViewedProducts: ProductListModel[] = [];
  currentUser: any;

  constructor(
    public router: Router,
    private toastController: ToastController,
    private nativeStorage: NativeStorage,
    private orderService: OrderService,
    private prodService: ProductService,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.nativeStorage.getItem('currentUser').then((x) => {
      this.currentUser = x;
      this.loading=true;
    this.recentlyViewedProducts = this.prodService.getLocalRecentlyViewedProducts()
      ? this.prodService.getLocalRecentlyViewedProducts()
      : [];
      this.loading=false;
      }
      );
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
  getWishListItems() {
    this.orderService.getWishlist(this.currentUser.token).subscribe(
      (data) => {
        if (!data.error) {
          this.products = data.data;
          // console.log('Wishlist: ' + JSON.stringify(this.products));
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }
  addToCart(prod: ProductListModel) {
    prod['productId'] = prod._id;
    // console.log('addToCart: ' + JSON.stringify(prod));
    this.nativeStorage.getItem('currentUser').then(
      (data) => {
        if (data) {
          this.orderService.addToCart(this.currentUser.token, prod).subscribe(
            (data) => {
              // console.log('addToCart Success: ' + JSON.stringify(data));
              this.prodService.getNumberofItemsInCart(data.data);
              this.presentToast(
                'GREAT!',
                'Product successfully added to your cart ',
                2000,
                'success'
              );
              // this.toastr.success("Item successfuly added to cart");
            },
            (err) => {
              this.presentToast(
                'OOPS!',
                'An error occurred, Please try again later ',
                2000,
                'error'
              );
            }
          );
        } else {
          // this.orderService.addToLocalCart(prod, 1);
          // this.prodService.getNumberofItemsInCart(
          //   this.orderService.getLocalCartItems().data
          // );
        }
      },
      (err) => {
        console.log('addToCart Error: ' + err);
      }
    );
  }
  addToWishlist(prod) {
    if (this.checkIfProdInWishList(prod)) {
      this.removeFromWishlist(prod);
    } else {
      this.loading = true;
      this.orderService
        .addToWishlist(this.currentUser.token, {
          productId: prod.productId,
          quantity: 1,
        })
        .subscribe(
          (data) => {
            this.loading = false;
          },
          (err) => {
            this.loading = false;
            console.error(err);
          }
        );
    }
  }
  removeFromWishlist(prod) {
    this.loading = true;

    this.orderService
      .removeFromWishlist(this.currentUser.token, prod.productId)
      .subscribe(
        (data) => {
          this.loading = false;
          if (!data.error) {
            const index = this.products.findIndex((x) => x._id == prod._id);
            this.products.splice(index, 1);
          }
        },
        (err) => {
          this.loading = false;
          console.error(err);
        }
      );
  }
  checkIfProdInWishList(prod): boolean {
    return this.orderService.checkIfProdInWishList(prod.productId);
  }
}
