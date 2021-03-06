(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"title\" [longSearch]=\"longSearch\" [showBackButton]=\"showBackButton\" [isLoading]=\"loading\"\n  [showSearch]=\"showSearch\">\n</app-header>\n<ion-content>\n  <div *ngIf=\"prod_data\">\n    <ion-grid class=\"borderBottom card\">\n      <ion-row>\n        <ion-col size=\"7\">\n          SOLD BY:<br />\n          <span class=\"note_title10Sec\">{{prod_data.storeData.name | uppercase}}</span>\n        </ion-col>\n        <ion-col size=\"5\" class=\"viewSeller\" routerLink=\"/company-profile\">\n          <ion-text color=\"primary\" class=\"font-9\">View Company Profile</ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid style=\"max-height: 250px; padding: 0px;\" class=\"card\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-slides direction=\"horizontal\" [options]=\"slideOpts\" pager=\"true\">\n            <ion-slide style=\"height: 200px; width: 200px !important;\" *ngFor=\"let gal of prod_data.gallery\">\n              <ion-row>\n                <ion-col size=\"12\">\n                  <img src=\"../../assets/dummy-images/productView.png\" alt=\"EasyMall\" class=\"img_slider\" />\n                </ion-col>\n              </ion-row>\n            </ion-slide>\n          </ion-slides>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid class=\"grid\">\n      <ion-row style=\"padding-left: 10px; padding-right:10px;\">\n        <ion-col size=\"12\">\n          <ion-row>\n            <ion-col size=\"8\">\n              <app-text-shell animation=\"gradient\" [data]=\"'$65.62-$393.70 / Piece(s) '\" lines=\"3\"\n                class=\"note_title14Black font-bold\">\n              </app-text-shell>\n              <app-text-shell animation=\"gradient\" [data]=\"'(???25,000-???150,000)'\" lines=\"3\" class=\"note_title14Black\">\n              </app-text-shell>\n              <br><br>\n              <app-text-shell animation=\"gradient\" [data]=\"'1 Piece(s) (Min. Order)'\" lines=\"3\"\n                class=\"note_title14Black\"></app-text-shell>\n\n              <br />\n              <!-- <app-text-shell\n            animation=\"gradient\"\n            [data]=\"prod_data?.price | currency:'???':'symbol':'1.2-2'\"\n            lines=\"1\"\n            class=\"note_title_bold16Black\"\n          >\n          </app-text-shell> -->\n            </ion-col>\n            <ion-col size=\"4\" style=\"padding-top: 8px;\">\n              <ion-row>\n                <ion-col class=\"t_right\" style=\"padding-right:10px;\">\n                  <a (click)=\"addToWishlist(prod_data)\">\n                    <ion-icon *ngIf=\"!checkIfProdInWishList(prod_data)\" size=\"large\" name=\"heart-outline\"\n                      color=\"primary\">\n                    </ion-icon>\n                    <ion-icon *ngIf=\"checkIfProdInWishList(prod_data)\" size=\"large\" name=\"heart\" color=\"primary\">\n                    </ion-icon>\n                  </a>\n                </ion-col>\n                <ion-col>\n                  <a (click)=\"addToWishlist(prod_data)\">\n                    <ion-icon size=\"large\" name=\"share-social-outline\" color=\"primary\"></ion-icon>\n                  </a>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"5\">\n              <ion-text class=\"note_title14Black\">Seller Support</ion-text>\n            </ion-col>\n            <ion-col size=\"7\">\n              <ion-text class=\"note_title14Black\">Trade Assurance</ion-text>\n              <p style=\"margin-top:2px;\">To protect your orders from payment to delivery </p>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"no-padding\">\n            <ion-col size=\"12\" class=\"no-padding\">\n              <ion-button expand=\"block\" color=\"primary\" class=\"capitilize\"> Contact Supplier </ion-button>\n            </ion-col>\n            <ion-col size=\"12\" class=\"no-padding\" style=\"margin-top: -10px;\">\n              <ion-button expand=\"block\" color=\"primary\" fill=\"outline\" class=\"capitilize\"> Get Quote </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n\n      </ion-row>\n\n      <!-- <ion-row class=\"rating_row\">\n        <ion-col size=\"4\" style=\"padding-left: 10px;\">\n          <app-rating-input max=\"5\" readOnly=\"true\" class=\"button-inner\">\n          </app-rating-input>\n        </ion-col>\n        <ion-col size=\"6\" class=\"ratingText\" *ngIf=\"prod_data.rating>0\" style=\"padding-top: 3px;\">\n          ({{prod_data.rating}} rating(s))\n        </ion-col>\n        <ion-col size=\"6\" class=\"ratingText\" *ngIf=\"prod_data.rating==0\" style=\"padding-top: 3px;\">\n          (No ratings avaialable)\n        </ion-col>\n        \n      </ion-row> -->\n    </ion-grid>\n    <ion-grid class=\"grid\">\n      <ion-row class=\"headerBg\">\n        <ion-col size=\"12\">\n          <ion-text class=\"note_title12Sec uppercase  \">Product details</ion-text>\n        </ion-col>\n      </ion-row>\n      <div style=\"padding:12px;\">\n        <ion-row class=\"zero-height\">\n          <ion-col size=\"12\">Overview</ion-col>\n        </ion-row>\n        <ion-row class=\"zero-height\">\n          <ion-col size=\"5\">Brand Name:</ion-col>\n          <ion-col size=\"7\">follyb men wears</ion-col>\n        </ion-row>\n        \n        <ion-row class=\"zero-height\">\n          <ion-col size=\"5\">Location</ion-col>\n          <ion-col size=\"7\">Nigeria</ion-col>\n        </ion-row>\n        <ion-row class=\"zero-height\">\n          <ion-col size=\"5\">Availability</ion-col>\n          <ion-col size=\"7\">Available</ion-col>\n        </ion-row>\n        <br>\n  \n        <ion-row class=\"zero-height\">\n          <ion-col size=\"6\">Logistics</ion-col>\n        </ion-row>\n        <ion-row class=\"zero-height\">\n          <ion-col size=\"5\"> Pickup Country: </ion-col>\n          <ion-col size=\"7\">NG</ion-col>\n        </ion-row>\n        <br>\n        <ion-row class=\"zero-height\">\n          <ion-col size=\"7\">Description</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\"> Agbada is one of oldest fashion dress for men but never run out of fashion.</ion-col>\n        </ion-row>\n      </div>\n     \n\n    </ion-grid>\n    <br>\n    <ion-grid class=\"grid\">\n      <ion-row class=\"headerBg\">\n        <ion-col size=\"12\">\n          <ion-text class=\"note_title12Sec\">REVIEW</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"padding-left: 10px;\">\n        <ion-col size=\"12\">\n          <span class=\"ratingBorder\">5.0/5</span><span class=\"note_title12Black\"> 7 ratings</span>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"rating_row\" style=\"border-bottom: 1px solid #e5e5e5;\">\n        <ion-col size=\"4\" style=\"padding-left: 10px;\">\n          <app-rating-input max=\"5\" readOnly=\"true\" class=\"button-inner\">\n          </app-rating-input>\n        </ion-col>\n        <ion-col size=\"8\" class=\"t_right note_title12Black\" style=\"padding-right: 10px;\">\n          2020-11-01\n        </ion-col>\n        <div style=\"margin-top: -20px; padding-bottom: 10px;padding-left: 12px;\" class=\"note_title12Black\">\n          I love it\n          <br />\n          By Toyin\n        </div>\n      </ion-row>\n\n      <ion-row class=\"rating_row\" style=\"border-bottom: 1px solid #e5e5e5;\">\n        <ion-col size=\"4\" style=\"padding-left: 10px;\">\n          <app-rating-input max=\"5\" readOnly=\"true\" class=\"button-inner\">\n          </app-rating-input>\n        </ion-col>\n        <ion-col size=\"8\" class=\"t_right note_title12Black\" style=\"padding-right: 10px;\">\n          2020-11-01\n        </ion-col>\n        <div style=\"margin-top: -20px; padding-bottom: 10px;padding-left: 12px;\" class=\"note_title12Black\">\n          100% what I needed\n          <br />\n          By Light\n        </div>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div *ngIf=\"recommendedProducts\">\n    <ion-grid class=\"grids\">\n      <ion-row class=\"headerBgs\">\n        <ion-col size=\"12\">\n          <ion-text class=\"note_title12Sec\">RECOMMENDED FOR YOU</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" style=\"margin-top: 20px;\">\n          <ion-slides direction=\"horizontal\" [options]=\"slideOptsTwo\">\n            <ion-slide style=\"height: 200px; width: 200px !important;\" *ngFor=\"let rec of recommendedProducts\">\n              <ion-row>\n                <ion-col size=\"12\" (click)=\"viewProduct(rec)\" class=\"card\" style=\"margin-bottom: 33px; margin-top: 5px; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\">\n                  <div>\n                    <img src=\"../../assets/dummy-images/productView.png\" alt=\"EasyMall\" class=\"img_slider\" />\n                  </div>\n                  <br />\n                  <app-text-shell animation=\"gradient\" [data]=\"rec?.name\" lines=\"2\"\n                    class=\"note_title14Black text-truncate\" (click)=\"viewProduct(rec)\">\n                  </app-text-shell>\n                  <app-text-shell animation=\"gradient\" [data]=\"rec?.price  | currency:'???':'symbol':'1.2-2'\" lines=\"1\"\n                    class=\"note_title14Pri\" (click)=\"viewProduct(rec)\">\n                  </app-text-shell>\n                </ion-col>\n              </ion-row>\n            </ion-slide>\n          </ion-slides>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        &nbsp;\n        <br>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/core/http-services/store.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/http-services/store.service.ts ***!
  \*****************************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let StoreService = class StoreService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
    }
    searchStores(searchString, size = 5) {
        if (!searchString.trim()) {
            // if not search string, return empty array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        return this.http.get(`${this.apiUrl}Store/Names?search=${searchString}&size=${size}`);
    }
    getStoreDetail(id) {
        const url = `${this.apiUrl}stores/${id}`;
        return this.http.get(url);
    }
    getStoreProducts(id, size = 10, page = 0) {
        var url = `${this.apiUrl}products?pagesize=${size}&page=${page}`;
        return this.http.get(url);
    }
};
StoreService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
StoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], StoreService);



/***/ }),

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _shell_shell_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shell/shell.module */ "./src/app/shell/shell.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sharedComponents/shared-components.module */ "./src/app/sharedComponents/shared-components.module.ts");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products.page */ "./src/app/products/products.page.ts");










let ProductsPageModule = class ProductsPageModule {
};
ProductsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _products_page__WEBPACK_IMPORTED_MODULE_9__["ProductsPage"]
                }
            ]),
            _shell_shell_module__WEBPACK_IMPORTED_MODULE_6__["ShellModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_8__["SharedComponentsModule"]
        ],
        declarations: [_products_page__WEBPACK_IMPORTED_MODULE_9__["ProductsPage"]]
    })
], ProductsPageModule);



/***/ }),

/***/ "./src/app/products/products.page.scss":
/*!*********************************************!*\
  !*** ./src/app/products/products.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer ion-toolbar {\n  --background: #fff;\n}\n\n.zero-height {\n  line-height: 8px !important;\n}\n\n.viewSeller {\n  font-size: 10px;\n  text-align: right;\n}\n\n.slideShow {\n  text-align: center;\n}\n\n.imgHolder {\n  margin: auto;\n  width: 200px;\n  height: 200px;\n  max-width: 200px;\n  max-height: 200px;\n}\n\n.imgHolderRec {\n  width: 100px;\n  height: 100px;\n  max-width: 100px;\n  max-height: 100px;\n}\n\n.img_slider {\n  height: 12.5rem !important;\n  width: 12.5rem !important;\n}\n\n.ratingBorder {\n  border: solid 1px #c8c6c6;\n  padding: 0 2px;\n}\n\n.subSubCatTitle {\n  font-size: 8px;\n}\n\n.subCatHeader {\n  font-size: 10px;\n}\n\n.subCatViewAll {\n  font-size: 8px;\n}\n\n.gridSubCat {\n  padding: 0px;\n}\n\n.gridSubCatHeader {\n  background: var(--ion-color-primary);\n  color: #fff;\n}\n\n.borderRight {\n  border-right: solid 1px #c8c6c6;\n}\n\n.borderBottom {\n  border-bottom: solid 1px #c8c6c6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvQzpcXFByb2plY3RcXEFuZ3VsYXJcXGVhc3ltYWxsX25vbm9kZSAoMSlcXGVhc3ltYWxsX25vbm9kZS9zcmNcXGFwcFxccHJvZHVjdHNcXHByb2R1Y3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0osa0JBQUE7QUNBQTs7QURNQTtFQUNFLDJCQUFBO0FDSEY7O0FES0E7RUFDRSxlQUFBO0VBRUEsaUJBQUE7QUNIRjs7QURLQTtFQUNBLGtCQUFBO0FDRkE7O0FESUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDREE7O0FER0E7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNEQTs7QURHQTtFQUVFLDBCQUFBO0VBQ0EseUJBQUE7QUNERjs7QURJQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0RBOztBREdBO0VBQ0ksY0FBQTtBQ0FKOztBREVBO0VBQ0MsZUFBQTtBQ0NEOztBRENBO0VBQ0MsY0FBQTtBQ0VEOztBREFBO0VBQ0EsWUFBQTtBQ0dBOztBRERBO0VBQ0Msb0NBQUE7RUFDQSxXQUFBO0FDSUQ7O0FEREE7RUFDSSwrQkFBQTtBQ0lKOztBREZBO0VBQ0ksZ0NBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XG4gICAgaW9uLXRvb2xiYXJ7XG4tLWJhY2tncm91bmQ6ICNmZmY7XG4vLyAtLWNvbG9yOiNmZmYgIWltcG9ydGFudDtcbn1cblxufVxuXG4uemVyby1oZWlnaHR7XG4gIGxpbmUtaGVpZ2h0OiA4cHggIWltcG9ydGFudDtcbn1cbi52aWV3U2VsbGVyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuLy8gICBwYWRkaW5nOiA1cHggMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uc2xpZGVTaG93e1xudGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmltZ0hvbGRlcntcbm1hcmdpbjogYXV0bztcbndpZHRoOiAyMDBweDtcbmhlaWdodDogMjAwcHg7XG5tYXgtd2lkdGg6IDIwMHB4O1xubWF4LWhlaWdodDogMjAwcHg7XG59XG4uaW1nSG9sZGVyUmVje1xuLy8gbWFyZ2luOiBhdXRvO1xud2lkdGg6IDEwMHB4O1xuaGVpZ2h0OiAxMDBweDtcbm1heC13aWR0aDogMTAwcHg7XG5tYXgtaGVpZ2h0OiAxMDBweDtcbn1cbi5pbWdfc2xpZGVye1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMi41cmVtICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMi41cmVtICFpbXBvcnRhbnQ7XG4gIC8vIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ucmF0aW5nQm9yZGVye1xuYm9yZGVyOiBzb2xpZCAxcHggI2M4YzZjNjtcbnBhZGRpbmc6IDAgMnB4O1xufVxuLnN1YlN1YkNhdFRpdGxle1xuICAgIGZvbnQtc2l6ZTogOHB4O1xufVxuLnN1YkNhdEhlYWRlcntcbiBmb250LXNpemU6IDEwcHg7XG59XG4uc3ViQ2F0Vmlld0FsbHtcbiBmb250LXNpemU6IDhweDtcbn1cbi5ncmlkU3ViQ2F0e1xucGFkZGluZzogMHB4O1xufVxuLmdyaWRTdWJDYXRIZWFkZXJ7XG4gYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7ICBcbiBjb2xvcjojZmZmO1xufVxuXG4uYm9yZGVyUmlnaHR7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2M4YzZjNjtcbn1cbi5ib3JkZXJCb3R0b217XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjOGM2YzY7XG59XG4iLCIuZm9vdGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uemVyby1oZWlnaHQge1xuICBsaW5lLWhlaWdodDogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi52aWV3U2VsbGVyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnNsaWRlU2hvdyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltZ0hvbGRlciB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbn1cblxuLmltZ0hvbGRlclJlYyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG59XG5cbi5pbWdfc2xpZGVyIHtcbiAgaGVpZ2h0OiAxMi41cmVtICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMi41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5yYXRpbmdCb3JkZXIge1xuICBib3JkZXI6IHNvbGlkIDFweCAjYzhjNmM2O1xuICBwYWRkaW5nOiAwIDJweDtcbn1cblxuLnN1YlN1YkNhdFRpdGxlIHtcbiAgZm9udC1zaXplOiA4cHg7XG59XG5cbi5zdWJDYXRIZWFkZXIge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5zdWJDYXRWaWV3QWxsIHtcbiAgZm9udC1zaXplOiA4cHg7XG59XG5cbi5ncmlkU3ViQ2F0IHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uZ3JpZFN1YkNhdEhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5ib3JkZXJSaWdodCB7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNjOGM2YzY7XG59XG5cbi5ib3JkZXJCb3R0b20ge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2M4YzZjNjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/products/products.page.ts":
/*!*******************************************!*\
  !*** ./src/app/products/products.page.ts ***!
  \*******************************************/
