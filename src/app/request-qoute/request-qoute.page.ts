import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';

@Component({
  selector: 'app-request-qoute',
  templateUrl: './request-qoute.page.html',
  styleUrls: ['./request-qoute.page.scss'],
})
export class RequestQoutePage implements OnInit {

  public form = [
    { val: 'All Countries', isChecked: false },
    { val: 'North Africa', isChecked: false },
    { val: 'Southern Africa', isChecked: false },
    { val: 'Western Africa', isChecked: false },
    { val: 'Eastern Africa', isChecked: false },
    { val: 'Central Africa', isChecked: false },
  ];

  constructor(public modal:ModalController) { }

  ngOnInit() {
  }

  async closeModal(){
    await this.modal.dismiss();
  }
}
