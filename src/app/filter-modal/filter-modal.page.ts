import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.page.html',
  styleUrls: ['./filter-modal.page.scss'],
})
export class FilterModalPage implements OnInit {
  cnt: number = 0;
  filterName: string = '';
  filterList: any = [];
  itemList: any = [];
  showFilter: string = 'Rating';
  isActive: string = '';
  
  constructor(private modalCtrl: ModalController) {
    this.filterList = [
      {
        name: 'Rating',
        data: [
          { name: '5 stars', value: '5', isChecked: true },
          { name: '4 stars', value: '4', isChecked: true },
          { name: '3 stars', value: '3', isChecked: true },
          { name: '2 stars', value: '2', isChecked: true },
          { name: '1 stars', value: '1', isChecked: true },
        ],
      },
      // {
      //   name: 'Price',
      //   data: [
      //     { name: '5 stars', value: '5', isChecked: true },
      //     { name: '4 stars', value: '4', isChecked: true },
      //     { name: '3 stars', value: '3', isChecked: true },
      //     { name: '2 stars', value: '2', isChecked: true },
      //     { name: '1 stars', value: '1', isChecked: true },
      //   ]
      // },
      {
        name: 'Brand',
        data: [
          { name: '5 stars', value: '5', isChecked: true },
          { name: '4 stars', value: '4', isChecked: true },
          { name: '3 stars', value: '3', isChecked: true },
          { name: '2 stars', value: '2', isChecked: true },
          { name: '1 stars', value: '1', isChecked: true },
        ],
      },
      {
        name: 'Shipped From',
        data: [
          { name: 'Nigeria', value: 'Nigeria', isChecked: true },
          { name: 'Overseas', value: 'Overseas', isChecked: true },
        ],
      },
      {
        name: 'Discount',
        data: [
          { name: '50% Off or more', value: '50p', isChecked: true },
          { name: '40% Off or more', value: '40p', isChecked: true },
          { name: '30% Off or more', value: '30p', isChecked: true },
          { name: '20% Off or more', value: '20p', isChecked: true },
          { name: '10% Off or more', value: '10p', isChecked: true },
        ],
      },
    ];
    this.filterName = this.filterList[0].name;
    this.loadFilters(this.filterList[0]);
  }

  ngOnInit() {}

  loadFilters(filter: any) {
    console.log('loadFilters: ' + JSON.stringify(filter));
    if (filter.name == 'Price') {
      this.showFilter = 'Price';
    } else if (filter.name == 'Rating') {
      this.itemList = filter.data;
      this.showFilter = 'Rating';
    } else if (filter.name == 'Brand') {
      this.itemList = filter.data;
      this.showFilter = 'Brand';
    } else if (filter.name == 'Shipped From') {
      this.itemList = filter.data;
      this.showFilter = 'Shipped From';
    } else if (filter.name == 'Discount') {
      this.itemList = filter.data;
      this.showFilter = 'Discount';
    }
  }
  dismiss(): void {
    this.modalCtrl.dismiss({ dismissed: true });
  }

  clearFilterList() {}
  applyFilterList() {}
}
