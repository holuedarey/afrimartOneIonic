(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fund-wallet-fund-wallet-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/fund-wallet/fund-wallet.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fund-wallet/fund-wallet.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFundWalletFundWalletPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header [title]=\"title\" [longSearch]=\"longSearch\" [showBackButton]=\"showBackButton\" [isLoading]=\"loading\"\n  [showSearch]=\"showSearch\">\n</app-header>\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/fund-wallet/fund-wallet.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/fund-wallet/fund-wallet.module.ts ***!
    \***************************************************/

  /*! exports provided: FundWalletPageModule */

  /***/
  function srcAppFundWalletFundWalletModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FundWalletPageModule", function () {
      return FundWalletPageModule;
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


    var _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../sharedComponents/shared-components.module */
    "./src/app/sharedComponents/shared-components.module.ts");
    /* harmony import */


    var _fund_wallet_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./fund-wallet.page */
    "./src/app/fund-wallet/fund-wallet.page.ts");

    let FundWalletPageModule = class FundWalletPageModule {};
    FundWalletPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _fund_wallet_page__WEBPACK_IMPORTED_MODULE_7__["FundWalletPage"]
      }]), _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"]],
      declarations: [_fund_wallet_page__WEBPACK_IMPORTED_MODULE_7__["FundWalletPage"]]
    })], FundWalletPageModule);
    /***/
  },

  /***/
  "./src/app/fund-wallet/fund-wallet.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/fund-wallet/fund-wallet.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFundWalletFundWalletPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1bmQtd2FsbGV0L2Z1bmQtd2FsbGV0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/fund-wallet/fund-wallet.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/fund-wallet/fund-wallet.page.ts ***!
    \*************************************************/

  /*! exports provided: FundWalletPage */

  /***/
  function srcAppFundWalletFundWalletPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FundWalletPage", function () {
      return FundWalletPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let FundWalletPage = class FundWalletPage {
      ////////////////////
      constructor() {
        ///Inputs
        this.title = 'Wallet Top Up';
        this.longSearch = false;
        this.showBackButton = false;
        this.loading = false;
        this.showSearch = false;
      }

      ngOnInit() {}

    };
    FundWalletPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fund-wallet',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fund-wallet.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/fund-wallet/fund-wallet.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fund-wallet.page.scss */
      "./src/app/fund-wallet/fund-wallet.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FundWalletPage);
    /***/
  }
}]);
//# sourceMappingURL=fund-wallet-fund-wallet-module-es5.js.map