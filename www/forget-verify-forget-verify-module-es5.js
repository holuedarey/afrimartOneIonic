(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forget-verify-forget-verify-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forget-verify/forget-verify.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forget-verify/forget-verify.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppForgetVerifyForgetVerifyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content >\n  <!-- <div class=\"topFadedLogo\"> </div> -->\n  <form [formGroup]=\"activateForm\" >\n    <ion-grid style=\"padding-top:75px;\" class=\"card\">\n      <ion-row>\n        <ion-col text-center>\n          <div class=\"ion-text-center header-title\">ACTIVATE</div>\n          <p class=\"t_center\">Kindly enter activation code sent to your email</p>\n        </ion-col>\n\n        <ion-col size=\"12\">\n          <ion-row>\n            <ion-col size=\"12\" class=\"colForm\">\n                <ion-label color=\"dark\" position=\"floating\">Activation Code</ion-label>\n                <ion-input class=\"qouteForm\" formControlName=\"token\" type=\"text\" placeholder=\"Enter your Activation Code\" clear-input=\"true\">\n                </ion-input> \n            </ion-col>\n            <div *ngIf=\"!activateForm.controls.token.valid && activateForm.controls.token.dirty\">\n              <p style=\"color:#330501!important;text-align:center;\">Please enter a VALID Activation Code</p>\n            </div>\n          </ion-row>\n          \n          <ion-row>\n            <ion-col size=\"12\" style=\"padding: 0px;\">\n              <div style=\"padding-top: 10px;\">\n                <ion-button expand=\"block\" color=\"primary\" (click)=\"activateUser()\" [disabled]=\"!activateForm.valid\"> Activate\n                </ion-button>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12 class=\"t_center\" style=\"margin-top:50px;\">\n          <p class=\"font-14\">Already have an Account?</p>\n        </ion-col>\n      </ion-row>\n      <br>\n      <ion-row>\n        <ion-col col-12 class=\"t_center\" >\n          <a style=\"font-size: 18px; font-family: 'RedHatDisplayBold'; color: #CB982F !important;\" [routerLink]=\"['/sign-in']\">Sign In Here</a>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </form>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" *ngIf=\"isloadingSettings\">\n        <ion-note color=\"primary\">{{loadingText}}</ion-note>\n        <ion-progress-bar color=\"primary\" type=\"indeterminate\"></ion-progress-bar>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
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
    /* harmony import */


    var _common_endpoints__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../common/endpoints */
    "./src/app/core/common/endpoints.ts");

    let UserService = class UserService {
      constructor(http, nativeStorage, authService) {
        this.http = http;
        this.nativeStorage = nativeStorage;
        this.authService = authService;
        this.apiUrl = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "auth/");

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
        return this.http.post(_common_endpoints__WEBPACK_IMPORTED_MODULE_8__["Endpoint"].AUTH.register, body);
      }

      changePassword(body) {
        return this.http.post(_common_endpoints__WEBPACK_IMPORTED_MODULE_8__["Endpoint"].USER.changePassword, body);
      }

      ResendEmailVerificationCode(email) {
        return this.http.get("".concat(_common_endpoints__WEBPACK_IMPORTED_MODULE_8__["Endpoint"].AUTH.resendVerify, "?email=").concat(email));
      }

      verifyEmailCode(token) {
        return this.http.get("".concat(_common_endpoints__WEBPACK_IMPORTED_MODULE_8__["Endpoint"].AUTH.verify, "?token=").concat(token));
      }

      requestForPasswordResetLink(body) {
        return this.http.post(_common_endpoints__WEBPACK_IMPORTED_MODULE_8__["Endpoint"].AUTH.initiatePasswordReset, body);
      }

      resetPassword(token) {
        return this.http.get("".concat(_common_endpoints__WEBPACK_IMPORTED_MODULE_8__["Endpoint"].AUTH.verifyPasswordReset, "?token=").concat(token));
      }

      updateProfile(body) {
        return this.http.put(_common_endpoints__WEBPACK_IMPORTED_MODULE_8__["Endpoint"].USER.editProfile, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => {
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
  "./src/app/forget-verify/forget-verify-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/forget-verify/forget-verify-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: ForgetVerifyPageRoutingModule */

  /***/
  function srcAppForgetVerifyForgetVerifyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgetVerifyPageRoutingModule", function () {
      return ForgetVerifyPageRoutingModule;
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


    var _forget_verify_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forget-verify.page */
    "./src/app/forget-verify/forget-verify.page.ts");

    const routes = [{
      path: '',
      component: _forget_verify_page__WEBPACK_IMPORTED_MODULE_3__["ForgetVerifyPage"]
    }];
    let ForgetVerifyPageRoutingModule = class ForgetVerifyPageRoutingModule {};
    ForgetVerifyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ForgetVerifyPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/forget-verify/forget-verify.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/forget-verify/forget-verify.module.ts ***!
    \*******************************************************/

  /*! exports provided: ForgetVerifyPageModule */

  /***/
  function srcAppForgetVerifyForgetVerifyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgetVerifyPageModule", function () {
      return ForgetVerifyPageModule;
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


    var _forget_verify_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./forget-verify-routing.module */
    "./src/app/forget-verify/forget-verify-routing.module.ts");
    /* harmony import */


    var _forget_verify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./forget-verify.page */
    "./src/app/forget-verify/forget-verify.page.ts");

    let ForgetVerifyPageModule = class ForgetVerifyPageModule {};
    ForgetVerifyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forget_verify_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgetVerifyPageRoutingModule"]],
      declarations: [_forget_verify_page__WEBPACK_IMPORTED_MODULE_6__["ForgetVerifyPage"]]
    })], ForgetVerifyPageModule);
    /***/
  },

  /***/
  "./src/app/forget-verify/forget-verify.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/forget-verify/forget-verify.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppForgetVerifyForgetVerifyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdldC12ZXJpZnkvZm9yZ2V0LXZlcmlmeS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/forget-verify/forget-verify.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/forget-verify/forget-verify.page.ts ***!
    \*****************************************************/

  /*! exports provided: ForgetVerifyPage */

  /***/
  function srcAppForgetVerifyForgetVerifyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgetVerifyPage", function () {
      return ForgetVerifyPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _core_http_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../core/http-services/user.service */
    "./src/app/core/http-services/user.service.ts");
    /* harmony import */


    var _core_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../core/loader.service */
    "./src/app/core/loader.service.ts");
    /* harmony import */


    var _core_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../core/storage.service */
    "./src/app/core/storage.service.ts");
    /* harmony import */


    var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/models/user.model */
    "./src/app/shared/models/user.model.ts");

    let ForgetVerifyPage = class ForgetVerifyPage {
      constructor(formBuilder, storageService, userService, LoaderService, router) {
        this.formBuilder = formBuilder;
        this.storageService = storageService;
        this.userService = userService;
        this.LoaderService = LoaderService;
        this.router = router;
        this.isloadingSettings = false;
        this.loadingText = '';
        this.ActivateAccModel = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_7__["ActivateAccModel"]();
        this.activateForm = this.formBuilder.group({
          token: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.ActivateAccModel.token = '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
        });
      }

      ngOnInit() {}

      activateUser() {
        const token = this.activateForm.value.token;
        this.LoaderService.showLoader('Activating Account! Please wait...', 10000, 'custom-loader-class');
        this.userService.verifyEmailCode(token).subscribe(data => {
          if (data.status == true) {
            console.log('Activate User Success:' + JSON.stringify(data));
            this.LoaderService.hideLoader();
            this.loading = false;
            this.router.navigate(['/sign-in']);
            this.LoaderService.presentToast('Congratulations', "".concat(data.message, " Please Login"), 5000, 'success');
          } else {
            this.LoaderService.hideLoader();
            this.loading = false; // console.log('Signup User Else:' + JSON.stringify(data));

            this.LoaderService.presentToast('Invalid Details', "".concat(data.message) || "Please confirm your details", 5000, 'warning');
          }
        }, error => {
          console.log(error);
        });
      }

    };

    ForgetVerifyPage.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _core_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
    }, {
      type: _core_http_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
    }, {
      type: _core_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    ForgetVerifyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forget-verify',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forget-verify.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forget-verify/forget-verify.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forget-verify.page.scss */
      "./src/app/forget-verify/forget-verify.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _core_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"], _core_http_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _core_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], ForgetVerifyPage);
    /***/
  }
}]);
//# sourceMappingURL=forget-verify-forget-verify-module-es5.js.map