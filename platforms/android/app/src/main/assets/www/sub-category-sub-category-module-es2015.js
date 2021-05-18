(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sub-category-sub-category-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sub-category/sub-category.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sub-category/sub-category.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\n  [title]=\"title  | titlecase\"\n  [longSearch]=\"longSearch\"\n  [showBackButton]=\"showBackButton\"\n  [isLoading]=\"loading\"\n  [showSearch]=\"showSearch\"\n>\n</app-header>\n\n<ion-content>\n  <ion-grid class=\"borderBottom\">\n    <ion-row style=\"text-align: center;\">\n      <ion-col size=\"6\" class=\"borderRight\" (click)=\"presentFilterModal()\">\n        <ion-icon size=\"small\" name=\"funnel-outline\"></ion-icon>\n        Filter\n      </ion-col>\n      <ion-col size=\"4\" class=\"borderRight\" (click)=\"showSortFilter()\">\n        <ion-icon size=\"small\" name=\"swap-vertical-outline\"></ion-icon>\n        Sort\n      </ion-col>\n      <ion-col size=\"2\">\n        <a *ngIf=\"isGrid\" (click)=\"changeListType()\">\n          <ion-icon size=\"small\" name=\"menu-outline\"></ion-icon>\n        </a>\n        <a *ngIf=\"!isGrid\" (click)=\"changeListType()\">\n          <ion-icon size=\"small\" name=\"grid-outline\"></ion-icon>\n        </a>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"isGrid\">\n    <ion-row>\n      <ion-col\n        size=\"6\"\n        class=\"borderBottom\"\n        [class.borderRight]=\"even\"\n        *ngFor=\"let prod of Products;let even=even\"\n      >\n        <ion-row style=\"text-align: center;\">\n          <ion-col size=\"10\">\n            <app-aspect-ratio\n              [ratio]=\"{w:1, h:1}\"\n              routerLink=\"/products/{{prod._id}}\"\n            >\n              <app-image-shell\n                animation=\"gradient\"\n                [src]=\"prod?.gallery[0]\"\n                [alt]=\"'Product Image'\"\n                class=\"imgHolder\"\n              >\n              </app-image-shell>\n            </app-aspect-ratio>\n          </ion-col>\n          <ion-col size=\"2\" class=\"\" *ngIf=\"prod\">\n            <a *ngIf=\"isGrid\" (click)=\"addToWishlist(prod)\">\n              <ion-icon\n                *ngIf=\"!checkIfProdInWishList(prod)\"\n                size=\"small\"\n                name=\"heart-outline\"\n                color=\"primary\"\n              ></ion-icon>\n              <ion-icon\n                *ngIf=\"checkIfProdInWishList(prod)\"\n                size=\"small\"\n                name=\"heart\"\n                color=\"primary\"\n              >\n              </ion-icon>\n            </a>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <app-text-shell\n              animation=\"gradient\"\n              [data]=\"prod?.name\"\n              lines=\"2\"\n              class=\"note_title12Black text-truncate\"\n              routerLink=\"/products/{{prod._id}}\"\n            >\n            </app-text-shell>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <app-text-shell\n              animation=\"gradient\"\n              [data]=\"prod?.price | currency:'₦':'symbol':'1.2-2'\"\n              lines=\"2\"\n              class=\"note_title14Sec\"\n              routerLink=\"/products/{{prod._id}}\"\n            >\n            </app-text-shell>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"rating_row\" *ngIf=\"prod.rating>0\">\n          <ion-col size=\"7\">\n            <app-rating-input max=\"5\" readOnly=\"true\" class=\"button-inner\">\n            </app-rating-input>\n          </ion-col>\n          <ion-col size=\"5\" class=\"ratingText\"\n            >({{prod?.rating}} rating(s))</ion-col\n          >\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-infinite-scroll\n      (ionInfinite)=\"loadMore($event)\"\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more products...\"\n    >\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-grid>\n\n  <ion-grid class=\"borderBottom\" *ngIf=\"!isGrid\">\n    <ion-row\n      *ngFor=\"let prod of Products;let even=even\"\n      class=\"gridProductItemList\"\n    >\n      <ion-col size=\"4\">\n        <app-aspect-ratio\n          [ratio]=\"{w:1, h:1}\"\n          routerLink=\"/products/{{prod._id}}\"\n        >\n          <app-image-shell\n            animation=\"gradient\"\n            [src]=\"prod?.gallery[0]\"\n            [alt]=\"'Product Image'\"\n            class=\"imgHolder\"\n          >\n          </app-image-shell>\n        </app-aspect-ratio>\n      </ion-col>\n      <ion-col size=\"7\">\n        <app-text-shell\n          animation=\"gradient\"\n          [data]=\"prod?.name\"\n          lines=\"2\"\n          class=\"note_title12Black text-truncate\"\n          routerLink=\"/products/{{prod._id}}\"\n        >\n        </app-text-shell>\n        <app-text-shell\n          animation=\"gradient\"\n          [data]=\"prod?.price  | currency:'₦':'symbol':'1.2-2'\"\n          class=\"note_title14Sec\"\n          routerLink=\"/products/{{prod._id}}\"\n        >\n        </app-text-shell>\n        <ion-row class=\"rating_row\">\n          <ion-col size=\"7\">\n            <app-rating-input max=\"5\" readOnly=\"true\" class=\"button-inner\">\n            </app-rating-input>\n          </ion-col>\n          <ion-col size=\"5\" class=\"ratingText\"\n            >({{prod?.rating}} rating(s))\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"1\" class=\"\" *ngIf=\"prod\">\n        <a (click)=\"addToWishlist(prod)\">\n          <ion-icon\n            *ngIf=\"!checkIfProdInWishList(prod)\"\n            size=\"small\"\n            name=\"heart-outline\"\n            color=\"primary\"\n          ></ion-icon>\n          <ion-icon\n            *ngIf=\"checkIfProdInWishList(prod)\"\n            size=\"small\"\n            name=\"heart\"\n            color=\"primary\"\n          >\n          </ion-icon>\n        </a>\n      </ion-col>\n    </ion-row>\n    <ion-infinite-scroll\n      (ionInfinite)=\"loadMore($event)\"\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more products...\"\n    >\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/sub-category/sub-category.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/sub-category/sub-category.module.ts ***!
  \*****************************************************/
/*! exports provided: SubCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCategoryPageModule", function() { return SubCategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _shell_shell_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shell/shell.module */ "./src/app/shell/shell.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sharedComponents/shared-components.module */ "./src/app/sharedComponents/shared-components.module.ts");
/* harmony import */ var _sub_category_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sub-category.page */ "./src/app/sub-category/sub-category.page.ts");










