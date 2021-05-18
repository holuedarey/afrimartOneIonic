(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-password-change-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"title\" [longSearch]=\"longSearch\" [showBackButton]=\"showBackButton\" [isLoading]=\"loading\"\n  [showSearch]=\"showSearch\">\n</app-header>\n<ion-content>\n  <form [formGroup]=\"changePasswordForm\">\n    <ion-grid style=\"padding-top: 10%;\">\n      <ion-row>\n        <ion-col  size=\"12\">      \n        <ion-row>\n          <ion-col col-12  class=\"colForm m-t-b-14\"> \n            <ion-item lines=\"none\" >\n                <ion-input  class=\"margin-top-input\" formControlName=\"oldPassword\"  placeholder=\"Old Password\" [type]=\"showCurrentPassword? 'text':'password'\" clear-input=\"true\"></ion-input>\n                <ion-icon  [name]=\"passwordToggleIconCur\" color=\"medium\" class=\"iconEyeSize margin-top-icon\" slot=\"end\" (click)=\"toggleCurrentPassword()\"></ion-icon> \n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 class=\"colForm m-t-b-14\">\n            <ion-item lines=\"none\" >\n              <ion-input class=\"margin-top-input\" formControlName=\"newPassword\"  placeholder=\"New Password\" [type]=\"showNewPassword? 'text':'password'\" clear-input=\"true\"> </ion-input>\n              <ion-icon  [name]=\"passwordToggleIconNew\" color=\"medium\" class=\"iconEyeSize margin-top-icon\" slot=\"end\" (click)=\"toggleNewPassword()\"></ion-icon>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 class=\"colForm m-t-b-14\">\n            <ion-item lines=\"none\" >\n              <ion-input class=\"margin-top-input\" formControlName=\"confirmPassword\"  placeholder=\"New Password\" [type]=\"showConfirmNewPassword? 'text':'password'\" clear-input=\"true\"> </ion-input>\n              <ion-icon [name]=\"passwordToggleIconCon\" color=\"medium\" class=\"iconEyeSize margin-top-icon\" slot=\"end\" (click)=\"toggleConfirmNewPassword()\"> </ion-icon>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col  size=\"12\" style=\"padding: 0px;\">\n            <div style=\"padding-top: 10px;\">\n              <ion-button expand=\"full\" color=\"primary\" (click)=\"doChangePassword()\" [disabled]=\"!changePasswordForm.valid ||loading\"> CHANGE PASSWORD </ion-button>            \n            </div> \n          </ion-col>\n        </ion-row>  \n    </ion-col>\n</ion-row>\n</ion-grid>\n \n</form>\n<ion-grid>\n<ion-row>\n  <ion-col size=\"12\" *ngIf=\"isloadingSettings\">\n    <ion-note color=\"primary\">{{loadingText}}</ion-note>\n  <ion-progress-bar color=\"primary\" type=\"indeterminate\"></ion-progress-bar>\n  </ion-col>\n</ion-row>\n</ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/change-password/change-password.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/change-password/change-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sharedComponents/shared-components.module */ "./src/app/sharedComponents/shared-components.module.ts");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./change-password.page */ "./src/app/change-password/change-password.page.ts");









let ChangePasswordPageModule = class ChangePasswordPageModule {
};
ChangePasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _change_password_page__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordPage"]
                }
            ]),
            _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"]
        ],
        declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordPage"]]
    })
], ChangePasswordPageModule);



/***/ }),

/***/ "./src/app/change-password/change-password.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/change-password/change-password.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #FFF;\n}\n\nion-toolbar {\n  --background:#CA7529;\n  --color: #fff !important;\n}\n\nion-toolbar ion-title {\n  font-family: \"RedHatDisplay\" !important;\n  padding-left: 2px;\n}\n\n.margin-top-input {\n  margin-top: -6px;\n}\n\n.margin-top-icon {\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL0lvbmljL2FmcmltYXJ0b25lL3NyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQUE7QUNDRDs7QURHQTtFQUNFLG9CQUFBO0VBQ0Esd0JBQUE7QUNBRjs7QURDRTtFQUNFLHVDQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURHQTtFQUNJLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAtLWJhY2tncm91bmQ6ICNGRkY7XG59XG5cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6I0NBNzUyOTtcbiAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBpb24tdGl0bGV7XG4gICAgZm9udC1mYW1pbHk6IFwiUmVkSGF0RGlzcGxheVwiIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6MnB4O1xuICAgIH1cbn1cblxuLm1hcmdpbi10b3AtaW5wdXR7XG4gICAgbWFyZ2luLXRvcDotNnB4O1xufVxuXG4ubWFyZ2luLXRvcC1pY29ue1xuICAgIG1hcmdpbi10b3A6NXB4O1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZGO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDojQ0E3NTI5O1xuICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5pb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJSZWRIYXREaXNwbGF5XCIgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG59XG5cbi5tYXJnaW4tdG9wLWlucHV0IHtcbiAgbWFyZ2luLXRvcDogLTZweDtcbn1cblxuLm1hcmdpbi10b3AtaWNvbiB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/change-password/change-password.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/change-password/change-password.page.ts ***!
  \*********************************************************/
/*! exports provided: ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_core_http_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/http-services/user.service */ "./src/app/core/http-services/user.service.ts");
/* harmony import */ var src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/authentication/authentication.service */ "./src/app/core/authentication/authentication.service.ts");
/* harmony import */ var src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/models/user.model */ "./src/app/shared/models/user.model.ts");










