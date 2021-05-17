import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { EqualValidatorDirective } from './directives/equal-validator.directive';



@NgModule({
  declarations: [LoadingComponent, EqualValidatorDirective],
  imports: [
    CommonModule,
  ],
  exports: [
    LoadingComponent, EqualValidatorDirective
  ]
})
export class SharedModule { }
