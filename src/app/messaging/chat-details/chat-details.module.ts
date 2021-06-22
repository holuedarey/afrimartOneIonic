import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatDetailsPageRoutingModule } from './chat-details-routing.module';

import { ChatDetailsPage } from './chat-details.page';
import { ShellModule } from 'src/app/shell/shell.module';
import { SharedComponentsModule } from 'src/app/sharedComponents/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatDetailsPageRoutingModule,
    ShellModule,
    SharedComponentsModule
  ],
  declarations: [ChatDetailsPage]
})
export class ChatDetailsPageModule {}
