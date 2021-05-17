(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["address-book-address-book-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/address-book/address-book.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/address-book/address-book.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddressBookAddressBookPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar *ngIf=\"!edit && !add\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"myBackButton()\">\n        <ion-icon\n          size=\"small\"\n          name=\"arrow-back-outline\"\n          color=\"light\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon size=\"small\" name=\"search-outline\" color=\"light\"></ion-icon>\n      </ion-button>\n      <ion-button id=\"notification-button\" (click)=\"goToCart()\">\n        <ion-icon size=\"large\" name=\"cart-outline\" color=\"light\"></ion-icon>\n        <ion-badge\n          id=\"notifications-badge\"\n          color=\"light\"\n          class=\"note_title8Black\"\n          *ngIf=\"currentUser\"\n          >{{ cartTotal }}\n        </ion-badge>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>My Addresses</ion-title>\n  </ion-toolbar>\n  <ion-toolbar *ngIf=\"edit || add\">\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeDialog()\">\n        <ion-icon\n          size=\"small\"\n          name=\"close-circle-outline\"\n          color=\"light\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-progress-bar\n  color=\"primary\"\n  type=\"indeterminate\"\n  *ngIf=\"isLoading\"\n></ion-progress-bar>\n\n<ion-content>\n  <section class=\"sectionProductItem\" *ngIf=\"!edit && !add\">\n    <ion-grid>\n      <ion-row\n        *ngFor=\"let address of addresses; let i=index\"\n        class=\"gridProductItemList\"\n      >\n        <ion-col size=\"9\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <app-text-shell\n                animation=\"gradient\"\n                [data]=\"address?.name\"\n                class=\"note_title_bold14Sec\"\n              ></app-text-shell>\n              <!-- <app-text-shell animation=\"gradient\" [data]=\"address?.no+' ' + address?.street+', ' \"></app-text-shell> -->\n              <app-text-shell\n                animation=\"gradient\"\n                [data]=\"address?.no+' '+ address?.street+', '+ address?.landmark\"\n              >\n              </app-text-shell>\n              <app-text-shell\n                animation=\"gradient\"\n                [data]=\"address.city+', ' +address.state+', ' +address.country\"\n              ></app-text-shell>\n              <br />\n              <app-text-shell\n                animation=\"gradient\"\n                [data]=\"address?.phone\"\n              ></app-text-shell>\n              <br />\n              <div *ngIf=\"address.isDefault\" class=\"note_title10Black\">\n                * This is your default address\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"3\" class=\"t_right note_title12Sec\">\n          <ion-icon\n            name=\"create-outline\"\n            color=\"success\"\n            (click)=\"editAddress(address)\"\n          ></ion-icon>\n          <ion-icon\n            name=\"trash-outline\"\n            color=\"danger\"\n            (click)=\"deleteAddress(address)\"\n          ></ion-icon>\n          <!-- <ion-text *ngIf=\"address\">Edit</ion-text> -->\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </section>\n  <section *ngIf=\"edit || add\">\n    <form [formGroup]=\"addressForm\">\n      <ion-grid style=\"padding-top: 10%;\" class=\"card\">\n        <ion-row>\n          <ion-col col-12 class=\"colForm\">\n            <ion-item lines=\"none\">\n              <ion-label color=\"dark\" position=\"floating\"\n                >Full Name</ion-label\n              >\n              <ion-input formControlName=\"name\" type=\"text\" clear-input=\"true\">\n              </ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 class=\"colForm\">\n            <ion-item lines=\"none\">\n              <ion-label color=\"dark\" position=\"floating\"\n                >House Number</ion-label\n              >\n              <ion-input formControlName=\"no\" type=\"text\" clear-input=\"true\">\n              </ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 class=\"colForm\">\n            <ion-item lines=\"none\">\n              <ion-label color=\"dark\" position=\"floating\"\n                >Street Name</ion-label\n              >\n              <ion-input formControlName=\"street\" clear-input=\"true\">\n              </ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 class=\"colForm\">\n            <ion-item lines=\"none\">\n              <ion-label color=\"dark\" position=\"floating\"\n                >Landmark</ion-label\n              >\n              <ion-input\n                formControlName=\"landmark\"\n                type=\"text\"\n                clear-input=\"true\"\n              >\n              </ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"3\" class=\"colForm\">\n            <ion-item lines=\"none\">\n              <ion-select  value=\"+234\" (ionChange)=\"changeMobileCountry($event)\" formControlName=\"ext\">\n                  <ion-select-option  value=\"+234\">+234</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n\n          <ion-col size=\"9\" class=\"colForm\">\n          <ion-item lines=\"none\">\n           <ion-input formControlName=\"phone\" type=\"tel\" clear-input=\"true\" placeholder=\"Mobile phone number\"  maxlength=\"10\"></ion-input>\n          </ion-item>\n           </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12 class=\"colForm\">\n            <ion-item lines=\"none\">\n              <ion-label color=\"dark\">State</ion-label>\n              <ion-select\n                [value]=\"state\"\n                (ionChange)=\"changeState($event)\"\n                okText=\"Okay\"\n                cancelText=\"Dismiss\"\n                formControlName=\"state\"\n              >\n                <ng-container *ngIf=\"states\">\n                  <ion-select-option value=\"\"\n                    >Choose ...</ion-select-option\n                  >\n                  <ion-select-option\n                    value=\"{{st.state.name}}\"\n                    *ngFor=\"let st of states\"\n                    >{{st.state.name}}\n                  </ion-select-option>\n                </ng-container>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 class=\"colForm\">\n            <ion-item lines=\"none\">\n              <ion-label color=\"dark\">City</ion-label>\n              <ion-select\n                [value]=\"city\"\n                (ionChange)=\"changeCity($event)\"\n                okText=\"Okay\"\n                cancelText=\"Dismiss\"\n                formControlName=\"city\"\n              >\n                <ng-container *ngIf=\"lgas\">\n                  <ion-select-option value=\"\"\n                  >Choose ...</ion-select-option\n                >\n                  <ion-select-option\n                    value=\"{{lga.name}}\"\n                    *ngFor=\"let lga of lgas\"\n                    >{{lga.name}}\n                  </ion-select-option>\n                </ng-container>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <!-- <ion-row>\n              <ion-col col-12  class=\"colForm\">\n                <ion-item lines=\"none\">\n                  <ion-label color=\"primary\" position=\"floating\">Country</ion-label>\n                  <ion-input formControlName=\"country\" type=\"text\" clear-input=\"true\" readonly=\"true\">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row> -->\n\n        <ion-row>\n          <ion-col col-12 class=\"colForm\">\n            <ion-item lines=\"none\">\n              <ion-checkbox formControlName=\"isDefault\"></ion-checkbox>\n              &nbsp;Set as \"Default Shipping Address\"\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </section>\n  <section *ngIf=\"!addresses\">\n    <ion-grid class=\"grid\" class=\"t_center\" style=\"padding-top: 50px;\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-icon\n            name=\"reader-outline\"\n            size=\"large\"\n            slot=\"start\"\n            color=\"primary\"\n          ></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-text> YOU CURRENTLY HAVE NO ADDRESS!</ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </section>\n</ion-content>\n<ion-footer class=\"ion-no-border\" class=\"footer\">\n  <ion-toolbar>\n    <ion-button\n      expand=\"full\"\n      color=\"primary\"\n      (click)=\"newAddress()\"\n      *ngIf=\"!edit && !add\"\n    >\n      <ion-icon size=\"small\" name=\"add-outline\"></ion-icon> ADD NEW ADDRESS\n    </ion-button>\n    <ion-button\n      expand=\"full\"\n      color=\"primary\"\n      [disabled]=\"!addressForm.valid\"\n      (click)=\"onSubmit()\"\n      *ngIf=\"edit || add\"\n    >\n      {{addressId ? 'UPDATE' : 'ADD'}} ADDRESS\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/address-book/address-book.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/address-book/address-book.module.ts ***!
    \*****************************************************/

  /*! exports provided: AddressBookPageModule */

  /***/
  function srcAppAddressBookAddressBookModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressBookPageModule", function () {
      return AddressBookPageModule;
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


    var _shell_shell_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shell/shell.module */
    "./src/app/shell/shell.module.ts");
    /* harmony import */


    var _address_book_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./address-book.page */
    "./src/app/address-book/address-book.page.ts");
    /* harmony import */


    var _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../sharedComponents/shared-components.module */
    "./src/app/sharedComponents/shared-components.module.ts");

    let AddressBookPageModule = class AddressBookPageModule {};
    AddressBookPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _address_book_page__WEBPACK_IMPORTED_MODULE_7__["AddressBookPage"]
      }]), _shell_shell_module__WEBPACK_IMPORTED_MODULE_6__["ShellModule"], _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_8__["SharedComponentsModule"]],
      declarations: [_address_book_page__WEBPACK_IMPORTED_MODULE_7__["AddressBookPage"]]
    })], AddressBookPageModule);
    /***/
  },

  /***/
  "./src/app/address-book/address-book.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/address-book/address-book.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddressBookAddressBookPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-icon {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkcmVzcy1ib29rL0M6XFxQcm9qZWN0XFxBbmd1bGFyXFxlYXN5bWFsbF9ub25vZGUgKDEpXFxlYXN5bWFsbF9ub25vZGUvc3JjXFxhcHBcXGFkZHJlc3MtYm9va1xcYWRkcmVzcy1ib29rLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkcmVzcy1ib29rL2FkZHJlc3MtYm9vay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hZGRyZXNzLWJvb2svYWRkcmVzcy1ib29rLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufSIsImlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/address-book/address-book.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/address-book/address-book.page.ts ***!
    \***************************************************/

  /*! exports provided: AddressBookPage */

  /***/
  function srcAppAddressBookAddressBookPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressBookPage", function () {
      return AddressBookPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/models/user.model */
    "./src/app/shared/models/user.model.ts");
    /* harmony import */


    var src_app_core_http_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/core/http-services/user.service */
    "./src/app/core/http-services/user.service.ts");
    /* harmony import */


    var src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/core/authentication/authentication.service */
    "./src/app/core/authentication/authentication.service.ts");
    /* harmony import */


    var src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/core/http-services/product.service */
    "./src/app/core/http-services/product.service.ts");

    let AddressBookPage = class AddressBookPage {
      constructor(toastController, loadingCtrl, nativeStorage, authService, productService, userService, router, route, location, _cdr) {
        this.toastController = toastController;
        this.loadingCtrl = loadingCtrl;
        this.nativeStorage = nativeStorage;
        this.authService = authService;
        this.productService = productService;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.location = location;
        this._cdr = _cdr;
        this.address = new src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_8__["AddressModel"]();
        this.selState = '';
        this.currentUser = this.authService.currentUserValue();
        this.selectCity = '';
        this.add = false;
        this.edit = false;
        this.addresses = [];
        this.isDefaultAddress = true;
        this.hasAddress = false;
        this.title = 'My Addresses';
        this.cartTotal = 0;
        this.isLoading = false; // console.log('Current User: ' + JSON.stringify(this.currentUser));

        this.productService.cartQty.subscribe(value => this.cartTotal = Number(value));
        this.addressForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
          no: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.address.no, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
          street: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.address.street, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10)]),
          landmark: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.address.landmark),
          city: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.address.city, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3)]),
          state: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.address.state, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3)]),
          country: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('Nigeria', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
          ext: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('+234', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
          isDefault: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.address.isDefault),
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.address.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
          phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10)])
        });
      }

      myBackButton() {
        // console.log("this.location: " + this.location)
        this.location.back();
      }

      ngOnInit() {
        this.nativeStorage.getItem('currentUser').then(x => {
          this.currentUser = x;
          this.getAddresses();
          this.getStates();
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

      getStates() {
        this.userService.getStatesLgas().subscribe(dt => {
          this.states = dt;
          this.selState = this.states[0].state.name;

          if (this.states.length > 0) {
            this.getLgas(this.states[0].state.name);
          }
        });
      }

      getLgas(state) {
        this.states.forEach(st => {
          if (st.state.name === state) {
            this.lgas = st.state.locals;
            this.selectCity = this.lgas[0].name;
            this.addressForm.value.state = this.selState;
            this.addressForm.value.city = this.selectCity; // console.log('getStates() this.addressForm.value: ' + JSON.stringify(this.addressForm.value))

            return;
          }
        }); // console.log('LGAs: ' + JSON.stringify(this.lgas))
        // console.log('selectCity: ' + this.selectCity)
      }

      changeState(e) {
        console.log('Change State: ' + JSON.stringify(e.target.value));
        console.log('Change Address: ' + JSON.stringify(this.addressForm.value));
        this.getLgas(e.target.value);
      }

      changeCity(e) {
        console.log('Change City: ' + JSON.stringify(e.target.value));
        console.log('Change Address: ' + JSON.stringify(this.addressForm.value));
        this.getLgas(e.target.value);
      }

      onCountryChange($event) {// console.log('onCountryChange: ' + $event.value)
      }

      changeMobileCountry($event) {// console.log('changeMobileCountry: ' + $event.value)
      }

      getAddresses() {
        this.isLoading = true;
        this.userService.getAddresses(this.currentUser.token).subscribe(data => {
          if (!data.error) {
            this.addresses = data.data; // console.log('Addresses: ' + JSON.stringify(this.addresses));

            const def = this.addresses.find(x => x.isDefault);
            this.selectedId = def ? def._id : null;
            this.isLoading = false;
          }
        }, err => {
          this.isLoading = false;
          sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            position: 'center',
            icon: 'error',
            title: err.message,
            text: err.errors.join(','),
            showConfirmButton: true
          });
        });
      }

      onSubmit() {
        if (this.addressId) {
          this.updateAddress();
        } else {
          this.addAddress();
        }
      }

      setAddress(address) {
        if (address) {
          this.addressForm.setValue({
            street: address.street,
            city: address.city,
            state: address.state,
            country: address.country,
            isDefault: address.isDefault,
            phone: address.phone.replace(this.addressForm.value.ext, ''),
            ext: '+234',
            no: address.no,
            name: address.name,
            landmark: address.landmark
          });
          this.selState = address.state;
          this.getLgas(this.selState); // this.selectCity = address.city;
          // console.log('setAddress: ' + JSON.stringify(address))

          this._cdr.detectChanges();
        }
      }

      editAddress(address) {
        this.title = 'Edit Address';
        console.log('editAddress: ' + JSON.stringify(address));
        this.addressId = address._id;
        this.edit = true;
        this.add = false;
        this.setAddress(address);
      }

      newAddress() {
        this._cdr.detectChanges();

        this.title = 'Add new address';
        this.addressForm.patchValue({
          name: this.currentUser.user.fName + ' ' + this.currentUser.user.sName
        }); // this.addressForm.patchValue({ 'phone': this.currentUser.user.phone})  ;

        console.log('newAddress: ' + JSON.stringify(this.addressForm.value));
        this.addressId = null;
        this.edit = false;
        this.add = true;
      }

      deleteAddress(address) {
        this.title = 'Delete Address';
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
          title: 'Are you sure?',
          text: 'Are you sure you want to delete this?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then(result => {
          if (result.value) {
            this.loadingCtrl.create({
              spinner: 'dots',
              message: 'Deleting address! Please wait...',
              duration: 15000,
              cssClass: 'custom-loader-class'
            }).then(res => {
              res.present();
              res.onDidDismiss().then(dis => {});
            });
            this.userService.deleteAddress(this.currentUser.token, address._id).subscribe(data => {
              this.loadingCtrl.dismiss();

              if (!data.error) {
                this.title = 'My Addresses';
                this.addresses = data.data;
              }

              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                position: 'center',
                icon: data.error ? 'error' : 'success',
                title: data.error ? 'Oops' : 'Congratulations',
                text: data.error ? 'Could not delete your address at this time. Please try again!' : 'The address was deleted successfully!',
                showConfirmButton: true
              });
            }, err => {
              this.loadingCtrl.dismiss();
              console.error(err);
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                position: 'center',
                icon: 'error',
                title: 'Delete Error',
                text: err.errors.join(','),
                showConfirmButton: true
              });
            });
          }
        });
      }

      addAddress() {
        // console.log('addAddress() this.addressForm.value: ' + JSON.stringify(this.addressForm.value));
        this.addressForm.patchValue({
          phone: this.addressForm.value.ext + '' + this.addressForm.value.phone
        }); // console.log('Edited addAddress() this.addressForm.value: ' + JSON.stringify(this.addressForm.value));

        this.loadingCtrl.create({
          spinner: 'dots',
          message: 'Adding address! Please wait...',
          duration: 15000,
          cssClass: 'custom-loader-class'
        }).then(res => {
          res.present();
          res.onDidDismiss().then(dis => {});
        });
        this.userService.addAddress(this.currentUser.token, this.addressForm.value).subscribe(data => {
          console.log('addAddress() Returned data: ' + JSON.stringify(data.data));

          if (!data.error) {
            this.title = 'My Addresses';
            this.addresses = data.data;
            this.add = false;
            this.loadingCtrl.dismiss();
            this.addressForm.reset();
          }

          sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            position: 'center',
            icon: data.error ? 'error' : 'success',
            title: data.error ? 'Oops' : 'Congratulations',
            text: data.error ? 'Could not save your address at this time. Please try again!' : 'Your address was saved successfully!',
            showConfirmButton: true
          }).then(res => {});
        }, err => {
          this.loadingCtrl.dismiss();
          this.addressForm.patchValue({
            phone: this.addressForm.value.phone.replace(this.addressForm.value.ext, '')
          });
          console.error(err);
          sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            position: 'center',
            icon: 'error',
            title: 'Save Error',
            text: 'Could not save your address at this time. Please try again!',
            showConfirmButton: true
          });
        });
      }

      updateAddress() {
        // console.log('updateAddress() this.addressForm.value: ' + JSON.stringify(this.addressForm.value))
        this.addressForm.patchValue({
          phone: this.addressForm.value.ext + '' + this.addressForm.value.phone
        });
        this.loadingCtrl.create({
          spinner: 'dots',
          message: 'Updating address! Please wait...',
          duration: 15000,
          cssClass: 'custom-loader-class'
        }).then(res => {
          res.present();
          res.onDidDismiss().then(dis => {});
        });
        this.userService.updateAddress(this.currentUser.token, this.addressId, this.addressForm.value).subscribe(data => {
          sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            position: 'center',
            icon: data.error ? 'error' : 'success',
            title: data.error ? 'Oops' : 'Congratulations',
            text: data.error ? 'Could not update your address at this time. Please try again!' : 'Your address was updated successfully!',
            showConfirmButton: true
          }).then(res => {
            if (!data.error) {
              this.title = 'My Addresses';
              this.addressId = null;
              this.addresses = data.data;
              this.edit = false;
              this.addressForm.reset();
              this.loadingCtrl.dismiss();
            } // this.router.navigate(["/app/profile"]);

          });
        }, err => {
          this.addressForm.patchValue({
            phone: this.addressForm.value.phone.replace(this.addressForm.value.ext, '')
          });
          console.error(err);
          this.loadingCtrl.dismiss();
          sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            position: 'center',
            icon: 'error',
            title: 'Update Error',
            text: 'An error occurred during the update. Please try again!',
            showConfirmButton: true
          });
        });
      }

      closeDialog() {
        // console.log('Close Dialog')
        this.title = 'My Addresses';
        this.edit = false;
        this.add = false;
      }

      goToCart() {
        this.router.navigate(['/cart']);
      }

    };

    AddressBookPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
    }, {
      type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"]
    }, {
      type: src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]
    }, {
      type: src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_11__["ProductService"]
    }, {
      type: src_app_core_http_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
    }];

    AddressBookPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-address-book',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./address-book.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/address-book/address-book.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./address-book.page.scss */
      "./src/app/address-book/address-book.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"], src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"], src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_11__["ProductService"], src_app_core_http_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], AddressBookPage);
    /***/
  }
}]);
//# sourceMappingURL=address-book-address-book-module-es5.js.map