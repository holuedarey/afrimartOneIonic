import { Component, OnInit } from '@angular/core';
import { OrderService } from "src/app/core/http-services/order.service";
import { AuthenticationService } from "src/app/core/authentication/authentication.service";
import { NativeStorage } from '@ionic-native/native-storage/ngx';
// import {
//   OrderProductsModel,
// } from "src/app/shared/models/product.model";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  ///Inputs
  title: string = 'My Orders';
  longSearch: boolean = false;
  showBackButton: boolean = true;
  loading: boolean = false;
  showSearch: boolean = true;
  ////////////////////
  // products: OrderProductsModel[];
  Prods: any[]=[];
  pageSize: number = 10;
  currentUser: any;

  constructor(
    private orderService: OrderService,
    private nativeStorage: NativeStorage,
    private authService: AuthenticationService
  ) { }
 
  ngOnInit() {
    this.loading=true;
    this.nativeStorage.getItem('currentUser').then((x) => {
      this.currentUser = x;
      // console.log('currentUser:' + JSON.stringify(this.currentUser));
      this.getOrders();
      }
      );
  }
  
  getOrders() {
    this.orderService.getOrders(this.currentUser.token).subscribe(
      (data) => {
        if (!data.error && data.data.length > 0) {
          data.data.forEach(order => {
            let index=this.Prods.findIndex(i=>i.orderTag===order.orderTag);
            if(index ==-1){
              this.Prods.push(order);
            }
            else{
              this.Prods[index].unitPrice+=Number(order.unitPrice);
            }
            
          });
          this.loading=false;
        }
      },
      (err) => {
        console.error(err);
        this.loading=false;
      }
    );
  }
}
