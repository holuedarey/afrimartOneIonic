import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactMessagePage } from './contact-message.page';

const routes: Routes = [
  {
    path: '',
    component: ContactMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactMessagePageRoutingModule {}
