import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.page.html',
  styleUrls: ['./chat-message.page.scss'],
})
export class ChatMessagePage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  viewChat(){
    this.router.navigate['/chat-details']
  }
}
