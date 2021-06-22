(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-profile-company-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company-profile/company-profile.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company-profile/company-profile.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"title\" [longSearch]=\"longSearch\" [showBackButton]=\"showBackButton\" [isLoading]=\"loading\"\n  [showSearch]=\"showSearch\">\n</app-header>\n<ion-content>\n  <ion-row class=\"card\" *ngIf=\"!currentUser\"\n    style=\"opacity:0.9; background-image: url('../../assets/dummy-images/company_profile.png'); background-size: cover;\">\n    <ion-col size=\"5\">\n      <div class=\"profile-imageCompany\"\n        style=\"background-image: url('../../assets/dummy-images/user.jpg'); background-size: cover;\">\n      </div>\n    </ion-col>\n\n    <ion-col size=\"7\" style=\"font-size: 10px !important;\">\n      <ion-row>\n        <ion-col class=\"font-bold uppercase\">\n          <!-- {{ getValue.store.name }} -->\n          <app-text-shell animation=\"gradient\" [data]=\"storeDetail?.name\" lines=\"1\" class=\"text-left  font-20\"\n            style=\"padding: 5px 0; float: left;\">\n          </app-text-shell>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\" class=\"\">\n          <ion-icon src=\"../../assets/vectors/icons/profile/location.svg\" class=\"xxx\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"9\" class=\"font-14\">West Africa</ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"3\">\n          <ion-icon src=\"../../assets/vectors/icons/profile/country.svg\" class=\"xxx\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"9\" class=\"font-14\">Nigeria</ion-col>\n      </ion-row>\n      <ion-row class=\"no-padding\" style=\"margin-top:-9px\">\n        <ion-col size=\"12\" class=\"no-padding\">\n          <ion-button expand=\"block\" color=\"primary\" class=\"capitilize font-14\" routerLink=\"/messaging\"> Send Message </ion-button>\n        </ion-col>\n      </ion-row>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-grid class=\"cards\">\n    <ion-row class=\"\">\n      <ion-col size=\"12\" class=\"note_title_bold12Sec\">\n        <ion-text>\n          <ion-row>\n            <ion-col size=\"9\">\n              <span class=\"ion-text-left bold-text\">PRODUCTS </span>\n            </ion-col>\n            <ion-col size=\"3\">\n              <span class=\"t_right home-view-all\">View all</span>\n            </ion-col>\n          </ion-row>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"t_centers\">\n      <ion-col col-6 class=\"productsCol card\" routerLink=\"/products/{{tp.id}}\" *ngFor=\"let tp of storeProducts\">\n        <app-image-shell animation=\"gradient\" src=\"/assets/vectors/icons/test.svg\" [alt]=\"'Product Image'\"\n          class=\"inner-img\" style=\"padding-bottom: 5px;\">\n          <!-- <br><br> -->\n        </app-image-shell>\n        <app-text-shell animation=\"gradient\" [data]=\"tp?.name\" lines=\"2\"\n          class=\"text-left product-description-height text-truncate\">\n        </app-text-shell>\n        <!-- <p class=\"\">Cotton socks</p> -->\n        <ion-row>\n          <app-text-shell animation=\"gradient\" [data]=\"tp?.minPrice | currency:'$':'symbol':'1.0'\" lines=\"1\"\n            class=\"text-left  bold-text note_title_bold10Black\" style=\"padding: 5px 0; float: left;\">\n          </app-text-shell>\n          <app-text-shell animation=\"gradient\" [data]=\"' - '\" lines=\"1\"\n            class=\"text-left  bold-text note_title_bold10Black\" style=\"padding: 5px 0; float: left; margin-left: 5px;\">\n          </app-text-shell>\n          <app-text-shell animation=\"gradient\" [data]=\"tp?.maxPrice  | currency:'$':'symbol':'1.0'\" lines=\"1\"\n            class=\"text-left  bold-text note_title_bold10Black\" style=\"padding: 5px 0; float: left;  margin-left: 5px;\">\n          </app-text-shell>\n        </ion-row>\n\n\n        <app-text-shell animation=\"gradient\" [data]=\"tp?.description\" lines=\"1\" class=\"note_title_bold12Black text-left\"\n          style=\"padding: 5px 0;\">\n        </app-text-shell>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n  <ion-grid>\n    <ion-row class=\"\">\n      <ion-col size=\"12\" class=\"note_title_bold12Sec\">\n        <ion-text>\n          <ion-row>\n            <ion-col size=\"12\">\n              <span class=\"ion-text-left bold-text uppercase\">company profile</span>\n            </ion-col>\n\n          </ion-row>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"card\">\n\n      <ion-col size=\"12\" style=\"font-size: 10px !important;\">\n        <ion-row>\n          <ion-col size=\"5\"> Owner:</ion-col>\n          <ion-col size=\"7\">\n            <!-- {{ storeDetaile.organisation | json }} -->\n            <app-text-shell animation=\"gradient\" [data]=\"storeDetail?.merchant.firstname\" lines=\"1\" class=\"text-left \"\n              style=\"padding: 5px 0; float: left;\">\n            </app-text-shell>\n            <app-text-shell animation=\"gradient\" [data]=\"' '\" lines=\"1\" class=\"text-left \"\n              style=\"padding: 5px 0; float: left; margin-left: 4px;\">\n            </app-text-shell>\n            <app-text-shell animation=\"gradient\" [data]=\"storeDetail?.merchant.lastname\" lines=\"1\" class=\"text-left \"\n              style=\"padding: 5px 0; float: left;\">\n            </app-text-shell>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"5\">Email Address:</ion-col>\n          <ion-col size=\"7\">\n            <!-- {{ getValue.store.merchant.email }} -->\n            <app-text-shell animation=\"gradient\" [data]=\"storeDetail?.merchant.email\" lines=\"1\"\n              class=\"text-left  font-10\" style=\"padding: 5px 0; float: left;\">\n            </app-text-shell>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"5\"> Phone Number:</ion-col>\n          <ion-col size=\"7\">\n            <app-text-shell animation=\"gradient\" [data]=\"storeDetail?.merchant.phone\" lines=\"1\"\n              class=\"text-left  font-10\" style=\"padding: 5px 0; float: left;\">\n            </app-text-shell>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"5\">Location:</ion-col>\n          <ion-col size=\"7\">Western Africa Nigeria</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"5\"> External Link:</ion-col>\n          <ion-col size=\"7\">\n            <app-text-shell animation=\"gradient\" [data]=\"storeDetail?.externalLink\" lines=\"1\"\n              class=\"text-left  font-10\" style=\"padding: 5px 0; float: left;\">\n            </app-text-shell>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"5\">Products:</ion-col>\n          <ion-col size=\"7\">\n            <app-text-shell animation=\"gradient\" [data]=\"storeProducts?.length\" lines=\"1\" class=\"text-left \"\n              style=\"padding: 5px 0; float: left;\">\n            </app-text-shell>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"5\">Created:</ion-col>\n          <ion-col size=\"7\">\n            <app-text-shell animation=\"gradient\" [data]=\"storeDetail?.createdAt | date:short\" lines=\"1\"\n              class=\"text-left \" style=\"padding: 5px 0; float: left;\">\n            </app-text-shell>\n\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"5\">Categories:</ion-col>\n          <ion-col size=\"7\">\n            <app-text-shell animation=\"gradient\" [data]=\"'Test Categories'\" lines=\"1\" class=\"text-left \"\n              style=\"padding: 5px 0; float: left;\">\n            </app-text-shell>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n      <ion-row style=\"margin-top:10px\">\n        <ion-col size=\"2\">\n          <ion-icon src=\"../../assets/vectors/icons/profile/top-service.svg\" class=\"xxx\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"10\">\n          <ion-text class=\"font-12 comp-verify\"> Top Quality Supplier</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-top:10px\">\n        <ion-col size=\"3\">\n          <ion-icon src=\"../../assets/vectors/icons/profile/verified.svg\" class=\"xxx\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"9\">\n          <ion-text class=\"font-12 comp-verify\"> Verifield Supplier</ion-text>\n        </ion-col>\n      </ion-row>\n      <br>\n      <ion-row style=\"padding:15px\">\n        <p>Description </p>\n        <ion-col size=\"12\">\n          <app-text-shell animation=\"gradient\" [data]=\"storeDetail?.description\" lines=\"3\" class=\"text-left \"\n            style=\"padding: 5px 0; float: left;\">\n          </app-text-shell>\n        </ion-col>\n\n      </ion-row>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/company-profile/company-profile-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/company-profile/company-profile-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CompanyProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyProfilePageRoutingModule", function() { return CompanyProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _company_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-profile.page */ "./src/app/company-profile/company-profile.page.ts");




const routes = [
    {
        path: '',
        component: _company_profile_page__WEBPACK_IMPORTED_MODULE_3__["CompanyProfilePage"]
    }
];
let CompanyProfilePageRoutingModule = class CompanyProfilePageRoutingModule {
};
CompanyProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CompanyProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/company-profile/company-profile.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/company-profile/company-profile.module.ts ***!
  \***********************************************************/
/*! exports provided: CompanyProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyProfilePageModule", function() { return CompanyProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _company_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company-profile-routing.module */ "./src/app/company-profile/company-profile-routing.module.ts");
/* harmony import */ var _company_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company-profile.page */ "./src/app/company-profile/company-profile.page.ts");
/* harmony import */ var _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sharedComponents/shared-components.module */ "./src/app/sharedComponents/shared-components.module.ts");
/* harmony import */ var _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shell/shell.module */ "./src/app/shell/shell.module.ts");









