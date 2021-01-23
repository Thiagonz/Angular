import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'input[data-clear-mask]'
})
export class DataClearMaskDirective {

  constructor(private el: ElementRef) { }

  /**
  * @description listener to remove . / - character.
  */
  @HostListener('keyup')
  keyup(): void {
    const v = this.el.nativeElement.value;
    const valueLast = this.el.nativeElement.value[this.el.nativeElement.value.length - 1];
    if (valueLast === '.' || valueLast === '/' || valueLast === '-') {
      this.el.nativeElement.value = v.substr(0, v.length - 1);
    }
  }

}
