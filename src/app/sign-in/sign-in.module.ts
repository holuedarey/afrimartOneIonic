import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedComponentsModule } from '../sharedComponents/shared-components.module';
import { ComponentsModule } from '../components/components.module';

import { SignInPage } from './sign-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignInPage
      }
    ]),
    SharedComponentsModule
  ],
  declarations: [SignInPage]
})
export class SignInPageModule {}