let SubCategoryPageModule = class SubCategoryPageModule {
};
SubCategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _sub_category_page__WEBPACK_IMPORTED_MODULE_9__["SubCategoryPage"]
                }
            ]),
            _shell_shell_module__WEBPACK_IMPORTED_MODULE_6__["ShellModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_8__["SharedComponentsModule"]
        ],
        declarations: [_sub_category_page__WEBPACK_IMPORTED_MODULE_9__["SubCategoryPage"]]
    })
], SubCategoryPageModule);



/***/ }),

/***/ "./src/app/sub-category/sub-category.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/sub-category/sub-category.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background:#fff;\n}\n\n.catMenu {\n  font-size: 10px;\n  padding: 15px 0;\n  text-align: center;\n}\n\n.catMenuActive {\n  font-size: 10px;\n  padding: 15px 0;\n  text-align: center;\n  background: #EEE;\n  border-left-style: solid;\n  border-left-color: var(--ion-color-primary);\n}\n\n.imgHolder {\n  border-radius: 2px;\n}\n\n.subSubCatTitle {\n  font-size: 8px;\n}\n\n.subCatHeader {\n  font-size: 10px;\n}\n\n.subCatViewAll {\n  font-size: 8px;\n}\n\n.gridSubCat {\n  padding: 0px;\n}\n\n.gridSubCatHeader {\n  background: var(--ion-color-primary);\n  color: #fff;\n}\n\n.borderRight {\n  border-right: solid 1px #c8c6c6;\n}\n\n.borderBottom {\n  border-bottom: solid 1px #c8c6c6;\n}\n\n.ratingText {\n  font-size: 8px;\n  padding: 0px;\n  text-align: left;\n}\n\n.rating_row {\n  margin-top: 10px;\n}\n\n.rating_row ion-col {\n  padding: 2px;\n}\n\n.rating_row .button-inner {\n  display: -webkit-box;\n  display: flex;\n  position: relative;\n  flex-shrink: 0;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n  height: 30%;\n  z-index: 1;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL0lvbmljL2FmcmltYXJ0b25lL3NyYy9hcHAvc3ViLWNhdGVnb3J5L3N1Yi1jYXRlZ29yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3N1Yi1jYXRlZ29yeS9zdWItY2F0ZWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7RUFFQSxlQUFBO0VBQ0Qsa0JBQUE7QUNDRDs7QURDQTtFQUNFLGVBQUE7RUFFQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkNBQUE7QUNDRjs7QURDQTtFQUNDLGtCQUFBO0FDRUQ7O0FEQ0E7RUFDSSxjQUFBO0FDRUo7O0FEQUE7RUFDQyxlQUFBO0FDR0Q7O0FEREE7RUFDQyxjQUFBO0FDSUQ7O0FERkE7RUFDQSxZQUFBO0FDS0E7O0FESEE7RUFDQyxvQ0FBQTtFQUNBLFdBQUE7QUNNRDs7QURIQTtFQUNJLCtCQUFBO0FDTUo7O0FESkE7RUFDSSxnQ0FBQTtBQ09KOztBRExBO0VBQ0UsY0FBQTtFQUVBLFlBQUE7RUFDQSxnQkFBQTtBQ09GOztBREZBO0VBQ0ksZ0JBQUE7QUNLSjs7QURKSTtFQUNJLFlBQUE7QUNNUjs7QURKSTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLHFCQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9zdWItY2F0ZWdvcnkvc3ViLWNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAtLWJhY2tncm91bmQ6I2ZmZjtcbn1cbi5jYXRNZW51IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuLy8gICBtaW4taGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhdE1lbnVBY3RpdmUge1xuICBmb250LXNpemU6IDEwcHg7XG4vLyAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjRUVFO1xuICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uaW1nSG9sZGVye1xuIGJvcmRlci1yYWRpdXM6IDJweDtcbi8vICBiYWNrZ3JvdW5kOiAjRUVFO1xufVxuLnN1YlN1YkNhdFRpdGxle1xuICAgIGZvbnQtc2l6ZTogOHB4O1xufVxuLnN1YkNhdEhlYWRlcntcbiBmb250LXNpemU6IDEwcHg7XG59XG4uc3ViQ2F0Vmlld0FsbHtcbiBmb250LXNpemU6IDhweDtcbn1cbi5ncmlkU3ViQ2F0e1xucGFkZGluZzogMHB4O1xufVxuLmdyaWRTdWJDYXRIZWFkZXJ7XG4gYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7ICBcbiBjb2xvcjojZmZmO1xufVxuXG4uYm9yZGVyUmlnaHR7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2M4YzZjNjtcbn1cbi5ib3JkZXJCb3R0b217XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjOGM2YzY7XG59XG4ucmF0aW5nVGV4dCB7XG4gIGZvbnQtc2l6ZTogOHB4O1xuLy8gICBtaW4taGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwcHggO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLy8gIGFwcC1yYXRpbmctaW5wdXQge1xuLy8gIC0tcmF0aW5nLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbi8vIH1cbi5yYXRpbmdfcm93e1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgaW9uLWNvbHtcbiAgICAgICAgcGFkZGluZzogMnB4O1xuICAgIH1cbiAgICAuYnV0dG9uLWlubmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMCU7XG4gICAgei1pbmRleDogMTtcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgfVxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiNmZmY7XG59XG5cbi5jYXRNZW51IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhdE1lbnVBY3RpdmUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjRUVFO1xuICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5pbWdIb2xkZXIge1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5zdWJTdWJDYXRUaXRsZSB7XG4gIGZvbnQtc2l6ZTogOHB4O1xufVxuXG4uc3ViQ2F0SGVhZGVyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uc3ViQ2F0Vmlld0FsbCB7XG4gIGZvbnQtc2l6ZTogOHB4O1xufVxuXG4uZ3JpZFN1YkNhdCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmdyaWRTdWJDYXRIZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYm9yZGVyUmlnaHQge1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjYzhjNmM2O1xufVxuXG4uYm9yZGVyQm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjOGM2YzY7XG59XG5cbi5yYXRpbmdUZXh0IHtcbiAgZm9udC1zaXplOiA4cHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnJhdGluZ19yb3cge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnJhdGluZ19yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDJweDtcbn1cbi5yYXRpbmdfcm93IC5idXR0b24taW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAlO1xuICB6LWluZGV4OiAxO1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG59Il19 */");

