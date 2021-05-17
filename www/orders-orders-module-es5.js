(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrdersOrdersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header [title]=\"title\" [longSearch]=\"longSearch\" [showBackButton]=\"showBackButton\" [isLoading]=\"loading\"\n  [showSearch]=\"showSearch\">\n</app-header>\n<ion-content>\n  <ion-row>\n    <ion-col size=\"12\" class=\"note_title_bold12Sec\">\n      <ion-text>MY ORDER HISTORY</ion-text>\n    </ion-col>\n  </ion-row>\n    <div *ngIf=\"Prods.length>0\">\n      <section *ngFor=\"let prod of Prods; let i=index;\">\n        <ion-grid class=\"card\" routerLink=\"/order-details/{{prod.order}}\">\n          <ion-row>\n            <ion-col size=\"9\" class=\"note_title_bold12Sec\">\n              <ion-text>{{prod.orderTag}}</ion-text>\n            </ion-col>\n            <ion-col size=\"3\" class=\"t_right\">\n              {{prod.statusChangeDate | date : 'mediumDate'}}\n             </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\" class=\"note_title12Black\" >\n              {{prod.unitPrice |currency:'₦':'symbol':'1.2-2'}}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </section>\n    </div>\n   \n    <div *ngIf=\"!Prods\">\n      <ion-grid class=\"grid\" class=\"t_center\" style=\"padding-top: 50px;\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-icon size=\"large\" name=\"cart-sharp\" color=\"primary\"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-text> YOU CURRENTLY HAVE NO ORDERS!</ion-text>\n          </ion-col>\n        </ion-row>      \n      </ion-grid>\n    </div>\n\n\n  </ion-content>";
    /***/
  },

  /***/
  "./src/app/orders/orders.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/orders/orders.module.ts ***!
    \*****************************************/

  /*! exports provided: OrdersPageModule */

  /***/
  function srcAppOrdersOrdersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function () {
      return OrdersPageModule;
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


    var _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../sharedComponents/shared-components.module */
    "./src/app/sharedComponents/shared-components.module.ts");
    /* harmony import */


    var _orders_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./orders.page */
    "./src/app/orders/orders.page.ts");

    let OrdersPageModule = class OrdersPageModule {};
    OrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_8__["OrdersPage"]
      }]), _shell_shell_module__WEBPACK_IMPORTED_MODULE_6__["ShellModule"], _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]],
      declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_8__["OrdersPage"]]
    })], OrdersPageModule);
    /***/
  },

  /***/
  "./src/app/orders/orders.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/orders/orders.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrdersOrdersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/orders/orders.page.ts":
  /*!***************************************!*\
    !*** ./src/app/orders/orders.page.ts ***!
    \***************************************/

  /*! exports provided: OrdersPage */

  /***/
  function srcAppOrdersOrdersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersPage", function () {
      return OrdersPage;
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


    var src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/http-services/order.service */
    "./src/app/core/http-services/order.service.ts");
    /* harmony import */


    var src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/authentication/authentication.service */
    "./src/app/core/authentication/authentication.service.ts");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js"); // import {
    //   OrderProductsModel,
    // } from "src/app/shared/models/product.model";


    let OrdersPage = class OrdersPage {
      constructor(orderService, nativeStorage, authService) {
        this.orderService = orderService;
        this.nativeStorage = nativeStorage;
        this.authService = authService; ///Inputs

        this.title = 'My Orders';
        this.longSearch = false;
        this.showBackButton = true;
        this.loading = false;
        this.showSearch = true; ////////////////////
        // products: OrderProductsModel[];

        this.Prods = [];
        this.pageSize = 10;
      }

      ngOnInit() {
        this.loading = true;
        this.nativeStorage.getItem('currentUser').then(x => {
          this.currentUser = x; // console.log('currentUser:' + JSON.stringify(this.currentUser));

          this.getOrders();
        });
      }

      getOrders() {
        this.orderService.getOrders(this.currentUser.token).subscribe(data => {
          if (!data.error && data.data.length > 0) {
            data.data.forEach(order => {
              let index = this.Prods.findIndex(i => i.orderTag === order.orderTag);

              if (index == -1) {
                this.Prods.push(order);
              } else {
                this.Prods[index].unitPrice += Number(order.unitPrice);
              }
            });
            this.loading = false;
          }
        }, err => {
          console.error(err);
          this.loading = false;
        });
      }

    };

    OrdersPage.ctorParameters = () => [{
      type: src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]
    }, {
      type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"]
    }, {
      type: src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
    }];

    OrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-orders',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./orders.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./orders.page.scss */
      "./src/app/orders/orders.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_http_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"], src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])], OrdersPage);
    /***/
  }
}]);
//# sourceMappingURL=orders-orders-module-es5.js.map