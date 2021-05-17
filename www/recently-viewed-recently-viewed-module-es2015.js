(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recently-viewed-recently-viewed-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recently-viewed/recently-viewed.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recently-viewed/recently-viewed.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\n  [title]=\"title\"\n  [longSearch]=\"longSearch\"\n  [showBackButton]=\"showBackButton\"\n  [isLoading]=\"loading\"\n  [showSearch]=\"showSearch\"\n>\n</app-header>\n\n<ion-content>\n  <ion-content>\n    <div *ngIf=\"recentlyViewedProducts.length>0\">\n      <div>\n        <section class=\"sectionProductItem\">\n          <ion-grid class=\"zero\">\n            <ion-row\n              *ngFor=\"let prod of recentlyViewedProducts; let i=index;\"\n              class=\"gridProductItemList\"\n            >\n              <ion-col size=\"3\" routerLink=\"/products/{{prod._id}}\">\n                <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n                  <app-image-shell\n                    animation=\"gradient\"\n                    [src]=\"prod?.gallery[0]\"\n                    [alt]=\"'Product Image'\"\n                  >\n                  </app-image-shell>\n                </app-aspect-ratio>\n              </ion-col>\n              <ion-col size=\"9\">\n                <ion-row class=\"zero\">\n                  <ion-col size=\"11\" class=\"zero\">\n                    <app-text-shell\n                      animation=\"gradient\"\n                      [data]=\"prod?.storeData.name | titlecase\"\n                      class=\"note_title10Sec\"\n                    >\n                    </app-text-shell>\n                  </ion-col>\n                  <ion-col size=\"1\" class=\"zero\">\n                    <!-- <ion-icon\n                      name=\"trash-outline\"\n                      color=\"secondary\"\n                      (click)=\"deleteWishlistItem(prod)\"\n                    ></ion-icon> -->\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"zero\">\n                  <ion-col\n                    size=\"11\"\n                    class=\"zero\"\n                    routerLink=\"/products/{{prod._id}}\"\n                  >\n                    <h3 style=\"margin-top: 0px;\">\n                      <app-text-shell\n                        animation=\"gradient\"\n                        [data]=\"prod?.name\"\n                        lines=\"3\"\n                        class=\"note_title12Black\"\n                      >\n                      </app-text-shell>\n                    </h3>\n                  </ion-col>\n                  <ion-col size=\"1\" class=\"zero\">\n                    &nbsp;\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"zero\">\n                  <ion-col size=\"11\" class=\"zero\">\n                    <app-text-shell\n                      animation=\"gradient\"\n                      [data]=\"prod?.price |currency:'₦':'symbol':'1.2-2'\"\n                    >\n                    </app-text-shell>\n                  </ion-col>\n                  <ion-col size=\"1\" class=\"zero\">\n                    &nbsp;\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"zero\">\n                  <ion-col size=\"6\" class=\"zero\">\n                    &nbsp;\n                  </ion-col>\n                  <ion-col size=\"6\" style=\"text-align: right;\" class=\"zero\">\n                    <ion-button\n                      expand=\"full\"\n                      size=\"small\"\n                      color=\"secondary\"\n                      (click)=\"addToCart(prod)\"\n                      >ADD TO CART\n                    </ion-button>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <!-- <ion-grid *ngIf=\"recentlyViewedProducts.length>0\" class=\"grid\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-button expand=\"block\" fill=\"clear\" color=\"primary\"\n                  >CLEAR ALL</ion-button\n                >\n              </ion-col>\n            </ion-row>\n          </ion-grid> -->\n        </section>\n      </div>\n    </div>\n\n    <div *ngIf=\"!recentlyViewedProducts\">\n      <ion-grid class=\"grid\" class=\"t_center\" style=\"padding-top: 50px;\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-icon size=\"large\" name=\"cart-sharp\" color=\"primary\"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-text> No products in your recently viewed items</ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-button\n              expand=\"block\"\n              color=\"primary\"\n              [routerLink]=\"['/app/home']\"\n            >\n              CLICK TO SHOP\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </ion-content></ion-content\n>\n");

/***/ }),

/***/ "./src/app/recently-viewed/recently-viewed.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/recently-viewed/recently-viewed.module.ts ***!
  \***********************************************************/
/*! exports provided: RecentlyViewedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentlyViewedPageModule", function() { return RecentlyViewedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _shell_shell_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shell/shell.module */ "./src/app/shell/shell.module.ts");
/* harmony import */ var _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sharedComponents/shared-components.module */ "./src/app/sharedComponents/shared-components.module.ts");
/* harmony import */ var _recently_viewed_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recently-viewed.page */ "./src/app/recently-viewed/recently-viewed.page.ts");









