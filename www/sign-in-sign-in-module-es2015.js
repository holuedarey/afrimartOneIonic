(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-sign-in-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-header [title]=\"title\" [longSearch]=\"longSearch\" [showBackButton]=\"showBackButton\" [isLoading]=\"loading\"\n  [showSearch]=\"showSearch\">\n</app-header> -->\n<ion-content>\n  <div class=\"topFadedLogo\"> </div>\n  <form [formGroup]=\"loginForm\">\n    <ion-grid style=\"padding-top:75px;\">\n      <ion-row>\n        <ion-col text-center>\n          <div class=\"ion-text-center header-title\">Sign in</div>\n        </ion-col>\n\n        <ion-col size=\"12\">\n          <ion-row>\n            <ion-col size=\"12\" class=\"colForm\">\n                <ion-label color=\"dark\" position=\"floating\">Username</ion-label>\n                <ion-input class=\"qouteForm\" formControlName=\"user\" type=\"text\" placeholder=\"Enter your Email Address\" clear-input=\"true\">\n                </ion-input> \n            </ion-col>\n            <div *ngIf=\"!loginForm.controls.user.valid && loginForm.controls.user.dirty\">\n              <p style=\"color:#330501!important;text-align:center;\">Please enter a VALID email Address</p>\n            </div>\n          </ion-row>\n          <br>\n          <ion-row>\n            <ion-col col-12 class=\"colForm\">\n                <ion-label color=\"dark\" position=\"floating\">Password</ion-label>\n\n              <ion-item lines=\"none\" class=\"qouteForm\">\n                <ion-input formControlName=\"password\" [type]=\"showPassword? 'text':'password'\" placeholder=\"Enter your Password\"\n                  clear-input=\"true\">\n                </ion-input>\n                <ion-icon [name]=\"passwordToggleIcon\" color=\"primary\" class=\"iconEyeSize\" slot=\"end\"\n                  (click)=\"togglePassword()\"></ion-icon>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 class=\"t_right\" style=\"padding-right:20px;\">\n              <a class=\"note_title12Pri\" [routerLink]=\"['/forgot-password']\"> Forgot Password?\n              </a>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\" style=\"padding: 0px;\">\n              <div style=\"padding-top: 10px;\">\n                <ion-button expand=\"block\" color=\"primary\" (click)=\"loginUser()\" [disabled]=\"!loginForm.valid\"> SIGN IN\n                </ion-button>\n                <br>\n                <div class=\"t_center\">\n                  <ion-text color=\"medium\">OR</ion-text>\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"t_center\">\n            <ion-col size=\"12\">\n              <div class=\"note_title14Black\">\n                SIGN IN WITH<br>\n                <a color=\"primary\" (click)=\"faceBookSignIn()\">\n                  <img src=\"../../assets/vectors/icons/facebook.svg\" class=\"pre_social_icons\">\n                </a>\n                <a color=\"primary\" (click)=\"googleSignIn()\">\n                  <img src=\"../../assets/vectors/icons/google.svg\" class=\"pre_social_icons\">\n                </a>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"t_center\">\n            <ion-col size=\"12\" style=\"padding: 0px;\">\n              <div class=\"legal-stuff note_title14Black\" style=\"padding-top: 10px;\">\n                DON'T HAVE AN <br> ACCOUNT?\n                <a [routerLink]=\"['/sign-up']\" class=\"legal-action\"> SIGN UP</a>\n              </div>\n            </ion-col>\n          </ion-row>\n          <hr class=\"preload\">\n          <ion-row class=\"t_center\">\n            <ion-col size=\"12\" style=\"padding: 0px;\">\n              <div class=\"legal-stuffs note_title14Black\" style=\"padding-top: 10px;\">\n                DIDN'T GET AN ACTIVATION <br> LINK?\n                <!-- <a color=\"primary\" [routerLink]=\"['/sign-up']\" class=\"legal-action note_title14Pri\"> REQUEST LINK</a> -->\n                <a color=\"primary\" [routerLink]=\"['/app/home']\" class=\" note_title14Pris\"> REQUEST LINK</a>\n              </div>\n            </ion-col>\n          </ion-row>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </form>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" *ngIf=\"isloadingSettings\">\n        <ion-note color=\"primary\">{{loadingText}}</ion-note>\n        <ion-progress-bar color=\"primary\" type=\"indeterminate\"></ion-progress-bar>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/sign-in/sign-in.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.module.ts ***!
  \*******************************************/
/*! exports provided: SignInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sharedComponents/shared-components.module */ "./src/app/sharedComponents/shared-components.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/sign-in/sign-in.page.ts");










