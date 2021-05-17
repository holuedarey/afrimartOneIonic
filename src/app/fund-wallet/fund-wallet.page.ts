import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fund-wallet',
  templateUrl: './fund-wallet.page.html',
  styleUrls: ['./fund-wallet.page.scss'],
})
export class FundWalletPage implements OnInit {
  ///Inputs
  title: string = 'Wallet Top Up';
  longSearch: boolean = false;
  showBackButton: boolean = false;
  loading: boolean = false;
  showSearch: boolean = false;
  ////////////////////
  constructor() { }

  ngOnInit() {
  }

}
