(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppForgotPasswordForgotPasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header [title]=\"title\" [longSearch]=\"longSearch\" [showBackButton]=\"showBackButton\" [isLoading]=\"loading\"\n  [showSearch]=\"showSearch\">\n</app-header>\n<ion-content>  \n  <div class=\"topFadedLogo\"> </div>\n  <form [formGroup]=\"sendEmailVerificationCodeForm\">\n    <ion-grid  style=\"padding-top:75px;\">\n    \n    <ion-row>\n      <ion-col size=\"12\">\n          <ion-text class=\"\">\n            Please type in your email.<br>\n            We will send you a link to change the password.\n          </ion-text>\n          <br><br>        \n        <ion-item lines=\"none\" >\n          <ion-label color=\"dark\" position=\"floating\">E-Mail</ion-label>\n          <ion-icon name=\"mail-outline\" color=\"primary\" slot=\"start\"></ion-icon>\n          <ion-input formControlName=\"email\" type=\"email\" clear-input=\"true\" placeholder=\"E-Mail\">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n      <div *ngIf=\"!sendEmailVerificationCodeForm.controls.email.valid && sendEmailVerificationCodeForm.controls.email.dirty\">\n        <p style=\"color:#330501!important;text-align:center;\">Please enter a VALID email Address</p>\n      </div>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" style=\"padding: 0px;\">\n        <div style=\"padding-top: 10px;\">\n          <ion-button expand=\"full\" color=\"primary\" (click)=\"sendResetLink()\" [disabled]=\"!sendEmailVerificationCodeForm.valid || loading\"> SUBMIT\n          </ion-button>        \n        </div>\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n  </form> \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/core/http-services/user.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/core/http-services/user.service.ts ***!
    \****************************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppCoreHttpServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_shared_models_storage_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/models/storage.model */
    "./src/app/shared/models/storage.model.ts");
    /* harmony import */


    var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../authentication/authentication.service */
    "./src/app/core/authentication/authentication.service.ts");

    let UserService = class UserService {
      constructor(http, nativeStorage, authService) {
        this.http = http;
        this.nativeStorage = nativeStorage;
        this.authService = authService;
        this.apiUrl = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "accounts/");

        this.getUser = () => {
          return this.nativeStorage.getItem('currentUser').then(dt => {
            if (dt) {
              return dt;
            } else {
              return null;
            }
          }, err => {
            return null;
          });
        };

        this.getUsername = () => {
          return this.nativeStorage.getItem('currentUser').then(dt => {
            if (dt) {
              return dt.user.fName + " " + dt.user.sName;
            } else {
              return null;
            }
          }, err => {
            return null;
          });
        };
      }

      headerSetter(token) {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          channel: "mobile",
          "Content-Type": "application/json",
          Authorization: "Bearer ".concat(token)
        });
      }

      headerSt() {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          channel: "mobile",
          "Content-Type": "application/json"
        });
      }

      getSlides() {
        return this.http.get("".concat(this.apiUrl, "resources/slide"));
      }

      register(body) {
        return this.http.post("".concat(this.apiUrl, "register"), body, {
          headers: this.headerSt()
        });
      }

      changePassword(token, body) {
        return this.http.post("".concat(this.apiUrl, "change-password"), body, {
          headers: this.headerSetter(token)
        });
      }

      sendEmailVerificationCode(body) {
        return this.http.post("".concat(this.apiUrl, "send-email-verification-token"), body, {
          headers: this.headerSt()
        });
      }

      verifyEmailCode(body) {
        return this.http.post("".concat(this.apiUrl, "email-verification"), body, {
          headers: this.headerSt()
        });
      }

      requestForPasswordResetLink(body) {
        return this.http.post("".concat(this.apiUrl, "send-reset-password"), body, {
          headers: this.headerSt()
        });
      }

      resetPassword(body) {
        return this.http.post("".concat(this.apiUrl, "reset-password"), body, {
          headers: this.headerSt()
        });
      }

      updateProfile(token, body) {
        return this.http.put("".concat(this.apiUrl, "profile"), body, {
          headers: this.headerSetter(token)
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => {
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
        return this.http.get("".concat(this.apiUrl, "profile"), {
          headers: this.headerSetter(token)
        });
      }

      getAddresses(token) {
        return this.http.get("".concat(this.apiUrl, "addresses"), {
          headers: this.headerSetter(token)
        });
      }

      getAddress(id) {
        return this.http.get("".concat(this.apiUrl, "addresses/").concat(id));
      }

      deleteAddress(token, id) {
        return this.http.delete("".concat(this.apiUrl, "addresses/").concat(id), {
          headers: this.headerSetter(token)
        });
      }

      updateAddress(token, id, body) {
        return this.http.put("".concat(this.apiUrl, "addresses/").concat(id), body, {
          headers: this.headerSetter(token)
        });
      }

      addAddress(token, body) {
        return this.http.post("".concat(this.apiUrl, "addresses"), body, {
          headers: this.headerSetter(token)
        });
      }

      becomeSeller(token, body) {
        return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/merchants/become-merchant"), body, {
          headers: this.headerSetter(token)
        });
      }

      getStatesLgas() {
        return this.http.get("../../../assets/states.json");
      }

    };

    UserService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"]
    }, {
      type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
    }];

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"], _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]])], UserService);
    /***/
  },

  /***/
  "./src/app/forgot-password/forgot-password.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/forgot-password/forgot-password.module.ts ***!
    \***********************************************************/

  /*! exports provided: ForgotPasswordPageModule */

  /***/
  function srcAppForgotPasswordForgotPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function () {
      return ForgotPasswordPageModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../sharedComponents/shared-components.module */
    "./src/app/sharedComponents/shared-components.module.ts");
    /* harmony import */


    var _forgot_password_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./forgot-password.page */
    "./src/app/forgot-password/forgot-password.page.ts");

    let ForgotPasswordPageModule = class ForgotPasswordPageModule {};
    ForgotPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordPage"]
      }]), _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"]],
      declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordPage"]]
    })], ForgotPasswordPageModule);
    /***/
  },

  /***/
  "./src/app/forgot-password/forgot-password.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/forgot-password/forgot-password.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppForgotPasswordForgotPasswordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n  align-content: left;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  --background: #FFF;\n  text-align: left;\n  padding: 0 5%;\n}\nion-content .topFadedLogo {\n  position: absolute;\n  top: 0px !important;\n  left: 0px !important;\n  background: url('topLeftLogo.svg') !important;\n  height: 70px !important;\n  width: 70px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL0lvbmljL2FmcmltYXJ0b25lL3NyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0MsYUFBQTtBQ0NMO0FERUk7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSw2Q0FBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMHB4O1xuICAgIHRvcDogMHB4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGxlZnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC0tYmFja2dyb3VuZDogI0ZGRjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICBwYWRkaW5nOiAwIDUlO1xuICAgIC8vICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvdmVjdG9ycy9pY29ucy90b3BMZWZ0TG9nby5zdmcpO2JhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgLy8gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgLnRvcEZhZGVkTG9nb3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjBweCFpbXBvcnRhbnQ7XG4gICAgbGVmdDowcHghaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL3ZlY3RvcnMvaWNvbnMvdG9wTGVmdExvZ28uc3ZnJykhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNzBweCFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDcwcHghaW1wb3J0YW50O1xuICAgIH1cbn1cblxuXG5cblxuICIsImlvbi1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBhbGlnbi1jb250ZW50OiBsZWZ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtLWJhY2tncm91bmQ6ICNGRkY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDAgNSU7XG59XG5pb24tY29udGVudCAudG9wRmFkZWRMb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweCAhaW1wb3J0YW50O1xuICBsZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL3ZlY3RvcnMvaWNvbnMvdG9wTGVmdExvZ28uc3ZnXCIpICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/forgot-password/forgot-password.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/forgot-password/forgot-password.page.ts ***!
    \*********************************************************/

  /*! exports provided: ForgotPasswordPage */

  /***/
  function srcAppForgotPasswordForgotPasswordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function () {
      return ForgotPasswordPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_core_http_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/http-services/user.service */
    "./src/app/core/http-services/user.service.ts");
    /* harmony import */


    var src_app_core_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/core/utility.service */
    "./src/app/core/utility.service.ts");
    /* harmony import */


    var src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/models/user.model */
    "./src/app/shared/models/user.model.ts");

    let ForgotPasswordPage = class ForgotPasswordPage {
      constructor(userService, utilityService, router, loadingCtrl, toastController, formBuilder) {
        this.userService = userService;
        this.utilityService = utilityService;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.toastController = toastController;
        this.formBuilder = formBuilder; ///Inputs

        this.title = 'Password Recovery';
        this.longSearch = false;
        this.showBackButton = true;
        this.loading = false;
        this.showSearch = false;
        this.sendEmailVerificationCode = new src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_7__["SendEmailVerificationCodeModel"]();
        this.sendEmailVerificationCodeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.sendEmailVerificationCode.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
          callback: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("".concat(this.utilityService.getBaseUrl(), "/auth/verify-email/"))
        });
      }

      ngOnInit() {}

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

      sendResetLink() {
        this.loading = true;
        this.loadingCtrl.create({
          spinner: 'dots',
          message: 'Signing in! Please wait...',
          duration: 5000,
          cssClass: 'custom-loader-class'
        }).then(res => {
          res.present();
          res.onDidDismiss().then(dis => {});
        });
        this.userService.sendEmailVerificationCode(this.sendEmailVerificationCodeForm.value).subscribe(data => {
          this.sendEmailVerificationCodeForm.reset();

          if (!data.error) {
            // console.log('loginUser:'+JSON.stringify(data.data));
            this.loadingCtrl.dismiss();
            this.loading = false;
            this.router.navigate(['/sign-in']);
            this.presentToast('Congratulations', 'Your reset link has been sent. Please check your email for details', 2000, 'success');
          } else {
            this.loadingCtrl.dismiss();
            this.loading = false;
            this.presentToast('Invalid Details', 'Please confirm your details', 2000, 'warning');
          }
        }, err => {
          this.loadingCtrl.dismiss();
          this.loading = false;
          this.presentToast('Sign up Error', 'An error occurred. Please try again!', 4000, 'error');
        });
      }

    };

    ForgotPasswordPage.ctorParameters = () => [{
      type: src_app_core_http_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
    }, {
      type: src_app_core_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
    }];

    ForgotPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgot-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgot-password.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgot-password.page.scss */
      "./src/app/forgot-password/forgot-password.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_http_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], src_app_core_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])], ForgotPasswordPage);
    /***/
  }
}]);
//# sourceMappingURL=forgot-password-forgot-password-module-es5.js.map