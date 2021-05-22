(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-details-product-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/product-details.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/product-details.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductDetailsProductDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header\n  [title]=\"title  | titlecase\"\n  [longSearch]=\"longSearch\"\n  [showBackButton]=\"showBackButton\"\n  [isLoading]=\"loading\"\n  [showSearch]=\"showSearch\"\n>\n</app-header>\n\n<ion-content>\n  <ion-grid class=\"borderBottom\">\n    <ion-row style=\"text-align: center;\">\n      <ion-col size=\"6\" class=\"borderRight\" (click)=\"presentFilterModal()\">\n        <ion-icon size=\"small\" name=\"funnel-outline\"></ion-icon>\n        Filter\n      </ion-col>\n      <ion-col size=\"4\" class=\"borderRight\" (click)=\"showSortFilter()\">\n        <ion-icon size=\"small\" name=\"swap-vertical-outline\"></ion-icon>\n        Sort\n      </ion-col>\n      <ion-col size=\"2\">\n        <a *ngIf=\"isGrid\" (click)=\"changeListType()\">\n          <ion-icon size=\"small\" name=\"menu-outline\"></ion-icon>\n        </a>\n        <a *ngIf=\"!isGrid\" (click)=\"changeListType()\">\n          <ion-icon size=\"small\" name=\"grid-outline\"></ion-icon>\n        </a>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"isGrid\">\n    <ion-row>\n      <ion-col\n        size=\"6\"\n        class=\"borderBottom\"\n        [class.borderRight]=\"even\"\n        *ngFor=\"let prod of Products;let even=even\"\n      >\n        <ion-row style=\"text-align: center;\">\n          <ion-col size=\"10\">\n            <app-aspect-ratio\n              [ratio]=\"{w:1, h:1}\"\n              routerLink=\"/products/{{prod._id}}\"\n            >\n              <app-image-shell\n                animation=\"gradient\"\n                [src]=\"prod?.gallery[0]\"\n                [alt]=\"'Product Image'\"\n                class=\"imgHolder\"\n              >\n              </app-image-shell>\n            </app-aspect-ratio>\n          </ion-col>\n          <ion-col size=\"2\" class=\"\" *ngIf=\"prod\">\n            <a *ngIf=\"isGrid\" (click)=\"addToWishlist(prod)\">\n              <ion-icon\n                *ngIf=\"!checkIfProdInWishList(prod)\"\n                size=\"small\"\n                name=\"heart-outline\"\n                color=\"primary\"\n              >\n              </ion-icon>\n              <ion-icon\n                *ngIf=\"checkIfProdInWishList(prod)\"\n                size=\"small\"\n                name=\"heart\"\n                color=\"primary\"\n              >\n              </ion-icon>\n            </a>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <app-text-shell\n              animation=\"gradient\"\n              [data]=\"prod?.name\"\n              lines=\"2\"\n              class=\"note_title12Black text-truncate\"\n              routerLink=\"/products/{{prod._id}}\"\n            >\n            </app-text-shell>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <app-text-shell\n              animation=\"gradient\"\n              [data]=\"prod?.price | currency:'₦':'symbol':'1.2-2'\"\n              lines=\"2\"\n              class=\"note_title14Sec\"\n              routerLink=\"/products/{{prod._id}}\"\n            >\n            </app-text-shell>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"rating_row\" *ngIf=\"prod.rating>0\">\n          <ion-col size=\"7\">\n            <app-rating-input max=\"5\" readOnly=\"true\" class=\"button-inner\">\n            </app-rating-input>\n          </ion-col>\n          <ion-col size=\"5\" class=\"ratingText\"\n            >({{prod?.rating}} rating(s))</ion-col\n          >\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-infinite-scroll\n      (ionInfinite)=\"loadMore($event)\"\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more products...\"\n    >\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-grid>\n\n  <ion-grid class=\"borderBottom\" *ngIf=\"!isGrid\">\n    <ion-row\n      *ngFor=\"let prod of Products;let even=even\"\n      class=\"gridProductItemList\"\n    >\n      <ion-col size=\"4\">\n        <app-aspect-ratio\n          [ratio]=\"{w:1, h:1}\"\n          routerLink=\"/products/{{prod._id}}\"\n        >\n          <app-image-shell\n            animation=\"gradient\"\n            [src]=\"prod?.gallery[0]\"\n            [alt]=\"'Product Image'\"\n            class=\"imgHolder\"\n          >\n          </app-image-shell>\n        </app-aspect-ratio>\n      </ion-col>\n      <ion-col size=\"7\">\n        <app-text-shell\n          animation=\"gradient\"\n          [data]=\"prod?.name\"\n          lines=\"2\"\n          class=\"note_title12Black text-truncate\"\n          routerLink=\"/products/{{prod._id}}\"\n        >\n        </app-text-shell>\n        <app-text-shell\n          animation=\"gradient\"\n          [data]=\"prod?.price  | currency:'₦':'symbol':'1.2-2'\"\n          class=\"note_title14Sec\"\n          routerLink=\"/products/{{prod._id}}\"\n        >\n        </app-text-shell>\n        <ion-row class=\"rating_row\">\n          <ion-col size=\"7\">\n            <app-rating-input max=\"5\" readOnly=\"true\" class=\"button-inner\">\n            </app-rating-input>\n          </ion-col>\n          <ion-col size=\"5\" class=\"ratingText\"\n            >({{prod?.rating}} rating(s))\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"1\" class=\"\" *ngIf=\"prod\">\n        <a (click)=\"addToWishlist(prod)\">\n          <ion-icon\n            *ngIf=\"!checkIfProdInWishList(prod)\"\n            size=\"small\"\n            name=\"heart-outline\"\n            color=\"primary\"\n          ></ion-icon>\n          <ion-icon\n            *ngIf=\"checkIfProdInWishList(prod)\"\n            size=\"small\"\n            name=\"heart\"\n            color=\"primary\"\n          >\n          </ion-icon>\n        </a>\n      </ion-col>\n    </ion-row>\n    <ion-infinite-scroll\n      (ionInfinite)=\"loadMore($event)\"\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more products...\"\n    >\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/product-details/product-details.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/product-details/product-details.module.ts ***!
    \***********************************************************/

  /*! exports provided: ProductDetailsPageModule */

  /***/
  function srcAppProductDetailsProductDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailsPageModule", function () {
      return ProductDetailsPageModule;
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


    var _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../sharedComponents/shared-components.module */
    "./src/app/sharedComponents/shared-components.module.ts");
    /* harmony import */


    var _product_details_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./product-details.page */
    "./src/app/product-details/product-details.page.ts");

    let ProductDetailsPageModule = class ProductDetailsPageModule {};
    ProductDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _product_details_page__WEBPACK_IMPORTED_MODULE_9__["ProductDetailsPage"]
      }]), _shell_shell_module__WEBPACK_IMPORTED_MODULE_6__["ShellModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_8__["SharedComponentsModule"]],
      declarations: [_product_details_page__WEBPACK_IMPORTED_MODULE_9__["ProductDetailsPage"]]
    })], ProductDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/product-details/product-details.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/product-details/product-details.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductDetailsProductDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer ion-toolbar {\n  --background: #fff;\n}\n\n.viewSeller {\n  font-size: 10px;\n  text-align: right;\n}\n\n.slideShow {\n  text-align: center;\n}\n\n.imgHolder {\n  margin: auto;\n  width: 200px;\n  height: 200px;\n  max-width: 200px;\n  max-height: 200px;\n}\n\n.imgHolderRec {\n  width: 100px;\n  height: 100px;\n  max-width: 100px;\n  max-height: 100px;\n}\n\n.img_slider {\n  height: 12.5rem !important;\n  width: 12.5rem !important;\n}\n\n.ratingBorder {\n  border: solid 1px #c8c6c6;\n  padding: 0 2px;\n}\n\n.subSubCatTitle {\n  font-size: 8px;\n}\n\n.subCatHeader {\n  font-size: 10px;\n}\n\n.subCatViewAll {\n  font-size: 8px;\n}\n\n.gridSubCat {\n  padding: 0px;\n}\n\n.gridSubCatHeader {\n  background: var(--ion-color-primary);\n  color: #fff;\n}\n\n.borderRight {\n  border-right: solid 1px #c8c6c6;\n}\n\n.borderBottom {\n  border-bottom: solid 1px #c8c6c6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1kZXRhaWxzL0M6XFxQcm9qZWN0XFxBbmd1bGFyXFxlYXN5bWFsbF9ub25vZGUgKDEpXFxlYXN5bWFsbF9ub25vZGUvc3JjXFxhcHBcXHByb2R1Y3QtZGV0YWlsc1xccHJvZHVjdC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSixrQkFBQTtBQ0FBOztBRElBO0VBQ0UsZUFBQTtFQUVBLGlCQUFBO0FDRkY7O0FESUE7RUFDQSxrQkFBQTtBQ0RBOztBREdBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FBOztBREVBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQUE7O0FERUE7RUFFRSwwQkFBQTtFQUNBLHlCQUFBO0FDQUY7O0FER0E7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNBQTs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURDQTtFQUNDLGVBQUE7QUNFRDs7QURBQTtFQUNDLGNBQUE7QUNHRDs7QUREQTtFQUNBLFlBQUE7QUNJQTs7QURGQTtFQUNDLG9DQUFBO0VBQ0EsV0FBQTtBQ0tEOztBREZBO0VBQ0ksK0JBQUE7QUNLSjs7QURIQTtFQUNJLGdDQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XG4gICAgaW9uLXRvb2xiYXJ7XG4tLWJhY2tncm91bmQ6ICNmZmY7XG4vLyAtLWNvbG9yOiNmZmYgIWltcG9ydGFudDtcbn1cbn1cbi52aWV3U2VsbGVyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuLy8gICBwYWRkaW5nOiA1cHggMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uc2xpZGVTaG93e1xudGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmltZ0hvbGRlcntcbm1hcmdpbjogYXV0bztcbndpZHRoOiAyMDBweDtcbmhlaWdodDogMjAwcHg7XG5tYXgtd2lkdGg6IDIwMHB4O1xubWF4LWhlaWdodDogMjAwcHg7XG59XG4uaW1nSG9sZGVyUmVje1xuLy8gbWFyZ2luOiBhdXRvO1xud2lkdGg6IDEwMHB4O1xuaGVpZ2h0OiAxMDBweDtcbm1heC13aWR0aDogMTAwcHg7XG5tYXgtaGVpZ2h0OiAxMDBweDtcbn1cbi5pbWdfc2xpZGVye1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMi41cmVtICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMi41cmVtICFpbXBvcnRhbnQ7XG4gIC8vIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ucmF0aW5nQm9yZGVye1xuYm9yZGVyOiBzb2xpZCAxcHggI2M4YzZjNjtcbnBhZGRpbmc6IDAgMnB4O1xufVxuLnN1YlN1YkNhdFRpdGxle1xuICAgIGZvbnQtc2l6ZTogOHB4O1xufVxuLnN1YkNhdEhlYWRlcntcbiBmb250LXNpemU6IDEwcHg7XG59XG4uc3ViQ2F0Vmlld0FsbHtcbiBmb250LXNpemU6IDhweDtcbn1cbi5ncmlkU3ViQ2F0e1xucGFkZGluZzogMHB4O1xufVxuLmdyaWRTdWJDYXRIZWFkZXJ7XG4gYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7ICBcbiBjb2xvcjojZmZmO1xufVxuXG4uYm9yZGVyUmlnaHR7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2M4YzZjNjtcbn1cbi5ib3JkZXJCb3R0b217XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjOGM2YzY7XG59XG4iLCIuZm9vdGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4udmlld1NlbGxlciB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5zbGlkZVNob3cge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWdIb2xkZXIge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG59XG5cbi5pbWdIb2xkZXJSZWMge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xufVxuXG4uaW1nX3NsaWRlciB7XG4gIGhlaWdodDogMTIuNXJlbSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTIuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucmF0aW5nQm9yZGVyIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2M4YzZjNjtcbiAgcGFkZGluZzogMCAycHg7XG59XG5cbi5zdWJTdWJDYXRUaXRsZSB7XG4gIGZvbnQtc2l6ZTogOHB4O1xufVxuXG4uc3ViQ2F0SGVhZGVyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uc3ViQ2F0Vmlld0FsbCB7XG4gIGZvbnQtc2l6ZTogOHB4O1xufVxuXG4uZ3JpZFN1YkNhdCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmdyaWRTdWJDYXRIZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYm9yZGVyUmlnaHQge1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjYzhjNmM2O1xufVxuXG4uYm9yZGVyQm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjOGM2YzY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/product-details/product-details.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/product-details/product-details.page.ts ***!
    \*********************************************************/

  /*! exports provided: ProductDetailsPage */

  /***/
  function srcAppProductDetailsProductDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailsPage", function () {
      return ProductDetailsPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/http-services/product.service */
    "./src/app/core/http-services/product.service.ts");
    /* harmony import */


    var src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/core/authentication/authentication.service */
    "./src/app/core/authentication/authentication.service.ts");
    /* harmony import */


    var src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/core/http-services/order.service */
    "./src/app/core/http-services/order.service.ts");
    /* harmony import */


    var src_app_filter_modal_filter_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/filter-modal/filter-modal.page */
    "./src/app/filter-modal/filter-modal.page.ts");

    let ProductDetailsPage = class ProductDetailsPage {
      constructor(toastController, router, nativeStorage, route, orderService, productService, authService, modalCtrl, actionSheetController) {
        this.toastController = toastController;
        this.router = router;
        this.nativeStorage = nativeStorage;
        this.route = route;
        this.orderService = orderService;
        this.productService = productService;
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.actionSheetController = actionSheetController; ///Inputs

        this.title = '';
        this.longSearch = false;
        this.showBackButton = true;
        this.loading = false;
        this.showSearch = true; ////////////////////

        this.isGrid = true;
        this.Products = new Array();
        this.page = 1;
        this.pageSize = 12;
        this.wishList = new Array();
        this.sortStatus = 'asc';
        this.searchString = '';
        this.nativeStorage.getItem('currentUser').then(x => {
          this.currentUser = x;
          this.nativeStorage.getItem('WishList').then(x => {
            this.wishList = x;
          });
        });
      }

      ngOnInit() {
        this.route.params.subscribe(params => {
          this.searchString = this.route.snapshot.paramMap.get('searchString');
          this.title = 'Results for: ' + this.searchString;
          this.getSearchProducts();
        });
      }

      presentSortFilterSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const actionSheet = yield this.actionSheetController.create({
            header: 'Sort By',
            buttons: [{
              text: 'Lowest Price',
              icon: 'arrow-down-outline',
              handler: () => {
                this.doFilterSort('asc');
              }
            }, {
              text: 'Highest Price',
              icon: 'arrow-up-outline',
              handler: () => {
                this.doFilterSort('desc');
              }
            }]
          });
          yield actionSheet.present();
        });
      }

      presentFilterModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const modal = yield this.modalCtrl.create({
            component: src_app_filter_modal_filter_modal_page__WEBPACK_IMPORTED_MODULE_8__["FilterModalPage"],
            componentProps: {}
          });
          return yield modal.present().then(x => {
            modal.onWillDismiss().then(d => {
              if (d.data.reload) {// console.log('New Base User: '+JSON.stringify(d.data.reload));
                // this.bal = (d.data.reload.bal * 1) / 100;
              }
            });
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
        this.getSearchProducts();
      }

      presentToast(header, msg, duration, color) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toast = yield this.toastController.create({
            header: header,
            position: 'bottom',
            message: msg,
            duration: duration,
            // cssClass: 'custom-toast-class',
            color: color
          });
          toast.present();
        });
      }

      changeListType() {
        this.isGrid = !this.isGrid;
      }

      getSearchProducts(infiniteScroll) {
        this.loading = true;
        this.productService.searchBarInfinite(this.searchString, this.pageSize, this.page, this.sortStatus).subscribe(data => {
          data.data.forEach(prod => {
            this.Products.push(prod);
          });
          this.loading = false; // console.log('Search Products Lenght: ' + this.Products.length);

          if (infiniteScroll) {
            infiniteScroll.target.complete();
          }
        }, err => {
          this.loading = false;

          if (infiniteScroll) {
            infiniteScroll.target.complete();
          }
        });
      }

      loadMore(infiniteScroll) {
        this.page++;
        this.getSearchProducts(infiniteScroll);

        if (this.page === this.pageSize) {
          infiniteScroll.disabled = true;
        }
      }

      addToWishlist(prod) {
        if (localStorage.NetworkStatus == '0') {
          if (this.currentUser) {
            this.loading = true;

            if (this.checkIfProdInWishList(prod)) {
              this.removeFromWishlist(prod);
            } else {
              this.orderService.addToWishlist(this.currentUser.token, {
                productId: prod._id,
                quantity: 1
              }).subscribe(data => {
                console.log('Add to Wishlist Result: ' + JSON.stringify(data));

                if (!data.error) {
                  this.presentToast('GREAT!', 'Product successfully added to your wishlist ', 2000, 'success');
                  this.wishList = data.data;
                  localStorage.WishList = JSON.stringify(this.wishList); // console.log('Wishlist Add data:' + this.wishList.length);

                  this.loading = false;
                } else {
                  this.loading = false;
                  this.presentToast('OOPS!', 'An error occurred, Please try again later ', 2000, 'error');
                }
              }, err => {
                console.error(err);
                this.loading = false;
                this.presentToast('OOPS!', 'An error occurred, Please try again later ', 2000, 'error');
              });
            }
          } else {
            this.presentToast('ALMOST THERE!', 'Please sign in to add the product to your wishlist ', 2000, 'warning');
            this.router.navigate(['/sign-in']);
          }
        } else {
          this.presentToast('OFFLINE!', 'You are currently offline ', 2000, 'warning');
        }
      }

      removeFromWishlist(prod) {
        this.orderService.removeFromWishlist(this.currentUser.token, prod._id).subscribe(data => {
          // console.log('Add to Wishlist Result: ' + JSON.stringify(data));
          this.wishList.forEach(w => {
            if (w.productId === prod._id) {
              this.wishList.splice(this.wishList.indexOf(w.productId), 1);
              localStorage.WishList = JSON.stringify(this.wishList);
            }
          }); // console.log('Wishlist delete data:' + this.wishList.length);
          // this.checkIfProdInWishList(prod);

          this.loading = false;
          this.presentToast('GREAT!', 'Product successfully removed to your wishlist ', 2000, 'success');
        }, err => {
          console.error(err); // this.toastr.error(err.errors.join(","), "Error!");
        });
      }

      checkIfProdInWishList(prod) {
        return this.wishList.some(x => x.productId === prod._id);
      }

    };

    ProductDetailsPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"]
    }, {
      type: src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]
    }, {
      type: src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
    }];

    ProductDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/product-details.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-details.page.scss */
      "./src/app/product-details/product-details.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"], src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"], src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]])], ProductDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=product-details-product-details-module-es5.js.map