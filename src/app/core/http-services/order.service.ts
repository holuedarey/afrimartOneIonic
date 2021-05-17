import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import {
  CardModel,
  OrderModel,
  ProductListModel,
  CartItems,
  CartResponseModel,
  UpdatePaymentModel,
  CartPaymentDataResponseModel,
  UpdateOrderModel,
  OrdersResponseModel,
} from 'src/app/shared/models/product.model';
import {
  getStorageName,
  storageNamesEnum,
} from 'src/app/shared/models/storage.model';
import { map } from 'rxjs/operators';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';
import { UserDataModel } from 'src/app/shared/models/user.model';
import * as uni from '../../globals/universal';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  sk = uni.k;
  url: string = environment.apiUrl;
  public currWishListItems: Observable<string[]>;
  public currentWishListSubject: BehaviorSubject<string[]>;
  currUser: UserDataModel;
  getcartProducts: BehaviorSubject<any>;
  cartProducts: any;

  headerSetter(token) {
    return new HttpHeaders({
      channel: 'mobile',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
  }
  headerSt() {
    return new HttpHeaders({
      channel: 'mobile',
      'Content-Type': 'application/json',
    });
  }

  constructor(
    private http: HttpClient,
    private nativeStorage: NativeStorage,
    private authService: AuthenticationService
  ) {
    this.currentWishListSubject = new BehaviorSubject<string[]>(
      this.getLocalWishListItems()
    );
    this.currWishListItems = this.currentWishListSubject.asObservable();
    this.currUser = this.authService.currentUserValue();

    this.getcartProducts = new BehaviorSubject<any>('');
    this.cartProducts = this.getcartProducts.asObservable();
    this.runCartEngine();
  }

  runCartEngine() {
    this.nativeStorage.getItem('currentUser').then((data) => {
      if (data) {
        let localCartItems = this.getLocalCartItems();
        if (localCartItems) {
          if (localCartItems.data.length > 0) {
            let localCart = localCartItems.data;

            this.getCart(data.token).subscribe(
              (initialProducts: any) => {
                let count = 0;
                localCart.forEach((local, ind) => {
                  count++;

                  if (initialProducts.data.length !== 0) {
                    initialProducts.data.filter((product) => {
                      if (product) {
                        if (product.productId === localCart[ind].productId) {
                          let prodUpdate = {
                            productId: product.productId,
                            quantity:
                              product.quantity + localCart[ind].quantity,
                          };
                          this.updateCart(data.token, prodUpdate).subscribe(
                            (data) => {
                              this.removeFromLocalCart(prodUpdate.productId);
                            }
                          );

                          return;
                        } else {
                          let newProd: ProductListModel;
                          newProd = {
                            ...localCart[ind],
                            _id: localCart[ind].productId,
                          };
                          this.addToCart(data.token, newProd).subscribe(
                            (data) => {
                              this.removeFromLocalCart(
                                localCart[ind].productId
                              );
                            }
                          );
                        }
                      } else {
                      }
                    });
                  } else {
                    let localProd: ProductListModel;
                    localProd = {
                      ...localCart[ind],
                      _id: localCart[ind].productId,
                    };
                    this.addToCart(
                      data.token,
                      localProd
                    ).subscribe((data) => {});
                    this.removeFromLocalCart(localCart[ind].productId);
                  }
                });
              },
              (err) => {}
            );
          } else {
          }
        }
      }
    });
  }
  getProductQty(id) {
    var url = `${this.url}/products/quantity/${id}`;
    return this.http.get<any>(url);
  }
  addToCart(token, prod, quant: number = 1) {
    var body: OrderModel = { productId: prod._id, quantity: quant };
    // console.log('OrderModel: ' + JSON.stringify(body))
    return this.http.post<any>(`${this.url}orders/add-to-cart`, body, {
      headers: this.headerSetter(token),
    });
  }
  updateCart(token, body: OrderModel) {
    return this.http.put(`${this.url}orders/update-cart-item`, body, {
      headers: this.headerSetter(token),
    });
  }
  removeFromCart(token, id: string) {
    return this.http.delete(`${this.url}orders/remove-cart-item/${id}`, {
      headers: this.headerSetter(token),
    });
  }
  getCart(token) {
    return this.http.get<CartResponseModel>(`${this.url}orders/get-cart`, {
      headers: this.headerSetter(token),
    });
  }
  addToWishlist(token, body: OrderModel): Observable<any> {
    if (this.currUser && this.currUser.token) {
      return this.http
        .post<any>(`${this.url}orders/add-to-wishlist`, body, {
          headers: this.headerSetter(token),
        })
        .pipe(
          map((dt) => {
            if (!dt.error) {
              // console.log('DT: '+JSON.stringify(dt))
              // this.toastr.success(`Item added to wishlist`, "Success!");
            }
            this.addToLocalWishlist(body.productId);
            return dt;
          })
        );
    } else {
      return of(this.addToLocalWishlist(body.productId));
    }
  }
  removeFromWishlist(token, id: string) {
    if (this.currUser && this.currUser.token) {
      return this.http
        .delete<any>(`${this.url}orders/remove-wish-item/${id}`, {
          headers: this.headerSetter(token),
        })
        .pipe(
          map((res) => {
            this.removeFromLocalWishlist(id);
            // this.toastr.success(`item removed from wishlist`, "Success!");
            // this.removeFromCart(token, id).subscribe();
            return res;
          })
        );
    } else {
      return of(this.removeFromLocalWishlist(id));
    }
  }
  getWishlist(token) {
    return this.http.get<CartResponseModel>(`${this.url}orders/get-wishlist`, {
      headers: this.headerSetter(token),
    });
  }
  addToLocalWishlist(id: string) {
    let localWishListItems = this.getLocalWishListItems();
    if (!localWishListItems) {
      localWishListItems = [];
    }
    if (localWishListItems.indexOf(id) < 0) {
      localWishListItems.push(id);

      this.currentWishListSubject.next(localWishListItems);
      localStorage.setItem(
        getStorageName(storageNamesEnum.wishlistItems),
        JSON.stringify(localWishListItems)
      );
    }
  }
  removeFromLocalWishlist(id: string) {
    let localWishListItems = this.getLocalWishListItems();
    if (localWishListItems) {
      if (localWishListItems.indexOf(id) >= 0) {
        localWishListItems.splice(localWishListItems.indexOf(id), 1);

        this.currentWishListSubject.next(localWishListItems);
        localStorage.setItem(
          getStorageName(storageNamesEnum.wishlistItems),
          JSON.stringify(localWishListItems)
        );
      }
    }
  }
  addToLocalCart(product: ProductListModel, quantity: number) {
    var prod = new CartItems();
    prod.features = product.features;
    prod.imgUrl = product.gallery[0];
    prod.unitPrice = product.price;
    prod.productId = product._id;
    prod.productName = product.name;
    prod.quantity = quantity;
    prod.sku = product.sku;
    prod.storeName = product.storeData.name;

    let LocalCartItems = this.getLocalCartItems();
    if (!LocalCartItems) {
      LocalCartItems = new CartResponseModel();
      LocalCartItems.error = false;
    }
    if (!LocalCartItems.data) {
      LocalCartItems.data = [];
    }

    if (
      LocalCartItems.data.findIndex((x) => x.productId == prod.productId) < 0
    ) {
      LocalCartItems.data.push(prod);
      localStorage.setItem(
        getStorageName(storageNamesEnum.cartItems),
        JSON.stringify(LocalCartItems)
      );
    }
  }
  updateLocalCart(prodId, quant) {
    let LocalCartItems = this.getLocalCartItems();
    LocalCartItems.data.map((x) => {
      if (x.productId == prodId) {
        x.quantity = quant;
        x = {
          ...x,
          quantity: x.quantity,
        };
      }
    });
    localStorage.setItem(
      getStorageName(storageNamesEnum.cartItems),
      JSON.stringify(LocalCartItems)
    );
  }
  removeFromLocalCart(id: string) {
    let LocalCartItems = this.getLocalCartItems();
    if (LocalCartItems && LocalCartItems.data) {
      const index = LocalCartItems.data.findIndex((x) => x.productId == id);
      if (index > -1) {
        LocalCartItems.data.splice(index, 1);
        localStorage.setItem(
          getStorageName(storageNamesEnum.cartItems),
          JSON.stringify(LocalCartItems)
        );
      }
    }
  }
  getLocalWishListItems(): string[] {
    try {
      return JSON.parse(
        localStorage.getItem(getStorageName(storageNamesEnum.wishlistItems))
      );
    } catch (error) {
      return null;
    }
  }
  getLocalCartItems(): CartResponseModel {
    try {
      return JSON.parse(
        localStorage.getItem(getStorageName(storageNamesEnum.cartItems))
      );
    } catch (error) {
      return null;
    }
  }
  checkIfProdInWishList(id: string): boolean {
    var items = this.getLocalWishListItems();
    if (items && items.indexOf(id) > -1) {
      return true;
    }
    return false;
  }
  getCurrentOrderData(token) {
    return this.http.get<CartPaymentDataResponseModel>(
      `${this.url}orders/checkout`
    );
  }
  confirmOrder(token) {
    return this.http.post<CartPaymentDataResponseModel>(
      `${this.url}orders/confirm`,
      null,
      {
        headers: this.headerSetter(token),
      }
    );
  }
  updatePayment(token, body: UpdatePaymentModel) {
    return this.http.post<any>(`${this.url}transactions`, body, {
      headers: this.headerSetter(token),
    });
  }
  updateOrder(token, body: UpdateOrderModel) {
    return this.http.put<any>(`${this.url}orders/change-order`, body, {
      headers: this.headerSetter(token),
    });
  }
  getOrders(token) {
    return this.http.get<any>(`${this.url}orders/user`, {
      headers: this.headerSetter(token),
    });
  }
  getOrderDetails(token, id: string) {
    return this.http.get<CartPaymentDataResponseModel>(
      `${this.url}orders/user/${id}`,
      {
        headers: this.headerSetter(token),
      }
    );
  }
  addCard(token, card: CardModel) {
    // console.log('OrderModel: ' + JSON.stringify(body))
    return this.http.post<any>(`${this.url}accounts/cards`, card, {
      headers: this.headerSetter(token),
    });
  }
  fetchCustomer(email: string): Promise<any> {
    let apiURL = `https://api.paystack.co/customer/${email}`;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'bearer ' + this.sk);
    // let options = new RequestOptions({ headers: headers });
    return this.http.get(apiURL, { headers }).toPromise();
  }
  createCustomer(model: any): Promise<any> {
    let apiURL = `https://api.paystack.co/customer`;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'bearer ' + this.sk);
    // let options = new RequestOptions({ headers: headers });
    return this.http.post(apiURL, model, { headers }).toPromise();
  }
  updateCustomer(model: any): Promise<any> {
    let apiURL = `https://api.paystack.co/customer/${model.email}`;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'bearer ' + this.sk);
    // let options = new RequestOptions({ headers: headers });
    return this.http.put(apiURL, model, { headers }).toPromise();
  }
  verifyTransactions(ref): Promise<any> {
    let apiURL = `https://api.paystack.co/transaction/verify/${ref}`;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'bearer ' + this.sk);
    // let options = new RequestOptions({ headers: headers });
    return this.http.get(apiURL, { headers }).toPromise();
  }
  chargeCard(model): Promise<any> {
    let apiURL = `https://api.paystack.co/transaction/charge_authorization`;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'bearer ' + this.sk);
    // let options = new RequestOptions({ headers: headers });
    return this.http.post(apiURL, model, { headers }).toPromise();
  }
}
