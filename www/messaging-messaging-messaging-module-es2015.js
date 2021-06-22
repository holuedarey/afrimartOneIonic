(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messaging-messaging-messaging-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/messaging/chat-message/chat-message.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messaging/chat-message/chat-message.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-card class=\"messaging-card\">\n    <ion-card-content>\n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-icon src=\"/assets/vectors/icons/chatIcon.svg\" style=\"width: 46px; height: 46px;\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"9\">\n          <ion-card-subtitle class=\"font-12\">Jay Jay</ion-card-subtitle>\n          <ion-card-subtitle class=\"font-12\">My Dashboard not responding...</ion-card-subtitle>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"messaging-card\">\n    <ion-card-content>\n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-icon src=\"/assets/vectors/icons/chatIcon.svg\" style=\"width: 46px; height: 46px;\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"9\">\n          <ion-card-subtitle class=\"font-12\">Jay Jay</ion-card-subtitle>\n          <ion-card-subtitle class=\"font-12\">My Dashboard not responding...</ion-card-subtitle>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class=\"messaging-card\">\n    <ion-card-content>\n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-icon src=\"/assets/vectors/icons/chatIcon.svg\" style=\"width: 46px; height: 46px;\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"9\">\n          <ion-card-subtitle class=\"font-12\">Jay Jay</ion-card-subtitle>\n          <ion-card-subtitle class=\"font-12\">My Dashboard not responding...</ion-card-subtitle>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/messaging/contact-message/contact-message.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messaging/contact-message/contact-message.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-card class=\"messaging-card\">\n    <ion-card-content>\n     <ion-row>\n       <ion-col size=\"1\">\n          1\n       </ion-col>\n       <ion-col size=\"10\">\n        <ion-card-subtitle class=\"font-12\">Wazobia John</ion-card-subtitle>\n        <ion-card-subtitle class=\"font-12\">example@gmail.com</ion-card-subtitle>\n       </ion-col>\n     </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"messaging-card\">\n    <ion-card-content>\n     <ion-row>\n       <ion-col size=\"1\">\n          2\n       </ion-col>\n       <ion-col size=\"10\">\n        <ion-card-subtitle class=\"font-12\">Wazobia John</ion-card-subtitle>\n        <ion-card-subtitle class=\"font-12\">example@gmail.com</ion-card-subtitle>\n       </ion-col>\n     </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"messaging-card\">\n    <ion-card-content>\n     <ion-row>\n       <ion-col size=\"1\">\n          3\n       </ion-col>\n       <ion-col size=\"10\">\n        <ion-card-subtitle class=\"font-12\">Wazobia John</ion-card-subtitle>\n        <ion-card-subtitle class=\"font-12\">example@gmail.com</ion-card-subtitle>\n       </ion-col>\n     </ion-row>\n    </ion-card-content>\n  </ion-card>\n  \n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/messaging/messaging/messaging.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messaging/messaging/messaging.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"title\" [longSearch]=\"longSearch\" [showBackButton]=\"showBackButton\" [isLoading]=\"loading\"\n  [showSearch]=\"showSearch\">\n</app-header>\n<ion-content>\n  <super-tabs activeTabIndex=\"0\" [config]=\"{ debug: true, sideMenu: 'left', allowElementScroll: true, nativeSmoothScroll: true }\">\n    <super-tabs-toolbar slot=\"top\" class=\"top-bar\">\n      <super-tab-button>\n        <ion-label>Contacts</ion-label>\n      </super-tab-button>\n      <super-tab-button>\n        <ion-label>Message</ion-label>\n      </super-tab-button>\n    </super-tabs-toolbar>\n  \n    <super-tabs-container autoScrollTop>\n      <super-tab>\n        <ion-nav [root]=\"contact\"></ion-nav>\n      </super-tab>\n      <super-tab>\n        <ion-nav [root]=\"chat\"></ion-nav>\n      </super-tab>\n    </super-tabs-container>\n  </super-tabs>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/messaging/chat-message/chat-message-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/messaging/chat-message/chat-message-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ChatMessagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessagePageRoutingModule", function() { return ChatMessagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chat_message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-message.page */ "./src/app/messaging/chat-message/chat-message.page.ts");




const routes = [
    {
        path: '',
        component: _chat_message_page__WEBPACK_IMPORTED_MODULE_3__["ChatMessagePage"]
    }
];
let ChatMessagePageRoutingModule = class ChatMessagePageRoutingModule {
};
ChatMessagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatMessagePageRoutingModule);



/***/ }),

/***/ "./src/app/messaging/chat-message/chat-message.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/messaging/chat-message/chat-message.module.ts ***!
  \***************************************************************/
/*! exports provided: ChatMessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessagePageModule", function() { return ChatMessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _chat_message_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-message-routing.module */ "./src/app/messaging/chat-message/chat-message-routing.module.ts");
/* harmony import */ var _chat_message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-message.page */ "./src/app/messaging/chat-message/chat-message.page.ts");







