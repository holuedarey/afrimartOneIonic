(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductsProductsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header [title]=\"title\" [longSearch]=\"longSearch\" [showBackButton]=\"showBackButton\" [isLoading]=\"loading\"\r\n  [showSearch]=\"showSearch\">\r\n</app-header>\r\n<ion-content>\r\n  <div *ngIf=\"prod_data\">\r\n    <ion-grid class=\"borderBottom card\">\r\n      <ion-row>\r\n        <ion-col size=\"7\">\r\n          SOLD BY:<br />\r\n          <span class=\"note_title10Sec\">{{prod_data.store.name | uppercase}}</span>\r\n        </ion-col>\r\n        <ion-col size=\"5\" class=\"viewSeller\" (click)=\"viewCompanyProfile(prod_data.store.slug)\">\r\n          <ion-text color=\"primary\" class=\"font-11\">View Company Profile</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-grid style=\"max-height: 250px; padding: 0px\" class=\"card\">\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-slides direction=\"horizontal\" [options]=\"slideOpts\" pager=\"true\">\r\n            <ion-slide style=\"height: 200px; width: 200px !important\">\r\n              <!-- to be use later for iage gallery -->\r\n              <!-- *ngFor=\"let gal of prod_data.gallery\" -->\r\n              <ion-row>\r\n                <ion-col size=\"12\">\r\n                  <img src=\"../../assets/dummy-images/productView.png\" alt=\"AfrimartOne\" class=\"img_slider\" />\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-slide>\r\n            <ion-slide style=\"height: 200px; width: 200px !important\">\r\n              <!-- to be use later for iage gallery -->\r\n              <!-- *ngFor=\"let gal of prod_data.gallery\" -->\r\n              <ion-row>\r\n                <ion-col size=\"12\">\r\n                  <img src=\"../../assets/dummy-images/productView.png\" alt=\"AfrimartOne\" class=\"img_slider\" />\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-slide>\r\n          </ion-slides>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-grid class=\"grid\">\r\n      <ion-row style=\"padding-left: 10px; padding-right: 10px\">\r\n        <ion-col size=\"12\">\r\n          <ion-row>\r\n            <ion-col size=\"8\">\r\n              <ion-row>\r\n                <app-text-shell animation=\"gradient\" [data]=\"prod_data?.minPrice | currency:'$':'symbol':'1.0'\"\r\n                  lines=\"3\" class=\"text-left  bold-text note_title14Black\" style=\"padding: 5px 0; float: left;\">\r\n                </app-text-shell>\r\n                <app-text-shell animation=\"gradient\" [data]=\"' - '\" lines=\"3\"\r\n                  class=\"text-left  bold-text note_title14Black\" style=\"padding: 5px 0; float: left; margin-left: 5px;\">\r\n                </app-text-shell>\r\n                <app-text-shell animation=\"gradient\" [data]=\"prod_data?.maxPrice  | currency:'$':'symbol':'1.0'\"\r\n                  lines=\"3\" class=\"text-left  bold-text note_title14Black\"\r\n                  style=\"padding: 5px 0; float: left;  margin-left: 5px;\">\r\n                </app-text-shell>\r\n                <app-text-shell animation=\"gradient\" [data]=\"'/ Piece(s)'\" lines=\"3\"\r\n                  class=\"text-left  bold-text note_title14Black\" style=\"padding: 5px 0; float: left; margin-left: 5px;\">\r\n                </app-text-shell>\r\n              </ion-row>\r\n              <ion-row>\r\n                <app-text-shell animation=\"gradient\" [data]=\"'('\" lines=\"3\" class=\"text-left  note_title14Black\"\r\n                  style=\"padding: 5px 0; float: left; margin-left: 5px;\">\r\n                </app-text-shell>\r\n                <app-text-shell animation=\"gradient\" [data]=\"prod_data?.minPrice | currency:'$':'symbol':'1.0'\"\r\n                  lines=\"3\" class=\"text-left  note_title14Black\" style=\"padding: 5px 0; float: left;\">\r\n                </app-text-shell>\r\n                <app-text-shell animation=\"gradient\" [data]=\"' - '\" lines=\"3\" class=\"text-left  note_title14Black\"\r\n                  style=\"padding: 5px 0; float: left; margin-left: 5px;\">\r\n                </app-text-shell>\r\n                <app-text-shell animation=\"gradient\" [data]=\"prod_data?.maxPrice  | currency:'$':'symbol':'1.0'\"\r\n                  lines=\"3\" class=\"text-left  note_title14Black\"\r\n                  style=\"padding: 5px 0; float: left;  margin-left: 5px;\">\r\n                </app-text-shell>\r\n                <app-text-shell animation=\"gradient\" [data]=\"')'\" lines=\"3\" class=\"text-left  note_title14Black\"\r\n                  style=\"padding: 5px 0; float: left; margin-left: 5px;\">\r\n                </app-text-shell>\r\n              </ion-row>\r\n\r\n              <br /><br />\r\n              <app-text-shell animation=\"gradient\" [data]=\"'1 Piece(s) (Min. Order)'\" lines=\"3\"\r\n                class=\"note_title14Black\"></app-text-shell>\r\n\r\n              <br />\r\n              <!-- <app-text-shell\r\n            animation=\"gradient\"\r\n            [data]=\"prod_data?.price | currency:'₦':'symbol':'1.2-2'\"\r\n            lines=\"1\"\r\n            class=\"note_title_bold16Black\"\r\n          >\r\n          </app-text-shell> -->\r\n            </ion-col>\r\n            <ion-col size=\"4\" style=\"padding-top: 8px\">\r\n              <ion-row>\r\n                <ion-col class=\"t_right\" style=\"padding-right: 10px\">\r\n                  <a (click)=\"addToWishlist(prod_data)\">\r\n                    <ion-icon *ngIf=\"!checkIfProdInWishList(prod_data)\" size=\"large\" name=\"heart-outline\"\r\n                      color=\"primary\">\r\n                    </ion-icon>\r\n                    <ion-icon *ngIf=\"checkIfProdInWishList(prod_data)\" size=\"large\" name=\"heart\" color=\"primary\">\r\n                    </ion-icon>\r\n                  </a>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <a (click)=\"addToWishlist(prod_data)\">\r\n                    <ion-icon size=\"large\" name=\"share-social-outline\" color=\"primary\"></ion-icon>\r\n                  </a>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col size=\"5\">\r\n              <ion-text class=\"note_title14Black\">Seller Support</ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"7\">\r\n              <ion-text class=\"note_title14Black\">Trade Assurance</ion-text>\r\n              <p style=\"margin-top: 2px\">\r\n                To protect your orders from payment to delivery\r\n              </p>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"no-padding\">\r\n            <ion-col size=\"12\" class=\"no-padding\">\r\n              <ion-button expand=\"block\" color=\"primary\" class=\"capitilize\" routerLink=\"/messaging\">\r\n                Contact Supplier\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"no-padding\" style=\"margin-top: -10px\">\r\n              <ion-button expand=\"block\" color=\"primary\" fill=\"outline\" class=\"capitilize\">\r\n                Get Quote\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <!-- <ion-row class=\"rating_row\">\r\n        <ion-col size=\"4\" style=\"padding-left: 10px;\">\r\n          <app-rating-input max=\"5\" readOnly=\"true\" class=\"button-inner\">\r\n          </app-rating-input>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ratingText\" *ngIf=\"prod_data.rating>0\" style=\"padding-top: 3px;\">\r\n          ({{prod_data.rating}} rating(s))\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ratingText\" *ngIf=\"prod_data.rating==0\" style=\"padding-top: 3px;\">\r\n          (No ratings avaialable)\r\n        </ion-col>\r\n        \r\n      </ion-row> -->\r\n    </ion-grid>\r\n    <ion-grid class=\"grid\">\r\n      <ion-row class=\"headerBg\">\r\n        <ion-col size=\"12\">\r\n          <ion-text class=\"note_title12Sec uppercase\">Product details</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n      <div style=\"padding: 12px\">\r\n        <ion-row class=\"zero-height\">\r\n          <ion-col size=\"12\">Overview</ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"zero-height\">\r\n          <ion-col size=\"5\">Brand Name:</ion-col>\r\n          <ion-col size=\"7\">{{ prod_data?.location ? prod_data?.brandName  : 'Nil'}}</ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"zero-height\">\r\n          <ion-col size=\"5\">Location</ion-col>\r\n          <ion-col size=\"7\">{{ prod_data?.brandName ? prod_data?.location  : 'Nil'}}</ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"zero-height\">\r\n          <ion-col size=\"5\">Availability</ion-col>\r\n          <ion-col size=\"7\">{{ prod_data?.available ? 'Available' : 'Not Available'}} </ion-col>\r\n        </ion-row>\r\n        <br />\r\n\r\n        <ion-row class=\"zero-height\">\r\n          <ion-col size=\"6\">Logistics</ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"zero-height\">\r\n          <ion-col size=\"5\"> Pickup Country: </ion-col>\r\n          <ion-col size=\"7\">NG</ion-col>\r\n        </ion-row>\r\n        <br />\r\n        <ion-row class=\"zero-height\">\r\n          <ion-col size=\"7\">Description</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\">{{ prod_data?.description}} </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </ion-grid>\r\n    <br />\r\n    <ion-grid class=\"grid\">\r\n      <ion-row class=\"headerBg\">\r\n        <ion-col size=\"12\">\r\n          <ion-text class=\"note_title12Sec\">REVIEW</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row style=\"padding-left: 10px\">\r\n        <ion-col size=\"12\"  *ngIf=\"!ratings\">\r\n          <span class=\"ratingBorder\">5.0/5</span><span class=\"note_title12Black\"> 7 ratings</span>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-col *ngIf=\"!ratings.length\">\r\n        No Review Available\r\n      </ion-col>\r\n      <ion-row class=\"rating_row\" style=\"border-bottom: 1px solid #e5e5e5\" *ngIf=\"!ratings\">\r\n        <ion-col *ngFor=\"let rec of ratings\">\r\n          <ion-col size=\"4\" style=\"padding-left: 10px\">\r\n            <app-rating-input max=\"5\" readOnly=\"true\" class=\"button-inner\">\r\n            </app-rating-input>\r\n          </ion-col>\r\n          <ion-col size=\"8\" class=\"t_right note_title12Black\" style=\"padding-right: 10px\">\r\n            2020-11-01\r\n          </ion-col>\r\n          <div style=\"margin-top: -20px; padding-bottom: 10px; padding-left: 12px\" class=\"note_title12Black\">\r\n            I love it\r\n            <br />\r\n            By Toyin\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n  <div *ngIf=\"recommendedProducts\">\r\n    <ion-grid class=\"grids\">\r\n      <ion-row class=\"headerBgs\">\r\n        <ion-col size=\"12\">\r\n          <ion-text class=\"note_title12Sec\">RECOMMENDED FOR YOU</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\" style=\"margin-top: 20px\">\r\n          <ion-slides direction=\"horizontal\" [options]=\"slideOptsTwo\">\r\n            <ion-slide style=\"height: 200px; width: 200px !important\" *ngFor=\"let rec of recommendedProducts\">\r\n              <ion-row>\r\n                <ion-col size=\"12\" (click)=\"viewProduct(rec)\" class=\"card\" style=\"\r\n                    margin-bottom: 33px;\r\n                    margin-top: 5px;\r\n                    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\r\n                  \">\r\n                  <div>\r\n                    <img src=\"../../assets/dummy-images/productView.png\" alt=\"AfrimartOne\" class=\"img_slider\" />\r\n                  </div>\r\n                  <br />\r\n                  <app-text-shell animation=\"gradient\" [data]=\"rec?.name\" lines=\"2\"\r\n                    class=\"note_title14Black text-truncate\" (click)=\"viewProduct(rec)\">\r\n                  </app-text-shell>\r\n                  <app-text-shell animation=\"gradient\" [data]=\"rec?.price  | currency:'₦':'symbol':'1.2-2'\" lines=\"1\"\r\n                    class=\"note_title14Pri\" (click)=\"viewProduct(rec)\">\r\n                  </app-text-shell>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-slide>\r\n          </ion-slides>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        &nbsp;\r\n        <br />\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/products/products.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/products/products.module.ts ***!
    \*********************************************/

  /*! exports provided: ProductsPageModule */

  /***/
  function srcAppProductsProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function () {
      return ProductsPageModule;
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


    var _products_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./products.page */
    "./src/app/products/products.page.ts");

    let ProductsPageModule = class ProductsPageModule {};
    ProductsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_9__["ProductsPage"]
      }]), _shell_shell_module__WEBPACK_IMPORTED_MODULE_6__["ShellModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_8__["SharedComponentsModule"]],
      declarations: [_products_page__WEBPACK_IMPORTED_MODULE_9__["ProductsPage"]]
    })], ProductsPageModule);
    /***/
  },

  /***/
  "./src/app/products/products.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/products/products.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductsProductsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer ion-toolbar {\n  --background: #fff;\n}\n\n.zero-height {\n  line-height: 8px !important;\n}\n\n.viewSeller {\n  font-size: 11px;\n  text-align: right;\n  margin-top: 10px;\n}\n\n.slideShow {\n  text-align: center;\n}\n\n.imgHolder {\n  margin: auto;\n  width: 200px;\n  height: 200px;\n  max-width: 200px;\n  max-height: 200px;\n}\n\n.imgHolderRec {\n  width: 100px;\n  height: 100px;\n  max-width: 100px;\n  max-height: 100px;\n}\n\n.img_slider {\n  height: 12.5rem !important;\n  width: 12.5rem !important;\n}\n\n.ratingBorder {\n  border: solid 1px #c8c6c6;\n  padding: 0 2px;\n}\n\n.subSubCatTitle {\n  font-size: 8px;\n}\n\n.subCatHeader {\n  font-size: 10px;\n}\n\n.subCatViewAll {\n  font-size: 8px;\n}\n\n.gridSubCat {\n  padding: 0px;\n}\n\n.gridSubCatHeader {\n  background: var(--ion-color-primary);\n  color: #fff;\n}\n\n.borderRight {\n  border-right: solid 1px #c8c6c6;\n}\n\n.borderBottom {\n  border-bottom: solid 1px #c8c6c6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvQzpcXFByb2plY3RcXEFuZ3VsYXJcXGVhc3ltYWxsX25vbm9kZSAoMSlcXGVhc3ltYWxsX25vbm9kZS9zcmNcXGFwcFxccHJvZHVjdHNcXHByb2R1Y3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0osa0JBQUE7QUNBQTs7QURNQTtFQUNFLDJCQUFBO0FDSEY7O0FES0E7RUFDRSxlQUFBO0VBRUEsaUJBQUE7RUFDQSxnQkFBQTtBQ0hGOztBREtBO0VBQ0Esa0JBQUE7QUNGQTs7QURJQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNEQTs7QURHQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0RBOztBREdBO0VBRUUsMEJBQUE7RUFDQSx5QkFBQTtBQ0RGOztBRElBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDREE7O0FER0E7RUFDSSxjQUFBO0FDQUo7O0FERUE7RUFDQyxlQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxjQUFBO0FDRUQ7O0FEQUE7RUFDQSxZQUFBO0FDR0E7O0FEREE7RUFDQyxvQ0FBQTtFQUNBLFdBQUE7QUNJRDs7QUREQTtFQUNJLCtCQUFBO0FDSUo7O0FERkE7RUFDSSxnQ0FBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcbiAgICBpb24tdG9vbGJhcntcbi0tYmFja2dyb3VuZDogI2ZmZjtcbi8vIC0tY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xufVxuXG59XG5cbi56ZXJvLWhlaWdodHtcbiAgbGluZS1oZWlnaHQ6IDhweCAhaW1wb3J0YW50O1xufVxuLnZpZXdTZWxsZXIge1xuICBmb250LXNpemU6IDExcHg7XG4vLyAgIHBhZGRpbmc6IDVweCAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5zbGlkZVNob3d7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW1nSG9sZGVye1xubWFyZ2luOiBhdXRvO1xud2lkdGg6IDIwMHB4O1xuaGVpZ2h0OiAyMDBweDtcbm1heC13aWR0aDogMjAwcHg7XG5tYXgtaGVpZ2h0OiAyMDBweDtcbn1cbi5pbWdIb2xkZXJSZWN7XG4vLyBtYXJnaW46IGF1dG87XG53aWR0aDogMTAwcHg7XG5oZWlnaHQ6IDEwMHB4O1xubWF4LXdpZHRoOiAxMDBweDtcbm1heC1oZWlnaHQ6IDEwMHB4O1xufVxuLmltZ19zbGlkZXJ7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEyLjVyZW0gIWltcG9ydGFudDtcbiAgd2lkdGg6IDEyLjVyZW0gIWltcG9ydGFudDtcbiAgLy8gbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5yYXRpbmdCb3JkZXJ7XG5ib3JkZXI6IHNvbGlkIDFweCAjYzhjNmM2O1xucGFkZGluZzogMCAycHg7XG59XG4uc3ViU3ViQ2F0VGl0bGV7XG4gICAgZm9udC1zaXplOiA4cHg7XG59XG4uc3ViQ2F0SGVhZGVye1xuIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5zdWJDYXRWaWV3QWxse1xuIGZvbnQtc2l6ZTogOHB4O1xufVxuLmdyaWRTdWJDYXR7XG5wYWRkaW5nOiAwcHg7XG59XG4uZ3JpZFN1YkNhdEhlYWRlcntcbiBiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgIFxuIGNvbG9yOiNmZmY7XG59XG5cbi5ib3JkZXJSaWdodHtcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjYzhjNmM2O1xufVxuLmJvcmRlckJvdHRvbXtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2M4YzZjNjtcbn1cbiIsIi5mb290ZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi56ZXJvLWhlaWdodCB7XG4gIGxpbmUtaGVpZ2h0OiA4cHggIWltcG9ydGFudDtcbn1cblxuLnZpZXdTZWxsZXIge1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc2xpZGVTaG93IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1nSG9sZGVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xufVxuXG4uaW1nSG9sZGVyUmVjIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbn1cblxuLmltZ19zbGlkZXIge1xuICBoZWlnaHQ6IDEyLjVyZW0gIWltcG9ydGFudDtcbiAgd2lkdGg6IDEyLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnJhdGluZ0JvcmRlciB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjOGM2YzY7XG4gIHBhZGRpbmc6IDAgMnB4O1xufVxuXG4uc3ViU3ViQ2F0VGl0bGUge1xuICBmb250LXNpemU6IDhweDtcbn1cblxuLnN1YkNhdEhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLnN1YkNhdFZpZXdBbGwge1xuICBmb250LXNpemU6IDhweDtcbn1cblxuLmdyaWRTdWJDYXQge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5ncmlkU3ViQ2F0SGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJvcmRlclJpZ2h0IHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2M4YzZjNjtcbn1cblxuLmJvcmRlckJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjYzhjNmM2O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/products/products.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/products/products.page.ts ***!
    \*******************************************/

  /*! exports provided: ProductsPage */

  /***/
  function srcAppProductsProductsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsPage", function () {
      return ProductsPage;
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


    var src_app_core_http_services_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/core/http-services/store.service */
    "./src/app/core/http-services/store.service.ts");
    /* harmony import */


    var src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/core/http-services/order.service */
    "./src/app/core/http-services/order.service.ts");
    /* harmony import */


    var src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/core/authentication/authentication.service */
    "./src/app/core/authentication/authentication.service.ts"); // import { SocialSharing } from '@ionic-native/social-sharing/ngx';


    let ProductsPage = class ProductsPage {
      constructor(toastController, productService, router, route, nativeStorage, storeService, orderService, authService) {
        this.toastController = toastController;
        this.productService = productService;
        this.router = router;
        this.route = route;
        this.nativeStorage = nativeStorage;
        this.storeService = storeService;
        this.orderService = orderService;
        this.authService = authService; ///Inputs

        this.title = "Details";
        this.longSearch = false;
        this.showBackButton = true;
        this.loading = false;
        this.showSearch = true;
        this.deliveryFee = 1500;
        this.recentlyViewedProducts = [];
        this.starsCount = 5;
        this.inCart = false;
        this.wishList = new Array();
        this.ratings = [];
        this.slideOptsTwo = {
          initialSlide: 1,
          slidesPerView: 1.8,
          grabCursor: true,
          autoplay: true,
          speed: 600,
          spaceBetween: 2,
          centeredSlides: true,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          }
        };
        this.slideOpts = {
          slidesPerView: 3,
          grabCursor: true,
          autoplay: true,
          speed: 600,
          cubeEffect: {
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
          },
          on: {
            beforeInit: function beforeInit() {
              const swiper = this;
              swiper.classNames.push("".concat(swiper.params.containerModifierClass, "cube"));
              swiper.classNames.push("".concat(swiper.params.containerModifierClass, "3d"));
              const overwriteParams = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: false,
                virtualTranslate: true
              };
              this.params = Object.assign(this.params, overwriteParams);
              this.originalParams = Object.assign(this.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate() {
              const swiper = this;
              const {
                $el,
                $wrapperEl,
                slides,
                width: swiperWidth,
                height: swiperHeight,
                rtlTranslate: rtl,
                size: swiperSize
              } = swiper;
              const params = swiper.params.cubeEffect;
              const isHorizontal = swiper.isHorizontal();
              const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
              let wrapperRotate = 0;
              let $cubeShadowEl;

              if (params.shadow) {
                if (isHorizontal) {
                  $cubeShadowEl = $wrapperEl.find(".swiper-cube-shadow");

                  if ($cubeShadowEl.length === 0) {
                    $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
                    $wrapperEl.append($cubeShadowEl);
                  }

                  $cubeShadowEl.css({
                    height: "".concat(swiperWidth, "px")
                  });
                } else {
                  $cubeShadowEl = $el.find(".swiper-cube-shadow");

                  if ($cubeShadowEl.length === 0) {
                    $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
                    $el.append($cubeShadowEl);
                  }
                }
              }

              for (let i = 0; i < slides.length; i += 1) {
                const $slideEl = slides.eq(i);
                let slideIndex = i;

                if (isVirtual) {
                  slideIndex = parseInt($slideEl.attr("data-swiper-slide-index"), 10);
                }

                let slideAngle = slideIndex * 90;
                let round = Math.floor(slideAngle / 360);

                if (rtl) {
                  slideAngle = -slideAngle;
                  round = Math.floor(-slideAngle / 360);
                }

                const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                let tx = 0;
                let ty = 0;
                let tz = 0;

                if (slideIndex % 4 === 0) {
                  tx = -round * 4 * swiperSize;
                  tz = 0;
                } else if ((slideIndex - 1) % 4 === 0) {
                  tx = 0;
                  tz = -round * 4 * swiperSize;
                } else if ((slideIndex - 2) % 4 === 0) {
                  tx = swiperSize + round * 4 * swiperSize;
                  tz = swiperSize;
                } else if ((slideIndex - 3) % 4 === 0) {
                  tx = -swiperSize;
                  tz = 3 * swiperSize + swiperSize * 4 * round;
                }

                if (rtl) {
                  tx = -tx;
                }

                if (!isHorizontal) {
                  ty = tx;
                  tx = 0;
                }

                const transform$$1 = "rotateX(".concat(isHorizontal ? 0 : -slideAngle, "deg) rotateY(").concat(isHorizontal ? slideAngle : 0, "deg) translate3d(").concat(tx, "px, ").concat(ty, "px, ").concat(tz, "px)");

                if (progress <= 1 && progress > -1) {
                  wrapperRotate = slideIndex * 90 + progress * 90;
                  if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
                }

                $slideEl.transform(transform$$1);

                if (params.slideShadows) {
                  // Set shadows
                  let shadowBefore = isHorizontal ? $slideEl.find(".swiper-slide-shadow-left") : $slideEl.find(".swiper-slide-shadow-top");
                  let shadowAfter = isHorizontal ? $slideEl.find(".swiper-slide-shadow-right") : $slideEl.find(".swiper-slide-shadow-bottom");

                  if (shadowBefore.length === 0) {
                    shadowBefore = swiper.$("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? "left" : "top", "\"></div>"));
                    $slideEl.append(shadowBefore);
                  }

                  if (shadowAfter.length === 0) {
                    shadowAfter = swiper.$("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? "right" : "bottom", "\"></div>"));
                    $slideEl.append(shadowAfter);
                  }

                  if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                  if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                }
              }

              $wrapperEl.css({
                "-webkit-transform-origin": "50% 50% -".concat(swiperSize / 2, "px"),
                "-moz-transform-origin": "50% 50% -".concat(swiperSize / 2, "px"),
                "-ms-transform-origin": "50% 50% -".concat(swiperSize / 2, "px"),
                "transform-origin": "50% 50% -".concat(swiperSize / 2, "px")
              });

              if (params.shadow) {
                if (isHorizontal) {
                  $cubeShadowEl.transform("translate3d(0px, ".concat(swiperWidth / 2 + params.shadowOffset, "px, ").concat(-swiperWidth / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(params.shadowScale, ")"));
                } else {
                  const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                  const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                  const scale1 = params.shadowScale;
                  const scale2 = params.shadowScale / multiplier;
                  const offset$$1 = params.shadowOffset;
                  $cubeShadowEl.transform("scale3d(".concat(scale1, ", 1, ").concat(scale2, ") translate3d(0px, ").concat(swiperHeight / 2 + offset$$1, "px, ").concat(-swiperHeight / 2 / scale2, "px) rotateX(-90deg)"));
                }
              }

              const zFactor = swiper.browser.isSafari || swiper.browser.isUiWebView ? -swiperSize / 2 : 0;
              $wrapperEl.transform("translate3d(0px,0,".concat(zFactor, "px) rotateX(").concat(swiper.isHorizontal() ? 0 : wrapperRotate, "deg) rotateY(").concat(swiper.isHorizontal() ? -wrapperRotate : 0, "deg)"));
            },
            setTransition: function setTransition(duration) {
              const swiper = this;
              const {
                $el,
                slides
              } = swiper;
              slides.transition(duration).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(duration);

              if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
                $el.find(".swiper-cube-shadow").transition(duration);
              }
            }
          }
        };
        this.route.params.subscribe(params => {
          if (params.id) {
            console.log("params.id: " + JSON.stringify(params.id));
            this.loading = true;
            this.productService.getProductDetail(params.id).subscribe(prod => {
              if (prod.data) {
                this.prod_data = prod.data;
                this.loading = false;
                this.ratings = prod.data.ratings;
                console.log('this.Product Detail: ' + JSON.stringify(prod.data.ratings)); // this.recentlyViewedProducts.indexOf(this.prod_data._id) == -1
                // this.recentlyViewedProducts =
                //   this.productService.getLocalRecentlyViewedProducts()
                //     ? this.productService.getLocalRecentlyViewedProducts()
                //     : [];
                // // console.log(
                // //   'recentlyViewedProducts: ' +
                // //     JSON.stringify(this.recentlyViewedProducts)
                // // );
                // if (this.recentlyViewedProducts.length > 0) {
                //   if (
                //     !this.recentlyViewedProducts.some((r) =>
                //       r._id.includes(this.prod_data._id)
                //     )
                //   ) {
                //     let arr_prod = this.recentlyViewedProducts;
                //     arr_prod.push(this.prod_data);
                //     this.productService.setLocalRecentlyViewedProducts(
                //       JSON.stringify(arr_prod)
                //     );
                //   } else {
                //   }
                // } else {
                //   let arr_prod = new Array();
                //   arr_prod.push(this.prod_data);
                //   this.productService.setLocalRecentlyViewedProducts(
                //     JSON.stringify(arr_prod)
                //   );
                // }
                // this.getSimilarProducts();
              }
            });
          } else {//Bounce the person
          }
        });
        this.nativeStorage.getItem("currentUser").then(x => {
          this.currentUser = x;
          this.nativeStorage.getItem("WishList").then(x => {
            this.wishList = x;
          });
        });
      }

      ngOnInit() {}

      viewCompanyProfile(prod_data) {
        // console.log('prod data :: ', prod_data);
        this.router.navigate(["/company-profile", {
          data: JSON.stringify(prod_data)
        }]);
      }

      viewProduct(prod) {
        this.prod_data = null;
        this.prod_data = prod;
        this.prod_data["productId"] = this.prod_data._id;
        this.ionContent.scrollToTop(300);
      }

      presentToast(header, msg, duration, color) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toast = yield this.toastController.create({
            header: header,
            position: "bottom",
            message: msg,
            duration: duration,
            // cssClass: 'custom-toast-class',
            color: color
          });
          toast.present();
        });
      }

      addToCart(prod) {
        this.orderService.addToCart(this.currentUser.token, prod).subscribe(data => {
          console.log("addToCart Success: " + JSON.stringify(data));
          this.productService.getNumberofItemsInCart(data.data);
          this.presentToast("GREAT!", "Product successfully added to your cart ", 2000, "success"); // this.toastr.success("Item successfuly added to cart");
        }, err => {
          console.log("addToCart Error: " + JSON.stringify(err));
          this.presentToast("OOPS!", "An error occurred, Please try again later ", 2000, "error");
        });
      }

      addToWishlist(prod) {
        if (this.currentUser) {
          this.loading = true;

          if (this.checkIfProdInWishList(prod)) {
            this.removeFromWishlist(prod);
          } else {
            this.orderService.addToWishlist(this.currentUser.token, {
              productId: prod._id,
              quantity: 1
            }).subscribe(data => {
              console.log("Add to Wishlist Result: " + JSON.stringify(data));

              if (!data.error) {
                this.presentToast("GREAT!", "Product successfully added to your wishlist ", 2000, "success");
                this.wishList = data.data;
                this.nativeStorage.setItem("WishList", this.wishList);
                this.loading = false;
              } else {
                this.loading = false;
                this.presentToast("OOPS!", "An error occurred, Please try again later ", 2000, "danger");
              }
            }, err => {
              console.error(err);
              this.loading = false;
              this.presentToast("OOPS!", "An error occurred, Please try again later ", 2000, "danger");
            });
          }
        } else {
          this.presentToast("ALMOST THERE!", "Please sign in to add the product to your wishlist ", 2000, "warning");
          this.router.navigate(["/sign-in"]);
        }
      }

      removeFromWishlist(prod) {
        this.orderService.removeFromWishlist(this.currentUser.token, prod._id).subscribe(data => {
          // console.log('Add to Wishlist Result: ' + JSON.stringify(data));
          this.wishList.forEach(w => {
            if (w.productId === prod._id) {
              this.wishList.splice(this.wishList.indexOf(w.productId), 1);
              this.nativeStorage.setItem("WishList", this.wishList);
            }
          }); // console.log('Wishlist delete data:' + this.wishList.length);
          // this.checkIfProdInWishList(prod);

          this.loading = false;
          this.presentToast("GREAT!", "Product successfully removed to your wishlist ", 2000, "success");
        }, err => {
          console.error(err); // this.toastr.error(err.errors.join(","), "Error!");
        });
      }

      checkIfProdInWishList(prod) {
        return this.wishList.some(x => x.productId === prod._id);
      } // share(prod) {
      //   let name = prod.name.replace(' ', '-');
      //   this.socialSharing
      //     .share(
      //       '<a href="https://afrimartone.ng/view-product/"' +
      //         name +
      //         '>https://afrimartone.ng/view-product/' +
      //         name,
      //       'AfrimartOne Product Referral',
      //       '',
      //       ''
      //     )
      //     .then(() => {})
      //     .catch(() => {
      //       // Error!
      //       this.presentToast(
      //         'ERROR!',
      //         'There was a problem while sharing this product',
      //         2000,
      //         'danger'
      //       );
      //     });
      // }


      getStoreDetail(storeId) {
        this.store = undefined;
        this.storeService.getStoreDetail(storeId).subscribe(res => {
          if (!res.error) {
            this.store = res.data;
          }
        });
      }

      getSimilarProducts() {
        // const id = this.route.snapshot.paramMap.get("id");
        this.productService.getSimillarProducts(this.prod_data.id).subscribe(data => {
          if (data.data.length > 0) {
            this.recommendedProducts = data.data; // console.log("recommendedProducts: " + JSON.stringify(this.recommendedProducts));
          }
        });
      }

    };

    ProductsPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
    }, {
      type: src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"]
    }, {
      type: src_app_core_http_services_store_service__WEBPACK_IMPORTED_MODULE_6__["StoreService"]
    }, {
      type: src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"]
    }, {
      type: src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])], ProductsPage.prototype, "ionContent", void 0);
    ProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-products",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./products.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./products.page.scss */
      "./src/app/products/products.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"], src_app_core_http_services_store_service__WEBPACK_IMPORTED_MODULE_6__["StoreService"], src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"], src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]])], ProductsPage);
    /***/
  }
}]);
//# sourceMappingURL=products-products-module-es5.js.map