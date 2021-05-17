import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ShellModule } from '../shell/shell.module';
import { ComponentsModule } from '../components/components.module';
import { SharedComponentsModule } from '../sharedComponents/shared-components.module';

import { ProductDetailsPage } from './product-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductDetailsPage
      }
    ]),
    ShellModule,
    ComponentsModule,
    SharedComponentsModule
  ],
  declarations: [ProductDetailsPage]
})
export class ProductDetailsPageModule {}
