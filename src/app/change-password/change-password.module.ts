import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedComponentsModule } from '../sharedComponents/shared-components.module';
import { ChangePasswordPage } from './change-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ChangePasswordPage
      }
    ]),
    SharedComponentsModule
  ],
  declarations: [ChangePasswordPage]
})
export class ChangePasswordPageModule {}