let SignInPageModule = class SignInPageModule {
};
SignInPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _sign_in_page__WEBPACK_IMPORTED_MODULE_8__["SignInPage"]
                }
            ]),
            _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"]
        ],
        declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_8__["SignInPage"]]
    })
], SignInPageModule);



/***/ }),

/***/ "./src/app/sign-in/sign-in.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n  align-content: left;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  text-align: left;\n  padding: 0 5%;\n  --background: #FFF;\n}\nion-content .topFadedLogo {\n  position: absolute;\n  top: 0px !important;\n  left: 0px !important;\n  background: url('topLeftLogo.svg') !important;\n  opacity: 0.4;\n  height: 70px !important;\n  width: 70px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi9DOlxcUHJvamVjdFxcQW5ndWxhclxcZWFzeW1hbGxfbm9ub2RlICgxKVxcZWFzeW1hbGxfbm9ub2RlL3NyY1xcYXBwXFxzaWduLWluXFxzaWduLWluLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBRUEsZ0JBQUE7RUFDQyxhQUFBO0VBQ0Esa0JBQUE7QUNBTDtBREVJO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDBweDtcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICBwYWRkaW5nOiAwIDUlO1xuICAgICAtLWJhY2tncm91bmQ6ICNGRkY7XG4gICAgLy8gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgLnRvcEZhZGVkTG9nb3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjBweCFpbXBvcnRhbnQ7XG4gICAgbGVmdDowcHghaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL3ZlY3RvcnMvaWNvbnMvdG9wTGVmdExvZ28uc3ZnJykhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgICBoZWlnaHQ6IDcwcHghaW1wb3J0YW50O1xuICAgIHdpZHRoOiA3MHB4IWltcG9ydGFudDtcbiAgICB9XG59XG5cblxuXG5cbiAiLCJpb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgYWxpZ24tY29udGVudDogbGVmdDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMCA1JTtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZGO1xufVxuaW9uLWNvbnRlbnQgLnRvcEZhZGVkTG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHggIWltcG9ydGFudDtcbiAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy92ZWN0b3JzL2ljb25zL3RvcExlZnRMb2dvLnN2Z1wiKSAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjQ7XG4gIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/sign-in/sign-in.page.ts":
/*!*****************************************!*\
  !*** ./src/app/sign-in/sign-in.page.ts ***!
  \*****************************************/
/*! exports provided: SignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPage", function() { return SignInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/authentication/authentication.service */ "./src/app/core/authentication/authentication.service.ts");
/* harmony import */ var src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/http-services/order.service */ "./src/app/core/http-services/order.service.ts");
/* harmony import */ var src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/models/user.model */ "./src/app/shared/models/user.model.ts");
/* harmony import */ var _core_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/storage.service */ "./src/app/core/storage.service.ts");
/* harmony import */ var _core_common_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/common/constant */ "./src/app/core/common/constant.ts");







// import { Facebook } from '@ionic-native/facebook/ngx';





