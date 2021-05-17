import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {HeaderComponent } from './header/header.component'
import {AccordionComponent} from './accordion/accordion.component';


@NgModule({
  declarations: [
    HeaderComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    HeaderComponent,
    AccordionComponent
  ]
})
export class SharedComponentsModule { }
