(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-details-product-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/product-details.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/product-details.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\n  [title]=\"title  | titlecase\"\n  [longSearch]=\"longSearch\"\n  [showBackButton]=\"showBackButton\"\n  [isLoading]=\"loading\"\n  [showSearch]=\"showSearch\"\n>\n</app-header>\n\n<ion-content>\n  <ion-grid class=\"borderBottom\">\n    <ion-row style=\"text-align: center;\">\n      <ion-col size=\"6\" class=\"borderRight\" (click)=\"presentFilterModal()\">\n        <ion-icon size=\"small\" name=\"funnel-outline\"></ion-icon>\n        Filter\n      </ion-col>\n      <ion-col size=\"4\" class=\"borderRight\" (click)=\"showSortFilter()\">\n        <ion-icon size=\"small\" name=\"swap-vertical-outline\"></ion-icon>\n        Sort\n      </ion-col>\n      <ion-col size=\"2\">\n        <a *ngIf=\"isGrid\" (click)=\"changeListType()\">\n          <ion-icon size=\"small\" name=\"menu-outline\"></ion-icon>\n        </a>\n        <a *ngIf=\"!isGrid\" (click)=\"changeListType()\">\n          <ion-icon size=\"small\" name=\"grid-outline\"></ion-icon>\n        </a>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"isGrid\">\n    <ion-row>\n      <ion-col\n        size=\"6\"\n        class=\"borderBottom\"\n        [class.borderRight]=\"even\"\n        *ngFor=\"let prod of Products;let even=even\"\n      >\n        <ion-row style=\"text-align: center;\">\n          <ion-col size=\"10\">\n            <app-aspect-ratio\n              [ratio]=\"{w:1, h:1}\"\n              routerLink=\"/products/{{prod._id}}\"\n            >\n              <app-image-shell\n                animation=\"gradient\"\n                [src]=\"prod?.gallery[0]\"\n                [alt]=\"'Product Image'\"\n                class=\"imgHolder\"\n              >\n              </app-image-shell>\n            </app-aspect-ratio>\n          </ion-col>\n          <ion-col size=\"2\" class=\"\" *ngIf=\"prod\">\n            <a *ngIf=\"isGrid\" (click)=\"addToWishlist(prod)\">\n              <ion-icon\n                *ngIf=\"!checkIfProdInWishList(prod)\"\n                size=\"small\"\n                name=\"heart-outline\"\n                color=\"primary\"\n              >\n              </ion-icon>\n              <ion-icon\n                *ngIf=\"checkIfProdInWishList(prod)\"\n                size=\"small\"\n                name=\"heart\"\n                color=\"primary\"\n              >\n              </ion-icon>\n            </a>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <app-text-shell\n              animation=\"gradient\"\n              [data]=\"prod?.name\"\n              lines=\"2\"\n              class=\"note_title12Black text-truncate\"\n              routerLink=\"/products/{{prod._id}}\"\n            >\n            </app-text-shell>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <app-text-shell\n              animation=\"gradient\"\n              [data]=\"prod?.price | currency:'₦':'symbol':'1.2-2'\"\n              lines=\"2\"\n              class=\"note_title14Sec\"\n              routerLink=\"/products/{{prod._id}}\"\n            >\n            </app-text-shell>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"rating_row\" *ngIf=\"prod.rating>0\">\n          <ion-col size=\"7\">\n            <app-rating-input max=\"5\" readOnly=\"true\" class=\"button-inner\">\n            </app-rating-input>\n          </ion-col>\n          <ion-col size=\"5\" class=\"ratingText\"\n            >({{prod?.rating}} rating(s))</ion-col\n          >\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-infinite-scroll\n      (ionInfinite)=\"loadMore($event)\"\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more products...\"\n    >\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-grid>\n\n  <ion-grid class=\"borderBottom\" *ngIf=\"!isGrid\">\n    <ion-row\n      *ngFor=\"let prod of Products;let even=even\"\n      class=\"gridProductItemList\"\n    >\n      <ion-col size=\"4\">\n        <app-aspect-ratio\n          [ratio]=\"{w:1, h:1}\"\n          routerLink=\"/products/{{prod._id}}\"\n        >\n          <app-image-shell\n            animation=\"gradient\"\n            [src]=\"prod?.gallery[0]\"\n            [alt]=\"'Product Image'\"\n            class=\"imgHolder\"\n          >\n          </app-image-shell>\n        </app-aspect-ratio>\n      </ion-col>\n      <ion-col size=\"7\">\n        <app-text-shell\n          animation=\"gradient\"\n          [data]=\"prod?.name\"\n          lines=\"2\"\n          class=\"note_title12Black text-truncate\"\n          routerLink=\"/products/{{prod._id}}\"\n        >\n        </app-text-shell>\n        <app-text-shell\n          animation=\"gradient\"\n          [data]=\"prod?.price  | currency:'₦':'symbol':'1.2-2'\"\n          class=\"note_title14Sec\"\n          routerLink=\"/products/{{prod._id}}\"\n        >\n        </app-text-shell>\n        <ion-row class=\"rating_row\">\n          <ion-col size=\"7\">\n            <app-rating-input max=\"5\" readOnly=\"true\" class=\"button-inner\">\n            </app-rating-input>\n          </ion-col>\n          <ion-col size=\"5\" class=\"ratingText\"\n            >({{prod?.rating}} rating(s))\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"1\" class=\"\" *ngIf=\"prod\">\n        <a (click)=\"addToWishlist(prod)\">\n          <ion-icon\n            *ngIf=\"!checkIfProdInWishList(prod)\"\n            size=\"small\"\n            name=\"heart-outline\"\n            color=\"primary\"\n          ></ion-icon>\n          <ion-icon\n            *ngIf=\"checkIfProdInWishList(prod)\"\n            size=\"small\"\n            name=\"heart\"\n            color=\"primary\"\n          >\n          </ion-icon>\n        </a>\n      </ion-col>\n    </ion-row>\n    <ion-infinite-scroll\n      (ionInfinite)=\"loadMore($event)\"\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more products...\"\n    >\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/product-details/product-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/product-details/product-details.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageModule", function() { return ProductDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _shell_shell_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shell/shell.module */ "./src/app/shell/shell.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sharedComponents/shared-components.module */ "./src/app/sharedComponents/shared-components.module.ts");
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-details.page */ "./src/app/product-details/product-details.page.ts");










let ProductDetailsPageModule = class ProductDetailsPageModule {
};
ProductDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _product_details_page__WEBPACK_IMPORTED_MODULE_9__["ProductDetailsPage"]
                }
            ]),
            _shell_shell_module__WEBPACK_IMPORTED_MODULE_6__["ShellModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_8__["SharedComponentsModule"]
        ],
        declarations: [_product_details_page__WEBPACK_IMPORTED_MODULE_9__["ProductDetailsPage"]]
    })
], ProductDetailsPageModule);



