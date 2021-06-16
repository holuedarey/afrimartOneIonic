(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activation-link-activation-link-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/activation-link/activation-link.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/activation-link/activation-link.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <!-- <div class=\"topFadedLogo\"> </div> -->\n  <form [formGroup]=\"activateForm\">\n    <ion-grid style=\"padding-top:75px;\" class=\"card\">\n      <ion-row>\n        <ion-col text-center>\n          <div class=\"ion-text-center header-title\">ACTIVATE</div>\n          <p class=\"t_center\">Kindly enter activation code sent to your email</p>\n        </ion-col>\n\n        <ion-col size=\"12\">\n          <ion-row>\n            <ion-col size=\"12\" class=\"colForm\">\n              <ion-label color=\"dark\" position=\"floating\">Activation Code</ion-label>\n              <ion-input class=\"qouteForm\" formControlName=\"token\" type=\"text\" placeholder=\"Enter your Activation Code\"\n                clear-input=\"true\">\n              </ion-input>\n            </ion-col>\n            <div *ngIf=\"!activateForm.controls.token.valid && activateForm.controls.token.dirty\">\n              <p style=\"color:#330501!important;text-align:center;\">Please enter a VALID Activation Code</p>\n            </div>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 class=\"t_right\">\n              <p *ngIf=\"showResend\" class=\"t_center\">\n                If you don’t receive the code? Resend in <b>{{ countdown }}</b> seconds it\n              </p>\n              <ion-button [disabled]=\"!time\" fill=\"clear\"  color=\"warning\" class=\"timer-link\" (click)=\"resendActivationLink()\">\n                Didn’t get activation link? Request\n              </ion-button> \n            </ion-col>\n          </ion-row>\n          <br>\n\n          <ion-row>\n            <ion-col size=\"12\" style=\"padding: 0px;\">\n              <div style=\"padding-top: 10px;\">\n                <ion-button expand=\"block\" color=\"primary\" (click)=\"activateUser()\" [disabled]=\"!activateForm.valid\">\n                  Activate\n                </ion-button>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12 class=\"t_center\" style=\"margin-top:50px;\">\n          <p class=\"font-14\">Already have an Account?</p>\n        </ion-col>\n      </ion-row>\n      <br>\n      <ion-row>\n        <ion-col col-12 class=\"t_center\">\n          <a style=\"font-size: 18px; font-family: 'RedHatDisplayBold'; color: #CB982F !important;\"\n            [routerLink]=\"['/sign-in']\">Sign In Here</a>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </form>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" *ngIf=\"isloadingSettings\">\n        <ion-note color=\"primary\">{{loadingText}}</ion-note>\n        <ion-progress-bar color=\"primary\" type=\"indeterminate\"></ion-progress-bar>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/activation-link/activation-link-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/activation-link/activation-link-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ActivationLinkPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationLinkPageRoutingModule", function() { return ActivationLinkPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _activation_link_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activation-link.page */ "./src/app/activation-link/activation-link.page.ts");




const routes = [
    {
        path: '',
        component: _activation_link_page__WEBPACK_IMPORTED_MODULE_3__["ActivationLinkPage"]
    }
];
let ActivationLinkPageRoutingModule = class ActivationLinkPageRoutingModule {
};
ActivationLinkPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ActivationLinkPageRoutingModule);



/***/ }),

/***/ "./src/app/activation-link/activation-link.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/activation-link/activation-link.module.ts ***!
  \***********************************************************/
/*! exports provided: ActivationLinkPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationLinkPageModule", function() { return ActivationLinkPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _activation_link_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./activation-link.page */ "./src/app/activation-link/activation-link.page.ts");
/* harmony import */ var _activation_link_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activation-link-routing.module */ "./src/app/activation-link/activation-link-routing.module.ts");







let ActivationLinkPageModule = class ActivationLinkPageModule {
};
ActivationLinkPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _activation_link_routing_module__WEBPACK_IMPORTED_MODULE_6__["ActivationLinkPageRoutingModule"],
        ],
        declarations: [_activation_link_page__WEBPACK_IMPORTED_MODULE_5__["ActivationLinkPage"]]
    })
], ActivationLinkPageModule);



/***/ }),

