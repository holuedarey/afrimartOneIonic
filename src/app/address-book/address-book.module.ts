import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ShellModule } from '../shell/shell.module';
import { AddressBookPage } from './address-book.page';
import { SharedComponentsModule } from '../sharedComponents/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: AddressBookPage
      }
    ]),
    ShellModule,
    SharedComponentsModule
  ],
  declarations: [AddressBookPage]
})
export class AddressBookPageModule {}
