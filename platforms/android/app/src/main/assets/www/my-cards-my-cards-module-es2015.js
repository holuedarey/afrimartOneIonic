(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-cards-my-cards-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-cards/my-cards.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-cards/my-cards.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\n  [title]=\"title\"\n  [longSearch]=\"longSearch\"\n  [showBackButton]=\"showBackButton\"\n  [isLoading]=\"loading\"\n  [showSearch]=\"showSearch\"\n>\n</app-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"8\" class=\"t_left note_title_bold14Sec\">\n      {{cards_count}} CARD(S)\n    </ion-col>\n    <ion-col size=\"4\" class=\"t_right\">\n      <a (click)=\"presentCardModal()\" class=\"note_title_bold12Sec\">\n        <ion-icon name=\"add-outline\"></ion-icon>\n        ADD NEW CARD</a\n      >\n    </ion-col>\n  </ion-row>\n\n  <div *ngIf=\"lt_cards\">\n    <ion-list *ngFor=\"let x of lt_cards;let i=index\" lines=\"none\">\n      <ion-item-sliding id=\"item100\">\n        <ion-item [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\">\n          <ion-icon\n            ion-text\n            color=\"dark\"\n            name=\"card-outline\"\n            item-start\n          ></ion-icon>\n          <ion-label>\n            <h3><b>{{x.bank}}</b></h3>\n            <h5>{{x.bin}} ********** {{x.last4}} ({{x.brand}})</h5>\n            <h5><b>Exp:</b> {{x.expMonth}}/{{x.expYear}}</h5>\n          </ion-label>\n          <ion-note slot=\"end\" *ngIf=\"x.isDefault\">\n            <ion-icon color=\"primary\" name=\"checkmark-circle\"></ion-icon>\n            <div style=\"font-size: 12px; color: #bc4dad;\">Default</div>\n          </ion-note>\n        </ion-item>\n        <ion-item-options side=\"end\">\n          <ion-item-option\n            color=\"success\"\n            (click)=\"makeDefault(x)\"\n            *ngIf=\"!x.isDefault\"\n          >\n            <ion-icon slot=\"icon-only\" name=\"checkmark\"></ion-icon> Make Default\n          </ion-item-option>\n          <ion-item-option color=\"danger\" (click)=\"deleteConfirm(x)\">\n            <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon> Delete\n          </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n    <br>\n    <ion-note class=\"note_title_bold14Black\">&nbsp;&nbsp;Please swipe a card to the right for the menu!!</ion-note>\n  </div>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/core/http-services/user.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/http-services/user.service.ts ***!
  \****************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_models_storage_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/models/storage.model */ "./src/app/shared/models/storage.model.ts");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../authentication/authentication.service */ "./src/app/core/authentication/authentication.service.ts");
/* harmony import */ var _common_endpoints__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/endpoints */ "./src/app/core/common/endpoints.ts");









