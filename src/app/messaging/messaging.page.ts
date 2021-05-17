import { Component, OnInit } from '@angular/core';
import {ChatMessagePage} from '../chat-message/chat-message.page';
import { ContactMessagePage } from '../contact-message/contact-message.page';
@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.page.html',
  styleUrls: ['./messaging.page.scss'],
})
export class MessagingPage implements OnInit {
  contact: any = ContactMessagePage;
  chat: any = ChatMessagePage;
  constructor() { }

  ngOnInit() {
  }

}