/***/ }),

/***/ "./src/app/product-details/product-details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/product-details/product-details.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer ion-toolbar {\n  --background: #fff;\n}\n\n.viewSeller {\n  font-size: 10px;\n  text-align: right;\n}\n\n.slideShow {\n  text-align: center;\n}\n\n.imgHolder {\n  margin: auto;\n  width: 200px;\n  height: 200px;\n  max-width: 200px;\n  max-height: 200px;\n}\n\n.imgHolderRec {\n  width: 100px;\n  height: 100px;\n  max-width: 100px;\n  max-height: 100px;\n}\n\n.img_slider {\n  height: 12.5rem !important;\n  width: 12.5rem !important;\n}\n\n.ratingBorder {\n  border: solid 1px #c8c6c6;\n  padding: 0 2px;\n}\n\n.subSubCatTitle {\n  font-size: 8px;\n}\n\n.subCatHeader {\n  font-size: 10px;\n}\n\n.subCatViewAll {\n  font-size: 8px;\n}\n\n.gridSubCat {\n  padding: 0px;\n}\n\n.gridSubCatHeader {\n  background: var(--ion-color-primary);\n  color: #fff;\n}\n\n.borderRight {\n  border-right: solid 1px #c8c6c6;\n}\n\n.borderBottom {\n  border-bottom: solid 1px #c8c6c6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL0lvbmljL2FmcmltYXJ0b25lL3NyYy9hcHAvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0osa0JBQUE7QUNBQTs7QURJQTtFQUNFLGVBQUE7RUFFQSxpQkFBQTtBQ0ZGOztBRElBO0VBQ0Esa0JBQUE7QUNEQTs7QURHQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNBQTs7QURFQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FBOztBREVBO0VBRUUsMEJBQUE7RUFDQSx5QkFBQTtBQ0FGOztBREdBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQUE7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0E7RUFDQyxlQUFBO0FDRUQ7O0FEQUE7RUFDQyxjQUFBO0FDR0Q7O0FEREE7RUFDQSxZQUFBO0FDSUE7O0FERkE7RUFDQyxvQ0FBQTtFQUNBLFdBQUE7QUNLRDs7QURGQTtFQUNJLCtCQUFBO0FDS0o7O0FESEE7RUFDSSxnQ0FBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xuICAgIGlvbi10b29sYmFye1xuLS1iYWNrZ3JvdW5kOiAjZmZmO1xuLy8gLS1jb2xvcjojZmZmICFpbXBvcnRhbnQ7XG59XG59XG4udmlld1NlbGxlciB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbi8vICAgcGFkZGluZzogNXB4IDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnNsaWRlU2hvd3tcbnRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbWdIb2xkZXJ7XG5tYXJnaW46IGF1dG87XG53aWR0aDogMjAwcHg7XG5oZWlnaHQ6IDIwMHB4O1xubWF4LXdpZHRoOiAyMDBweDtcbm1heC1oZWlnaHQ6IDIwMHB4O1xufVxuLmltZ0hvbGRlclJlY3tcbi8vIG1hcmdpbjogYXV0bztcbndpZHRoOiAxMDBweDtcbmhlaWdodDogMTAwcHg7XG5tYXgtd2lkdGg6IDEwMHB4O1xubWF4LWhlaWdodDogMTAwcHg7XG59XG4uaW1nX3NsaWRlcntcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTIuNXJlbSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTIuNXJlbSAhaW1wb3J0YW50O1xuICAvLyBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnJhdGluZ0JvcmRlcntcbmJvcmRlcjogc29saWQgMXB4ICNjOGM2YzY7XG5wYWRkaW5nOiAwIDJweDtcbn1cbi5zdWJTdWJDYXRUaXRsZXtcbiAgICBmb250LXNpemU6IDhweDtcbn1cbi5zdWJDYXRIZWFkZXJ7XG4gZm9udC1zaXplOiAxMHB4O1xufVxuLnN1YkNhdFZpZXdBbGx7XG4gZm9udC1zaXplOiA4cHg7XG59XG4uZ3JpZFN1YkNhdHtcbnBhZGRpbmc6IDBweDtcbn1cbi5ncmlkU3ViQ2F0SGVhZGVye1xuIGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyAgXG4gY29sb3I6I2ZmZjtcbn1cblxuLmJvcmRlclJpZ2h0e1xuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNjOGM2YzY7XG59XG4uYm9yZGVyQm90dG9te1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjYzhjNmM2O1xufVxuIiwiLmZvb3RlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLnZpZXdTZWxsZXIge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uc2xpZGVTaG93IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1nSG9sZGVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xufVxuXG4uaW1nSG9sZGVyUmVjIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbn1cblxuLmltZ19zbGlkZXIge1xuICBoZWlnaHQ6IDEyLjVyZW0gIWltcG9ydGFudDtcbiAgd2lkdGg6IDEyLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnJhdGluZ0JvcmRlciB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjOGM2YzY7XG4gIHBhZGRpbmc6IDAgMnB4O1xufVxuXG4uc3ViU3ViQ2F0VGl0bGUge1xuICBmb250LXNpemU6IDhweDtcbn1cblxuLnN1YkNhdEhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLnN1YkNhdFZpZXdBbGwge1xuICBmb250LXNpemU6IDhweDtcbn1cblxuLmdyaWRTdWJDYXQge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5ncmlkU3ViQ2F0SGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJvcmRlclJpZ2h0IHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2M4YzZjNjtcbn1cblxuLmJvcmRlckJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjYzhjNmM2O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/product-details/product-details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/product-details/product-details.page.ts ***!
  \*********************************************************/
/*! exports provided: ProductDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPage", function() { return ProductDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/http-services/product.service */ "./src/app/core/http-services/product.service.ts");
/* harmony import */ var src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/authentication/authentication.service */ "./src/app/core/authentication/authentication.service.ts");
/* harmony import */ var src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/http-services/order.service */ "./src/app/core/http-services/order.service.ts");
/* harmony import */ var src_app_filter_modal_filter_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/filter-modal/filter-modal.page */ "./src/app/filter-modal/filter-modal.page.ts");









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
        this.actionSheetController = actionSheetController;
        ///Inputs
        this.title = '';
        this.longSearch = false;
        this.showBackButton = true;
        this.loading = false;
        this.showSearch = true;
        ////////////////////
        this.isGrid = true;
        this.Products = new Array();
        this.page = 1;
        this.pageSize = 12;
        this.wishList = new Array();
        this.sortStatus = 'asc';
        this.searchString = '';
        this.nativeStorage.getItem('currentUser').then((x) => {
            this.currentUser = x;
            this.nativeStorage.getItem('WishList').then((x) => {
                this.wishList = x;
            });
        });
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.searchString = this.route.snapshot.paramMap.get('searchString');
            this.title = 'Results for: ' + this.searchString;
            this.getSearchProducts();
        });
    }
    presentSortFilterSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
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
                ],
            });
            yield actionSheet.present();
        });
    }
    presentFilterModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_filter_modal_filter_modal_page__WEBPACK_IMPORTED_MODULE_8__["FilterModalPage"],
                componentProps: {},
            });
            return yield modal.present().then((x) => {
                modal.onWillDismiss().then((d) => {
                    if (d.data.reload) {
                        // console.log('New Base User: '+JSON.stringify(d.data.reload));
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
                color: color,
            });
            toast.present();
        });
    }
    changeListType() {
        this.isGrid = !this.isGrid;
    }
    getSearchProducts(infiniteScroll) {
        this.loading = true;
        this.productService
            .searchBarInfinite(this.searchString, this.pageSize, this.page, this.sortStatus)
            .subscribe((data) => {
            data.data.forEach((prod) => {
                this.Products.push(prod);
            });
            this.loading = false;
            // console.log('Search Products Lenght: ' + this.Products.length);
            if (infiniteScroll) {
                infiniteScroll.target.complete();
            }
        }, (err) => {
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
                }
                else {
                    this.orderService
                        .addToWishlist(this.currentUser.token, {
                        productId: prod._id,
                        quantity: 1,
                    })
                        .subscribe((data) => {
                        console.log('Add to Wishlist Result: ' + JSON.stringify(data));
                        if (!data.error) {
                            this.presentToast('GREAT!', 'Product successfully added to your wishlist ', 2000, 'success');
                            this.wishList = data.data;
                            localStorage.WishList = JSON.stringify(this.wishList);
                            // console.log('Wishlist Add data:' + this.wishList.length);
                            this.loading = false;
                        }
                        else {
                            this.loading = false;
                            this.presentToast('OOPS!', 'An error occurred, Please try again later ', 2000, 'error');
                        }
                    }, (err) => {
                        console.error(err);
                        this.loading = false;
                        this.presentToast('OOPS!', 'An error occurred, Please try again later ', 2000, 'error');
                    });
                }
            }
            else {
                this.presentToast('ALMOST THERE!', 'Please sign in to add the product to your wishlist ', 2000, 'warning');
                this.router.navigate(['/sign-in']);
            }
        }
        else {
            this.presentToast('OFFLINE!', 'You are currently offline ', 2000, 'warning');
        }
    }
    removeFromWishlist(prod) {
        this.orderService
            .removeFromWishlist(this.currentUser.token, prod._id)
            .subscribe((data) => {
            // console.log('Add to Wishlist Result: ' + JSON.stringify(data));
            this.wishList.forEach((w) => {
                if (w.productId === prod._id) {
                    this.wishList.splice(this.wishList.indexOf(w.productId), 1);
                    localStorage.WishList = JSON.stringify(this.wishList);
                }
            });
            // console.log('Wishlist delete data:' + this.wishList.length);
            // this.checkIfProdInWishList(prod);
            this.loading = false;
            this.presentToast('GREAT!', 'Product successfully removed to your wishlist ', 2000, 'success');
        }, (err) => {
            console.error(err);
            // this.toastr.error(err.errors.join(","), "Error!");
        });
    }
    checkIfProdInWishList(prod) {
        return this.wishList.some((x) => x.productId === prod._id);
    }
};
ProductDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"] },
    { type: src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] }
];
ProductDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/product-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-details.page.scss */ "./src/app/product-details/product-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"],
        src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
        src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]])
], ProductDetailsPage);



/***/ })

}]);
//# sourceMappingURL=product-details-product-details-module-es2015.js.map