let CompanyProfilePageModule = class CompanyProfilePageModule {
};
CompanyProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _company_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["CompanyProfilePageRoutingModule"],
            _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"],
            _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ShellModule"],
        ],
        declarations: [_company_profile_page__WEBPACK_IMPORTED_MODULE_6__["CompanyProfilePage"]]
    })
], CompanyProfilePageModule);



/***/ }),

/***/ "./src/app/company-profile/company-profile.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/company-profile/company-profile.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-image-shell {\n  height: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFueS1wcm9maWxlL0M6XFxQcm9qZWN0XFxBbmd1bGFyXFxlYXN5bWFsbF9ub25vZGUgKDEpXFxlYXN5bWFsbF9ub25vZGUvc3JjXFxhcHBcXGNvbXBhbnktcHJvZmlsZVxcY29tcGFueS1wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tcGFueS1wcm9maWxlL2NvbXBhbnktcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcGFueS1wcm9maWxlL2NvbXBhbnktcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGx7XHJcbiAgICBoZWlnaHQ6YXV0byAhaW1wb3J0YW50O1xyXG59IiwiYXBwLWltYWdlLXNoZWxsIHtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/company-profile/company-profile.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/company-profile/company-profile.page.ts ***!
  \*********************************************************/
/*! exports provided: CompanyProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyProfilePage", function() { return CompanyProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_http_services_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/http-services/store.service */ "./src/app/core/http-services/store.service.ts");





