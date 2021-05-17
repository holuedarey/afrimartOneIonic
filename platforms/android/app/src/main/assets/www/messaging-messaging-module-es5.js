(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messaging-messaging-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/messaging/messaging.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messaging/messaging.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMessagingMessagingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>messaging</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <super-tabs height=\"100%\">\n    <super-tab [root]=\"contact\" title=\"Contact\"></super-tab>\n    <super-tab [root]=\"chat\" title=\"Chat\"></super-tab>\n  </super-tabs> -->\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/messaging/messaging-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/messaging/messaging-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: MessagingPageRoutingModule */

  /***/
  function srcAppMessagingMessagingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagingPageRoutingModule", function () {
      return MessagingPageRoutingModule;
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


    var _messaging_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./messaging.page */
    "./src/app/messaging/messaging.page.ts");

    const routes = [{
      path: '',
      component: _messaging_page__WEBPACK_IMPORTED_MODULE_3__["MessagingPage"]
    }];
    let MessagingPageRoutingModule = class MessagingPageRoutingModule {};
    MessagingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MessagingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/messaging/messaging.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/messaging/messaging.module.ts ***!
    \***********************************************/

  /*! exports provided: MessagingPageModule */

  /***/
  function srcAppMessagingMessagingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagingPageModule", function () {
      return MessagingPageModule;
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


    var _messaging_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./messaging-routing.module */
    "./src/app/messaging/messaging-routing.module.ts");
    /* harmony import */


    var _messaging_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./messaging.page */
    "./src/app/messaging/messaging.page.ts");

    let MessagingPageModule = class MessagingPageModule {};
    MessagingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _messaging_routing_module__WEBPACK_IMPORTED_MODULE_5__["MessagingPageRoutingModule"]],
      declarations: [_messaging_page__WEBPACK_IMPORTED_MODULE_6__["MessagingPage"]]
    })], MessagingPageModule);
    /***/
  },

  /***/
  "./src/app/messaging/messaging.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/messaging/messaging.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppMessagingMessagingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2luZy9tZXNzYWdpbmcucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/messaging/messaging.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/messaging/messaging.page.ts ***!
    \*********************************************/

  /*! exports provided: MessagingPage */

  /***/
  function srcAppMessagingMessagingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagingPage", function () {
      return MessagingPage;
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


    var _chat_message_chat_message_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../chat-message/chat-message.page */
    "./src/app/chat-message/chat-message.page.ts");
    /* harmony import */


    var _contact_message_contact_message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../contact-message/contact-message.page */
    "./src/app/contact-message/contact-message.page.ts");

    let MessagingPage = class MessagingPage {
      constructor() {
        this.contact = _contact_message_contact_message_page__WEBPACK_IMPORTED_MODULE_3__["ContactMessagePage"];
        this.chat = _chat_message_chat_message_page__WEBPACK_IMPORTED_MODULE_2__["ChatMessagePage"];
      }

      ngOnInit() {}

    };
    MessagingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-messaging',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./messaging.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/messaging/messaging.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./messaging.page.scss */
      "./src/app/messaging/messaging.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], MessagingPage);
    /***/
  }
}]);
//# sourceMappingURL=messaging-messaging-module-es5.js.map