import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivationLinkPage } from './activation-link.page';

const routes: Routes = [
  {
    path: '',
    component: ActivationLinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivationLinkPageRoutingModule {}
