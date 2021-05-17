import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CategoryService } from "src/app/core/http-services/category.service";
import { map, take, switchMap, takeLast } from "rxjs/operators";
import { ProductService } from "src/app/core/http-services/product.service";

@Injectable({
  providedIn: "root",
})
export class ProductDataService {
  setProductData;
  getProductData;

  setProductId;
  getProductId;

  setCategoryProducts;
  getCategoryProducts;

  constructor(
    private catService: CategoryService,
    private prodService: ProductService
  ) {
    this.setProductId = new BehaviorSubject("");
    this.getProductId = this.setProductId.asObservable();

    this.setProductData = new BehaviorSubject("");
    this.getProductData = this.setProductData.asObservable();

    this.setCategoryProducts = new BehaviorSubject("");
    this.getCategoryProducts = this.setCategoryProducts.asObservable();
  }

  // setProdId(id) {
  //   this.setProductId.next(id);
  //   this.getCatProducts();
  //   this.getCatData();
  //   return id;
  // }

  // getCatProducts() {
  //   this.getProductId.pipe(take(1)).subscribe((dt): any => {
  //     this.prodService
  //       .getCategoryProducts(dt)
  //       .pipe(takeLast(1))
  //       .subscribe((data: any) => {
  //         this.setProductData.next(data);
  //       });
  //   });
  // }
  getCatData() {
    this.getProductId.pipe(take(1)).subscribe((dt): any => {
      this.catService
        .getCategoryData(dt)
        .pipe(take(1))
        .subscribe((data: any) => {
          this.setCategoryProducts.next(data.data);
        });
    });
  }
}
