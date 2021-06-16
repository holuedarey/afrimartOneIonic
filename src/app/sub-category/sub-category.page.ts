import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import {
  ToastController,
  ModalController,
  ActionSheetController,
} from '@ionic/angular';

import { ProductService } from 'src/app/core/http-services/product.service';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { OrderService } from 'src/app/core/http-services/order.service';
import { FilterModalPage } from 'src/app/filter-modal/filter-modal.page';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.page.html',
  styleUrls: ['./sub-category.page.scss'],
})
export class SubCategoryPage implements OnInit {
  ///Inputs
  title: string = 'My Wishlist';
  longSearch: boolean = false;
  showBackButton: boolean = true;
  loading: boolean = false;
  showSearch: boolean = true;
  ////////////////////
  isGrid: boolean = true;
  Products = new Array();
  page: number = 1;
  pageSize: number = 12;
  catId: string = '';
  currentUser: any;
  wishList = new Array();
  sortStatus: string = 'asc';

  constructor(
    private toastController: ToastController,
    public router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private productService: ProductService,
    private authService: AuthenticationService,
    private modalCtrl: ModalController,
    private nativeStorage: NativeStorage,
    public actionSheetController: ActionSheetController
  ) {
    
    this.nativeStorage.getItem('currentUser').then((x) => {
      this.currentUser = x;
      this.nativeStorage.getItem('WishList').then((x) => {
        this.wishList = x;
        }
        );
      }
      );
    
  }
  async presentSortFilterSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Sort By',
      buttons: [
        {
          text: 'Lowest Price',
          icon: 'arrow-down-outline',
          handler: () => {
            this.doFilterSort('asc');
          },
        },
        {
          text: 'Highest Price',
          icon: 'arrow-up-outline',
          handler: () => {
            this.doFilterSort('desc');
          },
        },
        // {
        //   text: 'Ratings',
        //   icon: 'star-half-outline',
        //   handler: () => {
        //     this.doFilterSort('ratings');
        //   },
        // },
        // {
        //   text: 'Popularity',
        //   icon: 'trending-up-outline',
        //   handler: () => {
        //     this.doFilterSort('popular');
        //   },
        // },
      ],
    });
    await actionSheet.present();
  }
  async presentFilterModal() {
    const modal = await this.modalCtrl.create({
      component: FilterModalPage,
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
  showSortFilter() {
    this.presentSortFilterSheet();
  }
  showFilterModal() {
    this.presentFilterModal();
  }
  doFilterSort(item) {
    this.sortStatus = item;
    this.page = 1;
    this.pageSize = 12;
    this.Products.length = 0;
    this.getCategoryProducts();
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log("this.params: " + JSON.stringify(params.id))
      this.catId = params.id;
      this.title = localStorage.SetTitle;
      this.getCategoryProducts();
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
  changeListType() {
    this.isGrid = !this.isGrid;
  }

  getCategoryProducts(infiniteScroll?) {
    this.loading=true;
    console.log(' this.catId, ::',  this.catId);
    
    this.productService
      .getCategoryProductsInfinite(
        this.catId,
        this.pageSize,
        this.page,
        this.sortStatus
      )
      .subscribe(
        (data) => {
          console.log('data ::', data.data);
          
          if (!data && data.data.length > 0) {
            data.data.forEach((prod) => {
              this.Products.push(prod);
              this.loading=false;
            });
          } else {
            this.loading=false;
            this.Products = data.data;
            console.log("No more data this.Products Count: " + JSON.stringify(this.Products.length))
          }
          if (infiniteScroll) {
            infiniteScroll.target.complete();
          }
        },
        (err) => {
          if (infiniteScroll) {
            infiniteScroll.target.complete();
          }
        }
      );
  }
  loadMore(infiniteScroll) {
    this.page++;
    this.getCategoryProducts(infiniteScroll);
    if (this.page === this.pageSize) {
      infiniteScroll.disabled = true;
    }
  }
  addToWishlist(prod: any) {
      if (this.currentUser) {
        this.loading = true;

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
                  this.nativeStorage.setItem('WishList',this.wishList);
                  // console.log('Wishlist Add data:' + this.wishList.length);
                  this.loading = false;
                } else {
                  this.loading = false;
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
                this.loading = false;
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
        this.router.navigate(['/sign-in']);
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
              this.nativeStorage.setItem('WishList',this.wishList);
            }
          });
          // console.log('Wishlist delete data:' + this.wishList.length);
          // this.checkIfProdInWishList(prod);
          this.loading = false;
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
