import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedComponentsModule } from '../sharedComponents/shared-components.module';
import { ShellModule } from '../shell/shell.module';
import { CheckoutPage } from './checkout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: CheckoutPage,
      },
    ]),
    SharedComponentsModule,
    ShellModule,
  ],
  declarations: [CheckoutPage],
})
export class CheckoutPageModule {}
