import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ShellModule } from '../shell/shell.module';
import { ComponentsModule } from '../components/components.module';
import { SharedComponentsModule } from '../sharedComponents/shared-components.module';
import { SubCategoryPage } from './sub-category.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: SubCategoryPage
      }
    ]),
    ShellModule,
    ComponentsModule,
    SharedComponentsModule
  ],
  declarations: [SubCategoryPage]
})
export class SubCategoryPageModule {}