let ChangePasswordPage = class ChangePasswordPage {
    constructor(authService, userService, router, nativeStorage, loadingCtrl, toastController, formBuilder, location) {
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.nativeStorage = nativeStorage;
        this.loadingCtrl = loadingCtrl;
        this.toastController = toastController;
        this.formBuilder = formBuilder;
        this.location = location;
        this.showCurrentPassword = false;
        this.showNewPassword = false;
        this.showConfirmNewPassword = false;
        this.passwordToggleIconCur = 'eye';
        this.passwordToggleIconNew = 'eye';
        this.passwordToggleIconCon = 'eye';
        this.isloadingSettings = false;
        this.loadingText = "";
        this.changePassword = new src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_9__["ChangePasswordModel"]();
        ///Inputs
        this.title = 'Change Password';
        this.longSearch = false;
        this.showBackButton = true;
        //  loading: boolean = false;
        this.showSearch = true;
        this.changePasswordForm = this.formBuilder.group({
            oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.changePassword.oldPassword, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.changePassword.newPassword, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.changePassword.confirmPassword, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]))
        });
    }
    ionViewWillEnter() {
        // console.log(this.router['routerState'].snapshot.url);
    }
    myBackButton() {
        // console.log("this.location: " + this.location)
        this.location.back();
    }
    ngOnInit() {
        this.nativeStorage.getItem('currentUser').then((x) => {
            this.currentUser = x;
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
                color: color
            });
            toast.present();
        });
    }
    toggleCurrentPassword() {
        this.showCurrentPassword = !this.showCurrentPassword;
        if (this.passwordToggleIconCur == 'eye') {
            this.passwordToggleIconCur = 'eye-off';
        }
        else {
            this.passwordToggleIconCur = 'eye';
        }
    }
    toggleNewPassword() {
        this.showNewPassword = !this.showNewPassword;
        if (this.passwordToggleIconNew == 'eye') {
            this.passwordToggleIconNew = 'eye-off';
        }
        else {
            this.passwordToggleIconNew = 'eye';
        }
    }
    toggleConfirmNewPassword() {
        this.showConfirmNewPassword = !this.showConfirmNewPassword;
        if (this.passwordToggleIconCon == 'eye') {
            this.passwordToggleIconCon = 'eye-off';
        }
        else {
            this.passwordToggleIconCon = 'eye';
        }
    }
    doChangePassword() {
        console.log('Signup User:' + JSON.stringify(this.changePasswordForm.value));
        this.loadingCtrl.create({ spinner: 'dots', message: 'Signing up! Please wait...', duration: 5000, cssClass: 'custom-loader-class' }).then((res) => {
            res.present();
            res.onDidDismiss().then((dis) => { });
        });
        this.loading = true;
        this.userService.changePassword(this.currentUser.token, this.changePasswordForm.value).subscribe((data) => {
            this.changePasswordForm.reset();
            if (!data.error) {
                console.log('changePassword Success:' + JSON.stringify(data));
                this.authService.logout().then(isDone => {
                    this.loadingCtrl.dismiss();
                    this.loading = false;
                    this.router.navigate(['/sign-in']);
                    this.presentToast('Congratulations', 'Password change was successful!', 2000, 'success');
                });
            }
            else {
                this.loadingCtrl.dismiss();
                this.loading = false;
                console.log('changePassword Else:' + JSON.stringify(data));
                this.presentToast('Apologies', 'Password change was unsuccessful, Please try again', 2000, 'warning');
            }
        }, (err) => {
            this.loadingCtrl.dismiss();
            this.loading = false;
            console.log('changePassword Error:' + JSON.stringify(err));
            this.presentToast('Sign up Error', 'An error occurred. Please try again!', 4000, 'error');
        });
    }
};
ChangePasswordPage.ctorParameters = () => [
    { type: src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] },
    { type: src_app_core_http_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
ChangePasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-password.page.scss */ "./src/app/change-password/change-password.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"],
        src_app_core_http_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
], ChangePasswordPage);



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








let UserService = class UserService {
    constructor(http, nativeStorage, authService) {
        this.http = http;
        this.nativeStorage = nativeStorage;
        this.authService = authService;
        this.apiUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}accounts/`;
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
        return this.http.post(`${this.apiUrl}register`, body, {
            headers: this.headerSt(),
        });
    }
    changePassword(token, body) {
        return this.http.post(`${this.apiUrl}change-password`, body, {
            headers: this.headerSetter(token),
        });
    }
    sendEmailVerificationCode(body) {
        return this.http.post(`${this.apiUrl}send-email-verification-token`, body, {
            headers: this.headerSt(),
        });
    }
    verifyEmailCode(body) {
        return this.http.post(`${this.apiUrl}email-verification`, body, {
            headers: this.headerSt(),
        });
    }
    requestForPasswordResetLink(body) {
        return this.http.post(`${this.apiUrl}send-reset-password`, body, {
            headers: this.headerSt(),
        });
    }
    resetPassword(body) {
        return this.http.post(`${this.apiUrl}reset-password`, body, {
            headers: this.headerSt(),
        });
    }
    updateProfile(token, body) {
        return this.http
            .put(`${this.apiUrl}profile`, body, {
            headers: this.headerSetter(token),
        })
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
        return this.http.get(`${this.apiUrl}profile`, {
            headers: this.headerSetter(token),
        });
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



/***/ })

}]);
//# sourceMappingURL=change-password-change-password-module-es2015.js.map