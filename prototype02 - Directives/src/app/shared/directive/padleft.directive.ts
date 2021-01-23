import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[padleft]'
})
export class PadleftDirective {
  constructor(private el: ElementRef, private control: NgControl) { }

  @HostListener('change', ['$event'])
  protected keypress(e: KeyboardEvent): void {
    const value = this.el.nativeElement.value.padStart(
      this.el.nativeElement.getAttribute('maxlength') || 0,
      this.el.nativeElement.getAttribute('padleft')
    );
    this.el.nativeElement.value = value;
    this.control.control.setValue(value);
  }
}
