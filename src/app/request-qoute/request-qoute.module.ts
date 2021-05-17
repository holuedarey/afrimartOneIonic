import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestQoutePageRoutingModule } from './request-qoute-routing.module';

import { RequestQoutePage } from './request-qoute.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestQoutePageRoutingModule
  ],
  declarations: [RequestQoutePage]
})
export class RequestQoutePageModule {}
