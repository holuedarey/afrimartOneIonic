(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-message-chat-message-module"],{

/***/ "./src/app/chat-message/chat-message-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/chat-message/chat-message-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ChatMessagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessagePageRoutingModule", function() { return ChatMessagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chat_message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-message.page */ "./src/app/chat-message/chat-message.page.ts");




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

/***/ "./src/app/chat-message/chat-message.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/chat-message/chat-message.module.ts ***!
  \*****************************************************/
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
/* harmony import */ var _chat_message_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-message-routing.module */ "./src/app/chat-message/chat-message-routing.module.ts");
/* harmony import */ var _chat_message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-message.page */ "./src/app/chat-message/chat-message.page.ts");







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



/***/ })

}]);
//# sourceMappingURL=chat-message-chat-message-module-es2015.js.map