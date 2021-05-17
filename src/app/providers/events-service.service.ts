import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EventsServiceService {
  private refreshCartQty = new BehaviorSubject<number>(0);
  // private refreshLoanBalance = new Subject();
  constructor() {}

  cartQty = this.refreshCartQty.asObservable();
  // loanBalance = this.refreshLoanBalance.asObservable();
  // refresh(message){
  // this.refreshDatanext(message)
  // }
  // publishTransactionBalance(bu: any, time: number) {
  //   console.log('bu: ' + JSON.stringify(bu) + 'Time: ' + time);
  //   this.refreshTransactionBalance.next(bu);
  // }
  publishCartQty(qty: number) {
    console.log('cartQty: ' + qty);
    this.refreshCartQty.next(qty);
  }
}
