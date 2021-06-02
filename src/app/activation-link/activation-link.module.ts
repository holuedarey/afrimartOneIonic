import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ActivationLinkPage } from './activation-link.page';
import { ActivationLinkPageRoutingModule } from './activation-link-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule, 
    ActivationLinkPageRoutingModule,
  ],
  declarations: [ActivationLinkPage]
})
export class ActivationLinkPageModule {}
