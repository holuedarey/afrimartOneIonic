(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-details-profile-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile-details/profile-details.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile-details/profile-details.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"title\" [longSearch]=\"longSearch\" [showBackButton]=\"showBackButton\" [isLoading]=\"loading\"\n  [showSearch]=\"showSearch\">\n</app-header>\n<ion-content>\n  <form [formGroup]=\"profileForm\">\n    <ion-grid *ngIf=\"profile\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-text color=\"dark\">First Name</ion-text>            \n              <ion-input formControlName=\"fName\" type=\"text\" clear-input=\"true\">\n              </ion-input>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-text color=\"dark\">Last Name</ion-text>\n              <ion-input formControlName=\"sName\" type=\"text\" clear-input=\"true\">\n              </ion-input>\n            </ion-col> \n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-text color=\"dark\">Email Address</ion-text>\n              <ion-input formControlName=\"email\" type=\"email\" clear-input=\"true\" readonly=\"true\">\n              </ion-input>\n            </ion-col>\n          </ion-row>\n         \n          <ion-row>\n            <ion-col size=\"3\">\n                <ion-select  value=\"+234\" (ionChange)=\"changeMobileCountry($event)\" formControlName=\"ext\">\n                    <ion-select-option  value=\"+234\">+234</ion-select-option>\n                </ion-select>\n            </ion-col>\n  \n            <ion-col size=\"9\">\n             <ion-input formControlName=\"phone\" type=\"tel\" clear-input=\"true\" placeholder=\"Mobile phone number\"  maxlength=\"10\"></ion-input>\n             </ion-col>\n          </ion-row>\n  \n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-text color=\"dark\">Gender</ion-text>\n            <ion-list lines=\"none\">\n              <ion-radio-group (ionChange)=\"getSelectedType($event)\" formControlName=\"gender\">\n                <!-- <ion-list-header>\n                  <ion-label style=\"font-weight: bold;\">Select your sex</ion-label>\n                </ion-list-header> -->\n                <ion-item>\n                  <ion-label>Female</ion-label>\n                  <ion-radio slot=\"start\" value=\"female\"></ion-radio>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Male</ion-label>\n                  <ion-radio slot=\"start\" value=\"male\"></ion-radio>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Others</ion-label>\n                  <ion-radio slot=\"start\" value=\"others\"></ion-radio>\n                </ion-item>\n              </ion-radio-group>\n            </ion-list>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\" style=\"padding: 0px;\">             \n                <ion-button expand=\"block\" color=\"primary\" (click)=\"updateProfile()\" [disabled]=\"!profileForm.valid\"> SAVE\n                </ion-button>\n            </ion-col>\n          </ion-row>      \n    </ion-grid>\n  </form>\n</ion-content>\n\n");

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



/***/ }),

/***/ "./src/app/profile-details/profile-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/profile-details/profile-details.module.ts ***!
  \***********************************************************/
/*! exports provided: ProfileDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailsPageModule", function() { return ProfileDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sharedComponents/shared-components.module */ "./src/app/sharedComponents/shared-components.module.ts");
/* harmony import */ var _profile_details_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile-details.page */ "./src/app/profile-details/profile-details.page.ts");









let ProfileDetailsPageModule = class ProfileDetailsPageModule {
};
ProfileDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _profile_details_page__WEBPACK_IMPORTED_MODULE_7__["ProfileDetailsPage"]
                }
            ]),
            _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"]
        ],
        declarations: [_profile_details_page__WEBPACK_IMPORTED_MODULE_7__["ProfileDetailsPage"]]
    })
], ProfileDetailsPageModule);



/***/ }),

/***/ "./src/app/profile-details/profile-details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/profile-details/profile-details.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #FFF;\n}\n\nion-input {\n  border-bottom: 1px solid #5d5a5a;\n  padding-bottom: 0px;\n}\n\nion-text {\n  padding-top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL0lvbmljL2FmcmltYXJ0b25lL3NyYy9hcHAvcHJvZmlsZS1kZXRhaWxzL3Byb2ZpbGUtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUtZGV0YWlscy9wcm9maWxlLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURDQTtFQUNBLGdDQUFBO0VBQWtDLG1CQUFBO0FDR2xDOztBRERBO0VBQ0ksaUJBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtZGV0YWlscy9wcm9maWxlLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRkZGO1xufVxuaW9uLWlucHV0e1xuYm9yZGVyLWJvdHRvbTogIDFweCBzb2xpZCAjNWQ1YTVhO3BhZGRpbmctYm90dG9tOiAwcHg7XG59XG5pb24tdGV4dHtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI0ZGRjtcbn1cblxuaW9uLWlucHV0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1ZDVhNWE7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbmlvbi10ZXh0IHtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/profile-details/profile-details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/profile-details/profile-details.page.ts ***!
  \*********************************************************/
