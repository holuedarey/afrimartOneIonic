(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCategoriesCategoriesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header\n  [title]=\"title\"\n  [longSearch]=\"longSearch\"\n  [showBackButton]=\"showBackButton\"\n  [isLoading]=\"loading\"\n  [showSearch]=\"showSearch\"\n>\n</app-header>\n<ion-content>\n  <ion-grid class=\"zero\">\n    <ion-row class=\"zero\">\n      <ion-col size=\"3\" class=\"zero\">\n        <ion-row class=\"leftSec zero\">\n          <ion-col\n            size=\"12\"\n            class=\"zero catMenu\"\n            *ngFor=\"let topCat of topCategories\"\n            (click)=\"loadLevel1SubCats(topCat)\"\n          >\n            <div\n              [className]=\"topCat.name==isActive ? 'catMenuActive' : ''\"\n              class=\"zero\"\n            >\n              {{topCat?.name | titlecase}}\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n      <ion-col size=\"9\" class=\"zero\">\n        <ion-row class=\"rightSec zero\">\n          <ion-col size=\"12\" class=\"zero\">\n            <ion-grid\n              class=\"gridSubCat\"\n              *ngFor=\"let subCat of subCat1Category\"\n              class=\"zero\"\n            >\n              <ion-row class=\"zero sub-categories-head\">\n                <ion-col size=\"9\" class=\"note_title12White\">\n                  <ion-text >{{subCat?.name | uppercase}}</ion-text>\n                </ion-col>\n                <ion-col size=\"3\" class=\"note_title12White\">\n                  <ion-text  (click)=\"viewSubCategory(subCat._id,subCat.name)\">SEE ALL</ion-text>\n                </ion-col>\n              </ion-row>\n              <ion-row class=\"card zero\">\n                <ion-col size=\"12\">\n                  <ion-list class=\"zero\" lines=\"full\">\n                    <ion-item\n                      *ngFor=\"let subsubCat of subCat.children\"\n                      (click)=\"getSubCat(subsubCat)\"\n                      class=\"note_title_bold10Black\"\n                      detail\n                    >\n                      <ion-label>{{subsubCat?.name | uppercase}}</ion-label>\n                    </ion-item>\n                  </ion-list>\n                </ion-col>\n              </ion-row>\n\n              <!-- <ion-row class=\"card zero\">\n                <ion-col size=\"4\" *ngFor=\"let subsubCat of subCat.children\" (click)=\"getSubCat(subsubCat)\" class=\"gridProductItem\">\n                  <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n                    <app-image-shell animation=\"gradient\" [src]=\"subsubCat.imgUrl?subsubCat.imgUrl: 'assets/imgs/logo-grey200.jpg' \"\n                      [alt]=\"'Category Image'\" class=\"imgHolder\">\n                    </app-image-shell>\n                  </app-aspect-ratio>\n                  <app-text-shell animation=\"gradient\" [data]=\"subsubCat?.name | titlecase\" lines=\"2\" class=\"note_title10Black\"\n                    [routerLink]=\"['/products']\">\n                  </app-text-shell>\n                </ion-col>\n              </ion-row> -->\n            </ion-grid>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/categories/categories.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/categories/categories.module.ts ***!
    \*************************************************/

  /*! exports provided: CategoriesPageModule */

  /***/
  function srcAppCategoriesCategoriesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function () {
      return CategoriesPageModule;
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


    var _categories_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./categories.page */
    "./src/app/categories/categories.page.ts");
    /* harmony import */


    var _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../sharedComponents/shared-components.module */
    "./src/app/sharedComponents/shared-components.module.ts");

    let CategoriesPageModule = class CategoriesPageModule {};
    CategoriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_7__["CategoriesPage"]
      }]), _shell_shell_module__WEBPACK_IMPORTED_MODULE_6__["ShellModule"], _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_8__["SharedComponentsModule"]],
      declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_7__["CategoriesPage"]]
    })], CategoriesPageModule);
    /***/
  },

  /***/
  "./src/app/categories/categories.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/categories/categories.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategoriesCategoriesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".catMenu {\n  font-size: 10px;\n  background: #fff;\n  color: #343434;\n  padding: 15px 0;\n  text-align: center;\n  font-weight: bold;\n  padding-bottom: 0px;\n  padding-top: 0px;\n}\n\n.catMenuActive {\n  background: #F9F9F9 !important;\n  height: 50px;\n  padding-top: 21px;\n  border-left: 4px solid #00733F;\n}\n\n.sub-categories-head {\n  background: #CA7529;\n  height: 33px;\n  padding-top: 6px;\n}\n\n.imgHolder {\n  border-radius: 2px;\n  background: #eee;\n}\n\n.gridSubCat {\n  padding: 0px;\n}\n\n.gridSubCatHeader {\n  background: var(--ion-color-light);\n  color: var(--ion-color-primary);\n}\n\nion-content {\n  overflow: hidden;\n}\n\n.leftSec {\n  height: 550px;\n  max-height: 550px;\n  overflow-y: scroll;\n}\n\n.rightSec {\n  height: 550px;\n  max-height: 550px;\n  overflow-y: scroll;\n}\n\nion-item {\n  --inner-padding-start: 0px;\n  --padding-start: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL0lvbmljL2FmcmltYXJ0b25lL3NyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUVFLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUNBRjs7QURJQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDREY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FET0E7RUFDRSxZQUFBO0FDSkY7O0FETUE7RUFDRSxrQ0FBQTtFQUNBLCtCQUFBO0FDSEY7O0FETUE7RUFDRSxnQkFBQTtBQ0hGOztBRE9BO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNKRjs7QURNQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDSEY7O0FEeUJBO0VBQ0UsMEJBQUE7RUFDQSxvQkFBQTtBQ3RCRiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2F0TWVudSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMzNDM0MzQ7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDsgIFxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4uY2F0TWVudUFjdGl2ZSB7XG4gIC8vIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgYmFja2dyb3VuZDogI0Y5RjlGOSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6NTBweDtcbiAgcGFkZGluZy10b3A6MjFweDtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMDA3MzNGO1xufVxuXG5cbi5zdWItY2F0ZWdvcmllcy1oZWFke1xuICBiYWNrZ3JvdW5kOiAjQ0E3NTI5OyBcbiAgaGVpZ2h0OiAzM3B4OyBcbiAgcGFkZGluZy10b3A6NnB4XG59XG4uaW1nSG9sZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAvLyB3aWR0aDogMTAwcHghaW1wb3J0YW50O1xuICAvLyBoZWlnaHQ6IDEwMHB4IWltcG9ydGFudDtcbiAgLy8gbWF4LXdpZHRoOiAxMDBweCFpbXBvcnRhbnQ7XG4gIC8vIG1heC1oZWlnaHQ6IDEwMHB4IWltcG9ydGFudDtcbn1cblxuLmdyaWRTdWJDYXQge1xuICBwYWRkaW5nOiAwcHg7XG59XG4uZ3JpZFN1YkNhdEhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC8vICBwYWRkaW5nOiA1cHggMDtcbn1cbmlvbi1jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLy8gIGhlaWdodDogMTAwdmg7XG4gIC8vICB3aWR0aDogMTAwdnc7XG59XG4ubGVmdFNlYyB7XG4gIGhlaWdodDogNTUwcHg7XG4gIG1heC1oZWlnaHQ6IDU1MHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4ucmlnaHRTZWMge1xuICBoZWlnaHQ6IDU1MHB4O1xuICBtYXgtaGVpZ2h0OiA1NTBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAvLyAgcGFkZGluZzogMjBweDtcbn1cbi8vIC5maXhlZFtzY3JvbGx4PSd0cnVlJ10sXG4vLyBkaXZbc2Nyb2xseT0ndHJ1ZSddIHtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICBvdmVyZmxvdzogaGlkZGVuO1xuXG4vLyAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG4vLyAgIH1cbi8vIH1cbi8vIC5maXhlZFtzY3JvbGx4PSd0cnVlJ10ge1xuLy8gICBvdmVyZmxvdy14OiBhdXRvO1xuLy8gfVxuLy8gLmZpeGVkW3Njcm9sbHk9J3RydWUnXSB7XG4vLyAgIG92ZXJmbG93LXk6IGF1dG87XG4vLyB9XG4vLyAuc2Nyb2xsIHtcbi8vICAgb3ZlcmZsb3c6IGF1dG87XG4vLyB9XG5cbmlvbi1pdGVtIHtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuIiwiLmNhdE1lbnUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMzQzNDM0O1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5jYXRNZW51QWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI0Y5RjlGOSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmctdG9wOiAyMXB4O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMwMDczM0Y7XG59XG5cbi5zdWItY2F0ZWdvcmllcy1oZWFkIHtcbiAgYmFja2dyb3VuZDogI0NBNzUyOTtcbiAgaGVpZ2h0OiAzM3B4O1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxuXG4uaW1nSG9sZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuXG4uZ3JpZFN1YkNhdCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmdyaWRTdWJDYXRIZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5sZWZ0U2VjIHtcbiAgaGVpZ2h0OiA1NTBweDtcbiAgbWF4LWhlaWdodDogNTUwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnJpZ2h0U2VjIHtcbiAgaGVpZ2h0OiA1NTBweDtcbiAgbWF4LWhlaWdodDogNTUwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/categories/categories.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/categories/categories.page.ts ***!
    \***********************************************/

  /*! exports provided: CategoriesPage */

  /***/
  function srcAppCategoriesCategoriesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesPage", function () {
      return CategoriesPage;
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


    var src_app_core_http_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/http-services/category.service */
    "./src/app/core/http-services/category.service.ts");

    let CategoriesPage = class CategoriesPage {
      constructor(route, categoryService, router) {
        this.route = route;
        this.categoryService = categoryService;
        this.router = router; ///Inputs

        this.title = '';
        this.longSearch = true;
        this.showBackButton = false;
        this.loading = false;
        this.showSearch = true;
        this.isActive = '';
        this.topCategories = [];
        this.subCat1Category = [];
        this.paramId = ''; // if (this.router.getCurrentNavigation().extras.state) {
        //   // if (this.router.getCurrentNavigation().extras.state.cat) {
        //   // this.cat_data = this.router.getCurrentNavigation().extras.state.cat;
        //   // this.cat_data['productId'] = this.cat_data._id;
        //   // console.log('Category Detail: ' + JSON.stringify(this.cat_data));
        //   // }
        // }
      }

      ngOnInit() {
        this.paramId = '';
        this.route.params.subscribe(params => {
          console.log('Entered Params ');

          if (params.id) {
            console.log('Category ID: ' + params.id);
            this.paramId = params.id;
            this.getTopCategories();
          } else {
            this.getTopCategories();
          } // this.setDocTitle(params.id);

        });
      }

      getTopCategories() {
        this.loading = true;
        this.categoryService.getTopCategories().subscribe(data => {
          this.topCategories = data.data;
          console.log('topCategories: ' + JSON.stringify(this.topCategories));

          if (this.topCategories && this.paramId != '') {
            this.topCategories.forEach(cat => {
              if (cat._id === this.paramId) {
                this.loadLevel1SubCats(cat);
                this.loading = false;
              } else {
                this.loadLevel1SubCats(this.topCategories[0]);
                this.isActive = this.topCategories[0].name;
                this.loading = false;
              }
            });
          } else {
            this.loadLevel1SubCats(this.topCategories[0]);
            this.isActive = this.topCategories[0].name;
            this.loading = false;
          }
        }, err => {
          this.loading = false;
        });
      }

      loadLevel1SubCats(subCat) {
        this.subCat1Category.length = 0;
        subCat.children.forEach(child => {
          this.subCat1Category.push(child);
          this.isActive = subCat.name;
        });
      }

      getSubCat(data) {
        // console.log("getSubCat :" + data._id)
        this.router.navigateByUrl("/sub-category/".concat(data._id));
        localStorage.SetTitle = data.name;
      }

      viewSubCategory(id, title) {
        localStorage.SetTitle = title;
        console.log('id :', id);
        this.router.navigate(["sub-category/".concat(id)]);
      }

      viewAllSubCats() {// console.log("viewAllSuatsbC")
      }

    };

    CategoriesPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: src_app_core_http_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    CategoriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categories',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categories.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./categories.page.scss */
      "./src/app/categories/categories.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_core_http_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], CategoriesPage);
    /***/
  }
}]);
//# sourceMappingURL=categories-categories-module-es5.js.map