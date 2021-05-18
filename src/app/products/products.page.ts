import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastController, IonContent } from "@ionic/angular";
import { NativeStorage } from "@ionic-native/native-storage/ngx";
import { ProductService } from "src/app/core/http-services/product.service";
import {
  ProductListModel,
  ProductCategoryModel,
  CartItems,
} from "src/app/shared/models/product.model";
import { StoreListModel } from "src/app/shared/models/store.model";
import { StoreService } from "src/app/core/http-services/store.service";
import { OrderService } from "src/app/core/http-services/order.service";
import { AuthenticationService } from "src/app/core/authentication/authentication.service";
// import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: "app-products",
  templateUrl: "./products.page.html",
  styleUrls: ["./products.page.scss"],
})
export class ProductsPage implements OnInit {
  @ViewChild(IonContent, { static: false }) ionContent: IonContent;
  ///Inputs
  title: string = "Details";
  longSearch: boolean = false;
  showBackButton: boolean = true;
  loading: boolean = false;
  showSearch: boolean = true;
  ////////////////////
  products: any[];
  cartProducts: any;
  product: any;
  prod: CartItems;
  store: StoreListModel;
  deliveryFee: number = 1500;
  productCategories: ProductCategoryModel[];
  recommendedProducts: ProductListModel[];
  recentlyViewedProducts: ProductListModel[] = [];
  starsCount: number = 5;
  inCart: boolean = false;
  currentUser: any;
  prod_data: any;
  wishList = new Array();

  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 1.8,
    grabCursor: true,
    autoplay: true,
    speed: 600,
    spaceBetween: 2,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  slideOpts = {
    slidesPerView: 3,
    grabCursor: true,
    autoplay: true,
    speed: 600,
    cubeEffect: {
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    on: {
      beforeInit: function () {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}cube`);
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: false,
          virtualTranslate: true,
        };

        this.params = Object.assign(this.params, overwriteParams);
        this.originalParams = Object.assign(
          this.originalParams,
          overwriteParams
        );
      },
      setTranslate: function () {
        const swiper = this;
        const {
          $el,
          $wrapperEl,
          slides,
          width: swiperWidth,
          height: swiperHeight,
          rtlTranslate: rtl,
          size: swiperSize,
        } = swiper;
        const params = swiper.params.cubeEffect;
        const isHorizontal = swiper.isHorizontal();
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        let wrapperRotate = 0;
        let $cubeShadowEl;
        if (params.shadow) {
          if (isHorizontal) {
            $cubeShadowEl = $wrapperEl.find(".swiper-cube-shadow");
            if ($cubeShadowEl.length === 0) {
              $cubeShadowEl = swiper.$(
                '<div class="swiper-cube-shadow"></div>'
              );
              $wrapperEl.append($cubeShadowEl);
            }
            $cubeShadowEl.css({ height: `${swiperWidth}px` });
          } else {
            $cubeShadowEl = $el.find(".swiper-cube-shadow");
            if ($cubeShadowEl.length === 0) {
              $cubeShadowEl = swiper.$(
                '<div class="swiper-cube-shadow"></div>'
              );
              $el.append($cubeShadowEl);
            }
          }
        }

        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          let slideIndex = i;
          if (isVirtual) {
            slideIndex = parseInt($slideEl.attr("data-swiper-slide-index"), 10);
          }
          let slideAngle = slideIndex * 90;
          let round = Math.floor(slideAngle / 360);
          if (rtl) {
            slideAngle = -slideAngle;
            round = Math.floor(-slideAngle / 360);
          }
          const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          let tx = 0;
          let ty = 0;
          let tz = 0;
          if (slideIndex % 4 === 0) {
            tx = -round * 4 * swiperSize;
            tz = 0;
          } else if ((slideIndex - 1) % 4 === 0) {
            tx = 0;
            tz = -round * 4 * swiperSize;
          } else if ((slideIndex - 2) % 4 === 0) {
            tx = swiperSize + round * 4 * swiperSize;
            tz = swiperSize;
          } else if ((slideIndex - 3) % 4 === 0) {
            tx = -swiperSize;
            tz = 3 * swiperSize + swiperSize * 4 * round;
          }
          if (rtl) {
            tx = -tx;
          }

          if (!isHorizontal) {
            ty = tx;
            tx = 0;
          }

          const transform$$1 = `rotateX(${
            isHorizontal ? 0 : -slideAngle
          }deg) rotateY(${
            isHorizontal ? slideAngle : 0
          }deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
          if (progress <= 1 && progress > -1) {
            wrapperRotate = slideIndex * 90 + progress * 90;
            if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
          }
          $slideEl.transform(transform$$1);
          if (params.slideShadows) {
            // Set shadows
            let shadowBefore = isHorizontal
              ? $slideEl.find(".swiper-slide-shadow-left")
              : $slideEl.find(".swiper-slide-shadow-top");
            let shadowAfter = isHorizontal
              ? $slideEl.find(".swiper-slide-shadow-right")
              : $slideEl.find(".swiper-slide-shadow-bottom");
            if (shadowBefore.length === 0) {
              shadowBefore = swiper.$(
                `<div class="swiper-slide-shadow-${
                  isHorizontal ? "left" : "top"
                }"></div>`
              );
              $slideEl.append(shadowBefore);
            }
            if (shadowAfter.length === 0) {
              shadowAfter = swiper.$(
                `<div class="swiper-slide-shadow-${
                  isHorizontal ? "right" : "bottom"
                }"></div>`
              );
              $slideEl.append(shadowAfter);
            }
            if (shadowBefore.length)
              shadowBefore[0].style.opacity = Math.max(-progress, 0);
            if (shadowAfter.length)
              shadowAfter[0].style.opacity = Math.max(progress, 0);
          }
        }
        $wrapperEl.css({
          "-webkit-transform-origin": `50% 50% -${swiperSize / 2}px`,
          "-moz-transform-origin": `50% 50% -${swiperSize / 2}px`,
          "-ms-transform-origin": `50% 50% -${swiperSize / 2}px`,
          "transform-origin": `50% 50% -${swiperSize / 2}px`,
        });

        if (params.shadow) {
          if (isHorizontal) {
            $cubeShadowEl.transform(
              `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${
                -swiperWidth / 2
              }px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`
            );
          } else {
            const shadowAngle =
              Math.abs(wrapperRotate) -
              Math.floor(Math.abs(wrapperRotate) / 90) * 90;
            const multiplier =
              1.5 -
              (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2 +
                Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2);
            const scale1 = params.shadowScale;
            const scale2 = params.shadowScale / multiplier;
            const offset$$1 = params.shadowOffset;
            $cubeShadowEl.transform(
              `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${
                swiperHeight / 2 + offset$$1
              }px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`
            );
          }
        }

        const zFactor =
          swiper.browser.isSafari || swiper.browser.isUiWebView
            ? -swiperSize / 2
            : 0;
        $wrapperEl.transform(
          `translate3d(0px,0,${zFactor}px) rotateX(${
            swiper.isHorizontal() ? 0 : wrapperRotate
          }deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`
        );
      },
      setTransition: function (duration) {
        const swiper = this;
        const { $el, slides } = swiper;
        slides
          .transition(duration)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(duration);
        if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
          $el.find(".swiper-cube-shadow").transition(duration);
        }
      },
    },
  };
  constructor(
    private toastController: ToastController,
    private productService: ProductService,
    public router: Router,
    private route: ActivatedRoute,
    private nativeStorage: NativeStorage,
    private storeService: StoreService,
    private orderService: OrderService,
    private authService: AuthenticationService
  ) // private socialSharing: SocialSharing
  {
    this.route.params.subscribe((params) => {
      if (params.id) {
        console.log("params.id: " + JSON.stringify(params.id));
        this.loading = true;
        this.productService
          .getProductDetail(params.id)
          .subscribe((prod: any) => {
            if (prod.data) {
              this.prod_data = prod.data;
              this.loading = false;
              // console.log ( 'this.Product Detail: ' + JSON.stringify(this.prod_data));
              // this.recentlyViewedProducts.indexOf(this.prod_data._id) == -1
              this.recentlyViewedProducts =
                this.productService.getLocalRecentlyViewedProducts()
                  ? this.productService.getLocalRecentlyViewedProducts()
                  : [];
              // console.log(
              //   'recentlyViewedProducts: ' +
              //     JSON.stringify(this.recentlyViewedProducts)
              // );
              if (this.recentlyViewedProducts.length > 0) {
                if (
                  !this.recentlyViewedProducts.some((r) =>
                    r._id.includes(this.prod_data._id)
                  )
                ) {
                  let arr_prod = this.recentlyViewedProducts;
                  arr_prod.push(this.prod_data);
                  this.productService.setLocalRecentlyViewedProducts(
                    JSON.stringify(arr_prod)
                  );
                } else {
                }
              } else {
                let arr_prod = new Array();
                arr_prod.push(this.prod_data);
                this.productService.setLocalRecentlyViewedProducts(
                  JSON.stringify(arr_prod)
                );
              }
              this.getSimilarProducts();
            }
          });
      } else {
        //Bounce the person
      }
    });
    this.nativeStorage.getItem("currentUser").then((x) => {
      this.currentUser = x;
      this.nativeStorage.getItem("WishList").then((x) => {
        this.wishList = x;
      });
    });
  }
  ngOnInit() {}
  viewProduct(prod: any) {
    this.prod_data = null;
    this.prod_data = prod;
    this.prod_data["productId"] = this.prod_data._id;
    this.ionContent.scrollToTop(300);
  }
  async presentToast(
    header: string,
    msg: string,
    duration: number,
    color: string
  ) {
    const toast = await this.toastController.create({
      header: header,
      position: "bottom",
      message: msg,
      duration: duration,
      // cssClass: 'custom-toast-class',
      color: color,
    });
    toast.present();
  }
  addToCart(prod: ProductListModel) {
    this.orderService.addToCart(this.currentUser.token, prod).subscribe(
      (data) => {
        console.log("addToCart Success: " + JSON.stringify(data));
        this.productService.getNumberofItemsInCart(data.data);
        this.presentToast(
          "GREAT!",
          "Product successfully added to your cart ",
          2000,
          "success"
        );
        // this.toastr.success("Item successfuly added to cart");
      },
      (err) => {
        console.log("addToCart Error: " + JSON.stringify(err));
        this.presentToast(
          "OOPS!",
          "An error occurred, Please try again later ",
          2000,
          "error"
        );
      }
    );
  }
  addToWishlist(prod: any) {
    if (this.currentUser) {
      this.loading = true;

      if (this.checkIfProdInWishList(prod)) {
        this.removeFromWishlist(prod);
      } else {
        this.orderService
          .addToWishlist(this.currentUser.token, {
            productId: prod._id,
            quantity: 1,
          })
          .subscribe(
            (data) => {
              console.log("Add to Wishlist Result: " + JSON.stringify(data));
              if (!data.error) {
                this.presentToast(
                  "GREAT!",
                  "Product successfully added to your wishlist ",
                  2000,
                  "success"
                );
                this.wishList = data.data;
                this.nativeStorage.setItem("WishList", this.wishList);
                this.loading = false;
              } else {
                this.loading = false;
                this.presentToast(
                  "OOPS!",
                  "An error occurred, Please try again later ",
                  2000,
                  "danger"
                );
              }
            },
            (err) => {
              console.error(err);
              this.loading = false;
              this.presentToast(
                "OOPS!",
                "An error occurred, Please try again later ",
                2000,
                "danger"
              );
            }
          );
      }
    } else {
      this.presentToast(
        "ALMOST THERE!",
        "Please sign in to add the product to your wishlist ",
        2000,
        "warning"
      );
      this.router.navigate(["/sign-in"]);
    }
  }
  removeFromWishlist(prod) {
    this.orderService
      .removeFromWishlist(this.currentUser.token, prod._id)
      .subscribe(
        (data) => {
          // console.log('Add to Wishlist Result: ' + JSON.stringify(data));
          this.wishList.forEach((w) => {
            if (w.productId === prod._id) {
              this.wishList.splice(this.wishList.indexOf(w.productId), 1);
              this.nativeStorage.setItem("WishList", this.wishList);
            }
          });
          // console.log('Wishlist delete data:' + this.wishList.length);
          // this.checkIfProdInWishList(prod);
          this.loading = false;
          this.presentToast(
            "GREAT!",
            "Product successfully removed to your wishlist ",
            2000,
            "success"
          );
        },
        (err) => {
          console.error(err);
          // this.toastr.error(err.errors.join(","), "Error!");
        }
      );
  }
  checkIfProdInWishList(prod): boolean {
    return this.wishList.some((x) => x.productId === prod._id);
  }
  // share(prod) {
  //   let name = prod.name.replace(' ', '-');
  //   this.socialSharing
  //     .share(
  //       '<a href="https://afrimartone.ng/view-product/"' +
  //         name +
  //         '>https://afrimartone.ng/view-product/' +
  //         name,
  //       'AfrimartOne Product Referral',
  //       '',
  //       ''
  //     )
  //     .then(() => {})
  //     .catch(() => {
  //       // Error!
  //       this.presentToast(
  //         'ERROR!',
  //         'There was a problem while sharing this product',
  //         2000,
  //         'danger'
  //       );
  //     });
  // }
  getStoreDetail(storeId: string) {
    this.store = undefined;
    this.storeService.getStoreDetail(storeId).subscribe((res) => {
      if (!res.error) {
        this.store = res.data;
      }
    });
  }
  getSimilarProducts() {
    // const id = this.route.snapshot.paramMap.get("id");
    this.productService
      .getSimillarProducts(this.prod_data.id)
      .subscribe((data) => {
        if (data.data.length > 0) {
          this.recommendedProducts = data.data;
          // console.log("recommendedProducts: " + JSON.stringify(this.recommendedProducts));
        }
      });
  }
}