/*! exports provided: ProfileDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailsPage", function() { return ProfileDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/user.model */ "./src/app/shared/models/user.model.ts");
/* harmony import */ var src_app_core_http_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/http-services/user.service */ "./src/app/core/http-services/user.service.ts");
/* harmony import */ var src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/authentication/authentication.service */ "./src/app/core/authentication/authentication.service.ts");








let ProfileDetailsPage = class ProfileDetailsPage {
    constructor(authService, formBuilder, loadingCtrl, nativeStorage, toastController, userService) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.nativeStorage = nativeStorage;
        this.toastController = toastController;
        this.userService = userService;
        ///Inputs
        this.title = 'Details';
        this.longSearch = false;
        this.showBackButton = true;
        this.loading = false;
        this.showSearch = true;
        this.loadingText = "";
        this.profile = new src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_5__["ProfileModel"]();
        this.date = new Date();
        this.profileForm = this.formBuilder.group({
            fName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.profile.fName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)])),
            sName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.profile.sName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.profile.email),
            ext: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('+234', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.profile.phone, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[0-9]{10}"), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10)])),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.profile.dob),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.profile.gender, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]))
        });
    }
    ngOnInit() {
        this.nativeStorage.getItem('currentUser').then((x) => {
            this.currentUser = x;
            this.getProfile();
        });
    }
    getProfile() {
        this.loading = true;
        this.loadingCtrl.create({ spinner: 'dots', message: 'Loading Profile! Please wait...', duration: 5000, cssClass: 'custom-loader-class' }).then((res) => {
            res.present();
            res.onDidDismiss().then((dis) => { });
        });
        this.userService.getProfile(this.currentUser.token).subscribe((data) => {
            if (!data.error) {
                this.loadingCtrl.dismiss();
                this.profile = data.data;
                // console.log('this.profile:' + JSON.stringify(this.profile));   
                this.profileForm.setValue({
                    fName: this.profile.fName,
                    sName: this.profile.sName,
                    email: this.profile.email,
                    ext: '+234',
                    phone: this.profile.phone.replace(this.profileForm.value.ext, ''),
                    dob: this.date,
                    gender: this.profile.gender,
                });
                this.loading = false;
            }
            else {
                this.loading = false;
                this.loadingCtrl.dismiss();
                this.presentToast('Oops', 'There was an error getting your profile, Please try again', 4000, 'warning');
            }
        }, (err) => {
            this.loading = false;
            this.loadingCtrl.dismiss();
            this.presentToast(err.message, err.errors, 4000, 'error');
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
    changeMobileCountry($event) {
        console.log('changeMobileCountry: ' + $event.value);
    }
    getSelectedType(event) {
    }
    updateProfile() {
        this.profileForm.patchValue({ phone: this.profileForm.value.ext + '' + this.profileForm.value.phone });
        this.loadingCtrl.create({ spinner: 'dots', message: 'Loading Profile! Please wait...', duration: 5000, cssClass: 'custom-loader-class' }).then((res) => {
            res.present();
            res.onDidDismiss().then((dis) => { });
        });
        return new Promise((res, rej) => {
            console.log('profileForm.value:' + JSON.stringify(this.profileForm.value));
            this.userService.updateProfile(this.currentUser.token, this.profileForm.value).subscribe((data) => {
                this.loadingCtrl.dismiss();
                console.log("Updated: " + JSON.stringify(data));
                res(data);
                this.presentToast('', 'Profile updated successfully', 4000, 'success');
            }, (err) => {
                this.loadingCtrl.dismiss();
                console.error(err);
                this.presentToast(err.message, err.errors, 4000, 'error');
                res(err);
            });
        });
    }
};
ProfileDetailsPage.ctorParameters = () => [
    { type: src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_core_http_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
ProfileDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile-details/profile-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-details.page.scss */ "./src/app/profile-details/profile-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        src_app_core_http_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
], ProfileDetailsPage);



/***/ })

}]);
//# sourceMappingURL=profile-details-profile-details-module-es2015.js.map