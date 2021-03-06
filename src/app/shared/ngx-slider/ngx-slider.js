import { Component, ElementRef, HostListener, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class SliderComponent {
	/**
   * @param {?} el
   */
	constructor(el) {
		this.el = el;
		this.currentItemIndex = 0;
		this.activeTitle = '';
		this.interval;
	}
	/**
   * @return {?}
   */
	ngOnInit() {
		this.sliderItems = this.init.items;
		this.config = this.init.config;
		this.setTitle();
		this.resize();
		this.setSliderStyle();
		this.interval = setInterval(() => {
			this.goTo('next');
		}, 10000);
	}
	/**
   * @return {?}
   */
	ngOnDestroy() {
		if (this.interval) {
			clearInterval(this.interval);
		}
	}
	/**
   * @return {?}
   */
	onResize() {
		this.resize();
	}
	/**
   * @return {?}
   */
	resize() {
		this.componentWidth =
			this.el.nativeElement.parentElement.clientWidth - this.getPreviewWidth() * this.getNumberOfPreview();
		this.setSlideStyle();
	}
	/**
   * @return {?}
   */
	setSliderStyle() {
		const /** @type {?} */ width = `${this.getWrapperWidth()}px`;
		const /** @type {?} */ left = this.getWrapperLeft()
			? `-${this.getWrapperLeft() - this.getPreviewWidth()}px`
			: 0;
		this.sliderStyle = {
			width: width,
			left: left,
			transition: `next ${this.config.transitionDuration}s`
		};
	}
	/**
   * @return {?}
   */
	setSlideStyle() {
		this.slideStyle = {
			width: `${this.componentWidth}px`
		};
	}
	/**
   * @return {?}
   */
	setTitle() {
		this.activeTitle = this.sliderItems.length ? this.sliderItems[this.currentItemIndex].title : '';
	}
	/**
   * @return {?}
   */
	getNumberOfPreview() {
		return this.config.showPreview ? this.config.numberOfPreview : 0;
	}
	/**
   * @return {?}
   */
	getPreviewWidth() {
		return this.config.showPreview ? this.config.previewWidth : 0;
	}
	/**
   * @return {?}
   */
	getWrapperWidth() {
		return this.sliderItems.length ? this.sliderItems.length * this.componentWidth : this.componentWidth;
	}
	/**
   * @return {?}
   */
	getWrapperLeft() {
		return this.currentItemIndex * this.componentWidth;
	}
	/**
   * @param {?} action
   * @return {?}
   */
	goTo(action) {
		if (action === 'next') {
			if (this.sliderItems.length - 1 > this.currentItemIndex) {
				this.currentItemIndex++;
			} else {
				this.currentItemIndex = this.config.loop ? 0 : this.currentItemIndex;
			}
		} else if (action === 'previous') {
			if (this.currentItemIndex > 0) {
				this.currentItemIndex--;
			} else {
				this.currentItemIndex = this.config.loop ? this.sliderItems.length - 1 : this.currentItemIndex;
			}
		} else {
			this.currentItemIndex = action;
		}
		this.setSliderStyle();
		this.setTitle();
	}
}
SliderComponent.decorators = [
	{
		type: Component,
		args: [
			{
				// tslint:disable-next-line:component-selector
				selector: 'ngx-slider',
				template: `
    <h4 *ngIf="config.showTitle" class="slide-title" [innerHTML]="activeTitle"></h4>
    <div class="slider-container" (mouseover)="showNavigator=false" (mouseout)="showNavigator=true" >
      <div class="slider-row" >
        <div [ngStyle]="sliderStyle" class="slide-wrapper">
          <div *ngFor="let slide of sliderItems; let i=index;" 
               [class.active]="i === currentItemIndex"
               [ngStyle]="slideStyle" 
               class="slide-item">
               <div [ngStyle]="{'background-image': 'url(' + slide.src + ')'}" class="slide"></div>
          </div>
        </div>
      </div>
      <div [hidden]="showNavigator">
          <button   (click)="goTo('next')" class="slider-nav next">
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </button>
            <button (click)="goTo('previous')" class="slider-nav previous">
              <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </button>
      </div>
      <div *ngIf="sliderItems.length > 1 && config.showDots" class="slider-dots">
        <ul>
          <li *ngFor="let slide of sliderItems; let i=index;" [class.active]="i === currentItemIndex">
            <button (click)="goTo(i)" class="dots">
              <i class="fa fa-circle" aria-hidden="true"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  `,
				styles: [
					`
    .slider-container {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
    }
    
    .slider-row {
        width: auto;
        height: 100%;
    }
    .slide-wrapper {
        position: absolute;
        height: 100%;
    }
    .slide-wrapper .active {
        opacity: 1;
        -webkit-transition: opacity 1s, -webkit-transform 1s;
        transition: opacity 1s, -webkit-transform 1s;
        transition: opacity 1s, transform 1s;
        transition: opacity 1s, transform 1s, -webkit-transform 1s;
    }
    .slide-item {
        display: inline-block;
        height: 100%;
        opacity: 0.5;
        -webkit-transition: opacity 1s, -webkit-transform 1s;
        transition: opacity 1s, -webkit-transform 1s;
        transition: opacity 1s, transform 1s;
        transition: opacity 1s, transform 1s, -webkit-transform 1s;
    }
    .slide {
        height: 100%;
        background-repeat: no-repeat;
       background-size: cover;
        background-position: center;
        
    }
    .slide-title {
        font-size: 1.5rem;
        padding: 10px;
    }
    .slider-nav {
        background-color: rgba(0,0,0,0.2);
        position: absolute;
        top: 35%;
        border: none;
        -webkit-box-shadow: none;
                box-shadow: none;
        color: white;
        font-size: 2rem;
        padding: 1.5rem;
    }

    .next {
        right: 0;
    }

    .previous {
        left: 0;
    }

    .slider-dots {
        position: absolute;
        bottom: 3%;
        width: 100%;
        text-align: center;
    }

    .slider-dots ul {
        margin: 0;
        padding: 0;
    }

    .slider-dots ul li {
        display: inline-block;
        list-style: none;
        margin: 0 3px;
    } 

    .slider-dots ul li.active i {
        color: #ad49d2;
    }

    .dots {
        padding: 0;
        border: 0;
        -webkit-box-shadow: none;
                box-shadow: none;
                color: white;
        background: none;
    }
  `
				]
			}
		]
	}
];
/**
 * @nocollapse
 */
SliderComponent.ctorParameters = () => [ { type: ElementRef } ];
SliderComponent.propDecorators = {
	init: [ { type: Input } ],
	onResize: [ { type: HostListener, args: [ 'window:resize', [ '$event.target' ] ] } ]
};

class SliderModule {}
SliderModule.decorators = [
	{
		type: NgModule,
		args: [
			{
				imports: [ CommonModule ],
				declarations: [ SliderComponent ],
				exports: [ SliderComponent ]
			}
		]
	}
];
/**
 * @nocollapse
 */
SliderModule.ctorParameters = () => [];

class SliderConfig {
	constructor() {
		this.showDots = true;
		this.showNavigator = true;
		this.showTitle = true;
		this.loop = true;
		this.showPreview = true;
		this.numberOfPreview = 2;
		this.previewWidth = 50;
		this.transitionDuration = 1;
	}
}

class Slider {
	constructor() {
		this.items = [];
		this.config = new SliderConfig();
	}
}

/**
 * Generated bundle index. Do not edit.
 */

export { Slider, SliderModule, SliderComponent as ??a };
//# sourceMappingURL=ngx-slider.js.map
