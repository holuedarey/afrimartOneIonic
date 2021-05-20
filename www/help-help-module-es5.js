(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["help-help-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHelpHelpPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header [title]=\"title\" [longSearch]=\"longSearch\" [showBackButton]=\"showBackButton\" [isLoading]=\"loading\"\n  [showSearch]=\"showSearch\">\n</app-header>\n<ion-content padding>\n  \n  <ion-row class=\"gridSubCatHeader\">\n    <ion-col size=\"12\" style=\"text-align: left;\" class=\"note_title_bold16Sec background-general-header\">\n      <ion-text>FAQS</ion-text>\n    </ion-col>\n  </ion-row>\n<app-accordion \n     *ngFor=\"let faq of faqs\" \n     name=\"{{ faq.name }}\" \n     description=\"{{ faq.description }}\" \n     >\n</app-accordion>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/help/help.module.ts":
  /*!*************************************!*\
    !*** ./src/app/help/help.module.ts ***!
    \*************************************/

  /*! exports provided: HelpPageModule */

  /***/
  function srcAppHelpHelpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpPageModule", function () {
      return HelpPageModule;
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


    var _help_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./help.page */
    "./src/app/help/help.page.ts");

    let HelpPageModule = class HelpPageModule {};
    HelpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _help_page__WEBPACK_IMPORTED_MODULE_7__["HelpPage"]
      }]), _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"]],
      declarations: [_help_page__WEBPACK_IMPORTED_MODULE_7__["HelpPage"]]
    })], HelpPageModule);
    /***/
  },

  /***/
  "./src/app/help/help.page.scss":
  /*!*************************************!*\
    !*** ./src/app/help/help.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHelpHelpPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHAvaGVscC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/help/help.page.ts":
  /*!***********************************!*\
    !*** ./src/app/help/help.page.ts ***!
    \***********************************/

  /*! exports provided: HelpPage */

  /***/
  function srcAppHelpHelpPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpPage", function () {
      return HelpPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let HelpPage = class HelpPage {
      /////////////////////////////
      constructor() {
        this.title = 'Help';
        this.longSearch = false;
        this.showBackButton = false;
        this.loading = false;
        this.showSearch = true; ////////////////////

        this.faqs = [{
          name: 'How can I cancel an order?',
          description: 'Please call or send a mail to help@afrimartone.com. Note, if your order has already been shipped, simply reject the item upon delivery.',
          image: ''
        }, {
          name: 'How can I track my order?',
          description: 'Please enter your order number in our tracking page to know the status of your order. If you do not know your order number, check your order confirmation mail or you can contact us.',
          image: ''
        }, {
          name: 'How can I return an order?',
          description: 'You can call us via 07081667175 to make a return request. Please take the items you wish to return to a pick-up station near you within 3 business days. Kindly find pickup station locations here',
          image: ''
        }, {
          name: 'How long will it take to return an item and get my refund?',
          description: 'Within 1 – 3 business days',
          image: ''
        }, {
          name: 'Once I initiate a return, what happens next?',
          description: 'The item would be inspected to confirm return reason after which a refund, replacement or re-delivery will be processed.',
          image: ''
        }, {
          name: 'Can I return my item after the stated returns timeline?',
          description: 'You will not be able to return other eligible items after 7 days but if it is faulty, it may be covered under warranty. Can I Replace or Exchange an item rather than a refund? Yes you can.',
          image: ''
        }, {
          name: 'Where are service centers?',
          description: 'Service centers are locations your devices can be fixed. You will be referred to one upon request',
          image: ''
        }];
      }

      captureName(event) {
        console.log("Captured name by event value: ".concat(event));
      }

    };
    HelpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-help',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./help.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./help.page.scss */
      "./src/app/help/help.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], HelpPage);
    /***/
  }
}]);
//# sourceMappingURL=help-help-module-es5.js.map