import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

import { EventUtil } from '../../utils/event.util';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[onlyletters-no-accents]'
})
export class OnlylettersNoAccentsDirective {
  private regexp = new RegExp('^[a-zA-Z]*$');

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
