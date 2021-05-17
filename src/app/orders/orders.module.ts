import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ShellModule } from '../shell/shell.module';
import { SharedComponentsModule } from '../sharedComponents/shared-components.module';

import { OrdersPage } from './orders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrdersPage
      }
    ]),
    ShellModule,
    SharedComponentsModule
  ],
  declarations: [OrdersPage]
})
export class OrdersPageModule {}
