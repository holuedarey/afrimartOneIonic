import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestQoutePage } from './request-qoute.page';

const routes: Routes = [
  {
    path: '',
    component: RequestQoutePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestQoutePageRoutingModule {}
