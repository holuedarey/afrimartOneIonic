(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"title\" [longSearch]=\"longSearch\" [showBackButton]=\"showBackButton\" [isLoading]=\"loading\"\n  [showSearch]=\"showSearch\">\n</app-header>\n<ion-content>\n  <!-- <ion-row *ngIf=\"currentUser\" class=\"background-general-header\">\n    <ion-col size=\"12\" class=\"t_left\" style=\"padding-left: 20px;\">\n      <div class=\"note_title_bold14Sec font-bold\" style=\"padding-bottom: 5px;\">\n        Welcome {{currentUser.firstname | titlecase}}!\n      </div>\n      <div class=\"note_title12Sec\">{{currentUser.email}}</div>\n    </ion-col>\n  </ion-row> -->\n  <ion-row *ngIf=\"!currentUser\" class=\"background-general-header\">\n    <ion-col size=\"8\" class=\"t_left\" style=\"padding-left: 20px;\">\n      <div class=\"note_title_bold14Sec font-bold\" style=\"padding-bottom: 5px;\">\n        Welcome! <br>Enter your Profile details\n      </div>\n      <!-- <div class=\"note_title12Sec\">Enter your Profile details</div> -->\n    </ion-col>\n    <ion-col size=\"4\" class=\"t_right\">\n      <ion-button fill=\"solid\" [routerLink]=\"['/sign-in']\" class=\"note_title14White\">LOGIN</ion-button>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row class=\"card\" *ngIf=\"currentUser\">\n    <ion-col size=\"4\">\n      <div class=\"profile-image\"\n        style=\"background-image: url('data:image/png;base64,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'); background-size: cover;\">\n        <div class=\"add-icon\"></div>\n      </div>\n      <p>\n        <ion-text color=\"primary\" class=\"font-9\">Change Profile Picture</ion-text>\n      </p>\n    </ion-col>\n\n    <ion-col size=\"8\" style=\"font-size: 10px !important;\">\n      <ion-row>\n        <ion-col size=\"5\">User ID</ion-col>\n        <ion-col size=\"7\">{{currentUser?.id}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"5\">Email Address</ion-col>\n        <ion-col size=\"7\" style=\"font-size: 9px;\">{{currentUser.email}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"5\">Name</ion-col>\n        <ion-col size=\"7\">\n          <ion-input class=\"profileForm\" type=\"text\" value=\"{{currentUser.firstname}} {{currentUser.lastname}}\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"5\">Date of Birth</ion-col>\n        <ion-col size=\"7\">\n          <ion-input class=\"profileForm\" type=\"text\" value=\"Fri Jun 24 1994 23:00:00 GM\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"5\">Default Country</ion-col>\n        <ion-col size=\"7\">\n          <ion-input class=\"profileForm\" type=\"text\" value=\"Nigeria\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"5\">Phone Number</ion-col>\n        <ion-col size=\"7\">\n          <ion-input class=\"profileForm\" type=\"text\" value=\"+23408104677898\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"5\">Default Language</ion-col>\n        <ion-col size=\"7\">\n          <ion-input class=\"profileForm\" type=\"text\" value=\"English\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"5\">Default Currency</ion-col>\n        <ion-col size=\"7\">\n          <ion-input class=\"profileForm\" type=\"text\" value=\" ₦-Nigerian Naira\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <p>\n        <ion-text color=\"dark\" class=\"font-bold\"> Your profile is 95% complete </ion-text>\n      </p>\n      <p>\n        <ion-progress-bar color=\"warning\" value=\"0.9\" class=\"progressbar\"></ion-progress-bar>\n      </p>\n      <ion-row class=\"no-padding\">\n        <ion-col size=\"5\" class=\"no-padding\">\n          <ion-button expand=\"block\" color=\"primary\" class=\"capitilize font-12\" (click)=\"editProfile()\"> Edit Profile </ion-button>\n        </ion-col>\n        <ion-col size=\"7\" class=\"no-padding\">\n          <ion-button  expand=\"block\" color=\"secondary\" fill=\"outline\" class=\"capitilize font-11\" [routerLink]=\"['/become-supplier']\"> Become a Suppliers </ion-button>\n        </ion-col>\n      </ion-row>\n      \n      \n    </ion-col>\n\n  </ion-row>\n\n  <ion-list lines=\"none\" *ngIf=\"currentUser\">\n    \n    <ion-item [routerLink]=\"['/change-password']\">\n      <ion-label class=\"note_title14Black\"> Change Password </ion-label>\n      <ion-icon src=\"/assets/vectors/icons/profile/key.svg\" size=\"large\" slot=\"start\" color=\"primary\"></ion-icon>\n    </ion-item>\n    <ion-item button [routerLink]=\"['/sign-in']\">\n      <ion-label class=\"note_title14Black\"> Messaging </ion-label>\n      <ion-icon src=\"/assets/vectors/icons/profile/messaging.svg\" size=\"large\" slot=\"start\" color=\"primary\"></ion-icon>\n    </ion-item>\n    <ion-item [routerLink]=\"['/sign-in']\">\n      <ion-label class=\"note_title14Black\"> My invoices</ion-label>\n      <ion-icon src=\"/assets/vectors/icons/profile/invoice.svg\" size=\"large\" slot=\"start\" color=\"primary\"></ion-icon>\n    </ion-item>\n    <ion-item [routerLink]=\"['/sign-in']\">\n      <ion-label class=\"note_title14Black\"> Become a Merchant </ion-label>\n      <ion-icon src=\"/assets/vectors/icons/profile/merchant.svg\" size=\"large\" slot=\"start\" color=\"primary\"></ion-icon>\n    </ion-item>\n\n    \n  </ion-list>\n\n  <ion-list lines=\"none\" *ngIf=\"!currentUser\">\n\n    <ion-item [routerLink]=\"['/sign-in']\">\n      <ion-label class=\"note_title14Black\"> Change Password </ion-label>\n      <ion-icon src=\"/assets/vectors/icons/profile/key.svg\" size=\"large\" slot=\"start\" color=\"primary\"></ion-icon>\n    </ion-item>\n    <ion-item button [routerLink]=\"['/sign-in']\">\n      <ion-label class=\"note_title14Black\"> Messaging </ion-label>\n      <ion-icon src=\"/assets/vectors/icons/profile/messaging.svg\" size=\"large\" slot=\"start\" color=\"primary\"></ion-icon>\n    </ion-item>\n    <ion-item [routerLink]=\"['/sign-in']\">\n      <ion-label class=\"note_title14Black\"> My invoices</ion-label>\n      <ion-icon src=\"/assets/vectors/icons/profile/invoice.svg\" size=\"large\" slot=\"start\" color=\"primary\"></ion-icon>\n    </ion-item>\n    <ion-item [routerLink]=\"['/sign-in']\">\n      <ion-label class=\"note_title14Black\"> Become a Merchant </ion-label>\n      <ion-icon src=\"/assets/vectors/icons/profile/merchant.svg\" size=\"large\" slot=\"start\" color=\"primary\"></ion-icon>\n    </ion-item>\n\n  </ion-list>\n  <ion-button *ngIf=\"!currentUser\" expand=\"full\" fill=\"clear\" color=\"primary\" [routerLink]=\"['/sign-in']\"\n    class=\"font-bold\">\n    LOGIN\n  </ion-button>\n  <ion-button *ngIf=\"currentUser\" expand=\"full\" fill=\"clear\" color=\"primary\" (click)=\"presentAlertConfirm()\"\n    class=\"font-bold\">\n    LOGOUT\n  </ion-button>\n</ion-content>");

