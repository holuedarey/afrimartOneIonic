(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~address-book-address-book-module~become-supplier-become-supplier-module~cart-cart-module~cat~1ae0154c"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sharedComponents/accordion/accordion.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sharedComponents/accordion/accordion.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsAccordionAccordionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 (click)=\"toggleAccordion()\">\n  {{ name }}\n   <!-- <span *ngIf=\"isMenuOpen\">▲</span>\n   <span *ngIf=\"!isMenuOpen\">►</span> -->\n</h2>\n<div \n   [ngClass]=\"this.isMenuOpen ? 'active' : 'inactive'\">\n   <!-- <section class=\"image-wrapper\">\n   \t  <img [src]=\"image\">\n   </section> -->\n   <p>{{ description }}</p>\n   <!-- <ion-button \n      type=\"button\" \n      color=\"primary\" \n      fill=\"solid\" \n      size=\"default\" \n      (click)=\"broadcastName(name)\">Console log me!</ion-button> -->\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sharedComponents/header/header.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sharedComponents/header/header.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-searchbar\n      *ngIf=\"longSearch && showSearch\"\n      animated=\"false\"\n      placeholder=\"Search Products, Categories\"\n      (ionFocus)=\"loadSearchModal()\"\n    >\n    </ion-searchbar>\n\n    <ion-buttons slot=\"start\" *ngIf=\"showBackButton\">\n      <ion-button (click)=\"myBackButton()\">   \n        <ion-icon\n          size=\"small\"\n          name=\"arrow-back-outline\"\n          color=\"light\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"showSearch\">\n      <ion-button *ngIf=\"!longSearch && showSearch\" (click)=\"loadSearchModal()\">\n        <ion-icon name=\"search-outline\" color=\"light\"></ion-icon>\n      </ion-button>\n      <ion-button id=\"notification-button\" (click)=\"presentQouteModal()\">\n        <ion-icon src=\"/assets/vectors/icons/qoute.svg\" color=\"light\"></ion-icon>\n      </ion-button>\n      <ion-button id=\"notification-button\" (click)=\"presentQouteModal()\">\n        <ion-icon src=\"/assets/vectors/icons/label.svg\"  color=\"light\"></ion-icon>\n        <ion-badge\n          id=\"notifications-badge\"\n          color=\"light\"\n          class=\"note_title8Black\"\n          *ngIf=\"currentUser\"\n          >{{ cartTotal }}</ion-badge\n        >\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">{{ title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-progress-bar\n  color=\"primary\"\n  type=\"indeterminate\"\n  *ngIf=\"isLoading\"\n></ion-progress-bar>\n";
    /***/
  },

  /***/
  "./src/app/sharedComponents/accordion/accordion.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/sharedComponents/accordion/accordion.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsAccordionAccordionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h2 {\n  cursor: pointer;\n  position: relative;\n  padding: 1em 0.35em;\n  font-size: 1.35em;\n  background: #e6e6e6;\n  color: #6a2673;\n  border-bottom: 1px solid #d2d2d2;\n  margin: 0;\n  /* Define the style rules for the 'arrow icons' */\n}\nh2 span {\n  position: absolute;\n  right: 1em;\n  top: 1.2em;\n  font-size: 0.95em;\n}\n/* Here we define the actual 'menu' and its 'options' */\n.image-wrapper {\n  margin: 0 auto 2em auto;\n  width: 20%;\n}\n.image-wrapper img {\n  display: block;\n  margin: auto;\n}\np {\n  margin: 0 0 10px 0;\n  font-size: 1.35em;\n}\ndiv {\n  position: relative;\n  padding: 1em;\n  border-bottom: 1px solid #d2d2d2;\n}\n/* Following classes display/hide the 'menu'\n// based on the state change detection in the\n// component class */\n.active {\n  display: block;\n}\n.inactive {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkQ29tcG9uZW50cy9hY2NvcmRpb24vQzpcXFByb2plY3RcXEFuZ3VsYXJcXGVhc3ltYWxsX25vbm9kZSAoMSlcXGVhc3ltYWxsX25vbm9kZS9zcmNcXGFwcFxcc2hhcmVkQ29tcG9uZW50c1xcYWNjb3JkaW9uXFxhY2NvcmRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZENvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7RUFHQSxpREFBQTtBQ0RKO0FERUk7RUFDRyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNBUDtBREtDLHVEQUFBO0FBQ0E7RUFDRyx1QkFBQTtFQUNBLFVBQUE7QUNGSjtBRElJO0VBQ0csY0FBQTtFQUNBLFlBQUE7QUNGUDtBRE9DO0VBRUcsa0JBQUE7RUFFQSxpQkFBQTtBQ05KO0FEVUM7RUFDRyxrQkFBQTtFQUNBLFlBQUE7RUFFQSxnQ0FBQTtBQ1JKO0FEV0M7O29CQUFBO0FBR0E7RUFDRyxjQUFBO0FDUko7QURXQztFQUNHLGFBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZENvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDFlbSAwLjM1ZW07XG4gICAgZm9udC1zaXplOiAxLjM1ZW07XG4gICAgYmFja2dyb3VuZDojZTZlNmU2O1xuICAgIGNvbG9yOiM2YTI2NzM7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMmQyZDI7XG4gICAgbWFyZ2luOiAwO1xuXG5cbiAgICAvKiBEZWZpbmUgdGhlIHN0eWxlIHJ1bGVzIGZvciB0aGUgJ2Fycm93IGljb25zJyAqL1xuICAgIHNwYW4ge1xuICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICByaWdodDogMWVtO1xuICAgICAgIHRvcDogMS4yZW07XG4gICAgICAgZm9udC1zaXplOiAwLjk1ZW07XG4gICAgfVxuIH1cblxuXG4gLyogSGVyZSB3ZSBkZWZpbmUgdGhlIGFjdHVhbCAnbWVudScgYW5kIGl0cyAnb3B0aW9ucycgKi9cbiAuaW1hZ2Utd3JhcHBlciB7XG4gICAgbWFyZ2luOiAwIGF1dG8gMmVtIGF1dG87XG4gICAgd2lkdGg6IDIwJTtcblxuICAgIGltZyB7XG4gICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiB9XG5cblxuIHAge1xuICAgIC8vIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gICAgLy8gZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXNpemU6IDEuMzVlbTtcbiB9XG5cblxuIGRpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDJkMmQyO1xuIH1cblxuIC8qIEZvbGxvd2luZyBjbGFzc2VzIGRpc3BsYXkvaGlkZSB0aGUgJ21lbnUnXG4gLy8gYmFzZWQgb24gdGhlIHN0YXRlIGNoYW5nZSBkZXRlY3Rpb24gaW4gdGhlXG4gLy8gY29tcG9uZW50IGNsYXNzICovXG4gLmFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2tcbiB9XG5cbiAuaW5hY3RpdmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gfSIsImgyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDFlbSAwLjM1ZW07XG4gIGZvbnQtc2l6ZTogMS4zNWVtO1xuICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuICBjb2xvcjogIzZhMjY3MztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMmQyZDI7XG4gIG1hcmdpbjogMDtcbiAgLyogRGVmaW5lIHRoZSBzdHlsZSBydWxlcyBmb3IgdGhlICdhcnJvdyBpY29ucycgKi9cbn1cbmgyIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxZW07XG4gIHRvcDogMS4yZW07XG4gIGZvbnQtc2l6ZTogMC45NWVtO1xufVxuXG4vKiBIZXJlIHdlIGRlZmluZSB0aGUgYWN0dWFsICdtZW51JyBhbmQgaXRzICdvcHRpb25zJyAqL1xuLmltYWdlLXdyYXBwZXIge1xuICBtYXJnaW46IDAgYXV0byAyZW0gYXV0bztcbiAgd2lkdGg6IDIwJTtcbn1cbi5pbWFnZS13cmFwcGVyIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG5cbnAge1xuICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMS4zNWVtO1xufVxuXG5kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMmQyZDI7XG59XG5cbi8qIEZvbGxvd2luZyBjbGFzc2VzIGRpc3BsYXkvaGlkZSB0aGUgJ21lbnUnXG4vLyBiYXNlZCBvbiB0aGUgc3RhdGUgY2hhbmdlIGRldGVjdGlvbiBpbiB0aGVcbi8vIGNvbXBvbmVudCBjbGFzcyAqL1xuLmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW5hY3RpdmUge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/sharedComponents/accordion/accordion.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/sharedComponents/accordion/accordion.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AccordionComponent */

  /***/
  function srcAppSharedComponentsAccordionAccordionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccordionComponent", function () {
      return AccordionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AccordionComponent = class AccordionComponent {
      constructor() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isMenuOpen = false;
      }

      ngOnInit() {}
      /**
       * Allows the accordion state to be toggled (I.e. opened/closed)
       * @public
       * @method toggleAccordion
       * @returns {none}
       */


      toggleAccordion() {
        this.isMenuOpen = !this.isMenuOpen;
      }
      /**
       * Allows the value for the  element to be broadcast to the parent component
       * @public
       * @method broadcastName
       * @returns {none}
       */


      broadcastName(name) {
        this.change.emit(name);
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], AccordionComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], AccordionComponent.prototype, "description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], AccordionComponent.prototype, "image", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AccordionComponent.prototype, "change", void 0);
    AccordionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-accordion',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./accordion.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sharedComponents/accordion/accordion.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./accordion.component.scss */
      "./src/app/sharedComponents/accordion/accordion.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AccordionComponent);
    /***/
  },

  /***/
  "./src/app/sharedComponents/header/header.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/sharedComponents/header/header.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-title {\n  font-family: \"RedHatDisplay\" !important;\n  font-size: 14px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkQ29tcG9uZW50cy9oZWFkZXIvQzpcXFByb2plY3RcXEFuZ3VsYXJcXGVhc3ltYWxsX25vbm9kZSAoMSlcXGVhc3ltYWxsX25vbm9kZS9zcmNcXGFwcFxcc2hhcmVkQ29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZENvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVDQUFBO0VBQ0EsMEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZENvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJlZEhhdERpc3BsYXlcIiFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxufSIsImlvbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJlZEhhdERpc3BsYXlcIiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/sharedComponents/header/header.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/sharedComponents/header/header.component.ts ***!
    \*************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
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


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/core/http-services/product.service */
    "./src/app/core/http-services/product.service.ts");
    /* harmony import */


    var src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/core/authentication/authentication.service */
    "./src/app/core/authentication/authentication.service.ts");
    /* harmony import */


    var src_app_search_modal_search_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/search-modal/search-modal.page */
    "./src/app/search-modal/search-modal.page.ts");
    /* harmony import */


    var src_app_request_qoute_request_qoute_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/request-qoute/request-qoute.page */
    "./src/app/request-qoute/request-qoute.page.ts");

    let HeaderComponent = class HeaderComponent {
      constructor(router, location, nativeStorage, authService, productService, // private eventService: EventsServiceService
      modalCtrl, toastController) {
        // this.nativeStorage.getItem('currentUser').then((value) => {
        //   if (value !== null) {
        //     this.currentUser = value;
        //     console.log('CurrentUser: '+JSON.stringify(this.currentUser));
        //     this.productService.cartQty.subscribe(
        //       (value) => {
        //         this.cartTotal = Number(value);
        //         console.log('this.cartTotal: '+this.cartTotal)
        //       }
        //     );
        //   }
        //   else{
        this.router = router;
        this.location = location;
        this.nativeStorage = nativeStorage;
        this.authService = authService;
        this.productService = productService;
        this.modalCtrl = modalCtrl;
        this.toastController = toastController;
        this.title = '';
        this.longSearch = false;
        this.showBackButton = true;
        this.isLoading = false; // @Input() noCart: boolean = false;

        this.showSearch = true;
        this.currentUser = null;
        this.cartTotal = 0; //   }
        // });
      }

      ngOnInit() {
        this.nativeStorage.getItem('currentUser').then(value => {
          if (value !== null) {
            this.currentUser = value;
            console.log('CurrentUser: ' + JSON.stringify(this.currentUser));
            this.productService.cartQty.subscribe(value => {
              this.cartTotal = Number(value);
              console.log('this.cartTotal: ' + this.cartTotal);
            });
          } else {}
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

      presentSearchModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const modal = yield this.modalCtrl.create({
            component: src_app_search_modal_search_modal_page__WEBPACK_IMPORTED_MODULE_8__["SearchModalPage"],
            componentProps: {}
          });
          return yield modal.present().then(x => {
            modal.onWillDismiss().then(d => {
              if (d.data.reload) {// console.log('New Base User: '+JSON.stringify(d.data.reload));
                // this.bal = (d.data.reload.bal * 1) / 100;
              }
            });
          });
        });
      }

      presentQouteModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const modal = yield this.modalCtrl.create({
            component: src_app_request_qoute_request_qoute_page__WEBPACK_IMPORTED_MODULE_9__["RequestQoutePage"],
            componentProps: {}
          });
          return yield modal.present().then(x => {
            modal.onWillDismiss().then(d => {
              if (d.data.reload) {// console.log('New Base User: '+JSON.stringify(d.data.reload));
                // this.bal = (d.data.reload.bal * 1) / 100;
              }
            });
          });
        });
      }

      myBackButton() {
        this.location.back();
      }

      loadSearchModal() {
        // console.log('loadSearchModal');
        this.presentSearchModal();
      }

      goToCart() {
        if (this.currentUser) {
          this.router.navigate(['/cart']);
        } else {
          this.presentToast('Hello', 'Please login to view your cart!', 4000, 'warning');
        }
      }

    };

    HeaderComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
    }, {
      type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"]
    }, {
      type: src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
    }, {
      type: src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], HeaderComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], HeaderComponent.prototype, "longSearch", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], HeaderComponent.prototype, "showBackButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], HeaderComponent.prototype, "isLoading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], HeaderComponent.prototype, "showSearch", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], HeaderComponent.prototype, "userStatusChange", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sharedComponents/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/sharedComponents/header/header.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"], src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"], src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/sharedComponents/shared-components.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/sharedComponents/shared-components.module.ts ***!
    \**************************************************************/

  /*! exports provided: SharedComponentsModule */

  /***/
  function srcAppSharedComponentsSharedComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedComponentsModule", function () {
      return SharedComponentsModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/sharedComponents/header/header.component.ts");
    /* harmony import */


    var _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./accordion/accordion.component */
    "./src/app/sharedComponents/accordion/accordion.component.ts");

    let SharedComponentsModule = class SharedComponentsModule {};
    SharedComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_5__["AccordionComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
      exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_5__["AccordionComponent"]]
    })], SharedComponentsModule);
    /***/
  }
}]);
//# sourceMappingURL=default~address-book-address-book-module~become-supplier-become-supplier-module~cart-cart-module~cat~1ae0154c-es5.js.map