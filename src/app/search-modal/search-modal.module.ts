import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SearchModalPageRoutingModule } from './search-modal-routing.module';
import { ComponentsModule } from '../components/components.module';
import { SearchModalPage } from './search-modal.page';

// const routes: Routes = [
//   {
//     path: '',
//     component: SearchModalPage
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // RouterModule.forChild(routes),
    SearchModalPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [SearchModalPage],
})
export class SearchModalPageModule {}
