import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ProductListModel } from 'src/app/shared/models/product.model';
import { CategoryListModel } from 'src/app/shared/models/category.model';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { ProductService } from 'src/app/core/http-services/product.service';
import { StoreListModel } from 'src/app/shared/models/store.model';
import { OrderService } from 'src/app/core/http-services/order.service';


@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.page.html',
  styleUrls: ['./search-modal.page.scss'],
})
export class SearchModalPage implements OnInit {
  isItemAvailable: boolean = false;
  Products: ProductListModel[];
  category: CategoryListModel;
  store: StoreListModel;
  title: string;
  pageSize: number = 12;
  currentUser: any;
  wishList = new Array();
  searchCnt: number = 0;
  searchString: string = '';
  isGrid: boolean = true;
  isLoading: boolean = false;
  constructor(
    private toastController: ToastController,
    private modalCtrl: ModalController,
    private prodService: ProductService,
    private authService: AuthenticationService,
    private orderService: OrderService,
    private nativeStorage: NativeStorage,
    public router: Router
  ) {
    this.nativeStorage.getItem('currentUser').then((value) => {
      if (value !== null) {
        this.currentUser = value;
        // console.log('Profile Page:' + JSON.stringify(this.currentUser));
      }
    });
    if (localStorage.WishList) {
      this.wishList = JSON.parse(localStorage.WishList);
      // console.log('Wishlist data:' + this.wishList.length);
    }
  }

  ngOnInit() {}
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
  loadSearchModal(ev: any) {
    this.searchString = ev.target.value;
    if (this.searchString && this.searchString.trim() != '') {
      this.isLoading=true;
      this.isItemAvailable = true;
      this.prodService.searchBar(this.searchString).subscribe((data) => {
        // console.log('searchCnt length;'+ this.searchCnt)
        this.searchCnt = data.data.length;
        this.Products = data.data.slice(
          0 * this.pageSize,
          (0 + 1) * this.pageSize
        );
        // console.log('Products;'+ JSON.stringify(this.Products))
        this.isLoading=false;
        this.title = this.searchString;
      });
    } else {
      this.Products.length = 0;
      this.isItemAvailable = false;
      this.isLoading=false;
    }
  }
  clearInput() {
    // this.products.length = 0;
    // this.isItemAvailable = false;
  }
  removeSearchModal() {
    // console.log('removeSearchModal');
    this.modalCtrl.dismiss({ dismissed: true });
    // this.isSearch = false;
  }
  changeListType() {
    this.isGrid = !this.isGrid;
  }
  addToWishlist(prod: any) {
    console.log('Wishlist Prod:' + JSON.stringify(prod));
    if (localStorage.NetworkStatus == '0') {
      if (this.currentUser) {
        if (this.checkIfProdInWishList(prod)) {
          this.removeFromWishlist(prod);
        } else {
          this.orderService
            .addToWishlist(this.currentUser.token, {
              productId: prod._id,
              quantity: 1,
            })
            .subscribe(
              (data) => {
                console.log('Add to Wishlist Result: ' + JSON.stringify(data));
                if (!data.error) {
                  this.presentToast(
                    'GREAT!',
                    'Product successfully added to your wishlist ',
                    2000,
                    'success'
                  );
                  this.wishList = data.data;
                  localStorage.WishList = JSON.stringify(this.wishList);
                  // console.log('Wishlist Add data:' + this.wishList.length);
                  // this.loading = false;
                } else {
                  // this.loading = false;
                  this.presentToast(
                    'OOPS!',
                    'An error occurred, Please try again later ',
                    2000,
                    'error'
                  );
                }
              },
              (err) => {
                console.error(err);
                // this.loading = false;
                this.presentToast(
                  'OOPS!',
                  'An error occurred, Please try again later ',
                  2000,
                  'error'
                );
              }
            );
        }
      } else {
        this.presentToast(
          'ALMOST THERE!',
          'Please sign in to add the product to your wishlist ',
          2000,
          'warning'
        );
        this.modalCtrl.dismiss({ dismissed: true }).then(() => {
          this.router.navigate(['/sign-in']);
        });
      }
    } else {
      this.presentToast(
        'OFFLINE!',
        'You are currently offline ',
        2000,
        'warning'
      );
    }
  }
  removeFromWishlist(prod) {
    this.orderService
      .removeFromWishlist(this.currentUser.token, prod._id)
      .subscribe(
        (data) => {
          // console.log('Add to Wishlist Result: ' + JSON.stringify(data));
          this.wishList.forEach((w) => {
            if (w.productId === prod._id) {
              this.wishList.splice(this.wishList.indexOf(w.productId), 1);
              localStorage.WishList = JSON.stringify(this.wishList);
            }
          });
          // console.log('Wishlist delete data:' + this.wishList.length);
          // this.checkIfProdInWishList(prod);
          // this.loading = false;
          this.presentToast(
            'GREAT!',
            'Product successfully removed to your wishlist ',
            2000,
            'success'
          );
        },
        (err) => {
          console.error(err);
          // this.toastr.error(err.errors.join(","), "Error!");
        }
      );
  }
  checkIfProdInWishList(prod): boolean {
    return this.wishList.some((x) => x.productId === prod._id);
  }
}
