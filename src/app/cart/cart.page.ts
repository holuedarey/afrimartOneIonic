import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { CartItems } from 'src/app/shared/models/product.model';
import { OrderService } from 'src/app/core/http-services/order.service';
import { ProductService } from 'src/app/core/http-services/product.service';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { Subject } from 'rxjs';
import * as uni from '../globals/universal';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  ///Inputs
  title: string = 'My Cart';
  longSearch: boolean = false;
  showBackButton: boolean = true;
  loading: boolean = false;
  showSearch: boolean = false;
  ////////////////////
  products: any[];
  productCount: any = [];
  currentUser: any;
  productQty: number;
  wishList: any;
  latestquanity: any;
  reducesub = new Subject<any>();
  // subTotal: number = 0;
  // totalShipping: number = 0;
  // total: number = 0;
  fee: any = {};
  constructor(
    private nativeStorage: NativeStorage,
    public router: Router,
    public alertController: AlertController,
    private prodService: ProductService,
    private orderService: OrderService,
    private authService: AuthenticationService
  ) {
    this.prodService.getCartProducts();
  }
  countChange(event) {
    // console.log('countChange Event: ' + JSON.stringify(event));
    this.nativeStorage.getItem('currentUser').then((userData) => {
      if (userData) {
        let body = {
          productId: event.extraobj.productId,
          quantity: event.counterValue,
        };
        this.orderService
          .updateCart(userData.token, body)
          .subscribe((data: any) => {
            // console.log('updateCart: ' + JSON.stringify(data.data));
            // this.prodService.subtotal(data.data);
          });

        this.calCartFee();
      }
    });
  }
  calCartFee(): any {
    this.fee = uni.calCartFee(this.products);
    this.loading=false;
    // new Promise((resolve) => {
    //   this.fee = uni.calCartFee(this.products);
    //   return resolve(this.fee);
    // });
  }
  ngOnInit() {
    this.loading=true;
    this.prodService.cartProducts.subscribe((products) => {
      this.products = products;
      this.loading=false;
      // console.log('getCartProducts(): ' + JSON.stringify(this.products));
      this.calCartFee();
    });
  }
  addtolocalUpdate(prod) {
    let prodQty = new Promise((resolve) => {
      this.orderService.getProductQty(prod.productId).subscribe((data) => {
        if (prod.quantity + 1 <= data.data.count) {
          prod.quantity++;
        }
        resolve(prod.quantity);
      });
    });
    prodQty.then((data: number) => {
      this.orderService.updateLocalCart(prod.productId, data);
      this.prodService.cartProducts.subscribe((data) => {
        this.prodService.subtotal(data);
      });
    });
  }
  reduceToLocal(prod) {
    if (prod.quantity - 1 > 0) {
      prod.quantity--;
      this.orderService.updateLocalCart(prod.productId, prod.quantity);
      this.prodService.cartProducts.subscribe((data) => {
        this.prodService.subtotal(data);
      });
    }
  }
  addToWishlist(prod: CartItems) {
    if (this.checkIfProdInWishList(prod)) {
      this.presentAlertConfirmWishlist(prod);
    } else {
      // this.loading = true;
      this.nativeStorage.getItem('currentUser').then((userData) => {
        if (userData) {
          this.orderService
            .addToWishlist(userData.token, {
              productId: prod.productId,
              quantity: 1,
            })
            .subscribe(
              (data) => {
                this.loading = false;
              },
              (err) => {
                this.loading = false;
              }
            );
        }
      });
    }
  }
  checkIfProdInWishList(prod: CartItems): boolean {
    return this.orderService.checkIfProdInWishList(prod.productId);
  }
  removeFromWishlist(prod: CartItems) {
    console.log('removeFromWishlist Prod: ' + JSON.stringify(prod));
    this.nativeStorage.getItem('currentUser').then((userData) => {
      if (userData) {
        this.orderService
          .removeFromWishlist(userData.token, prod.productId)
          .subscribe(
            (data) => {
              this.loading = false;
              if (!data.error) {
                this.checkIfProdInWishList(prod);
                // const index = this.products.findIndex((x) => x._id == prod._id);
                // this.products.splice(index, 1);
                // this.prodService.subtotal(this.products);
              }
            },
            (err) => {
              this.loading = false;
            }
          );
      }
    });
  }
  async presentAlertConfirmWishlist(prod) {
    const alert = await this.alertController.create({
      header: 'Removal Confirmation!',
      message:
        'Are you sure you want to remove this product from your wishlist?',
      cssClass: 'alertX',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            // console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'YES',
          cssClass: 'alertButton',
          handler: () => {
            this.removeFromWishlist(prod);
          },
        },
      ],
    });

    await alert.present();
  }
  async presentAlertConfirmDelete(prod) {
    const alert = await this.alertController.create({
      header: 'Removal Confirmation!',
      message: 'Are you sure you want to remove this product?',
      cssClass: 'alertX',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            // console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'YES',
          cssClass: 'alertButton',
          handler: () => {
            this.removeFromCart(prod);
          },
        },
      ],
    });

    await alert.present();
  }
  removeFromCart(prod: CartItems) {
    this.nativeStorage.getItem('currentUser').then((data) => {
      if (data) {
        this.orderService.removeFromCart(data.token, prod.productId).subscribe(
          (data) => {
            const index = this.products.findIndex(
              (x) => x.productId == prod.productId
            );
            this.products.splice(index, 1);
            // this.prodService.getNumberofItemsInCart(this.products);
            // this.prodService.subtotal(this.products);
            this.calCartFee();
          },
          (err) => {
            console.error(err);
          }
        );
      } else {
        this.orderService.removeFromLocalCart(prod.productId);
        const index = this.products.findIndex(
          (x) => x.productId == prod.productId
        );
        this.products.splice(index, 1);
        // this.prodService.getNumberofItemsInCart(this.products);
        // this.prodService.subtotal(this.orderService.getLocalCartItems().data);
        this.calCartFee();
      }
    });
  }
  doCheckOut() {
    this.nativeStorage.setItem('CheckoutProducts',this.products).then(()=>{
      this.router.navigate(['/checkout']);
    });

    
  }
}