let SignInPage = class SignInPage {
    constructor(authService, orderService, router, loadingCtrl, navCtrl, toastController, formBuilder, nativeStorage, googlePlus, storageService) {
        this.authService = authService;
        this.orderService = orderService;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.formBuilder = formBuilder;
        this.nativeStorage = nativeStorage;
        this.googlePlus = googlePlus;
        this.storageService = storageService;
        ///Inputs
        this.title = 'Sign In';
        this.longSearch = false;
        this.showBackButton = true;
        this.loading = false;
        this.showSearch = false;
        this.showPassword = false;
        this.passwordToggleIcon = 'eye-outline';
        this.isloadingSettings = false;
        this.loadingText = '';
        this.userData = {};
        this.loginModel = new src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_9__["LoginModel"]();
        this.users = { id: '', name: '', email: '', picture: { data: { url: '' } } };
        // this.loginForm = this.formBuilder.group({
        //   email: new FormControl(
        //     (this.loginModel.email = ''),
        //     Validators.compose([Validators.required, Validators.email])
        //   ),
        //   password: new FormControl(
        //     (this.loginModel.password = ''),
        //     Validators.compose([Validators.required])
        //   ),
        // });
        this.loginForm = this.formBuilder.group({
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]((this.loginModel.user = 'merchant'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]((this.loginModel.password = 'Merchant123'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])),
        });
        // fb.getLoginStatus()
        //   .then((res) => {
        //     console.log(res.status);
        //     if (res.status === 'connect') {
        //       this.isLoggedIn = true;
        //     } else {
        //       this.isLoggedIn = false;
        //     }
        //   })
        //   .catch((e) => console.log(e));
    }
    togglePassword() {
        this.showPassword = !this.showPassword;
        if (this.passwordToggleIcon == 'eye-outline') {
            this.passwordToggleIcon = 'eye-off-outline';
        }
        else {
            this.passwordToggleIcon = 'eye-outline';
        }
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        console.log('view about to enter');
        if (this.authService.isAuthenticated()) {
            this.navCtrl.navigateForward('app/profile');
            console.log('user logged in');
        }
        else {
            this.currentUser = null;
        }
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
    // getWishListItems(token) {
    //   this.orderService.getWishlist(token).subscribe(
    //     (data) => {
    //       if (!data.error) {
    //         this.nativeStorage.setItem('WishList',data.data)
    //       }
    //     },
    //     (err) => {
    //       console.error(err);
    //     }
    //   );
    // }
    loginUser() {
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
        this.loginForm.value['organisation'] = 'test-org';
        this.authService.login(this.loginForm.value).subscribe((data) => {
            this.loginForm.reset();
            // console.log('loginUser:' + JSON.stringify(data.data));
            if (data.status) {
                console.log('loginUser:' + JSON.stringify(data.data));
                this.loadingCtrl.dismiss();
                this.storageService.set(_core_common_constant__WEBPACK_IMPORTED_MODULE_11__["Constants"].STORAGE_VARIABLES.TOKEN, data.data.token);
                this.storageService.set(_core_common_constant__WEBPACK_IMPORTED_MODULE_11__["Constants"].STORAGE_VARIABLES.USER, JSON.stringify(data.data));
                this.presentToast('', 'WELCOME ' + data.data['firstname'], 2000, 'success');
                // this.nativeStorage.setItem('currentUser', data.data).then(() => {
                //   this.navCtrl.navigateForward('/app/profile');
                //   this.presentToast('', 'WELCOME ' + data.data['message'], 2000, 'success');
                // })
                this.router.navigate(['/app/profile']);
                console.log('page navigated');
            }
            else {
                this.loadingCtrl.dismiss();
                this.presentToast('Invalid Details', 'Please confirm your details', 2000, 'warning');
            }
        }, (err) => {
            console.error('Sign In err: ' + err);
            this.loadingCtrl.dismiss();
            this.presentToast('Sign In Error', 'An error occurred. Please try again!', 4000, 'error');
        });
    }
    googleSignIn() {
        this.googlePlus
            .login({})
            .then((result) => {
            this.userData = result;
            console.log('this.userData: ' + JSON.stringify(this.userData));
            alert('this.userData: ' + JSON.stringify(this.userData));
        })
            .catch((err) => {
            this.userData = `Error ${console.log(JSON.stringify(err))}`;
            alert('Err: ' + JSON.stringify(this.userData));
        });
    }
};
SignInPage.ctorParameters = () => [
    { type: src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
    { type: src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_8__["OrderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"] },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__["GooglePlus"] },
    { type: _core_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"] }
];
SignInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-in',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-in.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-in.page.scss */ "./src/app/sign-in/sign-in.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
        src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_8__["OrderService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"],
        _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__["GooglePlus"],
        _core_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"]])
], SignInPage);



/***/ })

}]);
//# sourceMappingURL=sign-in-sign-in-module-es2015.js.map