let UserService = class UserService {
    constructor(http, nativeStorage, authService) {
        this.http = http;
        this.nativeStorage = nativeStorage;
        this.authService = authService;
        this.apiUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}auth/`;
        this.getUser = () => {
            return this.nativeStorage.getItem('currentUser').then((dt) => {
                if (dt) {
                    return dt;
                }
                else {
                    return null;
                }
            }, (err) => {
                return null;
            });
        };
        this.getUsername = () => {
            return this.nativeStorage.getItem('currentUser').then((dt) => {
                if (dt) {
                    return dt.user.fName + " " + dt.user.sName;
                }
                else {
                    return null;
                }
            }, (err) => {
                return null;
            });
        };
    }
    headerSetter(token) {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            channel: "mobile",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        });
    }
    headerSt() {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            channel: "mobile",
            "Content-Type": "application/json",
        });
    }
    getSlides() {
        return this.http.get(`${this.apiUrl}resources/slide`);
    }
    register(body) {
        return this.http.post(_common_endpoints__WEBPACK_IMPORTED_MODULE_8__["Endpoint"].AUTH.register, body);
    }
    changePassword(body) {
        return this.http.post(_common_endpoints__WEBPACK_IMPORTED_MODULE_8__["Endpoint"].USER.changePassword, body);
    }
    ResendEmailVerificationCode(email) {
        return this.http.get(`${_common_endpoints__WEBPACK_IMPORTED_MODULE_8__["Endpoint"].AUTH.resendVerify}?email=${email}`);
    }
    verifyEmailCode(token) {
        return this.http.get(`${_common_endpoints__WEBPACK_IMPORTED_MODULE_8__["Endpoint"].AUTH.verify}?token=${token}`);
    }
    requestForPasswordResetLink(body) {
        return this.http.post(_common_endpoints__WEBPACK_IMPORTED_MODULE_8__["Endpoint"].AUTH.initiatePasswordReset, body);
    }
    resetPassword(token) {
        return this.http.get(`${_common_endpoints__WEBPACK_IMPORTED_MODULE_8__["Endpoint"].AUTH.verifyPasswordReset}?token=${token}`);
    }
    updateProfile(body) {
        return this.http
            .put(_common_endpoints__WEBPACK_IMPORTED_MODULE_8__["Endpoint"].USER.editProfile, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => {
            if (!res.error) {
                const user = this.authService.currentUserValue();
                user.user = res.data;
                localStorage.setItem(Object(src_app_shared_models_storage_model__WEBPACK_IMPORTED_MODULE_6__["getStorageName"])(src_app_shared_models_storage_model__WEBPACK_IMPORTED_MODULE_6__["storageNamesEnum"].currentUser), JSON.stringify(user));
                this.authService.currentUserSubject.next(user);
            }
            return res;
        }));
    }
    getProfile(token) {
        return this.http.get(_common_endpoints__WEBPACK_IMPORTED_MODULE_8__["Endpoint"].USER.profile);
    }
    getAddresses(token) {
        return this.http.get(`${this.apiUrl}addresses`, {
            headers: this.headerSetter(token),
        });
    }
    getAddress(id) {
        return this.http.get(`${this.apiUrl}addresses/${id}`);
    }
    deleteAddress(token, id) {
        return this.http.delete(`${this.apiUrl}addresses/${id}`, {
            headers: this.headerSetter(token),
        });
    }
    updateAddress(token, id, body) {
        return this.http.put(`${this.apiUrl}addresses/${id}`, body, {
            headers: this.headerSetter(token),
        });
    }
    addAddress(token, body) {
        return this.http.post(`${this.apiUrl}addresses`, body, {
            headers: this.headerSetter(token),
        });
    }
    becomeSeller(token, body) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/merchants/become-merchant`, body, {
            headers: this.headerSetter(token),
        });
    }
    getStatesLgas() {
        return this.http.get(`../../../assets/states.json`);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"] },
    { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"],
        _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]])
], UserService);



/***/ }),

/***/ "./src/app/my-cards/my-cards.module.ts":
/*!*********************************************!*\
  !*** ./src/app/my-cards/my-cards.module.ts ***!
  \*********************************************/
/*! exports provided: MyCardsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCardsPageModule", function() { return MyCardsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sharedComponents/shared-components.module */ "./src/app/sharedComponents/shared-components.module.ts");
/* harmony import */ var _my_cards_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-cards.page */ "./src/app/my-cards/my-cards.page.ts");








let MyCardsPageModule = class MyCardsPageModule {
};
MyCardsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _my_cards_page__WEBPACK_IMPORTED_MODULE_7__["MyCardsPage"]
                }
            ]),
            _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"]
        ],
        declarations: [_my_cards_page__WEBPACK_IMPORTED_MODULE_7__["MyCardsPage"]]
    })
], MyCardsPageModule);



/***/ }),

