(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-details-order-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/order-details/order-details.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-details/order-details.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrderDetailsOrderDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header [title]=\"title\" [longSearch]=\"longSearch\" [showBackButton]=\"showBackButton\" [isLoading]=\"loading\"\n  [showSearch]=\"showSearch\">\n</app-header>\n\n<ion-content >\n  <div *ngIf=\"order\">\n  <ion-row>\n    <ion-col size=\"9\" class=\"note_title_bold12Sec\">\n      <ion-text>ORDER N<sup>o</sup>: {{order.tag}}</ion-text>\n    </ion-col>\n    <ion-col size=\"3\" class=\"t_right note_title10Sec\">\n      <ion-text>{{order.confirmDate | date : 'mediumDate'}}</ion-text>\n    </ion-col>\n  </ion-row>\n  <ion-grid class=\"card\">\n    <ion-row class=\"gridProductItemList\">\n      <ion-col size=\"8\" class=\"\">\n       {{order.totalQuantity}} item(s)<br>\n       {{order.grandTotal |currency:'₦':'symbol':'1.2-2'}} (Including shipping!)\n      </ion-col>\n      <ion-col size=\"4\" style=\"border-left: 1px #e4e1e1 solid;\">\n       Payment:<br>\n       {{order.paymentMethod}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class=\"card\">\n    <ion-row>\n      <ion-col size=\"12\">\n        Shipping\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"gridProductItemList\">\n      <ion-col size=\"12\">\n        <app-text-shell\n          animation=\"gradient\"\n          [data]=\"order.shippingAddress?.name\"\n          class=\"note_title_bold14Black\"\n        ></app-text-shell>\n        <app-text-shell\n          animation=\"gradient\"\n          [data]=\"order.shippingAddress?.no+' '+ order.shippingAddress?.street+', '+ order.shippingAddress?.landmark\"\n        >\n        </app-text-shell>\n        <app-text-shell\n          animation=\"gradient\"\n          [data]=\"order.shippingAddress.city+', ' +order.shippingAddress.state+', ' +order.shippingAddress.country\"\n        ></app-text-shell>\n        <app-text-shell\n          animation=\"gradient\"\n          [data]=\"order.shippingAddress?.phone\"\n        ></app-text-shell>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-row>\n    <ion-col size=\"12\" class=\"note_title_bold12Sec\">\n      <ion-text>ITEMS IN YOUR ORDER</ion-text>\n    </ion-col>\n  </ion-row>\n  <section *ngFor=\"let prod of order.cartProducts; let i=index;\">\n  <ion-grid class=\"card\">\n          <ion-row routerLink=\"/products/{{prod.productId}}\">\n            <ion-col size=\"4\" >\n              <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n                <app-image-shell\n                  animation=\"gradient\"\n                  [src]=\"prod?.imgUrl\"\n                  [alt]=\"'Product Image'\"\n                >\n                </app-image-shell>\n              </app-aspect-ratio>\n            </ion-col>\n\n            <ion-col\n              size=\"8\"\n              class=\"counter-list\"\n            >\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-text class=\"note_title10Pri\">{{prod.categoryData.name | titlecase}}</ion-text>\n                <br>\n                <h3 style=\"margin-top: 0px;\">\n                  <app-text-shell\n                    animation=\"gradient\"\n                    [data]=\"prod?.productName\"\n                    lines=\"3\"\n                    class=\"note_title12Black\"\n                  >\n                  </app-text-shell>\n                </h3>\n                <app-text-shell\n                  animation=\"gradient\"\n                  [data]=\"prod?.unitPrice |currency:'₦':'symbol':'1.2-2'\"\n                  class=\"note_title12Black\"\n                ></app-text-shell>\n              </ion-col>\n              <ion-col size=\"12\">\n                Quantity: <b>{{prod.quantity}}</b>\n              </ion-col>\n              <ion-col size=\"12\">\n                FROM <b>{{prod.storeName | uppercase}}</b>\n              </ion-col>\n            </ion-row>\n            </ion-col>\n            \n          </ion-row>\n        \n  </ion-grid>\n </section>\n</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/order-details/order-details-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/order-details/order-details-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: OrderDetailsPageRoutingModule */

  /***/
  function srcAppOrderDetailsOrderDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderDetailsPageRoutingModule", function () {
      return OrderDetailsPageRoutingModule;
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


    var _order_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./order-details.page */
    "./src/app/order-details/order-details.page.ts");

    const routes = [{
      path: '',
      component: _order_details_page__WEBPACK_IMPORTED_MODULE_3__["OrderDetailsPage"]
    }];
    let OrderDetailsPageRoutingModule = class OrderDetailsPageRoutingModule {};
    OrderDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OrderDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/order-details/order-details.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/order-details/order-details.module.ts ***!
    \*******************************************************/

  /*! exports provided: OrderDetailsPageModule */

  /***/
  function srcAppOrderDetailsOrderDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderDetailsPageModule", function () {
      return OrderDetailsPageModule;
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


    var _order_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./order-details-routing.module */
    "./src/app/order-details/order-details-routing.module.ts");
    /* harmony import */


    var _order_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./order-details.page */
    "./src/app/order-details/order-details.page.ts");
    /* harmony import */


    var _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../sharedComponents/shared-components.module */
    "./src/app/sharedComponents/shared-components.module.ts");
    /* harmony import */


    var _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shell/shell.module */
    "./src/app/shell/shell.module.ts");

    let OrderDetailsPageModule = class OrderDetailsPageModule {};
    OrderDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _order_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderDetailsPageRoutingModule"], _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ShellModule"]],
      declarations: [_order_details_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailsPage"]]
    })], OrderDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/order-details/order-details.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/order-details/order-details.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrderDetailsOrderDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/order-details/order-details.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/order-details/order-details.page.ts ***!
    \*****************************************************/

  /*! exports provided: OrderDetailsPage */

  /***/
  function srcAppOrderDetailsOrderDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderDetailsPage", function () {
      return OrderDetailsPage;
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


    var src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/http-services/order.service */
    "./src/app/core/http-services/order.service.ts");
    /* harmony import */


    var src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/authentication/authentication.service */
    "./src/app/core/authentication/authentication.service.ts");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");

    let OrderDetailsPage = class OrderDetailsPage {
      constructor(orderService, nativeStorage, authService, route) {
        this.orderService = orderService;
        this.nativeStorage = nativeStorage;
        this.authService = authService;
        this.route = route; ///Inputs

        this.title = 'Order Details';
        this.longSearch = false;
        this.showBackButton = true;
        this.loading = false;
        this.showSearch = true;
      }

      ngOnInit() {
        this.loading = true;
        this.nativeStorage.getItem('currentUser').then(x => {
          this.currentUser = x;
          this.route.params.subscribe(params => {
            if (params.id) {
              // this.productService.setLocalRecentlyViewedProducts(JSON.stringify([]));
              console.log('params.id: ' + JSON.stringify(params.id));
              this.getOrderDetails(this.currentUser.token, params.id);
            } else {
              //Bounce the person
              this.loading = false;
            }
          });
        });
      }

      getOrderDetails(token, id) {
        // let id = this.route.snapshot.paramMap.get("id");
        this.orderService.getOrderDetails(token, id).subscribe(data => {
          if (!data.error) {
            this.loading = false; // console.log('getOrderDetails : ' + JSON.stringify(data));

            this.order = data.data;

            if (this.order.paymentMethod == "ondelivery") {
              this.order.paymentMethod = " ON DELIVERY";
            } else {
              this.order.paymentMethod = " ONLINE";
            }
          } else {// this.toastr.error("Error!", data.message);
          }
        }, err => {// this.toastr.error("Error!", "An error occured");
        });
      }

    };

    OrderDetailsPage.ctorParameters = () => [{
      type: src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]
    }, {
      type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"]
    }, {
      type: src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }];

    OrderDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./order-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/order-details/order-details.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./order-details.page.scss */
      "./src/app/order-details/order-details.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"], src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], OrderDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=order-details-order-details-module-es5.js.map