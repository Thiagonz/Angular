import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

declare var $: any;

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'input[data-mask]'
})
export class DataMaskDirective {
  constructor(private el: ElementRef, private control: NgControl) {
    const $this = $(el.nativeElement);
    $this.mask($this.attr('data-mask'));
  }

  @HostListener('keyup')
  keyup(): void {
    this.control.control.setValue(this.el.nativeElement.value);
  }
}