let ChatMessagePageModule = class ChatMessagePageModule {
};
ChatMessagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chat_message_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatMessagePageRoutingModule"]
        ],
        declarations: [_chat_message_page__WEBPACK_IMPORTED_MODULE_6__["ChatMessagePage"]]
    })
], ChatMessagePageModule);



/***/ }),

/***/ "./src/app/messaging/chat-message/chat-message.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/messaging/chat-message/chat-message.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2luZy9jaGF0LW1lc3NhZ2UvY2hhdC1tZXNzYWdlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/messaging/chat-message/chat-message.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/messaging/chat-message/chat-message.page.ts ***!
  \*************************************************************/
/*! exports provided: ChatMessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessagePage", function() { return ChatMessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatMessagePage = class ChatMessagePage {
    constructor() { }
    ngOnInit() {
    }
};
ChatMessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-message',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-message.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/messaging/chat-message/chat-message.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-message.page.scss */ "./src/app/messaging/chat-message/chat-message.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ChatMessagePage);



/***/ }),

/***/ "./src/app/messaging/contact-message/contact-message-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/messaging/contact-message/contact-message-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ContactMessagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMessagePageRoutingModule", function() { return ContactMessagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contact_message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-message.page */ "./src/app/messaging/contact-message/contact-message.page.ts");




const routes = [
    {
        path: '',
        component: _contact_message_page__WEBPACK_IMPORTED_MODULE_3__["ContactMessagePage"]
    }
];
let ContactMessagePageRoutingModule = class ContactMessagePageRoutingModule {
};
ContactMessagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactMessagePageRoutingModule);



/***/ }),

/***/ "./src/app/messaging/contact-message/contact-message.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/messaging/contact-message/contact-message.module.ts ***!
  \*********************************************************************/
/*! exports provided: ContactMessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMessagePageModule", function() { return ContactMessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _contact_message_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-message-routing.module */ "./src/app/messaging/contact-message/contact-message-routing.module.ts");
/* harmony import */ var _contact_message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-message.page */ "./src/app/messaging/contact-message/contact-message.page.ts");







let ContactMessagePageModule = class ContactMessagePageModule {
};
ContactMessagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contact_message_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactMessagePageRoutingModule"]
        ],
        declarations: [_contact_message_page__WEBPACK_IMPORTED_MODULE_6__["ContactMessagePage"]]
    })
], ContactMessagePageModule);



/***/ }),

/***/ "./src/app/messaging/contact-message/contact-message.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/messaging/contact-message/contact-message.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2luZy9jb250YWN0LW1lc3NhZ2UvY29udGFjdC1tZXNzYWdlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/messaging/contact-message/contact-message.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/messaging/contact-message/contact-message.page.ts ***!
  \*******************************************************************/
/*! exports provided: ContactMessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMessagePage", function() { return ContactMessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactMessagePage = class ContactMessagePage {
    constructor() { }
    ngOnInit() {
    }
};
ContactMessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-message',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-message.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/messaging/contact-message/contact-message.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-message.page.scss */ "./src/app/messaging/contact-message/contact-message.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ContactMessagePage);



/***/ }),

/***/ "./src/app/messaging/messaging/messaging-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/messaging/messaging/messaging-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MessagingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingPageRoutingModule", function() { return MessagingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _messaging_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messaging.page */ "./src/app/messaging/messaging/messaging.page.ts");




const routes = [
    {
        path: '',
        component: _messaging_page__WEBPACK_IMPORTED_MODULE_3__["MessagingPage"]
    }
];
let MessagingPageRoutingModule = class MessagingPageRoutingModule {
};
MessagingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MessagingPageRoutingModule);



/***/ }),

/***/ "./src/app/messaging/messaging/messaging.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/messaging/messaging/messaging.module.ts ***!
  \*********************************************************/
/*! exports provided: MessagingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingPageModule", function() { return MessagingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _messaging_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messaging-routing.module */ "./src/app/messaging/messaging/messaging-routing.module.ts");
/* harmony import */ var _messaging_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messaging.page */ "./src/app/messaging/messaging/messaging.page.ts");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "./node_modules/@ionic-super-tabs/angular/fesm2015/ionic-super-tabs-angular.js");
/* harmony import */ var _chat_message_chat_message_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../chat-message/chat-message.module */ "./src/app/messaging/chat-message/chat-message.module.ts");
/* harmony import */ var _contact_message_contact_message_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../contact-message/contact-message.module */ "./src/app/messaging/contact-message/contact-message.module.ts");
/* harmony import */ var _shell_shell_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shell/shell.module */ "./src/app/shell/shell.module.ts");
/* harmony import */ var _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../sharedComponents/shared-components.module */ "./src/app/sharedComponents/shared-components.module.ts");












