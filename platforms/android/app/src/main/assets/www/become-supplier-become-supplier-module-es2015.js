(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["become-supplier-become-supplier-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/become-supplier/become-supplier.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/become-supplier/become-supplier.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"title\" [longSearch]=\"longSearch\" [showBackButton]=\"showBackButton\" [isLoading]=\"loading\"\n  [showSearch]=\"showSearch\">\n</app-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card class=\"card\">\n          <ion-card-header class=\"ion-text-center\">\n            <ion-card-subtitle>Basic</ion-card-subtitle>\n            <ion-card-subtitle>Free /Year</ion-card-subtitle>\n          </ion-card-header>\n\n          <ion-card-content class=\"font-12\">\n            <p>Products per store: <span>4</span></p>\n            <p>StoreType: <span>Ordinary</span></p>\n            <p>Microsite: <span>false</span></p>\n            <p>Exposure level: <span>Regional</span></p>\n            <p>Free Leads (Monthly):<span> 0</span></p>\n            <p>Lead Keywords: <span>5</span></p>\n            <p>Adverts: <span>false</span></p>\n          </ion-card-content>\n          <ion-row >\n            <ion-col size=\"12\" class=\"no-padding\">\n              <ion-button expand=\"block\" color=\"primary\" class=\"capitilize font-14\"> Apply </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n\n      </ion-col>\n      <ion-col>\n        <ion-card class=\"card\">\n          <ion-card-header class=\"ion-text-center\">\n            <ion-card-subtitle color=\"medium\">Silver</ion-card-subtitle>\n            <ion-card-subtitle color=\"medium\">$119 /Year</ion-card-subtitle>\n          </ion-card-header>\n\n          <ion-card-content class=\"font-12\">\n            <p>Products per store: <span>8</span></p>\n            <p>StoreType: <span>Premium</span></p>\n            <p>Microsite: <span>true</span></p>\n            <p>Exposure level: <span>Regional</span></p>\n            <p>Free Leads (Monthly): <span>5</span></p>\n            <p>Lead Keywords: <span>5</span></p>\n            <p>Adverts: <span>false</span></p>\n          </ion-card-content>\n          <ion-row >\n            <ion-col size=\"12\" class=\"no-padding\">\n              <ion-button expand=\"block\" color=\"primary\" class=\"capitilize font-14\"> Apply </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card class=\"card\">\n          <ion-card-header class=\"ion-text-center\">\n            <ion-card-subtitle color=\"warning\">Gold</ion-card-subtitle>\n            <ion-card-subtitle color=\"warning\">$199 /Year</ion-card-subtitle>\n          </ion-card-header>\n\n          <ion-card-content class=\"font-12\">\n            <p>Products per store: <span>16</span></p>\n            <p>StoreType: <span>Premium</span></p>\n            <p>Microsite: <span>true</span></p>\n            <p>Exposure level: <span>Continental</span></p>\n\n            <p>Free Leads (Monthly): <span>10</span></p>\n            <p>Lead Keywords: <span>10</span></p>\n            <p>Adverts:  <span>true</span></p>\n          </ion-card-content>\n          <ion-row >\n            <ion-col size=\"12\" class=\"no-padding\">\n              <ion-button expand=\"block\" color=\"primary\" class=\"capitilize font-14\"> Apply </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n\n      </ion-col>\n      <ion-col>\n        <ion-card class=\"card\">\n          <ion-card-header class=\"ion-text-center\">\n            <ion-card-subtitle>Platinum</ion-card-subtitle>\n            <ion-card-subtitle>$399 /Year</ion-card-subtitle>\n          </ion-card-header>\n\n            <ion-card-content class=\"font-12\">\n            <p>Products per store: <span>32</span></p>\n            <p>StoreType: <span>Premium</span></p>\n            <p>Microsite: <span>true</span></p>\n            <p>Exposure level: <span>Global</span></p>\n            <p>Free Leads (Monthly): <span>20</span></p>\n            <p>Lead Keywords: <span>15</span></p>\n            <p>Adverts: <span>true</span></p>\n          </ion-card-content>\n          <ion-row >\n            <ion-col size=\"12\" class=\"no-padding\">\n              <ion-button expand=\"block\" color=\"primary\" class=\"capitilize font-14\"> Apply </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/become-supplier/become-supplier-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/become-supplier/become-supplier-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: BecomeSupplierPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BecomeSupplierPageRoutingModule", function() { return BecomeSupplierPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _become_supplier_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./become-supplier.page */ "./src/app/become-supplier/become-supplier.page.ts");




const routes = [
    {
        path: '',
        component: _become_supplier_page__WEBPACK_IMPORTED_MODULE_3__["BecomeSupplierPage"]
    }
];
let BecomeSupplierPageRoutingModule = class BecomeSupplierPageRoutingModule {
};
BecomeSupplierPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BecomeSupplierPageRoutingModule);



/***/ }),

