import {
  Component,
  forwardRef,
  Input,
  Output,
  OnChanges,
  ViewEncapsulation,
  EventEmitter,
} from '@angular/core';
import {
  FormControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
} from '@angular/forms';

export function counterRangeValidator(minValue, maxValue) {
  return (c: FormControl) => {
    const err = {
      rangeError: {
        given: c.value,
        min: minValue || 0,
        max: maxValue || 10,
      },
    };

    return c.value > +maxValue || c.value < +minValue ? err : null;
  };
}

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CounterInputComponent),
      multi: true,
    },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class CounterInputComponent implements ControlValueAccessor, OnChanges {
  // tslint:disable-next-line:no-input-rename
  @Input('counterValue') _counterValue = 0;
  // tslint:disable-next-line:no-input-rename
  @Input('max') counterRangeMax: any;
  // tslint:disable-next-line:no-input-rename
  @Input('min') counterRangeMin: any;

  @Input('x') x: any;

  @Output()
  change: EventEmitter<any> = new EventEmitter<any>();

  propagateChange: any = () => {}; // Noop function
  validateFn: any = () => {}; // Noop function

  get counterValue() {
    return this._counterValue;
  }

  set counterValue(val) {
    this._counterValue = val;
    this.propagateChange(val);
  }

  ngOnChanges(inputs) {
    if (inputs.counterRangeMax || inputs.counterRangeMin) {
      this.validateFn = counterRangeValidator(
        this.counterRangeMin,
        this.counterRangeMax
      );
    }
  }

  writeValue(value) {
    if (value) {
      this.counterValue = value;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  increase() {
    // console.log('countChange Obj: ' + JSON.stringify(this.x));
    // console.log('increase() : ' + this.counterValue);
    this.counterValue++;
    this.change.emit({ counterValue: this.counterValue, extraobj: this.x });
  }

  decrease() {
    // console.log('countChange Obj: ' + JSON.stringify(this.x));
    // console.log('decrease() : ' + this.counterValue);
    if (this.counterValue > 1) {
      this.counterValue--;
    } else {
      this.counterValue = 1;
    }
    this.change.emit({ counterValue: this.counterValue, extraobj: this.x });
  }

  validate(c: FormControl) {
    return this.validateFn(c);
  }
}
