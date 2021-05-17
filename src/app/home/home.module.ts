import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShellModule } from '../shell/shell.module';
import { HomePage } from './home.page';
import { SharedComponentsModule } from '../sharedComponents/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    ShellModule,
    SharedComponentsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
