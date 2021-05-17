import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ActivationLinkPage } from './activation-link.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, 
    RouterModule.forChild([
      {
        path: '',
        component: ActivationLinkPage
      }
    ])
  ],
  declarations: [ActivationLinkPage]
})
export class ActivationLinkPageModule {}
