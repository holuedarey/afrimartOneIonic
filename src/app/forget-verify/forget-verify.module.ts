import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgetVerifyPageRoutingModule } from './forget-verify-routing.module';

import { ForgetVerifyPage } from './forget-verify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ForgetVerifyPageRoutingModule
  ],
  declarations: [ForgetVerifyPage]
})
export class ForgetVerifyPageModule {}
