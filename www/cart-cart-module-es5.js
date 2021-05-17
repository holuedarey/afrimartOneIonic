(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCartCartPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header\n  [title]=\"title\"\n  [longSearch]=\"longSearch\"\n  [showBackButton]=\"showBackButton\"\n  [isLoading]=\"loading\"\n  [showSearch]=\"showSearch\"\n>\n</app-header>\n<ion-content>\n  <ion-content>\n    <div *ngIf=\"products.length>0\">\n      <section *ngFor=\"let prod of products; let i=index;\">\n        <ion-grid class=\"card\">\n          <ion-row>\n            <ion-col size=\"4\" routerLink=\"/product-details/{{prod.productId}}\">\n              <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n                <app-image-shell\n                  animation=\"gradient\"\n                  [src]=\"prod?.imgUrl\"\n                  [alt]=\"'Product Image'\"\n                >\n                </app-image-shell>\n              </app-aspect-ratio>\n            </ion-col>\n            <ion-col\n              size=\"8\"\n              class=\"counter-list\"\n              routerLink=\"/product-details/{{prod.productId}}\"\n            >\n              <h3 style=\"margin-top: 0px;\">\n                <app-text-shell\n                  animation=\"gradient\"\n                  [data]=\"prod?.productName\"\n                  lines=\"3\"\n                  class=\"note_title12Black\"\n                >\n                </app-text-shell>\n              </h3>\n              <app-text-shell\n                animation=\"gradient\"\n                [data]=\"prod?.unitPrice |currency:'₦':'symbol':'1.2-2'\"\n                class=\"note_title12Sec\"\n              ></app-text-shell>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"grid\">\n            <ion-col size=\"1\">\n              <a (click)=\"addToWishlist(prod)\">\n                <ion-icon\n                  *ngIf=\"!checkIfProdInWishList(prod)\"\n                  size=\"small\"\n                  name=\"heart-outline\"\n                  color=\"primary\"\n                ></ion-icon>\n                <ion-icon\n                  *ngIf=\"checkIfProdInWishList(prod)\"\n                  size=\"small\"\n                  name=\"heart\"\n                  color=\"primary\"\n                >\n                </ion-icon>\n              </a>\n            </ion-col>\n            <ion-col size=\"1\">\n              <div class=\"vl\"></div>\n            </ion-col>\n            <ion-col size=\"1\">\n              <a\n                class=\"note_title14Pri\"\n                (click)=\"presentAlertConfirmDelete(prod)\"\n              >\n                <ion-icon\n                  size=\"small\"\n                  name=\"trash-outline\"\n                  color=\"primary\"\n                ></ion-icon>\n              </a>\n            </ion-col>\n            <ion-col size=\"5\">\n              &nbsp;\n            </ion-col>\n\n            <ion-col size=\"4\">\n              <app-counter-input\n                [(ngModel)]=\"prod.quantity\"\n                [counterValue]=\"prod.quantity\"\n                [x]=\"prod\"\n                (change)=\"countChange($event)\"\n              ></app-counter-input>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </section>\n      <section>\n        <ion-grid class=\"gridCardFlat\" style=\"padding: 0px;\">\n          <ion-row>\n            <ion-col size=\"5\" class=\"note_title_bold12Black\">\n              Subtotal\n            </ion-col>\n            <ion-col\n              size=\"7\"\n              style=\"text-align: right;\"\n              class=\"note_title_bold12Black\"\n            >\n              {{fee.subTotal | currency:'₦':'symbol':'1.2-2'}}\n            </ion-col>\n          </ion-row>\n          <ion-row style=\"background: #e4e1e1;\">\n            <ion-col size=\"5\" class=\"note_title_bold12Black\">\n              Total shipping fee\n            </ion-col>\n            <ion-col\n              size=\"7\"\n              style=\"text-align: right;\"\n              class=\"note_title_bold12Black\"\n            >\n              {{fee.totalShipping | currency:'₦':'symbol':'1.2-2'}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\"> </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" class=\"note_title_bold14Black\">\n              Total\n            </ion-col>\n            <ion-col\n              size=\"7\"\n              style=\"text-align: right;\"\n              class=\"note_title_bold14Sec\"\n            >\n              {{fee.total | currency:'₦':'symbol':'1.2-2'}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <!-- <br> -->\n              <ion-button\n                expand=\"block\"\n                color=\"secondary\"\n                (click)=\"doCheckOut()\"\n              >\n                COMPLETE YOUR ORDER\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </section>\n    </div>\n\n    <div *ngIf=\"products.length==0\">\n      <ion-grid class=\"grid\" class=\"t_center\" style=\"padding-top: 50px;\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <!-- <ion-icon size=\"large\" name=\"cart-sharp\" color=\"primary\"></ion-icon> -->\n            <ion-icon\n              src=\"/assets/vectors/icons/big_cart.svg\"\n              class=\"xxxx\"\n            ></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col\n            size=\"12\"\n            class=\"note_title_bold14Black\"\n            style=\"padding-bottom: 2.5rem;\"\n          >\n            <ion-text>\n              There are currently no items in your<br />shopping cart</ion-text\n            >\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-button\n              expand=\"block\"\n              color=\"primary\"\n              [routerLink]=\"['/app/home']\"\n            >\n              CLICK TO SHOP\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </ion-content>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/cart/cart.module.ts":
  /*!*************************************!*\
    !*** ./src/app/cart/cart.module.ts ***!
    \*************************************/

  /*! exports provided: CartPageModule */

  /***/
  function srcAppCartCartModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPageModule", function () {
      return CartPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _shell_shell_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shell/shell.module */
    "./src/app/shell/shell.module.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _cart_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./cart.page */
    "./src/app/cart/cart.page.ts");
    /* harmony import */


    var _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../sharedComponents/shared-components.module */
    "./src/app/sharedComponents/shared-components.module.ts");

    let CartPageModule = class CartPageModule {};
    CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_8__["CartPage"]
      }]), _shell_shell_module__WEBPACK_IMPORTED_MODULE_6__["ShellModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"]],
      declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_8__["CartPage"]]
    })], CartPageModule);
    /***/
  },

  /***/
  "./src/app/cart/cart.page.scss":
  /*!*************************************!*\
    !*** ./src/app/cart/cart.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppCartCartPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".alertX button.alertButton {\n  color: #343434 !important;\n}\n\nion-icon.xx {\n  width: 20px;\n  height: 20px;\n  stroke-width: 10px;\n}\n\nion-icon.xxx {\n  width: 40px;\n  height: 40px;\n  stroke-width: 10px;\n}\n\nion-icon.xxxx {\n  width: 80px;\n  height: 80px;\n}\n\nion-icon.purple {\n  color: #ad49d2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9DOlxcUHJvamVjdFxcQW5ndWxhclxcZWFzeW1hbGxfbm9ub2RlICgxKVxcZWFzeW1hbGxfbm9ub2RlL3NyY1xcYXBwXFxjYXJ0XFxjYXJ0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2FydC9jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHlCQUFBO0FDQUo7O0FESUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDREo7O0FER0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtFO0VBQ0UsY0FBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvY2FydC9jYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydFgge1xuICBidXR0b24uYWxlcnRCdXR0b24ge1xuICAgIGNvbG9yOiAjMzQzNDM0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbmlvbi1pY29uIHtcbiAgJi54eCB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHN0cm9rZS13aWR0aDogMTBweDtcbiAgfVxuICAmLnh4eCB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHN0cm9rZS13aWR0aDogMTBweDtcbiAgfVxuXG4gICYueHh4eCB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICB9XG5cbiAgJi5wdXJwbGUge1xuICAgIGNvbG9yOiAjYWQ0OWQyO1xuICB9XG59XG4iLCIuYWxlcnRYIGJ1dHRvbi5hbGVydEJ1dHRvbiB7XG4gIGNvbG9yOiAjMzQzNDM0ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pY29uLnh4IHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgc3Ryb2tlLXdpZHRoOiAxMHB4O1xufVxuaW9uLWljb24ueHh4IHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgc3Ryb2tlLXdpZHRoOiAxMHB4O1xufVxuaW9uLWljb24ueHh4eCB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5pb24taWNvbi5wdXJwbGUge1xuICBjb2xvcjogI2FkNDlkMjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/cart/cart.page.ts":
  /*!***********************************!*\
    !*** ./src/app/cart/cart.page.ts ***!
    \***********************************/

  /*! exports provided: CartPage */

  /***/
  function srcAppCartCartPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPage", function () {
      return CartPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/http-services/order.service */
    "./src/app/core/http-services/order.service.ts");
    /* harmony import */


    var src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/core/http-services/product.service */
    "./src/app/core/http-services/product.service.ts");
    /* harmony import */


    var src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/core/authentication/authentication.service */
    "./src/app/core/authentication/authentication.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _globals_universal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../globals/universal */
    "./src/app/globals/universal.ts");

    let CartPage = class CartPage {
      constructor(nativeStorage, router, alertController, prodService, orderService, authService) {
        this.nativeStorage = nativeStorage;
        this.router = router;
        this.alertController = alertController;
        this.prodService = prodService;
        this.orderService = orderService;
        this.authService = authService; ///Inputs

        this.title = 'My Cart';
        this.longSearch = false;
        this.showBackButton = true;
        this.loading = false;
        this.showSearch = false;
        this.productCount = [];
        this.reducesub = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"](); // subTotal: number = 0;
        // totalShipping: number = 0;
        // total: number = 0;

        this.fee = {};
        this.prodService.getCartProducts();
      }

      countChange(event) {
        // console.log('countChange Event: ' + JSON.stringify(event));
        this.nativeStorage.getItem('currentUser').then(userData => {
          if (userData) {
            let body = {
              productId: event.extraobj.productId,
              quantity: event.counterValue
            };
            this.orderService.updateCart(userData.token, body).subscribe(data => {// console.log('updateCart: ' + JSON.stringify(data.data));
              // this.prodService.subtotal(data.data);
            });
            this.calCartFee();
          }
        });
      }

      calCartFee() {
        this.fee = _globals_universal__WEBPACK_IMPORTED_MODULE_9__["calCartFee"](this.products);
        this.loading = false; // new Promise((resolve) => {
        //   this.fee = uni.calCartFee(this.products);
        //   return resolve(this.fee);
        // });
      }

      ngOnInit() {
        this.loading = true;
        this.prodService.cartProducts.subscribe(products => {
          this.products = products;
          this.loading = false; // console.log('getCartProducts(): ' + JSON.stringify(this.products));

          this.calCartFee();
        });
      }

      addtolocalUpdate(prod) {
        let prodQty = new Promise(resolve => {
          this.orderService.getProductQty(prod.productId).subscribe(data => {
            if (prod.quantity + 1 <= data.data.count) {
              prod.quantity++;
            }

            resolve(prod.quantity);
          });
        });
        prodQty.then(data => {
          this.orderService.updateLocalCart(prod.productId, data);
          this.prodService.cartProducts.subscribe(data => {
            this.prodService.subtotal(data);
          });
        });
      }

      reduceToLocal(prod) {
        if (prod.quantity - 1 > 0) {
          prod.quantity--;
          this.orderService.updateLocalCart(prod.productId, prod.quantity);
          this.prodService.cartProducts.subscribe(data => {
            this.prodService.subtotal(data);
          });
        }
      }

      addToWishlist(prod) {
        if (this.checkIfProdInWishList(prod)) {
          this.presentAlertConfirmWishlist(prod);
        } else {
          // this.loading = true;
          this.nativeStorage.getItem('currentUser').then(userData => {
            if (userData) {
              this.orderService.addToWishlist(userData.token, {
                productId: prod.productId,
                quantity: 1
              }).subscribe(data => {
                this.loading = false;
              }, err => {
                this.loading = false;
              });
            }
          });
        }
      }

      checkIfProdInWishList(prod) {
        return this.orderService.checkIfProdInWishList(prod.productId);
      }

      removeFromWishlist(prod) {
        console.log('removeFromWishlist Prod: ' + JSON.stringify(prod));
        this.nativeStorage.getItem('currentUser').then(userData => {
          if (userData) {
            this.orderService.removeFromWishlist(userData.token, prod.productId).subscribe(data => {
              this.loading = false;

              if (!data.error) {
                this.checkIfProdInWishList(prod); // const index = this.products.findIndex((x) => x._id == prod._id);
                // this.products.splice(index, 1);
                // this.prodService.subtotal(this.products);
              }
            }, err => {
              this.loading = false;
            });
          }
        });
      }

      presentAlertConfirmWishlist(prod) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const alert = yield this.alertController.create({
            header: 'Removal Confirmation!',
            message: 'Are you sure you want to remove this product from your wishlist?',
            cssClass: 'alertX',
            buttons: [{
              text: 'NO',
              role: 'cancel',
              cssClass: 'secondary',
              handler: blah => {// console.log('Confirm Cancel: blah');
              }
            }, {
              text: 'YES',
              cssClass: 'alertButton',
              handler: () => {
                this.removeFromWishlist(prod);
              }
            }]
          });
          yield alert.present();
        });
      }

      presentAlertConfirmDelete(prod) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const alert = yield this.alertController.create({
            header: 'Removal Confirmation!',
            message: 'Are you sure you want to remove this product?',
            cssClass: 'alertX',
            buttons: [{
              text: 'NO',
              role: 'cancel',
              cssClass: 'secondary',
              handler: blah => {// console.log('Confirm Cancel: blah');
              }
            }, {
              text: 'YES',
              cssClass: 'alertButton',
              handler: () => {
                this.removeFromCart(prod);
              }
            }]
          });
          yield alert.present();
        });
      }

      removeFromCart(prod) {
        this.nativeStorage.getItem('currentUser').then(data => {
          if (data) {
            this.orderService.removeFromCart(data.token, prod.productId).subscribe(data => {
              const index = this.products.findIndex(x => x.productId == prod.productId);
              this.products.splice(index, 1); // this.prodService.getNumberofItemsInCart(this.products);
              // this.prodService.subtotal(this.products);

              this.calCartFee();
            }, err => {
              console.error(err);
            });
          } else {
            this.orderService.removeFromLocalCart(prod.productId);
            const index = this.products.findIndex(x => x.productId == prod.productId);
            this.products.splice(index, 1); // this.prodService.getNumberofItemsInCart(this.products);
            // this.prodService.subtotal(this.orderService.getLocalCartItems().data);

            this.calCartFee();
          }
        });
      }

      doCheckOut() {
        this.nativeStorage.setItem('CheckoutProducts', this.products).then(() => {
          this.router.navigate(['/checkout']);
        });
      }

    };

    CartPage.ctorParameters = () => [{
      type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
    }, {
      type: src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]
    }, {
      type: src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]
    }, {
      type: src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
    }];

    CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart.page.scss */
      "./src/app/cart/cart.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"], src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"], src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]])], CartPage);
    /***/
  }
}]);
//# sourceMappingURL=cart-cart-module-es5.js.map