/*! exports provided: ProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPage", function() { return ProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/http-services/product.service */ "./src/app/core/http-services/product.service.ts");
/* harmony import */ var src_app_core_http_services_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/http-services/store.service */ "./src/app/core/http-services/store.service.ts");
/* harmony import */ var src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/http-services/order.service */ "./src/app/core/http-services/order.service.ts");
/* harmony import */ var src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/authentication/authentication.service */ "./src/app/core/authentication/authentication.service.ts");









// import { SocialSharing } from '@ionic-native/social-sharing/ngx';
let ProductsPage = class ProductsPage {
    constructor(toastController, productService, router, route, nativeStorage, storeService, orderService, authService) {
        this.toastController = toastController;
        this.productService = productService;
        this.router = router;
        this.route = route;
        this.nativeStorage = nativeStorage;
        this.storeService = storeService;
        this.orderService = orderService;
        this.authService = authService;
        ///Inputs
        this.title = 'Details';
        this.longSearch = false;
        this.showBackButton = true;
        this.loading = false;
        this.showSearch = true;
        this.deliveryFee = 1500;
        this.recentlyViewedProducts = [];
        this.starsCount = 5;
        this.inCart = false;
        this.wishList = new Array();
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
                el: '.swiper-pagination',
                clickable: true,
            },
        };
        this.slideOpts = {
            slidesPerView: 3,
            grabCursor: true,
            autoplay: true,
            speed: 600,
            cubeEffect: {
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
            on: {
                beforeInit: function () {
                    const swiper = this;
                    swiper.classNames.push(`${swiper.params.containerModifierClass}cube`);
                    swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
                    const overwriteParams = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: true,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: false,
                        virtualTranslate: true,
                    };
                    this.params = Object.assign(this.params, overwriteParams);
                    this.originalParams = Object.assign(this.originalParams, overwriteParams);
                },
                setTranslate: function () {
                    const swiper = this;
                    const { $el, $wrapperEl, slides, width: swiperWidth, height: swiperHeight, rtlTranslate: rtl, size: swiperSize, } = swiper;
                    const params = swiper.params.cubeEffect;
                    const isHorizontal = swiper.isHorizontal();
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    let wrapperRotate = 0;
                    let $cubeShadowEl;
                    if (params.shadow) {
                        if (isHorizontal) {
                            $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
                            if ($cubeShadowEl.length === 0) {
                                $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
                                $wrapperEl.append($cubeShadowEl);
                            }
                            $cubeShadowEl.css({ height: `${swiperWidth}px` });
                        }
                        else {
                            $cubeShadowEl = $el.find('.swiper-cube-shadow');
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
                            slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
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
                        }
                        else if ((slideIndex - 1) % 4 === 0) {
                            tx = 0;
                            tz = -round * 4 * swiperSize;
                        }
                        else if ((slideIndex - 2) % 4 === 0) {
                            tx = swiperSize + round * 4 * swiperSize;
                            tz = swiperSize;
                        }
                        else if ((slideIndex - 3) % 4 === 0) {
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
                        const transform$$1 = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
                        if (progress <= 1 && progress > -1) {
                            wrapperRotate = slideIndex * 90 + progress * 90;
                            if (rtl)
                                wrapperRotate = -slideIndex * 90 - progress * 90;
                        }
                        $slideEl.transform(transform$$1);
                        if (params.slideShadows) {
                            // Set shadows
                            let shadowBefore = isHorizontal
                                ? $slideEl.find('.swiper-slide-shadow-left')
                                : $slideEl.find('.swiper-slide-shadow-top');
                            let shadowAfter = isHorizontal
                                ? $slideEl.find('.swiper-slide-shadow-right')
                                : $slideEl.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
                                $slideEl.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
                                $slideEl.append(shadowAfter);
                            }
                            if (shadowBefore.length)
                                shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length)
                                shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }
                    }
                    $wrapperEl.css({
                        '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
                        '-moz-transform-origin': `50% 50% -${swiperSize / 2}px`,
                        '-ms-transform-origin': `50% 50% -${swiperSize / 2}px`,
                        'transform-origin': `50% 50% -${swiperSize / 2}px`,
                    });
                    if (params.shadow) {
                        if (isHorizontal) {
                            $cubeShadowEl.transform(`translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
                        }
                        else {
                            const shadowAngle = Math.abs(wrapperRotate) -
                                Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                            const multiplier = 1.5 -
                                (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2 +
                                    Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2);
                            const scale1 = params.shadowScale;
                            const scale2 = params.shadowScale / multiplier;
                            const offset$$1 = params.shadowOffset;
                            $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset$$1}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
                        }
                    }
                    const zFactor = swiper.browser.isSafari || swiper.browser.isUiWebView
                        ? -swiperSize / 2
                        : 0;
                    $wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
                },
                setTransition: function (duration) {
                    const swiper = this;
                    const { $el, slides } = swiper;
                    slides
                        .transition(duration)
                        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                        .transition(duration);
                    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
                        $el.find('.swiper-cube-shadow').transition(duration);
                    }
                },
            },
        };
        this.route.params.subscribe((params) => {
            if (params.id) {
                console.log('params.id: ' + JSON.stringify(params.id));
                this.loading = true;
                this.productService
                    .getProductDetail(params.id)
                    .subscribe((prod) => {
                    if (prod.data) {
                        this.prod_data = prod.data;
                        this.loading = false;
                        // console.log ( 'this.Product Detail: ' + JSON.stringify(this.prod_data));
                        // this.recentlyViewedProducts.indexOf(this.prod_data._id) == -1
                        this.recentlyViewedProducts = this.productService.getLocalRecentlyViewedProducts()
                            ? this.productService.getLocalRecentlyViewedProducts()
                            : [];
                        // console.log(
                        //   'recentlyViewedProducts: ' +
                        //     JSON.stringify(this.recentlyViewedProducts)
                        // );
                        if (this.recentlyViewedProducts.length > 0) {
                            if (!this.recentlyViewedProducts.some((r) => r._id.includes(this.prod_data._id))) {
                                let arr_prod = this.recentlyViewedProducts;
                                arr_prod.push(this.prod_data);
                                this.productService.setLocalRecentlyViewedProducts(JSON.stringify(arr_prod));
                            }
                            else {
                            }
                        }
                        else {
                            let arr_prod = new Array();
                            arr_prod.push(this.prod_data);
                            this.productService.setLocalRecentlyViewedProducts(JSON.stringify(arr_prod));
                        }
                        this.getSimilarProducts();
                    }
                });
            }
            else {
                //Bounce the person
            }
        });
        this.nativeStorage.getItem('currentUser').then((x) => {
            this.currentUser = x;
            this.nativeStorage.getItem('WishList').then((x) => {
                this.wishList = x;
            });
        });
    }
    ngOnInit() { }
    viewProduct(prod) {
        this.prod_data = null;
        this.prod_data = prod;
        this.prod_data['productId'] = this.prod_data._id;
        this.ionContent.scrollToTop(300);
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
    addToCart(prod) {
        this.orderService.addToCart(this.currentUser.token, prod).subscribe((data) => {
            console.log('addToCart Success: ' + JSON.stringify(data));
            this.productService.getNumberofItemsInCart(data.data);
            this.presentToast('GREAT!', 'Product successfully added to your cart ', 2000, 'success');
            // this.toastr.success("Item successfuly added to cart");
        }, (err) => {
            console.log('addToCart Error: ' + JSON.stringify(err));
            this.presentToast('OOPS!', 'An error occurred, Please try again later ', 2000, 'error');
        });
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
                        this.loading = false;
                    }
                    else {
                        this.loading = false;
                        this.presentToast('OOPS!', 'An error occurred, Please try again later ', 2000, 'danger');
                    }
                }, (err) => {
                    console.error(err);
                    this.loading = false;
                    this.presentToast('OOPS!', 'An error occurred, Please try again later ', 2000, 'danger');
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
    // share(prod) {
    //   let name = prod.name.replace(' ', '-');
    //   this.socialSharing
    //     .share(
    //       '<a href="https://easymall.ng/view-product/"' +
    //         name +
    //         '>https://easymall.ng/view-product/' +
    //         name,
    //       'EasyMall Product Referral',
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
        this.storeService.getStoreDetail(storeId).subscribe((res) => {
            if (!res.error) {
                this.store = res.data;
            }
        });
    }
    getSimilarProducts() {
        // const id = this.route.snapshot.paramMap.get("id");
        this.productService
            .getSimillarProducts(this.prod_data.id)
            .subscribe((data) => {
            if (data.data.length > 0) {
                this.recommendedProducts = data.data;
                // console.log("recommendedProducts: " + JSON.stringify(this.recommendedProducts));
            }
        });
    }
};
ProductsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"] },
    { type: src_app_core_http_services_store_service__WEBPACK_IMPORTED_MODULE_6__["StoreService"] },
    { type: src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"] },
    { type: src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
], ProductsPage.prototype, "ionContent", void 0);
ProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products.page.scss */ "./src/app/products/products.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"],
        src_app_core_http_services_store_service__WEBPACK_IMPORTED_MODULE_6__["StoreService"],
        src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"],
        src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]])
], ProductsPage);



/***/ })

}]);
//# sourceMappingURL=products-products-module-es2015.js.map