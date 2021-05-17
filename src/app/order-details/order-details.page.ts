import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { OrderService } from "src/app/core/http-services/order.service";
import { AuthenticationService } from "src/app/core/authentication/authentication.service";
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
 ///Inputs
 title: string = 'Order Details';
 longSearch: boolean = false;
 showBackButton: boolean = true;
 loading: boolean = false;
 showSearch: boolean = true;
 ////////////////////
 order: any;
 currentUser: any;

  constructor(
    private orderService: OrderService,
    private nativeStorage: NativeStorage,
    private authService: AuthenticationService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.loading=true;
    this.nativeStorage.getItem('currentUser').then((x) => {
      this.currentUser = x;
      this.route.params.subscribe((params) => {
        if (params.id) {
          // this.productService.setLocalRecentlyViewedProducts(JSON.stringify([]));
          console.log('params.id: ' + JSON.stringify(params.id));
          
          this.getOrderDetails(this.currentUser.token,params.id);
        } else {
          //Bounce the person
          this.loading=false;
        }
      });
      }
      );
    
  }

  getOrderDetails(token,id) {
    // let id = this.route.snapshot.paramMap.get("id");
    this.orderService.getOrderDetails(token,id).subscribe(
      (data: any) => {
        if (!data.error) {
          this.loading=false;
          // console.log('getOrderDetails : ' + JSON.stringify(data));
          this.order=data.data;
          if(this.order.paymentMethod=="ondelivery"){
            this.order.paymentMethod=" ON DELIVERY";
          }
          else{
            this.order.paymentMethod=" ONLINE";
          }
        } else {
          // this.toastr.error("Error!", data.message);
        }
      },
      (err) => {
        // this.toastr.error("Error!", "An error occured");
      }
    );
  }

}
