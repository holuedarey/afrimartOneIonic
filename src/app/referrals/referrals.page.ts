import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.page.html',
  styleUrls: ['./referrals.page.scss'],
})
export class ReferralsPage implements OnInit {
  ///Inputs
  title: string = 'Referrals';
  longSearch: boolean = false;
  showBackButton: boolean = true;
  loading: boolean = false;
  showSearch: boolean = true;
  ////////////////////
  constructor() { }

  ngOnInit() {
  }

}
