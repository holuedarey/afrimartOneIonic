import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgetVerifyPage } from './forget-verify.page';

const routes: Routes = [
  {
    path: '',
    component: ForgetVerifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgetVerifyPageRoutingModule {}
