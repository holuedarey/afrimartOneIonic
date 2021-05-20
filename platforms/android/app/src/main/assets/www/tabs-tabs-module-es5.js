(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"home\">\n      <ion-icon src=\"/assets/vectors/icons/menu/Home.svg\"></ion-icon>\n      <ion-label class=\"tab-title\">Home</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"categories\">\n      <!-- <ion-icon name=\"cat-menu-outline\"></ion-icon> -->\n      <ion-icon src=\"/assets/vectors/icons/menu/Category.svg\"></ion-icon>\n      <ion-label class=\"tab-title\">Categories</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"profile\">\n      <ion-icon src=\"/assets/vectors/icons/menu/Profile.svg\"></ion-icon>\n      <ion-label class=\"tab-title\">Account</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"help\">\n      <!-- <ion-icon name=\"help-outline\"></ion-icon> -->\n      <ion-icon src=\"/assets/vectors/icons/menu/Help.svg\"></ion-icon>\n      <ion-label class=\"tab-title\">Help</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";
    /***/
  },

  /***/
  "./src/app/tabs/styles/tabs.page.scss":
  /*!********************************************!*\
    !*** ./src/app/tabs/styles/tabs.page.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsStylesTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-tab-button {\n  --color: var(--ion-color-medium-shade);\n  --color-selected: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL0lvbmljL2FmcmltYXJ0b25lL3NyYy9hcHAvdGFicy9zdHlsZXMvdGFicy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYnMvc3R5bGVzL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usc0NBQUE7RUFDQSwwQ0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvdGFicy9zdHlsZXMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbmlvbi10YWItYnV0dG9uIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbiIsImlvbi10YWItYnV0dG9uIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tabs/tabs.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.module.ts ***!
    \*************************************/

  /*! exports provided: TabsPageModule */

  /***/
  function srcAppTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs.router.module */
    "./src/app/tabs/tabs.router.module.ts");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");

    let TabsPageModule = class TabsPageModule {};
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })], TabsPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tabs/tabs.page.ts ***!
    \***********************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let TabsPage = class TabsPage {
      constructor() {}

    };
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/tabs.page.scss */
      "./src/app/tabs/styles/tabs.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TabsPage);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.router.module.ts":
  /*!********************************************!*\
    !*** ./src/app/tabs/tabs.router.module.ts ***!
    \********************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppTabsTabsRouterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");

    const routes = [{
      path: '',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_4__["TabsPage"],
      children: [{
        path: 'home',
        loadChildren: () => Promise.all(
        /*! import() | home-home-module */
        [__webpack_require__.e("default~address-book-address-book-module~become-supplier-become-supplier-module~cart-cart-module~cat~1ae0154c"), __webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
        /*! ../home/home.module */
        "./src/app/home/home.module.ts")).then(m => m.HomePageModule)
      }, {
        path: 'categories',
        loadChildren: () => Promise.all(
        /*! import() | categories-categories-module */
        [__webpack_require__.e("default~address-book-address-book-module~become-supplier-become-supplier-module~cart-cart-module~cat~1ae0154c"), __webpack_require__.e("common"), __webpack_require__.e("categories-categories-module")]).then(__webpack_require__.bind(null,
        /*! ../categories/categories.module */
        "./src/app/categories/categories.module.ts")).then(m => m.CategoriesPageModule)
      }, {
        path: 'categories/:id',
        loadChildren: () => Promise.all(
        /*! import() | categories-categories-module */
        [__webpack_require__.e("default~address-book-address-book-module~become-supplier-become-supplier-module~cart-cart-module~cat~1ae0154c"), __webpack_require__.e("common"), __webpack_require__.e("categories-categories-module")]).then(__webpack_require__.bind(null,
        /*! ../categories/categories.module */
        "./src/app/categories/categories.module.ts")).then(m => m.CategoriesPageModule)
      }, {
        path: 'profile',
        loadChildren: () => Promise.all(
        /*! import() | profile-profile-module */
        [__webpack_require__.e("default~address-book-address-book-module~become-supplier-become-supplier-module~cart-cart-module~cat~1ae0154c"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null,
        /*! ../profile/profile.module */
        "./src/app/profile/profile.module.ts")).then(m => m.ProfilePageModule)
      }, {
        path: 'help',
        loadChildren: () => Promise.all(
        /*! import() | help-help-module */
        [__webpack_require__.e("default~address-book-address-book-module~become-supplier-become-supplier-module~cart-cart-module~cat~1ae0154c"), __webpack_require__.e("help-help-module")]).then(__webpack_require__.bind(null,
        /*! ../help/help.module */
        "./src/app/help/help.module.ts")).then(m => m.HelpPageModule)
      }]
    }, // /app/ redirect
    {
      path: '',
      redirectTo: 'app/home',
      pathMatch: 'full'
    }];
    let TabsPageRoutingModule = class TabsPageRoutingModule {};
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: []
    })], TabsPageRoutingModule);
    /***/
  }
}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map