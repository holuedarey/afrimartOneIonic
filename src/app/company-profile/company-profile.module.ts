import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyProfilePageRoutingModule } from './company-profile-routing.module';

import { CompanyProfilePage } from './company-profile.page';
import { SharedComponentsModule } from '../sharedComponents/shared-components.module';
import { ShellModule } from '../shell/shell.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyProfilePageRoutingModule,
    SharedComponentsModule,
    ShellModule,
  ],
  declarations: [CompanyProfilePage]
})
export class CompanyProfilePageModule {}