/***/ }),

/***/ "./src/app/core/common/endpoints.ts":
/*!******************************************!*\
  !*** ./src/app/core/common/endpoints.ts ***!
  \******************************************/
/*! exports provided: Endpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Endpoint", function() { return Endpoint; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");


const BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"] ? "https://afrimart-evibu.ondigitalocean.app/" : "https://afrimart-evibu.ondigitalocean.app/";
const Endpoint = {
    AUTH: {
        login: `${BASE_URL}/auth/sign-in`,
        register: `${BASE_URL}/auth/sign-up`,
        verify: `${BASE_URL}/auth/verify`,
        initiatePasswordReset: `${BASE_URL}/auth/initiate-reset`,
        verifyPasswordReset: `${BASE_URL}/auth/verify-reset`,
    },
    USER: {
        editProfile: `${BASE_URL}/user/edit-profile`,
        changePassword: `${BASE_URL}/user/change-password`,
        profile: `${BASE_URL}/user`,
    },
    STORES: {
        contribution: `${BASE_URL}/reports/contributions?`,
        recent_contribution: `${BASE_URL}/reports/contributions/recent?membershipCode=`,
        member_contribution: `${BASE_URL}/contributions/member/`,
    },
    PRODUCT: {
        loan: `${BASE_URL}/reports/loans?`,
        create_loan: `${BASE_URL}/loans/requestloan`,
        loan_repayment: `${BASE_URL}/reports/loanrepayments?`,
    },
    CATEGORY: {
        create_contriution: `${BASE_URL}/contributions`
    },
};


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
    sendEmailVerificationCode(body) {
        return this.http.post(`${this.apiUrl}initiate-reset`, body);
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

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sharedComponents/shared-components.module */ "./src/app/sharedComponents/shared-components.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"]
                }
            ]),
            _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("light {\n  color: #343434 !important;\n}\n\n.progressbar {\n  --buffer-background: #E5E5E5;\n  border-radius: 10px;\n}\n\n.alertX button.alertButton {\n  color: #343434 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9DOlxcUHJvamVjdFxcQW5ndWxhclxcZWFzeW1hbGxfbm9ub2RlICgxKVxcZWFzeW1hbGxfbm9ub2RlL3NyY1xcYXBwXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNFLHlCQUFBO0FDUEY7O0FEVUE7RUFDRSw0QkFBQTtFQUNBLG1CQUFBO0FDUEY7O0FEYUU7RUFDRSx5QkFBQTtBQ1ZKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1jb250ZW50IHtcbi8vICAgICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xuLy8gICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4vLyAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuLy8gICAgIC0tcGFkZGluZy10b3A6IDEwcHg7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiNjOGM2YzY7XG4vLyAgIH1cblxubGlnaHQge1xuICBjb2xvcjogIzM0MzQzNCAhaW1wb3J0YW50O1xufVxuXG4ucHJvZ3Jlc3NiYXJ7XG4gIC0tYnVmZmVyLWJhY2tncm91bmQ6ICNFNUU1RTU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi8vIElmIHlvdSB3aXNoIHRvIHN0eWxlIHlvdXIgYWxlcnQgdXNpbmcgZGVmaW5lZCBjc3NDbGFzcyBpbnN0ZWFkIG9mIHRoZSBjb21wb25lbnQgaW9uLWFsZXJ0IHRoZW4gYWRkIHRoZSBmb2xsb3dpbmcgY29kZSB0byB5b3VyIHZhcmlhYmxlcy5zY3NzXG5cbi5hbGVydFgge1xuICBidXR0b24uYWxlcnRCdXR0b24ge1xuICAgIGNvbG9yOiAjMzQzNDM0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiIsImxpZ2h0IHtcbiAgY29sb3I6ICMzNDM0MzQgIWltcG9ydGFudDtcbn1cblxuLnByb2dyZXNzYmFyIHtcbiAgLS1idWZmZXItYmFja2dyb3VuZDogI0U1RTVFNTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmFsZXJ0WCBidXR0b24uYWxlcnRCdXR0b24ge1xuICBjb2xvcjogIzM0MzQzNCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/authentication/authentication.service */ "./src/app/core/authentication/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_http_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/http-services/user.service */ "./src/app/core/http-services/user.service.ts");
