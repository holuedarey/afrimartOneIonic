import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-become-supplier',
  templateUrl: './become-supplier.page.html',
  styleUrls: ['./become-supplier.page.scss'],
})
export class BecomeSupplierPage implements OnInit {
    /// Inputs
    title = 'Become a Supplier';
    longSearch = false;
    showBackButton = true;
    loading = false;
    showSearch = false;
  constructor() { }

  ngOnInit() {
  }

}
