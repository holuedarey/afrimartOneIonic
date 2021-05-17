import { NgModule } from '@angular/core';
import { SplashComponent } from './splash/splash';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [SplashComponent],
	imports: [CommonModule],
	exports: [SplashComponent]
})
export class SplashComponentsModule {}