/* harmony import */ var src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/http-services/product.service */ "./src/app/core/http-services/product.service.ts");
/* harmony import */ var _core_common_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/common/constant */ "./src/app/core/common/constant.ts");
/* harmony import */ var _core_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/storage.service */ "./src/app/core/storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");











let ProfilePage = class ProfilePage {
    constructor(nativeStorage, authService, productService, userService, router, alertController, toastController, navCtrl, storageService, formBuilder, loadingCtrl) {
        this.nativeStorage = nativeStorage;
        this.authService = authService;
        this.productService = productService;
        this.userService = userService;
        this.router = router;
        this.alertController = alertController;
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.storageService = storageService;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        ///Inputs
        this.title = 'Profile';
        this.longSearch = false;
        this.showBackButton = true;
        this.loading = false;
        this.showSearch = true;
        ////////////////////
        this.currentUser = null;
        this.isAuthenticated = false;
        console.log('Cons');
        console.log('constructor :: ', JSON.parse(localStorage.getItem(_core_common_constant__WEBPACK_IMPORTED_MODULE_8__["Constants"].STORAGE_VARIABLES.USER)));
        // this.nativeStorage.getItem('currentUser').then((value) => {
        //   if (value !== null) {
        //     this.currentUser = value;
        //     console.log('Profile Page:' + JSON.stringify(this.currentUser));
        //     this.userService.getProfile(this.currentUser.token).subscribe(
        //       (data) => {
        //         if (!data.error) {
        //           // console.log('this.profile:' + JSON.stringify(data.data));
        //           if (data.data.cards) {
        //             this.nativeStorage.setItem('MyCards',data.data.cards)
        //             // console.log('nativeStorage.MyCards:' + this.nativeStorage.getItem('MyCards'));
        //           }
        //         } else {
        //           this.presentToast(
        //             'Oops',
        //             'There was an error getting your profile, Please try again',
        //             4000,
        //             'warning'
        //           );
        //         }
        //       },
        //       (err) => {
        //         this.presentToast(err.message, err.errors, 4000, 'error');
        //       }
        //     );
        //     // console.log('Profile Page:' + JSON.stringify(this.currentUser));
        //   }
        // });
    }
    ionViewWillEnter() {
        console.log('view about to enter');
        // console.log('constructor :: ', JSON.parse(localStorage.getItem(Constants.STORAGE_VARIABLES.USER)))
        if (this.authService.isAuthenticated()) {
            this.currentUser = JSON.parse(localStorage.getItem(_core_common_constant__WEBPACK_IMPORTED_MODULE_8__["Constants"].STORAGE_VARIABLES.USER));
            console.log('user authenticated :: -> ');
        }
        else {
            this.currentUser = null;
        }
    }
    ngOnInit() {
        console.log('Init check:: ', this.authService.isAuthenticated());
        if (this.authService.isAuthenticated()) {
            this.currentUser = JSON.parse(localStorage.getItem(_core_common_constant__WEBPACK_IMPORTED_MODULE_8__["Constants"].STORAGE_VARIABLES.USER));
            console.log('user authenticated :: -> ');
        }
        else {
            this.currentUser = null;
        }
        this.profileForm = this.formBuilder.group({
            fName: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].minLength(2)])),
            lName: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].minLength(2)])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].email])),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].pattern("[0-9]{11}")])),
            countryOperation: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required])),
            prefferedLangauge: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required])),
        });
        // this.nativeStorage.getItem('currentUser').then((value) => {
        //   if (value !== null) {
        //     this.currentUser = value;
        //     console.log('Profile Page:' + JSON.stringify(this.currentUser));
        //     this.userService.getProfile(this.currentUser.token).subscribe(
        //       (data) => {
        //         if (!data.error) {
        //           // console.log('this.profile:' + JSON.stringify(data.data));
        //           if (data.data.cards) {
        //             this.nativeStorage.setItem('MyCards',data.data.cards)
        //             console.log('nativeStorage.MyCards:' + this.nativeStorage.getItem('MyCards'));
        //           }
        //         } else {
        //           this.presentToast(
        //             'Oops',
        //             'There was an error getting your profile, Please try again',
        //             4000,
        //             'warning'
        //           );
        //         }
        //       },
        //       (err) => {
        //         this.presentToast(err.message, err.errors, 4000, 'error');
        //       }
        //     );
        //     // console.log('Profile Page:' + JSON.stringify(this.currentUser));
        //   }
        // });
    }
    getImage() {
    }
    editProfile() {
        this.loadingCtrl
            .create({
            spinner: 'dots',
            message: 'Signing in! Please wait...',
            duration: 5000,
            cssClass: 'custom-loader-class',
        })
            .then((res) => {
            res.present();
            res.onDidDismiss().then((dis) => { });
        });
        console.log('payload ', this.profileForm.value);
        this.authService.login(this.profileForm.value).subscribe((data) => {
            this.loadingCtrl.dismiss();
            console.log(data.message);
            this.presentToast('Success', `${data.message}`, 4000, 'success');
        }, error => {
            this.loadingCtrl.dismiss();
            this.presentToast('Sign In Error', 'An error occurred. Please try again!', 4000, 'error');
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
    presentAlertConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Logout Confirmation!',
                message: 'Are you sure you want to exit?',
                cssClass: 'alertX',
                buttons: [
                    {
                        text: 'NO',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            // console.log('Confirm Cancel: blah');
                        },
                    },
                    {
                        text: 'YES',
                        cssClass: 'alertButton',
                        handler: () => {
                            this.logOut();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    logOut() {
        this.storageService.clear_all();
        this.navCtrl.navigateBack('/app/home');
        // console.log('Profile Page:' + JSON.stringify(this.currentUser));
        this.presentToast('', 'Signed out successfully!', 2000, 'success');
        // this.nativeStorage.clear().then((isDone) => {
        //   this.currentUser=null;
        //   this.productService.logOutCart('0');
        //   this.navCtrl.navigateBack('/app/home');
        //   // console.log('Profile Page:' + JSON.stringify(this.currentUser));
        //   this.presentToast('', 'Signed out successfully!', 2000, 'success');
        // });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"] },
    { type: src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"] },
    { type: src_app_core_http_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _core_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"],
        src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
        src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"],
        src_app_core_http_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _core_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map