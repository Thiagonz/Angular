import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

import { EventUtil } from '../../utils/event.util';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[onlyletters]'
})
export class OnlylettersDirective {
  private regexp = new RegExp('^[a-zA-ZÀ-ú]*$');

  constructor(private control: NgControl) { }

  @HostListener('keypress', ['$event'])
  protected keypress(e: KeyboardEvent): void {
    if (e.key !== 'Backspace' && e.key !== 'Tab' && this.regexp.test(e.key) === false) {
      e.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  protected blockPaste(e: any) {
    EventUtil.genericPasteEvent(this.regexp, e, this.control.control);
  }
}
