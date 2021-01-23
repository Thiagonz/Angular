import { Directive, ElementRef, HostListener, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'input[type="text"], textarea'
})
export class FixWhitespaceDirective {
  constructor(private el: ElementRef, @Optional() private control: NgControl) { }

  @HostListener('change', ['$event'])
  protected change() {
    if (!this.control) return;

    let value = this.el.nativeElement.value
      .replace(/  +/g, ' ')
      .trim();

    if (!this.el.nativeElement.hasAttribute('ignoreAutoUpperCase')) {
      value = value.toUpperCase();
    }

    this.el.nativeElement.value = value;
    this.control.control.setValue(value);
  }
}