let RecentlyViewedPageModule = class RecentlyViewedPageModule {
};
RecentlyViewedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _recently_viewed_page__WEBPACK_IMPORTED_MODULE_8__["RecentlyViewedPage"]
                }
            ]),
            _shell_shell_module__WEBPACK_IMPORTED_MODULE_6__["ShellModule"],
            _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]
        ],
        declarations: [_recently_viewed_page__WEBPACK_IMPORTED_MODULE_8__["RecentlyViewedPage"]]
    })
], RecentlyViewedPageModule);



/***/ }),

/***/ "./src/app/recently-viewed/recently-viewed.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/recently-viewed/recently-viewed.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2VudGx5LXZpZXdlZC9yZWNlbnRseS12aWV3ZWQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/recently-viewed/recently-viewed.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/recently-viewed/recently-viewed.page.ts ***!
  \*********************************************************/
/*! exports provided: RecentlyViewedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentlyViewedPage", function() { return RecentlyViewedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/http-services/order.service */ "./src/app/core/http-services/order.service.ts");
/* harmony import */ var src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/http-services/product.service */ "./src/app/core/http-services/product.service.ts");
/* harmony import */ var src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/authentication/authentication.service */ "./src/app/core/authentication/authentication.service.ts");








let RecentlyViewedPage = class RecentlyViewedPage {
    constructor(router, toastController, nativeStorage, orderService, prodService, authService) {
        this.router = router;
        this.toastController = toastController;
        this.nativeStorage = nativeStorage;
        this.orderService = orderService;
        this.prodService = prodService;
        this.authService = authService;
        ///Inputs
        this.title = 'Recently Viewed';
        this.longSearch = false;
        this.showBackButton = true;
        this.loading = false;
        this.showSearch = true;
        this.recentlyViewedProducts = [];
    }
    ngOnInit() {
        this.nativeStorage.getItem('currentUser').then((x) => {
            this.currentUser = x;
            this.loading = true;
            this.recentlyViewedProducts = this.prodService.getLocalRecentlyViewedProducts()
                ? this.prodService.getLocalRecentlyViewedProducts()
                : [];
            this.loading = false;
        });
    }
    presentToast(header, msg, duration, color) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: header,
                position: 'bottom',
                message: msg,
                duration: duration,
                // cssClass: 'custom-toast-class',
                color: color,
            });
            toast.present();
        });
    }
    getWishListItems() {
        this.orderService.getWishlist(this.currentUser.token).subscribe((data) => {
            if (!data.error) {
                this.products = data.data;
                // console.log('Wishlist: ' + JSON.stringify(this.products));
            }
        }, (err) => {
            console.error(err);
        });
    }
    addToCart(prod) {
        prod['productId'] = prod._id;
        // console.log('addToCart: ' + JSON.stringify(prod));
        this.nativeStorage.getItem('currentUser').then((data) => {
            if (data) {
                this.orderService.addToCart(this.currentUser.token, prod).subscribe((data) => {
                    // console.log('addToCart Success: ' + JSON.stringify(data));
                    this.prodService.getNumberofItemsInCart(data.data);
                    this.presentToast('GREAT!', 'Product successfully added to your cart ', 2000, 'success');
                    // this.toastr.success("Item successfuly added to cart");
                }, (err) => {
                    this.presentToast('OOPS!', 'An error occurred, Please try again later ', 2000, 'error');
                });
            }
            else {
                // this.orderService.addToLocalCart(prod, 1);
                // this.prodService.getNumberofItemsInCart(
                //   this.orderService.getLocalCartItems().data
                // );
            }
        }, (err) => {
            console.log('addToCart Error: ' + err);
        });
    }
    addToWishlist(prod) {
        if (this.checkIfProdInWishList(prod)) {
            this.removeFromWishlist(prod);
        }
        else {
            this.loading = true;
            this.orderService
                .addToWishlist(this.currentUser.token, {
                productId: prod.productId,
                quantity: 1,
            })
                .subscribe((data) => {
                this.loading = false;
            }, (err) => {
                this.loading = false;
                console.error(err);
            });
        }
    }
    removeFromWishlist(prod) {
        this.loading = true;
        this.orderService
            .removeFromWishlist(this.currentUser.token, prod.productId)
            .subscribe((data) => {
            this.loading = false;
            if (!data.error) {
                const index = this.products.findIndex((x) => x._id == prod._id);
                this.products.splice(index, 1);
            }
        }, (err) => {
            this.loading = false;
            console.error(err);
        });
    }
    checkIfProdInWishList(prod) {
        return this.orderService.checkIfProdInWishList(prod.productId);
    }
};
RecentlyViewedPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"] },
    { type: src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] },
    { type: src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] },
    { type: src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] }
];
RecentlyViewedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recently-viewed',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recently-viewed.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recently-viewed/recently-viewed.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recently-viewed.page.scss */ "./src/app/recently-viewed/recently-viewed.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"],
        src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"],
        src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"],
        src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]])
], RecentlyViewedPage);



/***/ })

}]);
//# sourceMappingURL=recently-viewed-recently-viewed-module-es2015.js.map