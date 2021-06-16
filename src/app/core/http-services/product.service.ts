import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import {
  ProductListResponseModel,
  ProductListModel,
  CartItems,
} from 'src/app/shared/models/product.model';
import { map, catchError } from 'rxjs/operators';
import {
  storageNamesEnum,
  getStorageName,
} from 'src/app/shared/models/storage.model';
import { OrderService } from './order.service';
// import { ToastrService } from "ngx-toastr";
import { AuthenticationService } from '../authentication/authentication.service';
import { Endpoint } from '../common/endpoints';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = environment.apiUrl;
  public subTotal: any = 100;
  calSubtotal: any;
  currentSubTotal: any;
  calCartQty: any;
  cartQty: any;

  private _open: any;
  _toggleOpen: any;
  products: CartItems[];

  getcartProducts: any;
  cartProducts: any;

  updateQty: any;
  updatedQtyValue: any;

  sidebarFilter: any;
  togglerSidebar: any;

  wishList: any;
  wishListItem: any;

  constructor(
    // private toastr: ToastrService,
    private http: HttpClient,
    private nativeStorage: NativeStorage,
    private orderService: OrderService,
    private authService: AuthenticationService
  ) {
    this._open = new BehaviorSubject<boolean>(false);
    this._toggleOpen = this._open.asObservable();
    this.sidebarFilter = new BehaviorSubject<any>(null);
    this.togglerSidebar = this.sidebarFilter.asObservable();
    this.calSubtotal = new BehaviorSubject<any>('0');
    this.currentSubTotal = this.calSubtotal.asObservable();
    this.calCartQty = new BehaviorSubject<any>('0');
    this.cartQty = this.calCartQty.asObservable();
    this.updateQty = new BehaviorSubject<any>('1');
    this.updatedQtyValue = this.updateQty.asObservable();
    this.wishList = new BehaviorSubject<any>('');
    this.wishListItem = this.wishList.asObservable();
    this.getcartProducts = new BehaviorSubject<any>('');
    this.cartProducts = this.getcartProducts.asObservable();
    this.orderService.getcartProducts.subscribe((data) => { });

    this.getCartProducts();
  }
  headerSt() {
    return new HttpHeaders({
      channel: 'mobile',
      'Content-Type': 'application/json',
    });
  }
  getCartProducts() {
    console.log(' getCartProducts() called')
    this.nativeStorage.getItem('currentUser').then((data) => {
      if (data) {
        this.orderService.getCart(data.token).subscribe(
          (cartItems: any) => {
            this.getcartProducts.next(cartItems.data);
            this.getNumberofItemsInCart(cartItems.data);
          },
          (err) => {
            this.getcartProducts.next(null);
          }
        );
      } else {
        let cartItems = this.orderService.getLocalCartItems();
        if (cartItems) {
          this.getcartProducts.next(cartItems.data);
          this.getNumberofItemsInCart(cartItems.data);
        }
      }
    });
  }
  toggleSidebar() {
    this._open.next(true);
  }
  sideBarFilter(data) {
    this.sidebarFilter.next(data);
  }
  getProductQty(id) {
    var url = `${this.apiUrl}/products/quantity/${id}`;
    return this.http.get<any>(url, {
      headers: this.headerSt(),
    });
  }
  getWishListItem(token) {
    this.orderService.getWishlist(token).subscribe((data) => {
      this.wishList.next(data);
    });
  }
  prodwhishList(token) {
    this.orderService.getWishlist(token).subscribe((data: any) => {
      data.data.forEach((wish) => {
        this.orderService.addToLocalWishlist(wish.productId);
      });
    });
  }
  updateProduct(token, prodId, quantity) {
    let subtotal = 0;
    this.orderService
      .updateCart(token, { productId: prodId, quantity: quantity })
      .subscribe(
        (data: any) => {
          if (!data.error) {
            data.data.forEach((e) => {
              subtotal += e.quantity * e.unitPrice;
            });
            this.calSubtotal.next(subtotal);
          } else {
            // this.toastr.info(`${data.message}`);
          }
        },
        (err) => {
          // this.toastr.info(`${"please wait check internet connection !!"}`);
          console.error(err);
        }
      );
  }
  subtotal(products) {
    let subtotal = 0;
    products.forEach((prod) => {
      let unitCost = prod.unitPrice * prod.quantity;
      subtotal += parseFloat(unitCost.toString());
    });
    this.calSubtotal.next(subtotal);
  }
  getNumberofItemsInCart(products) {
    let quantity = 0;
    products.forEach((element) => {
      quantity++;
    });
    this.calCartQty.next(quantity);
  }
  logOutCart(count: string) {
    this.calCartQty.next(count);
  }
  searchBar(searchString: string, org:string, size: number = 12,  page: number = 1,) {
    var url = `${Endpoint.PRODUCT.searchProduct}query=${searchString}&organisation=${org}&page=${page}&pageSize=${size}`;
    return this.http.get<any>(url);
  }

  searchBarInfinite(
    searchString: string,
    org:string = 'test-org',
    size: number = 12,
    page: number = 1,
    sort?: string
  ) {
    // var url = `${this.apiUrl}products?name=${searchString}&page=${page}&pageSize=${size}&sort=${sort}`;
    var url = `${Endpoint.PRODUCT.searchProduct}query=${searchString}&organisation=${org}&page=${page}&pageSize=${size}`;
    return this.http.get<any>(url);
  }
  searchProducts(catid: string, searchString: string) {
    if (searchString === '') {
      var url = `${this.apiUrl}products?category=` + catid;
    } else {
      var url = `${this.apiUrl}products?category=` + catid + '&' + searchString;
    }

    return this.http.get<any>(url, {
      headers: this.headerSt(),
    });
  }

  getCategoryProducts(id: string, size: number, page: number) {
    var url = `${this.apiUrl}/products?category=${id}&page=${page}&pageSize=${size}`;
    return this.http.get<ProductListResponseModel>(url, {
      headers: this.headerSt(),
    });
  }
  
  getCategoryProductsInfinite(
    id: string,
    size: number = 10,
    page: number = 1,
    sort?: string
  ) {
    var url = `${Endpoint.PRODUCT.productSubCategory}${id}&page=${page}&pageSize=${size}`;
    console.log('url ::', url);
    return this.http.get<ProductListResponseModel>(url).pipe(
        map((data) => {
          return data;
        })
      );
  }
  getProductDetail(id: string) {
    const url = `${Endpoint.PRODUCT.viewProduct}${id}`;
    return this.http.get<any>(url).pipe(map((dt) => {
      // if (!dt.error) {
      //   this.setLocalRecentlyViewedProducts(dt.data);
      // }
      return dt;
    },
      (err) => { }
    ));
  }
  getTopProducts(slug: string) {
    const url = `${Endpoint.PRODUCT.topProduct}?organisation=${slug}`;
    return this.http.get<ProductListResponseModel>(url);
  }
  getTopProd() {
    var url = `${this.apiUrl}resources/top-products`;
    return this.http.get<any>(url, {
      headers: this.headerSt(),
    });
  }
  getLatestDealsProducts(size: number = 8) {
    var url = `${this.apiUrl}products/pupolar?type=latest-deal`;

    return this.http.get<ProductListResponseModel>(url, {
      headers: this.headerSt(),
    });
  }
  getFeaturedProducts(size: number = 8) {
    var url = `${this.apiUrl}products/pupolar?type=day-deal`;

    return this.http.get<ProductListResponseModel>(url, {
      headers: this.headerSt(),
    });
  }
  getRecommendedProducts(size: number = 8) {
    var url = `${this.apiUrl}products/pupolar?type=recommended`;

    return this.http.get<ProductListResponseModel>(url, {
      headers: this.headerSt(),
    });
  }
  getSimillarProducts(productGuid: string, size: number = 8) {
    var url = `${this.apiUrl}products?pagesize=${size}&page=0`;

    return this.http.get<ProductListResponseModel>(url, {
      headers: this.headerSt(),
    });
  }
  setLocalRecentlyViewedProducts(prod: string) {
    localStorage.setItem(
      getStorageName(storageNamesEnum.recentlyViewedProducts),
      prod
    );
  }
  getLocalRecentlyViewedProducts(): ProductListModel[] {
    try {
      var recentlyViewedProducts = JSON.parse(
        localStorage.getItem(
          getStorageName(storageNamesEnum.recentlyViewedProducts)
        )
      );
      return recentlyViewedProducts;
    } catch (error) {
      return null;
    }
  }
}
