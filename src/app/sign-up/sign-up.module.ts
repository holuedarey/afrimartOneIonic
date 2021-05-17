import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';
import { SharedComponentsModule } from '../sharedComponents/shared-components.module';

import { SignUpPage } from './sign-up.page';
import { TermsOfServicePage } from '../terms-of-service/terms-of-service.page';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignUpPage
      }
    ]),
    ComponentsModule,
    SharedComponentsModule
  ],
  declarations: [SignUpPage,TermsOfServicePage,PrivacyPolicyPage],
  entryComponents: [TermsOfServicePage, PrivacyPolicyPage]
})
export class SignUpPageModule {}
