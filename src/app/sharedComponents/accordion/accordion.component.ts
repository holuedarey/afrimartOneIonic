import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @Input()
  name : string;
  @Input()
  description : string;
  @Input()
  image : string;
  @Output()
  change : EventEmitter<string> = new EventEmitter<string>();
  public isMenuOpen : boolean = false;

  constructor() { }

  ngOnInit() {}

  /**
   * Allows the accordion state to be toggled (I.e. opened/closed)
   * @public
   * @method toggleAccordion
   * @returns {none}
   */
  public toggleAccordion(): void {
    this.isMenuOpen = !this.isMenuOpen;
}


/**
 * Allows the value for the  element to be broadcast to the parent component
 * @public
 * @method broadcastName
 * @returns {none}
 */
public broadcastName(name: string): void {
   this.change.emit(name);
}

}
