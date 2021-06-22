import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagingPageRoutingModule } from './messaging-routing.module';

import { MessagingPage } from './messaging.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { ChatMessagePageModule } from '../chat-message/chat-message.module';
import { ContactMessagePageModule } from '../contact-message/contact-message.module';
import { ShellModule } from '../../shell/shell.module';
import { SharedComponentsModule } from '../../sharedComponents/shared-components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagingPageRoutingModule,
    SuperTabsModule,
    ChatMessagePageModule,
    ContactMessagePageModule,
    ShellModule,
    SharedComponentsModule
  ],
  declarations: [MessagingPage]
})
export class MessagingPageModule {}
