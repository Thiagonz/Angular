import { Directive, ElementRef } from '@angular/core';

declare var $: any;

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[title]'
})
export class TooltipDirective {
  constructor(private el: ElementRef) {
    if (true) {
      return;
    }

    if (el.nativeElement.title && el.nativeElement.tagName.indexOf('APP-') === -1) {
      const button = $(el.nativeElement);

      if (el.nativeElement.disabled) {
        setTimeout(() => {
          const position = button.position();

          $('<div title="' + el.nativeElement.title + '"></div>')
            .tooltip({ container: 'body' })
            .css({
              top: position.top,
              left: position.left,
              width: button.outerWidth(),
              height: button.outerHeight(),
              position: 'absolute'
            })
            .appendTo(button);
        }, 1000);
      } else {
        button.tooltip({ container: 'body' });
      }
    }
  }
}