/***/ "./src/app/become-supplier/become-supplier.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/become-supplier/become-supplier.module.ts ***!
  \***********************************************************/
/*! exports provided: BecomeSupplierPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BecomeSupplierPageModule", function() { return BecomeSupplierPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _become_supplier_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./become-supplier-routing.module */ "./src/app/become-supplier/become-supplier-routing.module.ts");
/* harmony import */ var _become_supplier_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./become-supplier.page */ "./src/app/become-supplier/become-supplier.page.ts");
/* harmony import */ var _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sharedComponents/shared-components.module */ "./src/app/sharedComponents/shared-components.module.ts");
/* harmony import */ var _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shell/shell.module */ "./src/app/shell/shell.module.ts");









let BecomeSupplierPageModule = class BecomeSupplierPageModule {
};
BecomeSupplierPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _become_supplier_routing_module__WEBPACK_IMPORTED_MODULE_5__["BecomeSupplierPageRoutingModule"],
            _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"],
            _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ShellModule"],
        ],
        declarations: [_become_supplier_page__WEBPACK_IMPORTED_MODULE_6__["BecomeSupplierPage"]]
    })
], BecomeSupplierPageModule);



/***/ }),

/***/ "./src/app/become-supplier/become-supplier.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/become-supplier/become-supplier.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-content {\n  padding-left: 4px !important;\n  padding-right: 4px !important;\n}\nion-card-content p {\n  font-size: 12px !important;\n  nargin-top: -10px !important;\n  text-align: center !important;\n}\nion-card-content p span {\n  font-family: \"RedHatDisplayBold\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVjb21lLXN1cHBsaWVyL0M6XFxQcm9qZWN0XFxBbmd1bGFyXFxlYXN5bWFsbF9ub25vZGUgKDEpXFxlYXN5bWFsbF9ub25vZGUvc3JjXFxhcHBcXGJlY29tZS1zdXBwbGllclxcYmVjb21lLXN1cHBsaWVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYmVjb21lLXN1cHBsaWVyL2JlY29tZS1zdXBwbGllci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtFQUNBLDZCQUFBO0FDQ0o7QURBSTtFQUNJLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ0VSO0FEQVE7RUFDSSxnQ0FBQTtBQ0VaIiwiZmlsZSI6InNyYy9hcHAvYmVjb21lLXN1cHBsaWVyL2JlY29tZS1zdXBwbGllci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC1jb250ZW50e1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDRweCAhaW1wb3J0YW50O1xyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6MTJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG5hcmdpbi10b3A6LTEwcHggIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlciAgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSZWRIYXREaXNwbGF5Qm9sZCdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiA0cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogNHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY2FyZC1jb250ZW50IHAge1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgbmFyZ2luLXRvcDogLTEwcHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5pb24tY2FyZC1jb250ZW50IHAgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJlZEhhdERpc3BsYXlCb2xkXCI7XG59Il19 */");

/***/ }),

/***/ "./src/app/become-supplier/become-supplier.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/become-supplier/become-supplier.page.ts ***!
  \*********************************************************/
/*! exports provided: BecomeSupplierPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BecomeSupplierPage", function() { return BecomeSupplierPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BecomeSupplierPage = class BecomeSupplierPage {
    constructor() {
        /// Inputs
        this.title = 'Become a Supplier';
        this.longSearch = false;
        this.showBackButton = true;
        this.loading = false;
        this.showSearch = false;
    }
    ngOnInit() {
    }
};
BecomeSupplierPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-become-supplier',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./become-supplier.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/become-supplier/become-supplier.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./become-supplier.page.scss */ "./src/app/become-supplier/become-supplier.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BecomeSupplierPage);



/***/ })

}]);
//# sourceMappingURL=become-supplier-become-supplier-module-es2015.js.map