/***/ "./src/app/my-cards/my-cards.page.scss":
/*!*********************************************!*\
  !*** ./src/app/my-cards/my-cards.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background:#ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktY2FyZHMvQzpcXFByb2plY3RcXEFuZ3VsYXJcXGVhc3ltYWxsX25vbm9kZSAoMSlcXGVhc3ltYWxsX25vbm9kZS9zcmNcXGFwcFxcbXktY2FyZHNcXG15LWNhcmRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbXktY2FyZHMvbXktY2FyZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL215LWNhcmRzL215LWNhcmRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDojZmZmZmZmO1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XG59Il19 */");

/***/ }),

/***/ "./src/app/my-cards/my-cards.page.ts":
/*!*******************************************!*\
  !*** ./src/app/my-cards/my-cards.page.ts ***!
  \*******************************************/
/*! exports provided: MyCardsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCardsPage", function() { return MyCardsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var src_app_card_modal_card_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/card-modal/card-modal.page */ "./src/app/card-modal/card-modal.page.ts");
/* harmony import */ var src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/authentication/authentication.service */ "./src/app/core/authentication/authentication.service.ts");
/* harmony import */ var src_app_core_http_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/http-services/user.service */ "./src/app/core/http-services/user.service.ts");







let MyCardsPage = class MyCardsPage {
    constructor(nativeStorage, modalCtrl, authService, userService, toastController) {
        this.nativeStorage = nativeStorage;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.userService = userService;
        this.toastController = toastController;
        ///Inputs
        this.title = 'My Cards';
        this.longSearch = false;
        this.showBackButton = true;
        this.loading = false;
        this.showSearch = true;
        // lt_account_cards = new Array();
        this.cards_count = 0;
    }
    ngOnInit() {
        this.loading = true;
        this.nativeStorage.getItem('currentUser').then((x) => {
            this.currentUser = x;
            this.userService.getProfile(this.currentUser.token).subscribe((data) => {
                if (!data.error) {
                    // console.log('this.profile:' + JSON.stringify(data.data));
                    if (data.data.cards) {
                        this.lt_cards = data.data.cards;
                        this.nativeStorage.setItem('MyCards', data.data.cards);
                        this.nativeStorage.getItem("MyCards").then(data => {
                            if (data) {
                                console.log('Native MyCards:' + JSON.stringify(data));
                            }
                        }, err => { console.error(err); });
                        this.cards_count = this.lt_cards.length;
                        this.loading = false;
                    }
                }
                else {
                    this.loading = false;
                    this.presentToast('OOPS', 'There was an error getting your profile, Please try again', 4000, 'warning');
                }
            }, (err) => {
                this.loading = false;
                this.presentToast(err.message, err.errors, 4000, 'error');
            });
        });
    }
    presentToast(header, msg, duration, color) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: header,
                position: 'bottom',
                message: msg,
                duration: duration,
                // cssClass: 'custom-toast-class',
                color: color,
            });
            toast.present();
        });
    }
    presentCardModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_card_modal_card_modal_page__WEBPACK_IMPORTED_MODULE_4__["CardModalPage"],
                componentProps: {},
            });
            return yield modal.present().then(() => {
                modal.onWillDismiss().then((d) => {
                    if (d.data.card) {
                        console.log('New Card Data: ' + JSON.stringify(d.data.card));
                        this.lt_cards = d.data.card;
                        this.nativeStorage.setItem('MyCards', d.data.cards);
                        this.cards_count = this.lt_cards.length;
                    }
                });
            });
        });
    }
    makeDefault(card) {
        console.log('makeDefault:' + JSON.stringify(card));
    }
    deleteConfirm(card) {
        console.log('deleteConfirm:' + JSON.stringify(card));
    }
};
MyCardsPage.ctorParameters = () => [
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] },
    { type: src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: src_app_core_http_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] }
];
MyCardsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-my-cards',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-cards.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-cards/my-cards.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-cards.page.scss */ "./src/app/my-cards/my-cards.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
        src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
        src_app_core_http_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])
], MyCardsPage);



/***/ })

}]);
//# sourceMappingURL=my-cards-my-cards-module-es2015.js.map