let MessagingPageModule = class MessagingPageModule {
};
MessagingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _messaging_routing_module__WEBPACK_IMPORTED_MODULE_5__["MessagingPageRoutingModule"],
            _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"],
            _chat_message_chat_message_module__WEBPACK_IMPORTED_MODULE_8__["ChatMessagePageModule"],
            _contact_message_contact_message_module__WEBPACK_IMPORTED_MODULE_9__["ContactMessagePageModule"],
            _shell_shell_module__WEBPACK_IMPORTED_MODULE_10__["ShellModule"],
            _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_11__["SharedComponentsModule"]
        ],
        declarations: [_messaging_page__WEBPACK_IMPORTED_MODULE_6__["MessagingPage"]]
    })
], MessagingPageModule);



/***/ }),

/***/ "./src/app/messaging/messaging/messaging.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/messaging/messaging/messaging.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top-bar {\n  height: 34px;\n  background: #EBF0E3;\n  --st-indicator-color:#00733F;\n  --st-scrollable-toolbar-padding-left:100px;\n}\n.top-bar super-tab-button {\n  height: 35px;\n  --st-base-color-active: #00733F;\n  --st-base-color-inactive: #343434;\n}\n.top-bar super-tab-button ion-label {\n  font-size: 12px !important;\n  text-transform: capitalize !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnaW5nL21lc3NhZ2luZy9DOlxcUHJvamVjdFxcQW5ndWxhclxcZWFzeW1hbGxfbm9ub2RlICgxKVxcZWFzeW1hbGxfbm9ub2RlL3NyY1xcYXBwXFxtZXNzYWdpbmdcXG1lc3NhZ2luZ1xcbWVzc2FnaW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWVzc2FnaW5nL21lc3NhZ2luZy9tZXNzYWdpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQ0FBQTtBQ0NKO0FEQUk7RUFDSSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtBQ0VSO0FERFE7RUFDSSwwQkFBQTtFQUNBLHFDQUFBO0FDR1oiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdpbmcvbWVzc2FnaW5nL21lc3NhZ2luZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWJhcntcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIGJhY2tncm91bmQ6ICNFQkYwRTM7XHJcbiAgICAtLXN0LWluZGljYXRvci1jb2xvcjojMDA3MzNGO1xyXG4gICAgLS1zdC1zY3JvbGxhYmxlLXRvb2xiYXItcGFkZGluZy1sZWZ0OjEwMHB4O1xyXG4gICAgc3VwZXItdGFiLWJ1dHRvbntcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgLS1zdC1iYXNlLWNvbG9yLWFjdGl2ZTogIzAwNzMzRjtcclxuICAgICAgICAtLXN0LWJhc2UtY29sb3ItaW5hY3RpdmU6ICMzNDM0MzQ7ICBcclxuICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiLnRvcC1iYXIge1xuICBoZWlnaHQ6IDM0cHg7XG4gIGJhY2tncm91bmQ6ICNFQkYwRTM7XG4gIC0tc3QtaW5kaWNhdG9yLWNvbG9yOiMwMDczM0Y7XG4gIC0tc3Qtc2Nyb2xsYWJsZS10b29sYmFyLXBhZGRpbmctbGVmdDoxMDBweDtcbn1cbi50b3AtYmFyIHN1cGVyLXRhYi1idXR0b24ge1xuICBoZWlnaHQ6IDM1cHg7XG4gIC0tc3QtYmFzZS1jb2xvci1hY3RpdmU6ICMwMDczM0Y7XG4gIC0tc3QtYmFzZS1jb2xvci1pbmFjdGl2ZTogIzM0MzQzNDtcbn1cbi50b3AtYmFyIHN1cGVyLXRhYi1idXR0b24gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/messaging/messaging/messaging.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/messaging/messaging/messaging.page.ts ***!
  \*******************************************************/
/*! exports provided: MessagingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingPage", function() { return MessagingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _chat_message_chat_message_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat-message/chat-message.page */ "./src/app/messaging/chat-message/chat-message.page.ts");
/* harmony import */ var _contact_message_contact_message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact-message/contact-message.page */ "./src/app/messaging/contact-message/contact-message.page.ts");




let MessagingPage = class MessagingPage {
    constructor() {
        this.contact = _contact_message_contact_message_page__WEBPACK_IMPORTED_MODULE_3__["ContactMessagePage"];
        this.chat = _chat_message_chat_message_page__WEBPACK_IMPORTED_MODULE_2__["ChatMessagePage"];
        ///Inputs
        this.title = '';
        this.longSearch = true;
        this.showBackButton = false;
        this.loading = false;
        this.showSearch = true;
    }
    ngOnInit() {
    }
};
MessagingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messaging',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./messaging.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/messaging/messaging/messaging.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./messaging.page.scss */ "./src/app/messaging/messaging/messaging.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MessagingPage);



/***/ })

}]);
//# sourceMappingURL=messaging-messaging-messaging-module-es2015.js.map