let CompanyProfilePage = class CompanyProfilePage {
    constructor(router, storeService, http) {
        this.router = router;
        this.storeService = storeService;
        this.http = http;
        ///Inputs
        this.title = 'Company Profile';
        this.longSearch = false;
        this.showBackButton = true;
        this.loading = false;
        this.showSearch = true;
        ////////////////////
        this.currentUser = null;
        this.storeProducts = [];
    }
    ngOnInit() {
        this.getValue = JSON.parse(this.router.snapshot.paramMap.get("data"));
        this.storeId = this.getValue;
        this.storeDetails();
        console.log('store Id', this.storeId);
    }
    storeDetails() {
        this.loading = true;
        console.log(' this.catId, ::', this.storeId);
        this.storeService.getStoreDetail(this.storeId)
            .subscribe((data) => {
            if (data.status && data.data) {
                console.log('data ::', data.data);
                this.storeProducts = data.data.products;
                this.storeDetail = data.data;
                this.loading = false;
            }
            else {
                this.loading = false;
                this.storeProducts = [];
                console.log("No more data this.Products Count: " + JSON.stringify(this.storeProducts.length));
            }
        }, (err) => {
        });
    }
};
CompanyProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _core_http_services_store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CompanyProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-company-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company-profile/company-profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-profile.page.scss */ "./src/app/company-profile/company-profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _core_http_services_store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], CompanyProfilePage);



/***/ })

}]);
//# sourceMappingURL=company-profile-company-profile-module-es2015.js.map