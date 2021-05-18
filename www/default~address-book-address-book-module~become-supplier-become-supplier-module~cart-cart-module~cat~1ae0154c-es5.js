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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-searchbar\n      *ngIf=\"longSearch && showSearch\"\n      animated=\"false\"\n      placeholder=\"Search for products & brands\"\n      (ionFocus)=\"loadSearchModal()\"\n    >\n    </ion-searchbar>\n\n    <ion-buttons slot=\"start\" *ngIf=\"showBackButton\">\n      <ion-button (click)=\"myBackButton()\">   \n        <ion-icon\n          size=\"small\"\n          name=\"arrow-back-outline\"\n          color=\"light\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"showSearch\">\n      <ion-button *ngIf=\"!longSearch && showSearch\" (click)=\"loadSearchModal()\">\n        <ion-icon name=\"search-outline\" color=\"light\"></ion-icon>\n      </ion-button>\n      <ion-button id=\"notification-button\" (click)=\"presentQouteModal()\">\n        <ion-icon src=\"/assets/vectors/icons/qoute.svg\" color=\"light\"></ion-icon>\n      </ion-button>\n      <ion-button id=\"notification-button\" (click)=\"presentQouteModal()\">\n        <ion-icon src=\"/assets/vectors/icons/label.svg\"  color=\"light\"></ion-icon>\n        <ion-badge\n          id=\"notifications-badge\"\n          color=\"light\"\n          class=\"note_title8Black\"\n          *ngIf=\"currentUser\"\n          >{{ cartTotal }}</ion-badge\n        >\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">{{ title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-progress-bar\n  color=\"primary\"\n  type=\"indeterminate\"\n  *ngIf=\"isLoading\"\n></ion-progress-bar>\n";
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


    __webpack_exports__["default"] = "h2 {\n  cursor: pointer;\n  position: relative;\n  padding: 1em 0.35em;\n  font-size: 1.35em;\n  background: #e6e6e6;\n  color: #6a2673;\n  border-bottom: 1px solid #d2d2d2;\n  margin: 0;\n  /* Define the style rules for the 'arrow icons' */\n}\nh2 span {\n  position: absolute;\n  right: 1em;\n  top: 1.2em;\n  font-size: 0.95em;\n}\n/* Here we define the actual 'menu' and its 'options' */\n.image-wrapper {\n  margin: 0 auto 2em auto;\n  width: 20%;\n}\n.image-wrapper img {\n  display: block;\n  margin: auto;\n}\np {\n  margin: 0 0 10px 0;\n  font-size: 1.35em;\n}\ndiv {\n  position: relative;\n  padding: 1em;\n  border-bottom: 1px solid #d2d2d2;\n}\n/* Following classes display/hide the 'menu'\n// based on the state change detection in the\n// component class */\n.active {\n  display: block;\n}\n.inactive {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL0lvbmljL2FmcmltYXJ0b25lL3NyYy9hcHAvc2hhcmVkQ29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWRDb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBR0EsaURBQUE7QUNESjtBREVJO0VBQ0csa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDQVA7QURLQyx1REFBQTtBQUNBO0VBQ0csdUJBQUE7RUFDQSxVQUFBO0FDRko7QURJSTtFQUNHLGNBQUE7RUFDQSxZQUFBO0FDRlA7QURPQztFQUVHLGtCQUFBO0VBRUEsaUJBQUE7QUNOSjtBRFVDO0VBQ0csa0JBQUE7RUFDQSxZQUFBO0VBRUEsZ0NBQUE7QUNSSjtBRFdDOztvQkFBQTtBQUdBO0VBQ0csY0FBQTtBQ1JKO0FEV0M7RUFDRyxhQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWRDb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxZW0gMC4zNWVtO1xuICAgIGZvbnQtc2l6ZTogMS4zNWVtO1xuICAgIGJhY2tncm91bmQ6I2U2ZTZlNjtcbiAgICBjb2xvcjojNmEyNjczO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDJkMmQyO1xuICAgIG1hcmdpbjogMDtcblxuXG4gICAgLyogRGVmaW5lIHRoZSBzdHlsZSBydWxlcyBmb3IgdGhlICdhcnJvdyBpY29ucycgKi9cbiAgICBzcGFuIHtcbiAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgcmlnaHQ6IDFlbTtcbiAgICAgICB0b3A6IDEuMmVtO1xuICAgICAgIGZvbnQtc2l6ZTogMC45NWVtO1xuICAgIH1cbiB9XG5cblxuIC8qIEhlcmUgd2UgZGVmaW5lIHRoZSBhY3R1YWwgJ21lbnUnIGFuZCBpdHMgJ29wdGlvbnMnICovXG4gLmltYWdlLXdyYXBwZXIge1xuICAgIG1hcmdpbjogMCBhdXRvIDJlbSBhdXRvO1xuICAgIHdpZHRoOiAyMCU7XG5cbiAgICBpbWcge1xuICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gfVxuXG5cbiBwIHtcbiAgICAvLyBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICAgIC8vIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC1zaXplOiAxLjM1ZW07XG4gfVxuXG5cbiBkaXYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgLy8gYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QyZDJkMjtcbiB9XG5cbiAvKiBGb2xsb3dpbmcgY2xhc3NlcyBkaXNwbGF5L2hpZGUgdGhlICdtZW51J1xuIC8vIGJhc2VkIG9uIHRoZSBzdGF0ZSBjaGFuZ2UgZGV0ZWN0aW9uIGluIHRoZVxuIC8vIGNvbXBvbmVudCBjbGFzcyAqL1xuIC5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrXG4gfVxuXG4gLmluYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuIH0iLCJoMiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxZW0gMC4zNWVtO1xuICBmb250LXNpemU6IDEuMzVlbTtcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgY29sb3I6ICM2YTI2NzM7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDJkMmQyO1xuICBtYXJnaW46IDA7XG4gIC8qIERlZmluZSB0aGUgc3R5bGUgcnVsZXMgZm9yIHRoZSAnYXJyb3cgaWNvbnMnICovXG59XG5oMiBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMWVtO1xuICB0b3A6IDEuMmVtO1xuICBmb250LXNpemU6IDAuOTVlbTtcbn1cblxuLyogSGVyZSB3ZSBkZWZpbmUgdGhlIGFjdHVhbCAnbWVudScgYW5kIGl0cyAnb3B0aW9ucycgKi9cbi5pbWFnZS13cmFwcGVyIHtcbiAgbWFyZ2luOiAwIGF1dG8gMmVtIGF1dG87XG4gIHdpZHRoOiAyMCU7XG59XG4uaW1hZ2Utd3JhcHBlciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICBmb250LXNpemU6IDEuMzVlbTtcbn1cblxuZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDJkMmQyO1xufVxuXG4vKiBGb2xsb3dpbmcgY2xhc3NlcyBkaXNwbGF5L2hpZGUgdGhlICdtZW51J1xuLy8gYmFzZWQgb24gdGhlIHN0YXRlIGNoYW5nZSBkZXRlY3Rpb24gaW4gdGhlXG4vLyBjb21wb25lbnQgY2xhc3MgKi9cbi5hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmluYWN0aXZlIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */";
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


    __webpack_exports__["default"] = "ion-title {\n  font-family: \"RedHatDisplay\" !important;\n  font-size: 14px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL0lvbmljL2FmcmltYXJ0b25lL3NyYy9hcHAvc2hhcmVkQ29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWRDb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1Q0FBQTtFQUNBLDBCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWRDb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XG4gICAgZm9udC1mYW1pbHk6IFwiUmVkSGF0RGlzcGxheVwiIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn0iLCJpb24tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJSZWRIYXREaXNwbGF5XCIgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59Il19 */";
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