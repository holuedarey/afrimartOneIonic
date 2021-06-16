import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import { HttpClient, HttpHeaders  } from "@angular/common/http";
import { environment } from "src/environments/environment";
import {
  CategoryListResponseModel,
  RootCategoriesListResponseModel,
  RootCategoriesListModel,
  CategoryListModel
} from "src/app/shared/models/category.model";
import { ProductListResponseModel } from "src/app/shared/models/product.model";
import { SliderModel } from "src/app/shared/models/user.model";
import { Endpoint } from "../common/endpoints";

@Injectable({
  providedIn: "root"
})
export class CategoryService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}
  headerSt() {
    return new HttpHeaders({
      channel: "mobile",
      "Content-Type": "application/json"
    });
  }
  searchCategories(
    searchString: string,
    size: number = 5,
    hasProducts: boolean = true
  ): Observable<string[]> {
    if (!searchString.trim()) {
      return of([]);
    }
    return this.http.get<string[]>(
      `${this.apiUrl}category/Names?search=${searchString}&size=${size}&hasProducts=${hasProducts}`, {
      headers: this.headerSt()
    }
    );
  }

  getTopCategories(pageSize: number = 10) {
    return this.http.get<RootCategoriesListResponseModel>(`${Endpoint.CATEGORY.topCategories}?page=1&pageSize=${pageSize}`);
  }

  getFeaturedCategories(pageSize: number = 10) {
    return this.http.get<RootCategoriesListResponseModel>(
      `${this.apiUrl}resources/featured-categories`, {
      headers: this.headerSt()
    }
    );
  }

  getlevelCategories(levels) {
    return this.http.get<any>(`${this.apiUrl}resources/${levels}`, {
      headers: this.headerSt()
    }
    );
  }

  getAllCategories() {
    return this.http.get<RootCategoriesListResponseModel>(
      `${this.apiUrl}categories/root`, {
      headers: this.headerSt()
    }
    );
  }
  getCategoriesById(id) {
    return this.http.get<any>(`${this.apiUrl}categories/${id}`, {
      headers: this.headerSt()
    }
    );
  }

  getCategoryData(id: string) {
    return this.http.get<{
      error: boolean;
      data: CategoryListModel;
      message: string;
    }>(`${this.apiUrl}categories/${id}`, {
      headers: this.headerSt()
    }
    );
  }
}
