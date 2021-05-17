import { Component, Input, ViewChild, ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'splash',
  templateUrl: 'splash.html',
  styleUrls: ['./splash.scss'],
})
export class SplashComponent {

  @ViewChild('container',{static:true}) container: ElementRef;

  public showSplash: boolean = true;

  @Input('autohide') autoHide: number = 3000;
  @Input('background-image') backgroundImage: string = '';
  @Input('animation-name') animationName: string = 'zoomIn';
  @Input('animation-duration') animationDuration: string = '1s';
  @Input('animation-delay') animationDelay: string = '0s';
  @Input('image') image: string;
  @Input('infinite') infinite: boolean = false;
  @Output('onHide') hideEvent = new EventEmitter();

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
    timer(this.autoHide).subscribe(() => this.onHide())
  }

  private onHide() {
    this.showSplash = false;
    timer(800).subscribe(() => this.hideContainer())
    this.hideEvent.emit();
  }

  private hideContainer() {
    this.renderer.setStyle(this.container.nativeElement, 'visibility', 'hidden');
  }

}
