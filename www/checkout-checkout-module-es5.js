(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-checkout-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCheckoutCheckoutPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header\n  [title]=\"title\"\n  [longSearch]=\"longSearch\"\n  [showBackButton]=\"showBackButton\"\n  [isLoading]=\"loading\"\n  [showSearch]=\"showSearch\"\n>\n</app-header>\n<ion-content>\n  <ion-segment\n    scrollable\n    [(ngModel)]=\"checkoutSegment\"\n    (ionChange)=\"segmentChanged($event)\"\n    color=\"secondary\"\n  >\n    <ion-segment-button\n      value=\"delivery\"\n      layout=\"icon-bottom\"\n      [disabled]=\"!isSegmentActive('delivery')\"\n    >\n      DELIVERY\n    </ion-segment-button>\n    <ion-segment-button\n      value=\"payment\"\n      layout=\"icon-bottom\"\n      [disabled]=\"!isSegmentActive('payment')\"\n    >\n      PAYMENT\n    </ion-segment-button>\n    <ion-segment-button\n      value=\"summary\"\n      layout=\"icon-bottom\"\n      [disabled]=\"!isSegmentActive('summary')\"\n    >\n      SUMMARY\n    </ion-segment-button>\n  </ion-segment>\n  <div [ngSwitch]=\"checkoutSegment\">\n    <div *ngSwitchCase=\"'delivery'\">\n      <ion-grid class=\"grid\">\n        <ion-row class=\"headerBg\">\n          <ion-col size=\"9\">\n            <ion-text class=\"note_title12Sec\">ADDRESS DETAILS</ion-text>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-text class=\"note_title12Sec\" (click)=\"showEditAddress()\"\n              >CHANGE</ion-text\n            >\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"defAddy\">\n          <ion-col size=\"10\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <app-text-shell\n                  animation=\"gradient\"\n                  [data]=\"defAddy?.name\"\n                  class=\"note_title_bold14Sec\"\n                ></app-text-shell>\n                <app-text-shell\n                  animation=\"gradient\"\n                  [data]=\"defAddy?.no+' '+ defAddy?.street+', '+ defAddy?.landmark\"\n                >\n                </app-text-shell>\n                <app-text-shell\n                  animation=\"gradient\"\n                  [data]=\"defAddy.city+', ' +defAddy.state+', ' +defAddy.country\"\n                >\n                </app-text-shell>\n                <br />\n                <app-text-shell\n                  animation=\"gradient\"\n                  [data]=\"defAddy?.phone\"\n                ></app-text-shell>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col size=\"2\">\n            &nbsp;\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid class=\"grid\">\n        <ion-row class=\"headerBg\">\n          <ion-col size=\"12\">\n            <ion-text class=\"note_title12Sec\"\n              >SELECT A DELIVERY METHOD</ion-text\n            >\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-radio-group\n              value=\"door\"\n              (ionChange)=\"getSelectedDelivery($event)\"\n              [(ngModel)]=\"selectDeliveryType\"\n            >\n              <ion-item ines=\"none\">\n                <ion-label class=\"ion-text-wrap\"\n                  ><b>Door Delivery</b><br />Delivery between Tuesday 23th, Apr\n                  and Tuesday 30th<br />\n                  Shipping Fee:\n                  <b>{{fee.totalShipping | currency:'₦':'symbol':'1.2-2'}}</b>\n                </ion-label>\n                <ion-radio slot=\"start\" value=\"door\"></ion-radio>\n              </ion-item>\n              <ion-item ines=\"none\">\n                <ion-radio slot=\"start\" value=\"pickup\"></ion-radio>\n                <ion-label class=\"ion-text-wrap\"\n                  ><b>Pickup Station</b><br />Ready for Pickup between Tuesday\n                  23th, Apr and Tuesday 30th</ion-label\n                >\n              </ion-item>\n            </ion-radio-group>\n          </ion-col>\n        </ion-row>\n        <!-- <ion-row>\n          <ion-col size=\"12\" class=\"t_center\">\n            <br />\n            <ion-text class=\"note_title14Pri\"\n              >Select a station nearest to you</ion-text\n            >\n          </ion-col>\n        </ion-row> -->\n        <ion-row class=\"headerBg\">\n          <ion-col size=\"12\">\n            &nbsp;\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid class=\"grid\">\n        <ion-row>\n          <ion-col size=\"5\" class=\"note_title_bold12Black\">\n            Subtotal\n          </ion-col>\n          <ion-col\n            size=\"7\"\n            style=\"text-align: right;\"\n            class=\"note_title_bold12Black\"\n          >\n            {{fee.subTotal | currency:'₦':'symbol':'1.2-2'}}\n          </ion-col>\n        </ion-row>\n        <ion-row style=\"background: #e4e1e1;\">\n          <ion-col size=\"5\" class=\"note_title_bold12Black\">\n            Total shipping fee\n          </ion-col>\n          <ion-col\n            size=\"7\"\n            style=\"text-align: right;\"\n            class=\"note_title_bold12Black\"\n          >\n            {{fee.totalShipping | currency:'₦':'symbol':'1.2-2'}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\"> </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"5\" class=\"note_title_bold14Black\">\n            Total\n          </ion-col>\n          <ion-col\n            size=\"7\"\n            style=\"text-align: right;\"\n            class=\"note_title_bold14Sec\"\n          >\n            {{fee.total | currency:'₦':'symbol':'1.2-2'}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <br />\n            <ion-button\n              expand=\"block\"\n              color=\"primary\"\n              (click)=\"proceedToPayment()\"\n            >\n              PROCEED TO PAYMENT\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div *ngSwitchCase=\"'payment'\">\n      <ion-grid class=\"grid\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-text class=\"note_title12Sec\"\n              >CHOOSE YOUR PREFERRED PAYMENT</ion-text\n            >\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-radio-group\n              value=\"po\"\n              (ionChange)=\"getPaymentType($event)\"\n              [(ngModel)]=\"PaymentType\"\n            >\n              <ion-item ines=\"none\">\n                <ion-label class=\"ion-text-wrap\">\n                  <ion-icon\n                    src=\"/assets/vectors/icons/mastercard.svg\"\n                    class=\"xxx\"\n                  ></ion-icon\n                  >&nbsp;\n                  <ion-icon\n                    src=\"/assets/vectors/icons/visa.svg\"\n                    class=\"xxx\"\n                  ></ion-icon\n                  >&nbsp;\n                  <ion-icon\n                    src=\"/assets/vectors/icons/vervelogo.svg\"\n                    class=\"xxx\"\n                  ></ion-icon>\n                  <!-- <ion-icon name=\"card-outline\" slot=\"start\" size=\"large\"></ion-icon> -->\n                </ion-label>\n                <ion-radio slot=\"start\" value=\"po\"></ion-radio>\n              </ion-item>\n              <ion-item ines=\"none\">\n                <ion-radio slot=\"start\" value=\"pod\"></ion-radio>\n                <div>\n                  <ion-icon\n                    src=\"/assets/vectors/icons/money_delivery.svg\"\n                    class=\"xxx\"\n                  ></ion-icon\n                  >&nbsp;\n                </div>\n                <span class=\"note_title14Black\"> Payment on Delivery</span>\n              </ion-item>\n            </ion-radio-group>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid class=\"grid\">\n        <!-- <ion-row class=\"headerBg\">\n          <ion-col size=\"12\">\n            <ion-text class=\"note_title12Sec\"\n              >GOT AN EASYMALL VOUCHER CODE? USE BELOW</ion-text\n            >\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-note class=\"note_title_bold14Black\"\n              >Enter Voucher Code</ion-note\n            >\n            <ion-item lines=\"none\">\n              <ion-input\n                [(ngModel)]=\"voucher_code\"\n                type=\"text\"\n                clear-input=\"true\"\n                style=\"\n                  border-bottom: 1px solid #343434 !important;\n                  padding-bottom: 0px;\n                \"\n              ></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"3\">\n            &nbsp;\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button fill=\"outline\" expand=\"block\" color=\"primary\">\n              APPLY\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"3\">\n            &nbsp;\n          </ion-col>\n        </ion-row> -->\n        <ion-row class=\"headerBg\">\n          <ion-col size=\"12\">&nbsp;</ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid class=\"grid\">\n        <ion-row>\n          <ion-col size=\"5\" class=\"note_title_bold12Black\">\n            Subtotal\n          </ion-col>\n          <ion-col\n            size=\"7\"\n            style=\"text-align: right;\"\n            class=\"note_title_bold12Black\"\n          >\n            {{fee.subTotal | currency:'₦':'symbol':'1.2-2'}}\n          </ion-col>\n        </ion-row>\n        <ion-row style=\"background: #e4e1e1;\">\n          <ion-col size=\"5\" class=\"note_title_bold12Black\">\n            Total shipping fee\n          </ion-col>\n          <ion-col\n            size=\"7\"\n            style=\"text-align: right;\"\n            class=\"note_title_bold12Black\"\n          >\n            {{fee.totalShipping | currency:'₦':'symbol':'1.2-2'}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\"> </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"5\" class=\"note_title_bold14Black\">\n            Total\n          </ion-col>\n          <ion-col\n            size=\"7\"\n            style=\"text-align: right;\"\n            class=\"note_title_bold14Sec\"\n          >\n            {{fee.total | currency:'₦':'symbol':'1.2-2'}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <br />\n            <ion-button\n              expand=\"block\"\n              color=\"primary\"\n              (click)=\"proceedToSummary()\"\n            >\n              PROCEED TO SUMMARY\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div *ngSwitchCase=\"'summary'\">\n      <ion-grid class=\"grid\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-text class=\"note_title12Sec\">YOUR ORDER</ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"5\" class=\"note_title_bold12Black\">\n            Subtotal\n          </ion-col>\n          <ion-col\n            size=\"7\"\n            style=\"text-align: right;\"\n            class=\"note_title_bold12Black\"\n          >\n            {{fee.subTotal | currency:'₦':'symbol':'1.2-2'}}\n          </ion-col>\n        </ion-row>\n        <ion-row style=\"background: #e4e1e1;\">\n          <ion-col size=\"5\" class=\"note_title_bold12Black\">\n            Total shipping fee\n          </ion-col>\n          <ion-col\n            size=\"7\"\n            style=\"text-align: right;\"\n            class=\"note_title_bold12Black\"\n          >\n            {{fee.totalShipping | currency:'₦':'symbol':'1.2-2'}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\"> </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"5\" class=\"note_title_bold14Black\">\n            Total\n          </ion-col>\n          <ion-col\n            size=\"7\"\n            style=\"text-align: right;\"\n            class=\"note_title_bold14Sec\"\n          >\n            {{fee.total | currency:'₦':'symbol':'1.2-2'}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            &nbsp;\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid class=\"grid\">\n        <ion-row class=\"headerBg\">\n          <ion-col size=\"9\">\n            <ion-text class=\"note_title12Sec\">ADDRESS DETAILS</ion-text>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-text class=\"note_title12Sec\" (click)=\"showEditAddress()\"\n              >CHANGE</ion-text\n            >\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"defAddy\">\n          <ion-col size=\"10\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <app-text-shell\n                  animation=\"gradient\"\n                  [data]=\"defAddy?.name\"\n                  class=\"note_title_bold14Sec\"\n                ></app-text-shell>\n                <app-text-shell\n                  animation=\"gradient\"\n                  [data]=\"defAddy?.no+' '+ defAddy?.street+', '+ defAddy?.landmark\"\n                >\n                </app-text-shell>\n                <app-text-shell\n                  animation=\"gradient\"\n                  [data]=\"defAddy.city+', ' +defAddy.state+', ' +defAddy.country\"\n                >\n                </app-text-shell>\n                <br />\n                <app-text-shell\n                  animation=\"gradient\"\n                  [data]=\"defAddy?.phone\"\n                ></app-text-shell>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col size=\"2\">\n            &nbsp;\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid class=\"grid\">\n        <ion-row class=\"headerBg\">\n          <ion-col size=\"9\">\n            <ion-text class=\"note_title12Sec\">DELIVERY METHOD</ion-text>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-text class=\"note_title12Sec\" (click)=\"showEditAddress()\"\n              >CHANGE</ion-text\n            >\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"10\" *ngIf=\"selectDeliveryType=='door'\">\n            <ion-label class=\"ion-text-wrap\"><b>Door Delivery</b> </ion-label>\n          </ion-col>\n          <ion-col size=\"10\" *ngIf=\"selectDeliveryType=='pickup'\">\n            <ion-label class=\"ion-text-wrap\"><b>Pickup Station</b> </ion-label>\n          </ion-col>\n          <ion-col size=\"2\">\n            &nbsp;\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid class=\"grid\">\n        <ion-row class=\"headerBg\">\n          <ion-col size=\"9\">\n            <ion-text class=\"note_title12Sec\">PAYMENT METHOD</ion-text>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-text class=\"note_title12Sec\" (click)=\"showEditAddress()\"\n              >CHANGE</ion-text\n            >\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" *ngIf=\"PaymentType=='po'\">\n            <ion-label class=\"ion-text-wrap\"><b>Debit Card</b></ion-label>\n            <div *ngIf=\"lt_cards.length>0\">\n              <ion-radio-group\n                (ionChange)=\"getSelectedCard($event)\"\n                [(ngModel)]=\"selectedCard\"\n              >\n                <ion-item\n                  lines=\"none\"\n                  *ngFor=\"let x of lt_cards;let i=index\"\n                  [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\"\n                >\n                  <ion-label>\n                    <h3><b>{{x.bank}}</b></h3>\n                    <h5>{{x.bin}} ********** {{x.last4}}</h5>\n                    <h5><b>{{x.brand}}</b></h5>\n                  </ion-label>\n                  <ion-radio\n                    slot=\"start\"\n                    [value]=\"x.authorizationCode\"\n                  ></ion-radio>\n                </ion-item>\n              </ion-radio-group>\n            </div>\n          </ion-col>\n\n          <ion-col size=\"10\" *ngIf=\"PaymentType=='pod'\">\n            <ion-label class=\"ion-text-wrap\"\n              ><b>Payment on Delivery</b></ion-label\n            >\n          </ion-col>\n          <ion-col size=\"2\">\n            &nbsp;\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid class=\"grid\">\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-button\n              expand=\"block\"\n              color=\"primary\"\n              (click)=\"selectChargeMethod()\"\n            >\n              CONFIRM ORDER\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button\n              expand=\"block\"\n              fill=\"outline\"\n              color=\"primary\"\n              (click)=\"proceedToDelivery()\"\n            >\n              RESTART\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/checkout/checkout.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/checkout/checkout.module.ts ***!
    \*********************************************/

  /*! exports provided: CheckoutPageModule */

  /***/
  function srcAppCheckoutCheckoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function () {
      return CheckoutPageModule;
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


    var _shell_shell_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shell/shell.module */
    "./src/app/shell/shell.module.ts");
    /* harmony import */


    var _checkout_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./checkout.page */
    "./src/app/checkout/checkout.page.ts");

    let CheckoutPageModule = class CheckoutPageModule {};
    CheckoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_8__["CheckoutPage"]
      }]), _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_7__["ShellModule"]],
      declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_8__["CheckoutPage"]]
    })], CheckoutPageModule);
    /***/
  },

  /***/
  "./src/app/checkout/checkout.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/checkout/checkout.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppCheckoutCheckoutPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-icon.xx {\n  width: 20px;\n  height: 20px;\n  stroke-width: 10px;\n}\nion-icon.xxx {\n  width: 40px;\n  height: 40px;\n  stroke-width: 10px;\n}\nion-icon.xxxx {\n  width: 100px;\n  height: 100px;\n}\nion-icon.purple {\n  color: #AD49D2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvQzpcXFByb2plY3RcXEFuZ3VsYXJcXGVhc3ltYWxsX25vbm9kZSAoMSlcXGVhc3ltYWxsX25vbm9kZS9zcmNcXGFwcFxcY2hlY2tvdXRcXGNoZWNrb3V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0FKO0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQUo7QURHRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDREo7QURJRTtFQUNFLGNBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcbiAgJi54eCB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHN0cm9rZS13aWR0aDoxMHB4O1xuICB9XG4gICYueHh4IHtcbiAgICB3aWR0aDo0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBzdHJva2Utd2lkdGg6MTBweDtcbiAgfVxuXG4gICYueHh4eCB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cblxuICAmLnB1cnBsZSB7XG4gICAgY29sb3I6ICNBRDQ5RDI7XG4gIH1cbn0iLCJpb24taWNvbi54eCB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHN0cm9rZS13aWR0aDogMTBweDtcbn1cbmlvbi1pY29uLnh4eCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHN0cm9rZS13aWR0aDogMTBweDtcbn1cbmlvbi1pY29uLnh4eHgge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5pb24taWNvbi5wdXJwbGUge1xuICBjb2xvcjogI0FENDlEMjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/checkout/checkout.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/checkout/checkout.page.ts ***!
    \*******************************************/

  /*! exports provided: CheckoutPage */

  /***/
  function srcAppCheckoutCheckoutPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutPage", function () {
      return CheckoutPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _globals_universal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../globals/universal */
    "./src/app/globals/universal.ts");
    /* harmony import */


    var src_app_core_http_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/core/http-services/user.service */
    "./src/app/core/http-services/user.service.ts");
    /* harmony import */


    var src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/core/authentication/authentication.service */
    "./src/app/core/authentication/authentication.service.ts");
    /* harmony import */


    var src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/core/http-services/order.service */
    "./src/app/core/http-services/order.service.ts");
    /* harmony import */


    var src_app_shared_models_product_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/models/product.model */
    "./src/app/shared/models/product.model.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);

    let CheckoutPage = class CheckoutPage {
      constructor(nativeStorage, router, alertController, loadingCtrl, toastController, userService, authService, orderService) {
        this.nativeStorage = nativeStorage;
        this.router = router;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.toastController = toastController;
        this.userService = userService;
        this.authService = authService;
        this.orderService = orderService; ///Inputs

        this.title = 'Checkout';
        this.longSearch = true;
        this.showBackButton = true;
        this.loading = false;
        this.showSearch = false; ////////////////////

        this.checkoutSegment = 'delivery';
        this.selectDeliveryType = 'door';
        this.PaymentType = 'po';
        this.voucher_code = '';
        this.products = [];
        this.fee = {};
        this.lt_cards = [{}];
        this.voucherValue = 500;
      }

      ngOnInit() {
        this.nativeStorage.getItem('currentUser').then(x => {
          this.currentUser = x;
          this.nativeStorage.getItem("CheckoutProducts").then(data => {
            if (data) {
              this.products = data;
            }
          }, err => {
            console.error(err);
          });
          this.nativeStorage.getItem("MyCards").then(data => {
            if (data) {
              this.lt_cards = data;
              this.selectedCard = this.lt_cards[0].authorizationCode;
              this.calCartFee();
              this.getAddresses();
            }
          }, err => {
            console.error(err);
          });
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

      calCartFee() {
        this.fee = _globals_universal__WEBPACK_IMPORTED_MODULE_5__["calCartFee"](this.products);
      }

      getAddresses() {
        this.userService.getAddresses(this.currentUser.token).subscribe(data => {
          if (!data.error) {
            this.addresses = data.data; // console.log('Addresses: ' + JSON.stringify(this.addresses));

            this.defAddy = this.addresses.find(x => x.isDefault); // console.log('defAddy: ' + JSON.stringify(this.defAddy));
            // this.selectedId = def ? def._id : null;
          }
        }, err => {
          sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            position: 'center',
            icon: 'error',
            title: err.message,
            text: err.errors.join(','),
            showConfirmButton: true
          });
        });
      }

      isSegmentActive(segment) {
        if (segment === this.checkoutSegment) {
          return true;
        } else {
          return false;
        }
      }

      segmentChanged(ev) {
        // console.log('Segment changed', ev.target.value);
        this.checkoutSegment = ev.target.value;
      }

      proceedToDelivery() {
        this.loading = false;
        this.checkoutSegment = 'delivery';
      }

      proceedToPayment() {
        this.checkoutSegment = 'payment';
      }

      proceedToSummary() {
        this.checkoutSegment = 'summary';
      }

      makePayment() {}

      showEditAddress() {
        console.log('showEditAddress');
      }

      getSelectedDelivery(ev) {// console.log('getSelectedDelivery', this.selectDeliveryType);
      }

      getPaymentType(ev) {// console.log('PaymentType', this.PaymentType);
      }

      getSelectedCard(ev) {// console.log('getSelectedCard', this.selectedCard);
      }

      selectChargeMethod() {
        if (this.PaymentType === 'po') {
          this.presentAlertConfirmChargeCard();
        } else {
          this.podCheckOut();
        }
      }

      presentAlertConfirmChargeCard() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const alert = yield this.alertController.create({
            header: 'Charge Confirmation!',
            message: 'Complete this transaction?',
            cssClass: 'alertX',
            buttons: [{
              text: 'NO',
              role: 'cancel',
              cssClass: 'secondary',
              handler: blah => {// console.log('Confirm Cancel: blah');
              }
            }, {
              text: 'YES',
              cssClass: 'alertButton',
              handler: () => {
                this.chargeCard();
              }
            }]
          });
          yield alert.present();
        });
      }

      chargeCard() {
        this.loading = true;
        let amountInKobo = Number(this.fee.total) * 100;
        this.loadingCtrl.create({
          spinner: 'dots',
          message: 'Processing Charge! Please wait...',
          duration: 60000,
          cssClass: 'custom-loader-class'
        }).then(res => {
          res.present();
          res.onDidDismiss().then(dis => {});
          let model = {
            authorization_code: this.selectedCard,
            email: this.currentUser.user.email,
            amount: amountInKobo
          };
          console.log('Model: ' + JSON.stringify(model));
          this.orderService.chargeCard(model).then(data => {
            console.log('PayStack Data: ' + JSON.stringify(data));

            if (data.data.status == 'success') {
              let scheme = data.data.authorization.card_type;
              return new Promise((res, rej) => {
                const body = {
                  addressId: this.defAddy._id,
                  paymentMethod: "ondelivery",
                  shippingType: this.selectDeliveryType
                };
                console.log('UpdateOrderModel: ' + JSON.stringify(body)); // console.log('this.currentUser.token: '+JSON.stringify(this.currentUser.token));

                this.orderService.updateOrder(this.currentUser.token, body).subscribe(dt => {
                  // console.log('orderService.updateOrder dt: '+JSON.stringify(dt));
                  if (!dt.error) {
                    this.confirmOrder().then(rs => {
                      console.log('confirmOrder rs: ' + JSON.stringify(rs));
                      res(rs);
                      const bodyPayment = new src_app_shared_models_product_model__WEBPACK_IMPORTED_MODULE_9__["UpdatePaymentModel"]();
                      bodyPayment.amount = amountInKobo;
                      bodyPayment.ref = this.paymentValues._id;
                      bodyPayment.scheme = scheme;
                      bodyPayment.transferType = "Card";
                      bodyPayment.state = "completed";
                      bodyPayment.transferProvider = "paystack";
                      bodyPayment.transactionData = {
                        ref: data.data.reference,
                        account: this.currentUser.user.email
                      };
                      console.log('Transaction body Data: ' + JSON.stringify(bodyPayment));
                      this.orderService.updatePayment(this.currentUser.token, bodyPayment).subscribe(dt => {
                        if (dt.message && dt.message.length > 0) {
                          this.loading = false;
                          this.loadingCtrl.dismiss();
                          sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                            title: "WELL DONE",
                            text: "Your payment was successful",
                            icon: "success"
                          }).then(() => {
                            this.router.navigate(['/app/home']);
                          });
                        }
                      }, err => {
                        console.error(err);
                        this.loading = false;
                        this.loadingCtrl.dismiss();
                        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                          title: "OOPS",
                          text: "Payment notification failed! Please contact our support team",
                          icon: "error"
                        });
                      });
                    }).catch(() => {
                      this.loading = false;
                      this.loadingCtrl.dismiss();
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                      icon: dt.error ? "error" : "success",
                      title: "Could not update your order at this time. Please try again!",
                      // text: data.error ? '' : 'Please check your mail to verify your account',
                      showConfirmButton: true
                    });
                    this.loading = false;
                    this.loadingCtrl.dismiss();
                  }
                }, err => {
                  console.error(err);
                  sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                    icon: "error",
                    title: err.message,
                    text: "Could not update your order at this time. Please try again!",
                    showConfirmButton: true
                  });
                  this.loading = false;
                  this.loadingCtrl.dismiss();
                });
              }); // this.presentToast('Welldone', 'Your payment was successfull!', 5000, 'success');
            } else {
              this.loading = false;
              this.loadingCtrl.dismiss();
              sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                title: "OOPS",
                text: "Could not save your transaction at this time. Please try again!",
                icon: "error"
              }); // this.presentToast('', '', 3000, 'error');
            }
          }, error => {
            console.log(error);
            this.loading = false;
            this.loadingCtrl.dismiss();
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
              title: "OOPS",
              text: "An Error Occurred: Could not save your transaction at this time. Please try again!",
              icon: "error"
            }); // this.presentToast('', '', 3000, 'error');
          });
        });
      }

      podCheckOut() {
        this.loading = true;
        return new Promise((res, rej) => {
          const body = {
            addressId: this.defAddy._id,
            paymentMethod: "ondelivery",
            shippingType: this.selectDeliveryType
          };
          console.log('UpdateOrderModel: ' + JSON.stringify(body)); // console.log('this.currentUser.token: '+JSON.stringify(this.currentUser.token));

          this.orderService.updateOrder(this.currentUser.token, body).subscribe(dt => {
            // console.log('orderService.updateOrder dt: '+JSON.stringify(dt));
            if (!dt.error) {
              this.confirmOrder().then(rs => {
                // console.log('confirmOrder rs: '+JSON.stringify(rs));
                res(rs);
                this.loading = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                  icon: "success",
                  title: "Order has been confirmed",
                  // text: data.error ? '' : 'Please check your mail to verify your account',
                  showConfirmButton: true
                }).then(() => {
                  this.router.navigate(['/app/home']); // this.router.navigateByUrl("/orders" + result.value.data._id);
                });
              }).catch(() => {
                this.loading = false;
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                icon: dt.error ? "error" : "success",
                title: "Could not update your order at this time. Please try again!",
                // text: data.error ? '' : 'Please check your mail to verify your account',
                showConfirmButton: true
              });
              this.loading = false;
            }
          }, err => {
            console.error(err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
              icon: "error",
              title: err.message,
              text: "Could not update your order at this time. Please try again!",
              showConfirmButton: true
            });
            this.loading = false;
          });
        });
      }

      confirmOrder() {
        // const dis = this;
        return new Promise((res, rej) => {
          this.orderService.confirmOrder(this.currentUser.token).subscribe(dt => {
            if (!dt.error) {
              this.paymentValues = dt.data; // console.log('orderService.confirmOrder data: '+JSON.stringify(dt.data));

              res(dt);
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                icon: dt.error ? "error" : "success",
                title: "Could not confirm your order at this time. Please try again!",
                // text: data.error ? '' : 'Please check your mail to verify your account',
                showConfirmButton: true
              }).then(() => {});
            }
          }, err => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
              icon: "error",
              title: err.message,
              text: "Could not confirm your order at this time. Please try again!",
              showConfirmButton: true
            });
            rej(err);
          });
        });
      }

    };

    CheckoutPage.ctorParameters = () => [{
      type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
    }, {
      type: src_app_core_http_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
    }, {
      type: src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
    }, {
      type: src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_8__["OrderService"]
    }];

    CheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-checkout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./checkout.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./checkout.page.scss */
      "./src/app/checkout/checkout.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], src_app_core_http_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"], src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_8__["OrderService"]])], CheckoutPage);
    /***/
  }
}]);
//# sourceMappingURL=checkout-checkout-module-es5.js.map