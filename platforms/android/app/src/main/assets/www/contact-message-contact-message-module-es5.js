(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-message-contact-message-module"], {
  /***/
  "./src/app/contact-message/contact-message-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/contact-message/contact-message-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ContactMessagePageRoutingModule */

  /***/
  function srcAppContactMessageContactMessageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactMessagePageRoutingModule", function () {
      return ContactMessagePageRoutingModule;
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


    var _contact_message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contact-message.page */
    "./src/app/contact-message/contact-message.page.ts");

    const routes = [{
      path: '',
      component: _contact_message_page__WEBPACK_IMPORTED_MODULE_3__["ContactMessagePage"]
    }];
    let ContactMessagePageRoutingModule = class ContactMessagePageRoutingModule {};
    ContactMessagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ContactMessagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/contact-message/contact-message.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/contact-message/contact-message.module.ts ***!
    \***********************************************************/

  /*! exports provided: ContactMessagePageModule */

  /***/
  function srcAppContactMessageContactMessageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactMessagePageModule", function () {
      return ContactMessagePageModule;
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


    var _contact_message_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contact-message-routing.module */
    "./src/app/contact-message/contact-message-routing.module.ts");
    /* harmony import */


    var _contact_message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contact-message.page */
    "./src/app/contact-message/contact-message.page.ts");

    let ContactMessagePageModule = class ContactMessagePageModule {};
    ContactMessagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _contact_message_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactMessagePageRoutingModule"]],
      declarations: [_contact_message_page__WEBPACK_IMPORTED_MODULE_6__["ContactMessagePage"]]
    })], ContactMessagePageModule);
    /***/
  }
}]);
//# sourceMappingURL=contact-message-contact-message-module-es5.js.map