/***/ }),

/***/ "./src/app/sub-category/sub-category.page.ts":
/*!***************************************************!*\
  !*** ./src/app/sub-category/sub-category.page.ts ***!
  \***************************************************/
/*! exports provided: SubCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCategoryPage", function() { return SubCategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/http-services/product.service */ "./src/app/core/http-services/product.service.ts");
/* harmony import */ var src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/authentication/authentication.service */ "./src/app/core/authentication/authentication.service.ts");
/* harmony import */ var src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/http-services/order.service */ "./src/app/core/http-services/order.service.ts");
/* harmony import */ var src_app_filter_modal_filter_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/filter-modal/filter-modal.page */ "./src/app/filter-modal/filter-modal.page.ts");









let SubCategoryPage = class SubCategoryPage {
    constructor(toastController, router, route, orderService, productService, authService, modalCtrl, nativeStorage, actionSheetController) {
        this.toastController = toastController;
        this.router = router;
        this.route = route;
        this.orderService = orderService;
        this.productService = productService;
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.nativeStorage = nativeStorage;
        this.actionSheetController = actionSheetController;
        ///Inputs
        this.title = 'My Wishlist';
        this.longSearch = false;
        this.showBackButton = true;
        this.loading = false;
        this.showSearch = true;
        ////////////////////
        this.isGrid = true;
        this.Products = new Array();
        this.page = 1;
        this.pageSize = 12;
        this.catId = '';
        this.wishList = new Array();
        this.sortStatus = 'asc';
        this.nativeStorage.getItem('currentUser').then((x) => {
            this.currentUser = x;
            this.nativeStorage.getItem('WishList').then((x) => {
                this.wishList = x;
            });
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
        this.getCategoryProducts();
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            // console.log("this.params: " + JSON.stringify(params))
            this.catId = params.id;
            this.title = localStorage.SetTitle;
            this.getCategoryProducts();
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
    changeListType() {
        this.isGrid = !this.isGrid;
    }
    getCategoryProducts(infiniteScroll) {
        this.loading = true;
        this.productService
            .getCategoryProductsInfinite(this.catId, this.pageSize, this.page, this.sortStatus)
            .subscribe((data) => {
            if (!data.error && data.data.length > 0) {
                data.data.forEach((prod) => {
                    this.Products.push(prod);
                    this.loading = false;
                });
            }
            else {
                // console.log("No more data this.Products Count: " + JSON.stringify(this.Products.length))
            }
            if (infiniteScroll) {
                infiniteScroll.target.complete();
            }
        }, (err) => {
            if (infiniteScroll) {
                infiniteScroll.target.complete();
            }
        });
    }
    loadMore(infiniteScroll) {
        this.page++;
        this.getCategoryProducts(infiniteScroll);
        if (this.page === this.pageSize) {
            infiniteScroll.disabled = true;
        }
    }
    addToWishlist(prod) {
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
                        this.nativeStorage.setItem('WishList', this.wishList);
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
    removeFromWishlist(prod) {
        this.orderService
            .removeFromWishlist(this.currentUser.token, prod._id)
            .subscribe((data) => {
            // console.log('Add to Wishlist Result: ' + JSON.stringify(data));
            this.wishList.forEach((w) => {
                if (w.productId === prod._id) {
                    this.wishList.splice(this.wishList.indexOf(w.productId), 1);
                    this.nativeStorage.setItem('WishList', this.wishList);
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
SubCategoryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"] },
    { type: src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] }
];
SubCategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sub-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sub-category.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sub-category/sub-category.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sub-category.page.scss */ "./src/app/sub-category/sub-category.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"],
        src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
        src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]])
], SubCategoryPage);



/***/ })

}]);
//# sourceMappingURL=sub-category-sub-category-module-es2015.js.map