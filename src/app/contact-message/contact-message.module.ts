import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactMessagePageRoutingModule } from './contact-message-routing.module';

import { ContactMessagePage } from './contact-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactMessagePageRoutingModule
  ],
  declarations: [ContactMessagePage]
})
export class ContactMessagePageModule {}
