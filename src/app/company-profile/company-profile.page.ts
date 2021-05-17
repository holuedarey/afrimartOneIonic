import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit() {
  }

}
