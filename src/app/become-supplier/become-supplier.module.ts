import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BecomeSupplierPageRoutingModule } from './become-supplier-routing.module';

import { BecomeSupplierPage } from './become-supplier.page';

import { SharedComponentsModule } from '../sharedComponents/shared-components.module';
import { ShellModule } from '../shell/shell.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BecomeSupplierPageRoutingModule,
    SharedComponentsModule,
    ShellModule,
  ],
  declarations: [BecomeSupplierPage]
})
export class BecomeSupplierPageModule {}
