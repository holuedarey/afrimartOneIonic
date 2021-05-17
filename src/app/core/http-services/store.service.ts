import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

import { StoreListModel } from "src/app/shared/models/store.model";
import { ProductListResponseModel } from "src/app/shared/models/product.model";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  searchStores(searchString: string, size: number = 5): Observable<string[]> {
    if (!searchString.trim()) {
      // if not search string, return empty array.
      return of([]);
    }
    return this.http.get<string[]>(
      `${this.apiUrl}Store/Names?search=${searchString}&size=${size}`
    );
  }

  getStoreDetail(id: string): Observable<any> {
    const url = `${this.apiUrl}stores/${id}`;
    return this.http.get<{
      error: boolean;
      message: string;
      data: StoreListModel;
    }>(url);
  }

  getStoreProducts(id: string, size: number = 10, page: number = 0) {
    var url = `${this.apiUrl}products?pagesize=${size}&page=${page}`;

    return this.http.get<ProductListResponseModel>(url);
  }
}
