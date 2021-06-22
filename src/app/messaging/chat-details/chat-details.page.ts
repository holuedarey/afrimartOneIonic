import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-details',
  templateUrl: './chat-details.page.html',
  styleUrls: ['./chat-details.page.scss'],
})
export class ChatDetailsPage implements OnInit {

  ///Inputs
  title: string = 'Seller';
  longSearch: boolean = false;
  showBackButton: boolean = true;
  loading: boolean = false;
  showSearch: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  
}
