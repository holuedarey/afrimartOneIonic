import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductListModel } from 'src/app/shared/models/product.model';
import { RootCategoriesListModel } from 'src/app/shared/models/category.model';
import { CategoryService } from 'src/app/core/http-services/category.service';
import { ProductService } from 'src/app/core/http-services/product.service';
import { UtilityService } from 'src/app/core/utility.service';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  // @ViewChild('mySlider', { static: true }) slides: IonSlides;
  ///Inputs
  title: string = '';
  longSearch: boolean = true;
  showBackButton: boolean = false;
  loading: boolean = false;
  showSearch: boolean = true;
  ////////////////////

  isDefaultAddress = true;
  isSearch: boolean = false;
  showWish: any = false;
  Slides: string[] = [];
  level1Ads: any[];
  level2Ads: any[];
  Brands: any[];
  products: ProductListModel[];
  featuredProducts: ProductListModel[] = [];
  topProds: ProductListModel[] = [];
  dailyProds: ProductListModel[] = [];
  recommendedProducts: ProductListModel[] = [];
  // recentlyViewedProducts: ProductListModel[] = [];
  lastestDeals: ProductListModel[] = [];
  categories: RootCategoriesListModel[];
  level1_cats: any[] = [];
  level1_prods: any[] = [];
  level2_cats: any[] = [];
  level2_prods: any[] = [];
  level3_cats: any[] = [];
  level3_prods: any[] = [];

  slideOpts = {
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
      clickable: true,
    },
  };

  //show scroll button for end of page
  showUpArrow: boolean = false;
  @ViewChild(IonContent, { static: true }) content: IonContent;

  feautureCategoriesImage = [
    '/assets/vectors/icons/test2.svg',
    '/assets/vectors/icons/test3.svg',
    '/assets/vectors/icons/test4.svg',
    '/assets/vectors/icons/test5.svg',

  ]
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private util: UtilityService,
    private auth: AuthenticationService,
    public router: Router
  ) {

    // this.auth.currentUser.subscribe((data) => {
    //   if (data) {
    //     // console.log('auth.currentUser: ' + JSON.stringify(data))
    //     // this.showWish = true;
    //   }
    // });

    // this.util.getSlides().subscribe((val: any) => {
    // console.log('am here', val);

    //   this.Slides = val.data;
    //   console.log('this.Slides: ' + JSON.stringify(this.Slides));
    // });
    // this.util.getBrands().subscribe((val: any) => {
    //   this.Brands = val.data;
    //   this.Brands.sort(this.compare);
    // });
    // this.util.getLevel1Adds().subscribe((val: any) => {
    //   this.level1Ads = val.data;
    //   this.level1Ads.sort(this.compare);
    //   // console.log('level1Ads: ' + JSON.stringify(this.level1Ads));
    // });
    // this.util.getLevel2Adds().subscribe((val: any) => {
    //   this.level2Ads = val.data;
    //   this.level2Ads.sort(this.compare);
    //   // console.log('level2Ads: ' + JSON.stringify(this.level2Ads))
    // });
  }

  ngOnInit() {
    this.getTopProducts();
    this.getFeaturedCatgeories();

    // this.getDailyDealsProducts();
    // this.getLatestDealsProducts();
    // this.getRecommendedProducts();
    // this.getFeaturedProducts();
    // this.getLevel1Cats();
    // this.getLevel2Cats();
    // this.getLevel3Cats();
    this.util.getSlides().subscribe((val: any) => {
      // console.log('am here', val);
      // console.log('this.Slides: ' + JSON.stringify(val));
      this.Slides = val.data;
    });
  }

  logScrollEnd() {
    this.showUpArrow = true;
    // console.log('scroll end');

  }
  logScrollStart() {
    // console.log('start scrolling : ->');

  }
  logScrolling($event) {
    // console.log('scrolling event', $event.detail);

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
  }
  // viewProduct(prod: any) {
  //   // console.log("Get Prod: "+JSON.stringify(prod))
  //   let navigationExtras: NavigationExtras = {
  //     state: {
  //       prod: prod,
  //     },
  //   };
  //   this.router.navigate(['products'], navigationExtras);
  // }
  viewCategory(catLink: any) {
    let id: string = catLink.substr(catLink.lastIndexOf('/') + 1);
    this.router.navigate([`app/categories/${id}`]);
  }
  viewSubCategory(id: any, title: string) {
    localStorage.SetTitle = title;
    this.router.navigate([`sub-category/${id}`]);
  }
  getTopProducts(): any {
    this.productService.getTopProducts('test-org').subscribe((res: any) => {
      console.log('rspo ::', res.data.stores[0].products);
      this.topProds = res.data.stores[0].products;
      // res.data.forEach((e) => {
      //   let prod_id = e.value;
      //   if (prod_id !== null) {
      //     this.productService
      //       .getProductDetail(prod_id)
      //       .subscribe((prod: any) => {
      //         if (prod.data) {
      //           this.topProds.push(prod.data);
      //           console.log('this.topProds: ' + JSON.stringify(this.topProds));
      //         } else {
      //           return;
      //         }
      //       });
      //   }
      // });
    });
  }
  getFeaturedProducts(): any {
    this.util.getDynamicProds('all').subscribe((res: any) => {
      res.data.forEach((e) => {
        let prod_id = e.value;
        if (prod_id !== null) {
          this.productService
            .getProductDetail(prod_id)
            .subscribe((prod: any) => {
              this.featuredProducts.push(prod.data);
            });
        }
      });
    });
  }
  getRecommendedProducts(): any {
    this.util.getDynamicProds('recommended-products').subscribe((res: any) => {
      res.data.forEach((e) => {
        let prod_id = e.value;
        if (prod_id !== null) {
          this.productService
            .getProductDetail(prod_id)
            .subscribe((prod: any) => {
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
  getDailyDealsProducts(): any {
    this.dailyProds = [];
    this.util.getDynamicProds('daily-deals').subscribe((res: any) => {
      res.data.forEach((e) => {
        let prod_id = e.value;
        if (prod_id !== null) {
          this.productService
            .getProductDetail(prod_id)
            .subscribe((prod: any) => {
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
  getLatestDealsProducts(): any {
    this.util.getDynamicProds('latest-deals').subscribe((res: any) => {
      res.data.forEach((e) => {
        let prod_id = e.value;
        if (prod_id !== null) {
          this.productService
            .getProductDetail(prod_id)
            .subscribe((prod: any) => {
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
    this.categoryService.getTopCategories().subscribe(
      (data) => {
        this.categories = data.data.slice(0, 4);
        console.log(
          'getFeaturedCatgeories: ' + JSON.stringify(this.categories)
        );
      },
      (err) => {
        console.error(err);
      }
    );
  }
  getLevel1Cats(): any {
    this.level1_cats = [
      {
        value: '',
        imageUrl: '',
      },
    ];
    let category: any;
    this.categoryService.getlevelCategories('level1-cats').subscribe((data) => {
      category = data.data;
      category.forEach((cats) => {
        this.level1_cats[0].value = cats.value;
        cats.body.forEach((body) => {
          this.productService.getProductDetail(body.value).subscribe((data) => {
            if (data.data) this.level1_prods.push(data.data);
          });
        });
        this.categoryService.getCategoriesById(cats.value).subscribe((data) => {
          this.level1_cats[0].imgUrl = data.data.imgUrl;
        });
      });
    });
  }
  getLevel2Cats(): any {
    this.level2_cats = [
      {
        value: '',
        imageUrl: '',
      },
    ];
    let category: any;
    this.categoryService.getlevelCategories('level2-cats').subscribe((data) => {
      category = data.data;
      category.forEach((cats) => {
        this.level2_cats[0].value = cats.value;
        cats.body.forEach((body) => {
          this.productService.getProductDetail(body.value).subscribe((data) => {
            if (data.data) this.level2_prods.push(data.data);
          });
        });
        this.categoryService.getCategoriesById(cats.value).subscribe((data) => {
          this.level2_cats[0].imgUrl = data.data.imgUrl;
        });
      });
    });
  }
  getLevel3Cats(): any {
    this.level3_cats = [
      {
        value: '',
        imageUrl: '',
      },
    ];
    let category: any;
    let categoryId: any;
    this.categoryService.getlevelCategories('level3-cats').subscribe((data) => {
      category = data.data;
      category.forEach((cats) => {
        this.level3_cats[0].value = cats.value;
        cats.body.forEach((body) => {
          this.productService.getProductDetail(body.value).subscribe((data) => {
            if (data.data) this.level3_prods.push(data.data);
          });
        });
        this.categoryService.getCategoriesById(cats.value).subscribe((data) => {
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
}