/***/ "./src/app/activation-link/activation-link.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/activation-link/activation-link.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".timer-link {\n  font-size: 11px;\n  color: #CA7529;\n  text-transform: capitalize;\n  position: relative;\n  top: -12px;\n  right: -19px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWN0aXZhdGlvbi1saW5rL0M6XFxQcm9qZWN0XFxBbmd1bGFyXFxlYXN5bWFsbF9ub25vZGUgKDEpXFxlYXN5bWFsbF9ub25vZGUvc3JjXFxhcHBcXGFjdGl2YXRpb24tbGlua1xcYWN0aXZhdGlvbi1saW5rLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWN0aXZhdGlvbi1saW5rL2FjdGl2YXRpb24tbGluay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYWN0aXZhdGlvbi1saW5rL2FjdGl2YXRpb24tbGluay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGltZXItbGlua3tcclxuICAgIGZvbnQtc2l6ZTogMTFweDsgXHJcbiAgICBjb2xvcjogI0NBNzUyOTsgXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTEycHg7XHJcbiAgICByaWdodDogLTE5cHg7XHJcbn0iLCIudGltZXItbGluayB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICNDQTc1Mjk7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEycHg7XG4gIHJpZ2h0OiAtMTlweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/activation-link/activation-link.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/activation-link/activation-link.page.ts ***!
  \*********************************************************/
/*! exports provided: ActivationLinkPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationLinkPage", function() { return ActivationLinkPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/user.model */ "./src/app/shared/models/user.model.ts");
/* harmony import */ var _core_common_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/common/constant */ "./src/app/core/common/constant.ts");
/* harmony import */ var _core_http_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/http-services/user.service */ "./src/app/core/http-services/user.service.ts");
/* harmony import */ var _core_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/loader.service */ "./src/app/core/loader.service.ts");
/* harmony import */ var _core_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/storage.service */ "./src/app/core/storage.service.ts");









let ActivationLinkPage = class ActivationLinkPage {
    constructor(formBuilder, storageService, userService, router, LoaderService) {
        this.formBuilder = formBuilder;
        this.storageService = storageService;
        this.userService = userService;
        this.router = router;
        this.LoaderService = LoaderService;
        this.isloadingSettings = false;
        this.loadingText = '';
        this.ActivateAccModel = new src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_4__["ActivateAccModel"]();
        this.time = true;
        this.countdown = 60;
        this.showResend = false;
        this.activateForm = this.formBuilder.group({
            token: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.ActivateAccModel.token = ''), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
        });
    }
    ngOnInit() {
    }
    activateUser() {
        const token = this.activateForm.value.token;
        this.LoaderService.showLoader('Activating Account! Please wait...', 10000, 'custom-loader-class');
        this.userService.verifyEmailCode(token).subscribe((data) => {
            if (data.status == true) {
                console.log('Activate User Success:' + JSON.stringify(data));
                this.LoaderService.hideLoader();
                this.loading = false;
                this.router.navigate(['/sign-in']);
                this.LoaderService.presentToast('Congratulations', `${data.message} Please Login`, 5000, 'success');
            }
            else {
                this.LoaderService.hideLoader();
                this.loading = false;
                // console.log('Signup User Else:' + JSON.stringify(data));
                this.LoaderService.presentToast('Invalid Details', `${data.message}` || `Please confirm your details`, 5000, 'warning');
            }
        }, error => {
            console.log(error);
        });
    }
    resendActivationLink() {
        this.showResend = true;
        this.time = false;
        var interval = setInterval(() => {
            this.countdown = --this.countdown <= 0 ? 60 : this.countdown;
            if (this.countdown == 1) {
                this.time = true;
                console.log('last element');
                clearInterval(interval);
                this.showResend = false;
            }
            // this.time = false;
            console.log('k :', this.countdown);
        }, 1000);
        const emailAddres = `${this.storageService.get(_core_common_constant__WEBPACK_IMPORTED_MODULE_5__["Constants"].STORAGE_VARIABLES.REGISTER_EMAIL)}`;
        if (!emailAddres) {
            console.log('email not found');
        }
        this.LoaderService.showLoader('Resending Account! Please wait...', 10000, 'custom-loader-class');
        this.userService.ResendEmailVerificationCode(emailAddres).subscribe((data) => {
            if (data.status == true) {
                console.log('Signup User Success:' + JSON.stringify(data));
                this.LoaderService.hideLoader();
                this.loading = false;
                this.LoaderService.presentToast('Congratulations', `${data.message}`, 2000, 'success');
            }
            else {
                this.LoaderService.hideLoader();
                this.loading = false;
                // console.log('Signup User Else:' + JSON.stringify(data));
                this.LoaderService.presentToast('Invalid Details', `${data.message}` || `Please confirm your details`, 5000, 'warning');
            }
        }, error => {
            console.log(error);
        });
    }
};
ActivationLinkPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: _core_http_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _core_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] }
];
ActivationLinkPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activation-link',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./activation-link.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/activation-link/activation-link.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./activation-link.page.scss */ "./src/app/activation-link/activation-link.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _core_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"],
        _core_http_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _core_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]])
], ActivationLinkPage);



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



/***/ })

}]);
//# sourceMappingURL=activation-link-activation-link-module-es2015.js.map