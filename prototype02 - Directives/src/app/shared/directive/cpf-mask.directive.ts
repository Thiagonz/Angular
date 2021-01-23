import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
import { EventUtil } from '../../utils/event.util';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'input[cpfMask]'
})
export class CpfMaskDirective {

  private regexp = new RegExp('/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/');

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
