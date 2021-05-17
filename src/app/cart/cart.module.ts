import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ShellModule } from '../shell/shell.module';
import { ComponentsModule } from '../components/components.module';
import { CartPage } from './cart.page';
import { SharedComponentsModule } from '../sharedComponents/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: CartPage
      }
    ]),
    ShellModule,
    ComponentsModule,
    SharedComponentsModule
  ],
  declarations: [CartPage]
})
export class CartPageModule {}
