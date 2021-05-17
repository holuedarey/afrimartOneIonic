(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["become-supplier-become-supplier-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/become-supplier/become-supplier.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/become-supplier/become-supplier.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBecomeSupplierBecomeSupplierPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header [title]=\"title\" [longSearch]=\"longSearch\" [showBackButton]=\"showBackButton\" [isLoading]=\"loading\"\n  [showSearch]=\"showSearch\">\n</app-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card class=\"card\">\n          <ion-card-header class=\"ion-text-center\">\n            <ion-card-subtitle>Basic</ion-card-subtitle>\n            <ion-card-subtitle>Free /Year</ion-card-subtitle>\n          </ion-card-header>\n\n          <ion-card-content class=\"font-12\">\n            Products per store: 4\n            StoreType: Ordinary\n            Microsite: false\n            Exposure level: Regional\n            Free Leads (Monthly): 0\n            Lead Keywords: 5\n            Adverts: false\n          </ion-card-content>\n          <ion-row >\n            <ion-col size=\"12\" class=\"no-padding\">\n              <ion-button expand=\"block\" color=\"primary\" class=\"capitilize font-14\"> Apply </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n\n      </ion-col>\n      <ion-col>\n        <ion-card class=\"card\">\n          <ion-card-header class=\"ion-text-center\">\n            <ion-card-subtitle color=\"medium\">Silver</ion-card-subtitle>\n            <ion-card-subtitle color=\"medium\">$119 /Year</ion-card-subtitle>\n          </ion-card-header>\n\n          <ion-card-content class=\"font-12\">\n            Products per store: 8\n            StoreType: Premium\n            Microsite: true\n            Exposure level: Regional\n            Free Leads (Monthly): 5\n            Lead Keywords: 5\n            Adverts: false\n          </ion-card-content>\n          <ion-row >\n            <ion-col size=\"12\" class=\"no-padding\">\n              <ion-button expand=\"block\" color=\"primary\" class=\"capitilize font-14\"> Apply </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card class=\"card\">\n          <ion-card-header class=\"ion-text-center\">\n            <ion-card-subtitle color=\"warning\">Gold</ion-card-subtitle>\n            <ion-card-subtitle color=\"warning\">$199 /Year</ion-card-subtitle>\n          </ion-card-header>\n\n          <ion-card-content class=\"font-12\">\n            Products per store: 16\n            StoreType: Premium\n            Microsite: true\n            Exposure level: Continental\n\n            Free Leads (Monthly): 10\n            Lead Keywords: 10\n            Adverts: true\n          </ion-card-content>\n          <ion-row >\n            <ion-col size=\"12\" class=\"no-padding\">\n              <ion-button expand=\"block\" color=\"primary\" class=\"capitilize font-14\"> Apply </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n\n      </ion-col>\n      <ion-col>\n        <ion-card class=\"card\">\n          <ion-card-header class=\"ion-text-center\">\n            <ion-card-subtitle>Platinum</ion-card-subtitle>\n            <ion-card-subtitle>$399 /Year</ion-card-subtitle>\n          </ion-card-header>\n\n          <ion-card-content class=\"font-12\">\n            Products per store: 32\n            StoreType: Premium\n            Microsite: true\n            Exposure level: Global\n            Free Leads (Monthly): 20\n            Lead Keywords: 15\n            Adverts: true\n          </ion-card-content>\n          <ion-row >\n            <ion-col size=\"12\" class=\"no-padding\">\n              <ion-button expand=\"block\" color=\"primary\" class=\"capitilize font-14\"> Apply </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/become-supplier/become-supplier-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/become-supplier/become-supplier-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: BecomeSupplierPageRoutingModule */

  /***/
  function srcAppBecomeSupplierBecomeSupplierRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BecomeSupplierPageRoutingModule", function () {
      return BecomeSupplierPageRoutingModule;
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


    var _become_supplier_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./become-supplier.page */
    "./src/app/become-supplier/become-supplier.page.ts");

    const routes = [{
      path: '',
      component: _become_supplier_page__WEBPACK_IMPORTED_MODULE_3__["BecomeSupplierPage"]
    }];
    let BecomeSupplierPageRoutingModule = class BecomeSupplierPageRoutingModule {};
    BecomeSupplierPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BecomeSupplierPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/become-supplier/become-supplier.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/become-supplier/become-supplier.module.ts ***!
    \***********************************************************/

  /*! exports provided: BecomeSupplierPageModule */

  /***/
  function srcAppBecomeSupplierBecomeSupplierModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BecomeSupplierPageModule", function () {
      return BecomeSupplierPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _become_supplier_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./become-supplier-routing.module */
    "./src/app/become-supplier/become-supplier-routing.module.ts");
    /* harmony import */


    var _become_supplier_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./become-supplier.page */
    "./src/app/become-supplier/become-supplier.page.ts");
    /* harmony import */


    var _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../sharedComponents/shared-components.module */
    "./src/app/sharedComponents/shared-components.module.ts");
    /* harmony import */


    var _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shell/shell.module */
    "./src/app/shell/shell.module.ts");

    let BecomeSupplierPageModule = class BecomeSupplierPageModule {};
    BecomeSupplierPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _become_supplier_routing_module__WEBPACK_IMPORTED_MODULE_5__["BecomeSupplierPageRoutingModule"], _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ShellModule"]],
      declarations: [_become_supplier_page__WEBPACK_IMPORTED_MODULE_6__["BecomeSupplierPage"]]
    })], BecomeSupplierPageModule);
    /***/
  },

  /***/
  "./src/app/become-supplier/become-supplier.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/become-supplier/become-supplier.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBecomeSupplierBecomeSupplierPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlY29tZS1zdXBwbGllci9iZWNvbWUtc3VwcGxpZXIucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/become-supplier/become-supplier.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/become-supplier/become-supplier.page.ts ***!
    \*********************************************************/

  /*! exports provided: BecomeSupplierPage */

  /***/
  function srcAppBecomeSupplierBecomeSupplierPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BecomeSupplierPage", function () {
      return BecomeSupplierPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let BecomeSupplierPage = class BecomeSupplierPage {
      constructor() {
        /// Inputs
        this.title = 'Become a Supplier';
        this.longSearch = false;
        this.showBackButton = true;
        this.loading = false;
        this.showSearch = false;
      }

      ngOnInit() {}

    };
    BecomeSupplierPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-become-supplier',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./become-supplier.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/become-supplier/become-supplier.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./become-supplier.page.scss */
      "./src/app/become-supplier/become-supplier.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], BecomeSupplierPage);
    /***/
  }
}]);
//# sourceMappingURL=become-supplier-become-supplier-module-es5.js.map