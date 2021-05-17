import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderDetailsPageRoutingModule } from './order-details-routing.module';

import { OrderDetailsPage } from './order-details.page';
import { SharedComponentsModule } from '../sharedComponents/shared-components.module';
import { ShellModule } from '../shell/shell.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderDetailsPageRoutingModule,
    SharedComponentsModule,
    ShellModule
  ],
  declarations: [OrderDetailsPage]
})
export class OrderDetailsPageModule {}
