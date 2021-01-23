import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

import { EventUtil } from '../../utils/event.util';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[onlyalphanumeric]'
})
export class OnlyalphanumericDirective {
  private regexp = new RegExp('^[a-zA-Z0-9]$');

  constructor(private control: NgControl) { }

  @HostListener('keypress', ['$event'])
  protected keypress(e: KeyboardEvent): void {
    EventUtil.genericKeyPress(this.regexp, e);
  }

  @HostListener('paste', ['$event'])
  protected blockPaste(e: any) {
    EventUtil.genericPasteEvent(this.regexp, e, this.control.control);
  }
}
