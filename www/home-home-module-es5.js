(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header [title]=\"title\" [longSearch]=\"longSearch\" [showBackButton]=\"showBackButton\" [isLoading]=\"loading\"\n  [showSearch]=\"showSearch\">\n</app-header>\n<ion-content\n[scrollEvents]=\"true\"\n  (ionScrollStart)=\"logScrollStart()\"\n  (ionScroll)=\"logScrolling($event)\"\n  (ionScrollEnd)=\"logScrollEnd()\"\n>\n\n  <ion-grid class=\"card\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-slides pager=\"true\" style=\"padding-bottom: 25px;\" [options]=\"slideOpts\">\n          <!-- <ion-slide *ngFor=\"let s of Slides\" (click)=\"viewCategory(s.imgLink)\">\n\n            <img [src]=\"s.imgUrl\" alt=\"{{s.imgUrl}}\" />\n          </ion-slide> -->\n          <!-- <ion-slide *ngFor=\"let s of Slides\" (click)=\"viewCategory(s.imgLink)\">\n            <img [src]=\"s.imgUrl\" alt=\"{{s.imgUrl}}\" />\n          </ion-slide> -->\n\n          <ion-slide>\n            <img src=\"../../assets/imgs/slides_1.png\" alt=\"Slides\" />\n          </ion-slide>\n          <ion-slide>\n            <img src=\"../../assets/dummy-images/slide1.png\" alt=\"Slides\" />\n          </ion-slide>\n          <ion-slide>\n            <img src=\"../../assets/dummy-images/slide2.png\" alt=\"Slides\" />\n          </ion-slide>\n          <ion-slide>\n            <img src=\"../../assets/dummy-images/slide3.png\" alt=\"Slides\" />\n          </ion-slide>\n          <ion-slide>\n            <img src=\"../../assets/dummy-images/slide1.png\" alt=\"Slides\" />\n          </ion-slide>\n          <ion-slide>\n            <img src=\"../../assets/dummy-images/slide3.png\" alt=\"Slides\" />\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- <ion-grid class=\"t_center\">\n    <ion-row class=\"gridSubCatHeader\">\n      <ion-col size=\"12\">\n        <ion-text>BRANDS</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"Brands\" class=\"card\">\n      <ion-col col-6 *ngFor=\"let brand of Brands\">\n        <app-image-shell\n          animation=\"gradient\"\n          [src]=\"brand?.imgUrl\"\n          [alt]=\"'Brand'\"\n          class=\"brand\"\n        >\n        </app-image-shell>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n  <ion-grid class=\"t_center\">\n    <ion-row class=\"gridSubCatHeader\">\n      <ion-col size=\"12\" style=\"text-align: left;\" class=\"note_title_bold12Sec\">\n        <ion-text class=\"bold-text\">CATEGORIES</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"card catMenu\">\n      <ion-col size=\"3\" (click)=\"viewSubCategory('5e09ceaa5b359465f1e64a45','Phones & Tablets')\">\n        <ion-icon src=\"/assets/vectors/icons/Agriculture.svg\" class=\"xxx\"></ion-icon><br />\n        <ion-text class=\"catText\">Agriculture</ion-text>\n      </ion-col>\n      <ion-col size=\"3\" (click)=\"viewSubCategory('5e09d21c5b359465f1e64a4d','Computing')\">\n        <ion-icon src=\"/assets/vectors/icons/medical&pharmacy.svg\" class=\"xxx\"></ion-icon><br />\n        <ion-text class=\"catText\">Medical & Pharmaceutical</ion-text>\n      </ion-col>\n      <ion-col size=\"3\" (click)=\"viewSubCategory('5e09d5e05b359465f1e64a5a','Electronics')\">\n        <ion-icon src=\"/assets/vectors/icons/Electronics.svg\" class=\"xxx\"></ion-icon><br />\n        <ion-text class=\"catText\">Electrical &\n          Electronics</ion-text>\n      </ion-col>\n      <ion-col size=\"3\" (click)=\"viewSubCategory('5e09d8b25b359465f1e64a68','Home & Office')\">\n        <ion-icon src=\"/assets/vectors/icons/Art_Crafts.svg\" class=\"xxx\"></ion-icon><br />\n        <ion-text class=\"catText\">Arts & Crafts</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"card catMenu\">\n      <ion-col size=\"3\" (click)=\"viewSubCategory('5e09ddbf5b359465f1e64a81','Fashion')\">\n        <ion-icon src=\"/assets/vectors/icons/Fashion.svg\" class=\"xxx\"></ion-icon><br />\n        <ion-text class=\"catText\">Fashion & Accessories</ion-text>\n      </ion-col>\n      <ion-col size=\"3\" (click)=\"viewSubCategory('5e09e9c924f32d6afe9265d2','Health & Beauty')\">\n        <ion-icon src=\"/assets/vectors/icons/leather.svg\" class=\"xxx\"></ion-icon><br />\n        <ion-text class=\"catText\">Leather Goods</ion-text>\n      </ion-col>\n      <ion-col size=\"3\" (click)=\"viewSubCategory('5e09faeb6a00076b11349871','Groceries')\">\n        <ion-icon src=\"/assets/vectors/icons/Automobile.svg\" class=\"xxx\"></ion-icon><br />\n        <ion-text class=\"catText\">Automobile</ion-text>\n      </ion-col>\n      <ion-col size=\"3\" (click)=\"viewSubCategory('5e2f870c25a2290ed0b668c6','Others')\">\n        <ion-icon src=\"/assets/vectors/icons/All_Categories.svg\" class=\"xxx\"></ion-icon><br />\n        <ion-text class=\"catText\">All Categories</ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class=\"cards\" *ngIf=\"topProds\">\n    <ion-row class=\"\">\n      <ion-col size=\"12\" class=\"note_title_bold12Sec\">\n        <ion-text>\n          <ion-row>\n            <ion-col size=\"9\">\n              <span class=\"ion-text-left bold-text\">TOP PRODUCTS </span>\n            </ion-col>\n            <ion-col size=\"3\">\n              <span class=\"t_right home-view-all\">View all</span>\n            </ion-col>\n          </ion-row>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"t_centers\">\n      <ion-col col-6 class=\"productsCol card\" routerLink=\"/\">\n        <app-image-shell animation=\"gradient\" src=\"/assets/vectors/icons/test.svg\" [alt]=\"'Product Image'\"\n          class=\"inner-img\" style=\"padding-bottom: 5px;\">\n          <!-- <br><br> -->\n        </app-image-shell>\n        <!-- <app-text-shell animation=\"gradient\" [data]=\"productName\" lines=\"2\" class=\"note_title10Black text-truncate\">\n        </app-text-shell> -->\n        <p class=\"text-left product-description-height\">Cotton socks</p>\n        <app-text-shell animation=\"gradient\" [data]=\"'$0.07 - $0.09'\" lines=\"1\"\n          class=\"text-left  bold-text note_title_bold10Black\" style=\"padding: 5px 0;\">\n        </app-text-shell>\n        <app-text-shell animation=\"gradient\" [data]=\"'1000 Dozen(s) (Min Order)'\" lines=\"1\"\n          class=\"note_title_bold12Black text-left\" style=\"padding: 5px 0;\">\n        </app-text-shell>\n      </ion-col>\n\n      <ion-col col-6 class=\"productsCol card\" routerLink=\"/\">\n        <app-image-shell animation=\"gradient\" src=\"/assets/vectors/icons/test1.svg\" [alt]=\"'Product Image'\"\n          class=\"inner-img\" style=\"padding-bottom: 5px;\">\n          <!-- <br><br> -->\n        </app-image-shell>\n        <!-- <app-text-shell animation=\"gradient\" [data]=\"productName\" lines=\"2\" class=\"note_title10Black text-truncate\">\n        </app-text-shell> -->\n        <p class=\"text-left product-description-height\">Automatic PET Blowing Machine APF - 3002</p>\n        <app-text-shell animation=\"gradient\" [data]=\"'$0.07 - $1.22'\" lines=\"1\"\n          class=\"text-left  bold-text note_title_bold10Black\" style=\"padding: 5px 0;\">\n        </app-text-shell>\n        <app-text-shell animation=\"gradient\" [data]=\"'1 Units(s) (Min Order)'\" lines=\"1\"\n          class=\"note_title_bold12Black text-left\" style=\"padding: 5px 0;\">\n        </app-text-shell>\n      </ion-col>\n\n\n      <!-- <ion-col col-6 class=\"productsCol\" routerLink=\"/products/{{tp._id}}\" *ngFor=\"let tp of topProds\"> -->\n      <!-- <app-image-shell animation=\"gradient\" [src]=\"tp?.gallery[0]\" [alt]=\"'Product Image'\" class=\"inner-img\"\n          style=\"padding-bottom: 5px;\">\n        </app-image-shell>\n        <app-text-shell animation=\"gradient\" [data]=\"tp?.name\" lines=\"2\" class=\"note_title10Black text-truncate\">\n        </app-text-shell>\n        <app-text-shell animation=\"gradient\" [data]=\"tp?.price | currency:'₦':'symbol':'1.2-2'\" lines=\"1\"\n          class=\"note_title_bold12Black\" style=\"padding: 5px 0;\">\n        </app-text-shell> -->\n      <!-- </ion-col> -->\n    </ion-row>\n\n    <ion-row class=\"t_centers\">\n      <ion-col col-6 class=\"productsCol card\" routerLink=\"/\">\n        <app-image-shell animation=\"gradient\" src=\"/assets/vectors/icons/test.svg\" [alt]=\"'Product Image'\"\n          class=\"inner-img\" style=\"padding-bottom: 5px;\">\n          <!-- <br><br> -->\n        </app-image-shell>\n        <!-- <app-text-shell animation=\"gradient\" [data]=\"productName\" lines=\"2\" class=\"note_title10Black text-truncate\">\n        </app-text-shell> -->\n        <p class=\"text-left product-description-height\">Cotton socks</p>\n        <app-text-shell animation=\"gradient\" [data]=\"'$0.07 - $0.09'\" lines=\"1\"\n          class=\"text-left  bold-text note_title_bold10Black\" style=\"padding: 5px 0;\">\n        </app-text-shell>\n        <app-text-shell animation=\"gradient\" [data]=\"'1000 Dozen(s) (Min Order)'\" lines=\"1\"\n          class=\"note_title_bold12Black text-left\" style=\"padding: 5px 0;\">\n        </app-text-shell>\n      </ion-col>\n\n      <ion-col col-6 class=\"productsCol card\" routerLink=\"/\">\n        <app-image-shell animation=\"gradient\" src=\"/assets/vectors/icons/test1.svg\" [alt]=\"'Product Image'\"\n          class=\"inner-img\" style=\"padding-bottom: 5px;\">\n          <!-- <br><br> -->\n        </app-image-shell>\n        <!-- <app-text-shell animation=\"gradient\" [data]=\"productName\" lines=\"2\" class=\"note_title10Black text-truncate\">\n        </app-text-shell> -->\n        <p class=\"text-left product-description-height\">Automatic PET Blowing Machine APF - 3002</p>\n        <app-text-shell animation=\"gradient\" [data]=\"'$0.07 - $1.22'\" lines=\"1\"\n          class=\"text-left  bold-text note_title_bold10Black\" style=\"padding: 5px 0;\">\n        </app-text-shell>\n        <app-text-shell animation=\"gradient\" [data]=\"'1 Units(s) (Min Order)'\" lines=\"1\"\n          class=\"note_title_bold12Black text-left\" style=\"padding: 5px 0;\">\n        </app-text-shell>\n      </ion-col>\n\n\n      <!-- <ion-col col-6 class=\"productsCol\" routerLink=\"/products/{{tp._id}}\" *ngFor=\"let tp of topProds\"> -->\n      <!-- <app-image-shell animation=\"gradient\" [src]=\"tp?.gallery[0]\" [alt]=\"'Product Image'\" class=\"inner-img\"\n          style=\"padding-bottom: 5px;\">\n        </app-image-shell>\n        <app-text-shell animation=\"gradient\" [data]=\"tp?.name\" lines=\"2\" class=\"note_title10Black text-truncate\">\n        </app-text-shell>\n        <app-text-shell animation=\"gradient\" [data]=\"tp?.price | currency:'₦':'symbol':'1.2-2'\" lines=\"1\"\n          class=\"note_title_bold12Black\" style=\"padding: 5px 0;\">\n        </app-text-shell> -->\n      <!-- </ion-col> -->\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row class=\"p-t-b-20 card\">\n      <ion-col size=\"12\" class=\"note_title_bold12Sec\">\n        <ion-text color=\"primary\">\n          <span class=\"ion-text-left uppercase bold-text\">one request, multiple quotes.</span>\n        </ion-text>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-input class=\"searchFormQoute\" type=\"text\" placeholder=\"What would you like to search for?\"\n          clear-input=\"true\"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"block\" color=\"primary\" class=\"capitilize\">Request For Quotes <ion-icon\n            style=\"margin-left: 5px;\" src=\"/assets/vectors/icons/sendIcon.svg\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"cards\" *ngIf=\"dailyProds\">\n    <ion-row class=\"gridSubCatHeader\">\n      <ion-col size=\"12\" class=\"note_title_bold12Sec\">\n        <ion-text class=\"category-header-text\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <span class=\"ion-text-left bold-text\">FEATURED CATEGORIES </span>\n            </ion-col>\n          </ion-row>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"t_center card\">\n      <ion-col col-6 class=\"productsCol card feature-categories\" routerLink=\"/\"\n        style=\"background-image:url('/assets/vectors/icons/test2.svg')\">\n        <div class=\"feature-top-desc\">Fashion & Acessories</div>\n      </ion-col>\n      <ion-col col-6 class=\"productsCol card feature-categories\" routerLink=\"/\"\n        style=\"background-image:url('/assets/vectors/icons/test3.svg')\">\n        <div class=\"feature-top-desc\">Agriculture</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6 class=\"productsCol card feature-categories\" routerLink=\"/\"\n        style=\"background-image:url('/assets/vectors/icons/test4.svg')\">\n        <div class=\"feature-top-desc\">Food & Beverages</div>\n      </ion-col>\n      <ion-col col-6 class=\"productsCol card feature-categories\" routerLink=\"/\"\n        style=\"background-image:url('/assets/vectors/icons/test5.svg')\">\n        <div class=\"feature-top-desc\">Business services</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"cards\" *ngIf=\"topProds\">\n    <ion-row class=\"\">\n      <ion-col size=\"12\" class=\"note_title_bold12Sec\">\n        <ion-text>\n          <ion-row>\n            <ion-col size=\"9\">\n              <span class=\"ion-text-left bold-text\">TOP PRODUCTS </span>\n            </ion-col>\n            <ion-col size=\"3\">\n              <span class=\"t_right home-view-all\">View all</span>\n            </ion-col>\n          </ion-row>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"t_centers\">\n      <ion-col col-6 class=\"productsCol card\" routerLink=\"/\">\n        <app-image-shell animation=\"gradient\" src=\"/assets/vectors/icons/test.svg\" [alt]=\"'Product Image'\"\n          class=\"inner-img\" style=\"padding-bottom: 5px;\">\n          <!-- <br><br> -->\n        </app-image-shell>\n        <!-- <app-text-shell animation=\"gradient\" [data]=\"productName\" lines=\"2\" class=\"note_title10Black text-truncate\">\n        </app-text-shell> -->\n        <p class=\"text-left product-description-height\">Cotton socks</p>\n        <app-text-shell animation=\"gradient\" [data]=\"'$0.07 - $0.09'\" lines=\"1\"\n          class=\"text-left  bold-text note_title_bold10Black\" style=\"padding: 5px 0;\">\n        </app-text-shell>\n        <app-text-shell animation=\"gradient\" [data]=\"'1000 Dozen(s) (Min Order)'\" lines=\"1\"\n          class=\"note_title_bold12Black text-left\" style=\"padding: 5px 0;\">\n\n        </app-text-shell>\n        <ion-button color=\"primary\"  expand=\"block\" class=\"contat-supplier-btn\">Contact Supplier</ion-button>\n      </ion-col>\n\n      <ion-col col-6 class=\"productsCol card\" routerLink=\"/\">\n        <app-image-shell animation=\"gradient\" src=\"/assets/vectors/icons/test1.svg\" [alt]=\"'Product Image'\"\n          class=\"inner-img\" style=\"padding-bottom: 5px;\">\n          <!-- <br><br> -->\n        </app-image-shell>\n        <!-- <app-text-shell animation=\"gradient\" [data]=\"productName\" lines=\"2\" class=\"note_title10Black text-truncate\">\n        </app-text-shell> -->\n        <p class=\"text-left product-description-height\">Automatic PET Blowing Machine APF - 3002</p>\n        <app-text-shell animation=\"gradient\" [data]=\"'$0.07 - $1.22'\" lines=\"1\"\n          class=\"text-left  bold-text note_title_bold10Black\" style=\"padding: 5px 0;\">\n        </app-text-shell>\n        <app-text-shell animation=\"gradient\" [data]=\"'1 Units(s) (Min Order)'\" lines=\"1\"\n          class=\"note_title_bold12Black text-left\" style=\"padding: 5px 0;\">\n        </app-text-shell>\n        <ion-button color=\"primary\" expand=\"block\" class=\"contat-supplier-btn\">Contact Supplier</ion-button>\n      </ion-col>\n\n\n      <!-- <ion-col col-6 class=\"productsCol\" routerLink=\"/products/{{tp._id}}\" *ngFor=\"let tp of topProds\"> -->\n      <!-- <app-image-shell animation=\"gradient\" [src]=\"tp?.gallery[0]\" [alt]=\"'Product Image'\" class=\"inner-img\"\n          style=\"padding-bottom: 5px;\">\n        </app-image-shell>\n        <app-text-shell animation=\"gradient\" [data]=\"tp?.name\" lines=\"2\" class=\"note_title10Black text-truncate\">\n        </app-text-shell>\n        <app-text-shell animation=\"gradient\" [data]=\"tp?.price | currency:'₦':'symbol':'1.2-2'\" lines=\"1\"\n          class=\"note_title_bold12Black\" style=\"padding: 5px 0;\">\n        </app-text-shell> -->\n      <!-- </ion-col> -->\n    </ion-row>\n\n    <ion-row class=\"t_centers\">\n      <ion-col col-6 class=\"productsCol card\" routerLink=\"/\">\n        <app-image-shell animation=\"gradient\" src=\"/assets/vectors/icons/test.svg\" [alt]=\"'Product Image'\"\n          class=\"inner-img\" style=\"padding-bottom: 5px;\">\n          <!-- <br><br> -->\n        </app-image-shell>\n        <!-- <app-text-shell animation=\"gradient\" [data]=\"productName\" lines=\"2\" class=\"note_title10Black text-truncate\">\n        </app-text-shell> -->\n        <p class=\"text-left product-description-height\">Cotton socks</p>\n        <app-text-shell animation=\"gradient\" [data]=\"'$0.07 - $0.09'\" lines=\"1\"\n          class=\"text-left  bold-text note_title_bold10Black\" style=\"padding: 5px 0;\">\n        </app-text-shell>\n        <app-text-shell animation=\"gradient\" [data]=\"'1000 Dozen(s) (Min Order)'\" lines=\"1\"\n          class=\"note_title_bold12Black text-left\" style=\"padding: 5px 0;\">\n        </app-text-shell>\n        <ion-button color=\"primary\" expand=\"block\" class=\"contat-supplier-btn\">Contact Supplier</ion-button>\n      </ion-col>\n\n      <ion-col col-6 class=\"productsCol card\" routerLink=\"/\">\n        <app-image-shell animation=\"gradient\" src=\"/assets/vectors/icons/test1.svg\" [alt]=\"'Product Image'\"\n          class=\"inner-img\" style=\"padding-bottom: 5px;\">\n          <!-- <br><br> -->\n        </app-image-shell>\n        <!-- <app-text-shell animation=\"gradient\" [data]=\"productName\" lines=\"2\" class=\"note_title10Black text-truncate\">\n        </app-text-shell> -->\n        <p class=\"text-left product-description-height\">Automatic PET Blowing Machine APF - 3002</p>\n        <app-text-shell animation=\"gradient\" [data]=\"'$0.07 - $1.22'\" lines=\"1\"\n          class=\"text-left  bold-text note_title_bold10Black\" style=\"padding: 5px 0;\">\n        </app-text-shell>\n        <app-text-shell animation=\"gradient\" [data]=\"'1 Units(s) (Min Order)'\" lines=\"1\"\n          class=\"note_title_bold12Black text-left\" style=\"padding: 5px 0;\">\n        </app-text-shell>\n        <ion-button color=\"primary\" expand=\"block\" class=\"contat-supplier-btn\">Contact Supplier</ion-button>\n      </ion-col>\n\n\n      <!-- <ion-col col-6 class=\"productsCol\" routerLink=\"/products/{{tp._id}}\" *ngFor=\"let tp of topProds\"> -->\n      <!-- <app-image-shell animation=\"gradient\" [src]=\"tp?.gallery[0]\" [alt]=\"'Product Image'\" class=\"inner-img\"\n          style=\"padding-bottom: 5px;\">\n        </app-image-shell>\n        <app-text-shell animation=\"gradient\" [data]=\"tp?.name\" lines=\"2\" class=\"note_title10Black text-truncate\">\n        </app-text-shell>\n        <app-text-shell animation=\"gradient\" [data]=\"tp?.price | currency:'₦':'symbol':'1.2-2'\" lines=\"1\"\n          class=\"note_title_bold12Black\" style=\"padding: 5px 0;\">\n        </app-text-shell> -->\n      <!-- </ion-col> -->\n    </ion-row>\n    <ion-row class=\"t_centers\">\n      <ion-col col-6 class=\"productsCol card\" routerLink=\"/\">\n        <app-image-shell animation=\"gradient\" src=\"/assets/vectors/icons/test.svg\" [alt]=\"'Product Image'\"\n          class=\"inner-img\" style=\"padding-bottom: 5px;\">\n          <!-- <br><br> -->\n        </app-image-shell>\n        <!-- <app-text-shell animation=\"gradient\" [data]=\"productName\" lines=\"2\" class=\"note_title10Black text-truncate\">\n        </app-text-shell> -->\n        <p class=\"text-left product-description-height\">Cotton socks</p>\n        <app-text-shell animation=\"gradient\" [data]=\"'$0.07 - $0.09'\" lines=\"1\"\n          class=\"text-left  bold-text note_title_bold10Black\" style=\"padding: 5px 0;\">\n        </app-text-shell>\n        <app-text-shell animation=\"gradient\" [data]=\"'1000 Dozen(s) (Min Order)'\" lines=\"1\"\n          class=\"note_title_bold12Black text-left\" style=\"padding: 5px 0;\">\n        </app-text-shell>\n        <ion-button color=\"primary\" expand=\"block\" class=\"contat-supplier-btn\">Contact Supplier</ion-button>\n      </ion-col>\n\n      <ion-col col-6 class=\"productsCol card\" routerLink=\"/\">\n        <app-image-shell animation=\"gradient\" src=\"/assets/vectors/icons/test1.svg\" [alt]=\"'Product Image'\"\n          class=\"inner-img\" style=\"padding-bottom: 5px;\">\n          <!-- <br><br> -->\n        </app-image-shell>\n        <!-- <app-text-shell animation=\"gradient\" [data]=\"productName\" lines=\"2\" class=\"note_title10Black text-truncate\">\n        </app-text-shell> -->\n        <p class=\"text-left product-description-height\">Automatic PET Blowing Machine APF - 3002</p>\n        <app-text-shell animation=\"gradient\" [data]=\"'$0.07 - $1.22'\" lines=\"1\"\n          class=\"text-left  bold-text note_title_bold10Black\" style=\"padding: 5px 0;\">\n        </app-text-shell>\n        <app-text-shell animation=\"gradient\" [data]=\"'1 Units(s) (Min Order)'\" lines=\"1\"\n          class=\"note_title_bold12Black text-left\" style=\"padding: 5px 0;\">\n        </app-text-shell>\n        <ion-button color=\"primary\" expand=\"block\" class=\"contat-supplier-btn\">Contact Supplier</ion-button>\n      </ion-col>\n\n\n      <!-- <ion-col col-6 class=\"productsCol\" routerLink=\"/products/{{tp._id}}\" *ngFor=\"let tp of topProds\"> -->\n      <!-- <app-image-shell animation=\"gradient\" [src]=\"tp?.gallery[0]\" [alt]=\"'Product Image'\" class=\"inner-img\"\n          style=\"padding-bottom: 5px;\">\n        </app-image-shell>\n        <app-text-shell animation=\"gradient\" [data]=\"tp?.name\" lines=\"2\" class=\"note_title10Black text-truncate\">\n        </app-text-shell>\n        <app-text-shell animation=\"gradient\" [data]=\"tp?.price | currency:'₦':'symbol':'1.2-2'\" lines=\"1\"\n          class=\"note_title_bold12Black\" style=\"padding: 5px 0;\">\n        </app-text-shell> -->\n      <!-- </ion-col> -->\n    </ion-row>\n    <ion-row class=\"t_centers\">\n      <ion-col col-6 class=\"productsCol card\" routerLink=\"/\">\n        <app-image-shell animation=\"gradient\" src=\"/assets/vectors/icons/test.svg\" [alt]=\"'Product Image'\"\n          class=\"inner-img\" style=\"padding-bottom: 5px;\">\n          <!-- <br><br> -->\n        </app-image-shell>\n        <!-- <app-text-shell animation=\"gradient\" [data]=\"productName\" lines=\"2\" class=\"note_title10Black text-truncate\">\n        </app-text-shell> -->\n        <p class=\"text-left product-description-height\">Cotton socks</p>\n        <app-text-shell animation=\"gradient\" [data]=\"'$0.07 - $0.09'\" lines=\"1\"\n          class=\"text-left  bold-text note_title_bold10Black\" style=\"padding: 5px 0;\">\n        </app-text-shell>\n        <app-text-shell animation=\"gradient\" [data]=\"'1000 Dozen(s) (Min Order)'\" lines=\"1\"\n          class=\"note_title_bold12Black text-left\" style=\"padding: 5px 0;\">\n        </app-text-shell>\n        <ion-button color=\"primary\" expand=\"block\" class=\"contat-supplier-btn\">Contact Supplier</ion-button>\n      </ion-col>\n\n      <ion-col col-6 class=\"productsCol card\" routerLink=\"/\">\n        <app-image-shell animation=\"gradient\" src=\"/assets/vectors/icons/test1.svg\" [alt]=\"'Product Image'\"\n          class=\"inner-img\" style=\"padding-bottom: 5px;\">\n          <!-- <br><br> -->\n        </app-image-shell>\n        <!-- <app-text-shell animation=\"gradient\" [data]=\"productName\" lines=\"2\" class=\"note_title10Black text-truncate\">\n        </app-text-shell> -->\n        <p class=\"text-left product-description-height\">Automatic PET Blowing Machine APF - 3002</p>\n        <app-text-shell animation=\"gradient\" [data]=\"'$0.07 - $1.22'\" lines=\"1\"\n          class=\"text-left  bold-text note_title_bold10Black\" style=\"padding: 5px 0;\">\n        </app-text-shell>\n        <app-text-shell animation=\"gradient\" [data]=\"'1 Units(s) (Min Order)'\" lines=\"1\"\n          class=\"note_title_bold12Black text-left\" style=\"padding: 5px 0;\">\n        </app-text-shell>\n        <ion-button color=\"primary\" expand=\"block\" class=\"contat-supplier-btn\">Contact Supplier</ion-button>\n      </ion-col>\n\n\n      <!-- <ion-col col-6 class=\"productsCol\" routerLink=\"/products/{{tp._id}}\" *ngFor=\"let tp of topProds\"> -->\n      <!-- <app-image-shell animation=\"gradient\" [src]=\"tp?.gallery[0]\" [alt]=\"'Product Image'\" class=\"inner-img\"\n          style=\"padding-bottom: 5px;\">\n        </app-image-shell>\n        <app-text-shell animation=\"gradient\" [data]=\"tp?.name\" lines=\"2\" class=\"note_title10Black text-truncate\">\n        </app-text-shell>\n        <app-text-shell animation=\"gradient\" [data]=\"tp?.price | currency:'₦':'symbol':'1.2-2'\" lines=\"1\"\n          class=\"note_title_bold12Black\" style=\"padding: 5px 0;\">\n        </app-text-shell> -->\n      <!-- </ion-col> -->\n    </ion-row>\n  </ion-grid>\n  <ion-row *ngIf=\"showUpArrow\">\n    <ion-col (click)=\"scrollToTop()\">\n      <div class=\"circleUp\">\n        <img src=\"/assets/vectors/icons/arrowUp.svg\" all=\"top\">\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shell_shell_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shell/shell.module */
    "./src/app/shell/shell.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../sharedComponents/shared-components.module */
    "./src/app/sharedComponents/shared-components.module.ts");

    let HomePageModule = class HomePageModule {};
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
      }]), _shell_shell_module__WEBPACK_IMPORTED_MODULE_6__["ShellModule"], _sharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_8__["SharedComponentsModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".viewSeller {\n  font-size: 10px;\n  text-align: right;\n}\n\n.text-left {\n  text-align: left !important;\n}\n\n.slideShow {\n  text-align: center;\n}\n\n.imgHolder {\n  margin: auto;\n  width: 200px;\n  height: 200px;\n  max-width: 200px;\n  max-height: 200px;\n}\n\n.catMenu {\n  margin: auto;\n}\n\n.circleUp {\n  position: absolute;\n  bottom: 101px;\n  right: 14px;\n  height: 56px;\n  width: 56px;\n}\n\n.catText {\n  font-family: \"RedHatDisplay\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 12px;\n  letter-spacing: 0.04em;\n  color: #343434;\n}\n\nion-icon.xx {\n  width: 20px;\n  height: 20px;\n  stroke-width: 10px;\n}\n\nion-icon.xxx {\n  width: 40px;\n  height: 40px;\n  stroke-width: 10px;\n}\n\nion-icon.xxxx {\n  width: 100px;\n  height: 100px;\n}\n\nion-icon.purple {\n  color: #AD49D2;\n}\n\n.badge_parent {\n  position: absolute;\n}\n\n.badge {\n  z-index: 2;\n  position: relative;\n  right: 0;\n  top: -20px;\n}\n\n.productsEmtpyCol {\n  padding: 0;\n}\n\n.productsCol {\n  -webkit-box-flex: flex-grow !important;\n          flex: flex-grow !important;\n  border: solid 1px #dfdfdf;\n  text-align: center;\n  margin: 5px;\n}\n\n.productsColNoBorder {\n  -webkit-box-flex: flex-grow !important;\n          flex: flex-grow !important;\n  text-align: center;\n  margin: 5px;\n}\n\n.inner-img {\n  margin: auto;\n  width: 100px !important;\n  height: 100px !important;\n  max-width: 100px !important;\n  max-height: 100px !important;\n}\n\n.inner-img200 {\n  margin: auto;\n  width: 200px !important;\n  height: 200px !important;\n  max-width: 200px !important;\n  max-height: 200px !important;\n}\n\n.inner-img150 {\n  margin: auto;\n  width: 150px !important;\n  height: 150px !important;\n  max-width: 150px !important;\n  max-height: 150px !important;\n}\n\n.inner-img300 {\n  margin: auto;\n  width: 300px !important;\n  height: 300px !important;\n  max-width: 300px !important;\n  max-height: 300px !important;\n}\n\n.searchFormQoute {\n  background: #F9F9F9;\n  border: 1px solid #FBFBFB;\n  box-sizing: border-box;\n  border-radius: 5px;\n  height: 42px;\n}\n\nimg {\n  margin: 0;\n}\n\napp-aspect-ratio .content-wrapper {\n  width: 100px !important;\n  height: 100px !important;\n}\n\n.imgHolderRec {\n  width: 400px;\n  height: 200px;\n  max-width: 400px;\n  max-height: 200px;\n}\n\n.img_slider {\n  height: 200px;\n  width: 200px !important;\n}\n\n.img_sliderHome {\n  height: 200px;\n  width: 400px !important;\n}\n\n.swiper_container {\n  height: 100% !important;\n  max-height: 80% !important;\n  width: 100% !important;\n}\n\nion-slides {\n  --bullet-background: #343434;\n  --bullet-background-active: #00733F;\n}\n\n.gridSubCat {\n  padding: 0px;\n}\n\n.gridSubCatHeader {\n  color: var(--ion-color-primary);\n  padding: 0;\n}\n\n.borderRight {\n  border-right: solid 1px #c8c6c6;\n}\n\n.borderBottom {\n  border-bottom: solid 1px #c8c6c6;\n}\n\n.home_ad {\n  padding: 0px;\n}\n\n.home_ad ion-row {\n  padding: 0px;\n}\n\n.home_ad ion-row ion-col {\n  padding: 0px;\n}\n\n.brand {\n  background: #ffffff;\n  margin: auto;\n  width: 120px !important;\n  height: 40px !important;\n  max-width: 120px !important;\n  max-height: 40px !important;\n  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  max-width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcUHJvamVjdFxcQW5ndWxhclxcZWFzeW1hbGxfbm9ub2RlICgxKVxcZWFzeW1hbGxfbm9ub2RlL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFFQSxpQkFBQTtBQ0FGOztBREVBO0VBQ0UsMkJBQUE7QUNDRjs7QURDQTtFQUNBLGtCQUFBO0FDRUE7O0FEQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDR0E7O0FEREE7RUFDRSxZQUFBO0FDSUY7O0FEREE7RUFFRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNHRjs7QURBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0dBOztBREFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0dKOztBRERFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0dKOztBREFFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNFSjs7QURDRTtFQUNFLGNBQUE7QUNDSjs7QURFQTtFQUNBLGtCQUFBO0FDQ0E7O0FEQ0E7RUFDRSxVQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ0VKOztBREFBO0VBQ0UsVUFBQTtBQ0dGOztBRERBO0VBQ0Usc0NBQUE7VUFBQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDSUY7O0FEREE7RUFDRSxzQ0FBQTtVQUFBLDBCQUFBO0VBRUEsa0JBQUE7RUFDQSxXQUFBO0FDR0Y7O0FEQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNHQTs7QUREQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ0lBOztBREZBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDS0E7O0FESEE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNNQTs7QURKQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ09GOztBRExBO0VBRUksU0FBQTtBQ09KOztBREpBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQ09BOztBREpBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDTUE7O0FESkE7RUFDRSxhQUFBO0VBQWEsdUJBQUE7QUNRZjs7QURGQTtFQUNFLGFBQUE7RUFBYSx1QkFBQTtBQ01mOztBREZDO0VBQ0MsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0FDS0Y7O0FERkE7RUFDUSw0QkFBQTtFQUNBLG1DQUFBO0FDS1I7O0FESEE7RUFDQSxZQUFBO0FDTUE7O0FESkE7RUFFQywrQkFBQTtFQUNBLFVBQUE7QUNNRDs7QURKQTtFQUNJLCtCQUFBO0FDT0o7O0FETEE7RUFDSSxnQ0FBQTtBQ1FKOztBRE5BO0VBQ0UsWUFBQTtBQ1NGOztBRFJFO0VBQ0UsWUFBQTtBQ1VKOztBRFRJO0VBQ0UsWUFBQTtBQ1dOOztBRFBBO0VBQ0UsbUJBQUE7RUFJQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFFQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0MsY0FBQTtBQ01IIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWV3U2VsbGVyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuLy8gICBwYWRkaW5nOiA1cHggMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4udGV4dC1sZWZ0e1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG4uc2xpZGVTaG93e1xudGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmltZ0hvbGRlcntcbm1hcmdpbjogYXV0bztcbndpZHRoOiAyMDBweDtcbmhlaWdodDogMjAwcHg7XG5tYXgtd2lkdGg6IDIwMHB4O1xubWF4LWhlaWdodDogMjAwcHg7XG59XG4uY2F0TWVudXtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2lyY2xlVXB7XG4gIFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTAxcHg7XG4gIHJpZ2h0OiAxNHB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIHdpZHRoOiA1NnB4O1xuXG59XG4uY2F0VGV4dHtcbmZvbnQtZmFtaWx5OiAnUmVkSGF0RGlzcGxheSc7XG5mb250LXN0eWxlOiBub3JtYWw7XG5mb250LXdlaWdodDogbm9ybWFsO1xuZm9udC1zaXplOiAxMHB4O1xubGluZS1oZWlnaHQ6IDEycHg7XG5sZXR0ZXItc3BhY2luZzogMC4wNGVtO1xuY29sb3I6ICMzNDM0MzQ7XG59XG5pb24taWNvbiB7XG4gICYueHgge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBzdHJva2Utd2lkdGg6MTBweDtcbiAgfVxuICAmLnh4eCB7XG4gICAgd2lkdGg6NDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgc3Ryb2tlLXdpZHRoOjEwcHg7XG4gIH1cblxuICAmLnh4eHgge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG5cbiAgJi5wdXJwbGUge1xuICAgIGNvbG9yOiAjQUQ0OUQyO1xuICB9XG59XG4uYmFkZ2VfcGFyZW50e1xucG9zaXRpb246IGFic29sdXRlO1xufVxuLmJhZGdle1xuICB6LWluZGV4OiAyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6LTIwcHg7XG59XG4ucHJvZHVjdHNFbXRweUNvbHtcbiAgcGFkZGluZzowOyBcbn1cbi5wcm9kdWN0c0NvbHtcbiAgZmxleDogZmxleC1ncm93ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogc29saWQgMXB4ICNkZmRmZGY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA1cHg7ICBcbiAgLy8gcGFkZGluZzowOyBcbn1cbi5wcm9kdWN0c0NvbE5vQm9yZGVye1xuICBmbGV4OiBmbGV4LWdyb3cgIWltcG9ydGFudDtcbiAgLy8gYm9yZGVyOiBzb2xpZCAxcHggI2M4YzZjNjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDVweDsgIFxuICAvLyBwYWRkaW5nOjA7IFxufVxuLmlubmVyLWltZ3tcbm1hcmdpbjogYXV0bztcbndpZHRoOiAxMDBweCFpbXBvcnRhbnQ7XG5oZWlnaHQ6IDEwMHB4IWltcG9ydGFudDtcbm1heC13aWR0aDogMTAwcHghaW1wb3J0YW50O1xubWF4LWhlaWdodDogMTAwcHghaW1wb3J0YW50O1xufVxuLmlubmVyLWltZzIwMHtcbm1hcmdpbjogYXV0bztcbndpZHRoOiAyMDBweCFpbXBvcnRhbnQ7XG5oZWlnaHQ6IDIwMHB4IWltcG9ydGFudDtcbm1heC13aWR0aDogMjAwcHghaW1wb3J0YW50O1xubWF4LWhlaWdodDogMjAwcHghaW1wb3J0YW50O1xufVxuLmlubmVyLWltZzE1MHtcbm1hcmdpbjogYXV0bztcbndpZHRoOiAxNTBweCFpbXBvcnRhbnQ7XG5oZWlnaHQ6IDE1MHB4IWltcG9ydGFudDtcbm1heC13aWR0aDogMTUwcHghaW1wb3J0YW50O1xubWF4LWhlaWdodDogMTUwcHghaW1wb3J0YW50O1xufVxuLmlubmVyLWltZzMwMHtcbm1hcmdpbjogYXV0bztcbndpZHRoOiAzMDBweCFpbXBvcnRhbnQ7XG5oZWlnaHQ6IDMwMHB4IWltcG9ydGFudDtcbm1heC13aWR0aDogMzAwcHghaW1wb3J0YW50O1xubWF4LWhlaWdodDogMzAwcHghaW1wb3J0YW50O1xufVxuLnNlYXJjaEZvcm1Rb3V0ZXtcbiAgYmFja2dyb3VuZDogI0Y5RjlGOTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZCRkJGQjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDQycHg7XG59XG5pbWd7XG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMDtcbn1cbmFwcC1hc3BlY3QtcmF0aW97XG4uY29udGVudC13cmFwcGVyIHtcbndpZHRoOiAxMDBweCFpbXBvcnRhbnQ7XG5oZWlnaHQ6IDEwMHB4IWltcG9ydGFudDtcbn1cbn1cbi5pbWdIb2xkZXJSZWN7XG4vLyBtYXJnaW46IGF1dG87XG53aWR0aDogNDAwcHg7XG5oZWlnaHQ6IDIwMHB4O1xubWF4LXdpZHRoOiA0MDBweDtcbm1heC1oZWlnaHQ6IDIwMHB4O1xufVxuLmltZ19zbGlkZXJ7XG4gIGhlaWdodDoyMDBweDt3aWR0aDoyMDBweCFpbXBvcnRhbnQ7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAvLyBoZWlnaHQ6IDEyLjVyZW0gIWltcG9ydGFudDtcbiAgLy8gd2lkdGg6IDI1LjByZW0gIWltcG9ydGFudDtcbiAgLy8gbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5pbWdfc2xpZGVySG9tZXtcbiAgaGVpZ2h0OjIwMHB4O3dpZHRoOjQwMHB4IWltcG9ydGFudDtcbiAgLy8gaGVpZ2h0OiAxMi41cmVtICFpbXBvcnRhbnQ7XG4gIC8vIHdpZHRoOiAyNS4wcmVtICFpbXBvcnRhbnQ7XG4gIC8vIG1hcmdpbi1ib3R0b206IDIwcHg7XG59LnN3aXBlcl9jb250YWluZXJ7XG4gIGhlaWdodDoxMDAlICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6ODAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcbiAgLy8gbWFyZ2luOjJyZW07XG59XG5pb24tc2xpZGVzIHtcbiAgICAgICAgLS1idWxsZXQtYmFja2dyb3VuZDogIzM0MzQzNDtcbiAgICAgICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICMwMDczM0Y7XG59XG4uZ3JpZFN1YkNhdHtcbnBhZGRpbmc6IDBweDtcbn1cbi5ncmlkU3ViQ2F0SGVhZGVye1xuLy8gIGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsgIFxuIGNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiBwYWRkaW5nOiAwO1xufVxuLmJvcmRlclJpZ2h0e1xuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNjOGM2YzY7XG59XG4uYm9yZGVyQm90dG9te1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjYzhjNmM2O1xufVxuLmhvbWVfYWR7XG4gIHBhZGRpbmc6IDBweDtcbiAgaW9uLXJvd3tcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgaW9uLWNvbHtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG4gIH1cbn1cbi5icmFuZHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcblx0Ly8gbWFyZ2luOiAzcHggO1xuXHQvLyBwYWRkaW5nOiA1cHggNXB4O1xuICAvLyBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEyMHB4IWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4IWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxMjBweCFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDQwcHghaW1wb3J0YW50O1xuXG4gIGJveC1zaGFkb3c6IDBweCAxcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgXHRtYXgtd2lkdGg6IDgwJTtcblx0Ly8gaW1nIHtcblx0Ly8gXHRoZWlnaHQ6IGF1dG87XG5cdC8vIFx0bWF4LXdpZHRoOiAxMDAlO1xuXHQvLyBcdC8vIGJvcmRlci1yYWRpdXM6IDVweDtcblx0Ly8gfVxufVxuIiwiLnZpZXdTZWxsZXIge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udGV4dC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4uc2xpZGVTaG93IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1nSG9sZGVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xufVxuXG4uY2F0TWVudSB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNpcmNsZVVwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwMXB4O1xuICByaWdodDogMTRweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICB3aWR0aDogNTZweDtcbn1cblxuLmNhdFRleHQge1xuICBmb250LWZhbWlseTogXCJSZWRIYXREaXNwbGF5XCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcbiAgY29sb3I6ICMzNDM0MzQ7XG59XG5cbmlvbi1pY29uLnh4IHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgc3Ryb2tlLXdpZHRoOiAxMHB4O1xufVxuaW9uLWljb24ueHh4IHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgc3Ryb2tlLXdpZHRoOiAxMHB4O1xufVxuaW9uLWljb24ueHh4eCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbmlvbi1pY29uLnB1cnBsZSB7XG4gIGNvbG9yOiAjQUQ0OUQyO1xufVxuXG4uYmFkZ2VfcGFyZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYmFkZ2Uge1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IC0yMHB4O1xufVxuXG4ucHJvZHVjdHNFbXRweUNvbCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5wcm9kdWN0c0NvbCB7XG4gIGZsZXg6IGZsZXgtZ3JvdyAhaW1wb3J0YW50O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZGZkZmRmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4ucHJvZHVjdHNDb2xOb0JvcmRlciB7XG4gIGZsZXg6IGZsZXgtZ3JvdyAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uaW5uZXItaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pbm5lci1pbWcyMDAge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMjAwcHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMjAwcHggIWltcG9ydGFudDtcbn1cblxuLmlubmVyLWltZzE1MCB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTUwcHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xufVxuXG4uaW5uZXItaW1nMzAwIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2hGb3JtUW91dGUge1xuICBiYWNrZ3JvdW5kOiAjRjlGOUY5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkJGQkZCO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGhlaWdodDogNDJweDtcbn1cblxuaW1nIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5hcHAtYXNwZWN0LXJhdGlvIC5jb250ZW50LXdyYXBwZXIge1xuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xufVxuXG4uaW1nSG9sZGVyUmVjIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbn1cblxuLmltZ19zbGlkZXIge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcbn1cblxuLmltZ19zbGlkZXJIb21lIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zd2lwZXJfY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDgwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogIzM0MzQzNDtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICMwMDczM0Y7XG59XG5cbi5ncmlkU3ViQ2F0IHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uZ3JpZFN1YkNhdEhlYWRlciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5ib3JkZXJSaWdodCB7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNjOGM2YzY7XG59XG5cbi5ib3JkZXJCb3R0b20ge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2M4YzZjNjtcbn1cblxuLmhvbWVfYWQge1xuICBwYWRkaW5nOiAwcHg7XG59XG4uaG9tZV9hZCBpb24tcm93IHtcbiAgcGFkZGluZzogMHB4O1xufVxuLmhvbWVfYWQgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uYnJhbmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMjBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxMjBweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWF4LXdpZHRoOiA4MCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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
    /* harmony import */


    var src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/http-services/product.service */
    "./src/app/core/http-services/product.service.ts");
    /* harmony import */


    var src_app_core_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/utility.service */
    "./src/app/core/utility.service.ts");
    /* harmony import */


    var src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/core/authentication/authentication.service */
    "./src/app/core/authentication/authentication.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    let HomePage = class HomePage {
      constructor(categoryService, productService, util, auth, router) {
        // this.auth.currentUser.subscribe((data) => {
        //   if (data) {
        //     // console.log('auth.currentUser: ' + JSON.stringify(data))
        //     // this.showWish = true;
        //   }
        // });
        this.categoryService = categoryService;
        this.productService = productService;
        this.util = util;
        this.auth = auth;
        this.router = router; // @ViewChild('mySlider', { static: true }) slides: IonSlides;
        ///Inputs

        this.title = '';
        this.longSearch = true;
        this.showBackButton = false;
        this.loading = false;
        this.showSearch = true; ////////////////////

        this.isDefaultAddress = true;
        this.isSearch = false;
        this.showWish = false;
        this.Slides = [];
        this.featuredProducts = [];
        this.topProds = [];
        this.dailyProds = [];
        this.recommendedProducts = []; // recentlyViewedProducts: ProductListModel[] = [];

        this.lastestDeals = [];
        this.level1_cats = [];
        this.level1_prods = [];
        this.level2_cats = [];
        this.level2_prods = [];
        this.level3_cats = [];
        this.level3_prods = [];
        this.slideOpts = {
          initialSlide: 2,
          slidesPerView: 1.6,
          grabCursor: true,
          autoplay: true,
          speed: 600,
          spaceBetween: 2,
          centeredSlides: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }; //show scroll button for end of page

        this.showUpArrow = false; // this.util.getSlides().subscribe((val: any) => {
        // console.log('am here', val);
        //   this.Slides = val.data;
        //   console.log('this.Slides: ' + JSON.stringify(this.Slides));
        // });
        // this.util.getBrands().subscribe((val: any) => {
        //   this.Brands = val.data;
        //   this.Brands.sort(this.compare);
        // });

        this.util.getLevel1Adds().subscribe(val => {
          this.level1Ads = val.data;
          this.level1Ads.sort(this.compare); // console.log('level1Ads: ' + JSON.stringify(this.level1Ads));
        });
        this.util.getLevel2Adds().subscribe(val => {
          this.level2Ads = val.data;
          this.level2Ads.sort(this.compare); // console.log('level2Ads: ' + JSON.stringify(this.level2Ads))
        });
      }

      ngOnInit() {
        this.getTopProducts();
        this.getDailyDealsProducts();
        this.getLatestDealsProducts();
        this.getRecommendedProducts();
        this.getFeaturedProducts();
        this.getFeaturedCatgeories();
        this.getLevel1Cats();
        this.getLevel2Cats();
        this.getLevel3Cats();
        this.util.getSlides().subscribe(val => {
          // console.log('am here', val);
          // console.log('this.Slides: ' + JSON.stringify(val));
          this.Slides = val.data;
        });
      }

      logScrollEnd() {
        this.showUpArrow = true;
        console.log('scroll end');
      }

      logScrollStart() {
        console.log('start scrolling : ->');
      }

      logScrolling($event) {
        console.log('scrolling event', $event.detail);
      }

      scrollToTop() {
        this.content.scrollToTop(400);
      }

      compare(a, b) {
        const bandA = a.position;
        const bandB = b.position;
        let comparison = 0;

        if (bandA > bandB) {
          comparison = 1;
        } else if (bandA < bandB) {
          comparison = -1;
        }

        return comparison;
      } // viewProduct(prod: any) {
      //   // console.log("Get Prod: "+JSON.stringify(prod))
      //   let navigationExtras: NavigationExtras = {
      //     state: {
      //       prod: prod,
      //     },
      //   };
      //   this.router.navigate(['products'], navigationExtras);
      // }


      viewCategory(catLink) {
        let id = catLink.substr(catLink.lastIndexOf('/') + 1);
        this.router.navigate(["app/categories/".concat(id)]);
      }

      viewSubCategory(id, title) {
        localStorage.SetTitle = title;
        this.router.navigate(["sub-category/".concat(id)]);
      }

      getTopProducts() {
        this.util.getDynamicProds('top-products').subscribe(res => {
          res.data.forEach(e => {
            let prod_id = e.value;

            if (prod_id !== null) {
              this.productService.getProductDetail(prod_id).subscribe(prod => {
                if (prod.data) {
                  this.topProds.push(prod.data);
                  console.log('this.topProds: ' + JSON.stringify(this.topProds));
                } else {
                  return;
                }
              });
            }
          });
        });
      }

      getFeaturedProducts() {
        this.util.getDynamicProds('all').subscribe(res => {
          res.data.forEach(e => {
            let prod_id = e.value;

            if (prod_id !== null) {
              this.productService.getProductDetail(prod_id).subscribe(prod => {
                this.featuredProducts.push(prod.data);
              });
            }
          });
        });
      }

      getRecommendedProducts() {
        this.util.getDynamicProds('recommended-products').subscribe(res => {
          res.data.forEach(e => {
            let prod_id = e.value;

            if (prod_id !== null) {
              this.productService.getProductDetail(prod_id).subscribe(prod => {
                if (prod.data) {
                  this.recommendedProducts.push(prod.data);
                } else {
                  return;
                }
              });
            }
          });
        });
      }

      getDailyDealsProducts() {
        this.dailyProds = [];
        this.util.getDynamicProds('daily-deals').subscribe(res => {
          res.data.forEach(e => {
            let prod_id = e.value;

            if (prod_id !== null) {
              this.productService.getProductDetail(prod_id).subscribe(prod => {
                if (prod.data) {
                  this.dailyProds.push(prod.data);
                } else {
                  return;
                }
              });
            }
          });
        });
      }

      getLatestDealsProducts() {
        this.util.getDynamicProds('latest-deals').subscribe(res => {
          res.data.forEach(e => {
            let prod_id = e.value;

            if (prod_id !== null) {
              this.productService.getProductDetail(prod_id).subscribe(prod => {
                if (prod.data) {
                  this.lastestDeals.push(prod.data);
                } else {
                  return;
                }
              });
            }
          });
        });
      }

      getFeaturedCatgeories() {
        this.categoryService.getFeaturedCategories().subscribe(data => {
          this.categories = data.data; // console.log(
          //   'getFeaturedCatgeories: ' + JSON.stringify(this.categories)
          // );
        }, err => {
          console.error(err);
        });
      }

      getLevel1Cats() {
        this.level1_cats = [{
          value: '',
          imageUrl: ''
        }];
        let category;
        this.categoryService.getlevelCategories('level1-cats').subscribe(data => {
          category = data.data;
          category.forEach(cats => {
            this.level1_cats[0].value = cats.value;
            cats.body.forEach(body => {
              this.productService.getProductDetail(body.value).subscribe(data => {
                if (data.data) this.level1_prods.push(data.data);
              });
            });
            this.categoryService.getCategoriesById(cats.value).subscribe(data => {
              this.level1_cats[0].imgUrl = data.data.imgUrl;
            });
          });
        });
      }

      getLevel2Cats() {
        this.level2_cats = [{
          value: '',
          imageUrl: ''
        }];
        let category;
        this.categoryService.getlevelCategories('level2-cats').subscribe(data => {
          category = data.data;
          category.forEach(cats => {
            this.level2_cats[0].value = cats.value;
            cats.body.forEach(body => {
              this.productService.getProductDetail(body.value).subscribe(data => {
                if (data.data) this.level2_prods.push(data.data);
              });
            });
            this.categoryService.getCategoriesById(cats.value).subscribe(data => {
              this.level2_cats[0].imgUrl = data.data.imgUrl;
            });
          });
        });
      }

      getLevel3Cats() {
        this.level3_cats = [{
          value: '',
          imageUrl: ''
        }];
        let category;
        let categoryId;
        this.categoryService.getlevelCategories('level3-cats').subscribe(data => {
          category = data.data;
          category.forEach(cats => {
            this.level3_cats[0].value = cats.value;
            cats.body.forEach(body => {
              this.productService.getProductDetail(body.value).subscribe(data => {
                if (data.data) this.level3_prods.push(data.data);
              });
            });
            this.categoryService.getCategoriesById(cats.value).subscribe(data => {
              this.level3_cats[0].imgUrl = data.data.imgUrl;
            });
          });
        });
      }

      addToCart() {
        console.log('addToCart');
      }

      viewAllSubCats() {
        this.router.navigate(['/sub-category']);
      }

      loadSearchModal() {
        console.log('loadSearchModal');
        this.isSearch = true;
      }

      removeSearchModal() {
        console.log('removeSearchModal');
        this.isSearch = false;
      }

    };

    HomePage.ctorParameters = () => [{
      type: src_app_core_http_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]
    }, {
      type: src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
    }, {
      type: src_app_core_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"]
    }, {
      type: src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"])], HomePage.prototype, "content", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_http_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"], src_app_core_http_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], src_app_core_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"], src_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map