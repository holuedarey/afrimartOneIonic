import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../core/http-services/store.service';
import { UserDataModel } from '../shared/models/user.model';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.page.html',
  styleUrls: ['./company-profile.page.scss'],
})
export class CompanyProfilePage implements OnInit {
  ///Inputs
  title: string = 'Company Profile';
  longSearch: boolean = false;
  showBackButton: boolean = true;
  loading: boolean = false;
  showSearch: boolean = true;
  ////////////////////
  currentUser: UserDataModel = null;
  getValue: any;
  storeId: string;
  storeProducts: any[] = [];
  storeDetail:any;

  constructor(public router: ActivatedRoute, public storeService: StoreService, private http: HttpClient) { }

  ngOnInit() {
    this.getValue = JSON.parse(this.router.snapshot.paramMap.get("data"));
    this.storeId = this.getValue;
    this.storeDetails();
    console.log('store Id', this.storeId);

  }

  storeDetails() {
    this.loading = true;
    console.log(' this.catId, ::', this.storeId);

    this.storeService.getStoreDetail(this.storeId)
      .subscribe(
        (data) => {

          if (data.status && data.data) {
          console.log('data ::', data.data);

            this.storeProducts = data.data.products;
            this.storeDetail = data.data;
            this.loading = false;
          } else {
            this.loading = false;
            this.storeProducts = []
            console.log("No more data this.Products Count: " + JSON.stringify(this.storeProducts.length))
          }

        },
        (err) => {

        }
      );
  }

}
