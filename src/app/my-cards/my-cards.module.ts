import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedComponentsModule } from '../sharedComponents/shared-components.module';

import { MyCardsPage } from './my-cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: MyCardsPage
      }
    ]),
    SharedComponentsModule
  ],
  declarations: [MyCardsPage]
})
export class MyCardsPageModule {}
