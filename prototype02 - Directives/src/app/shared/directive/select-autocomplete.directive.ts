import { AfterViewInit, Directive, ElementRef, OnDestroy } from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';

declare var $, $isIE: any;

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'select'
})
export class SelectAutocompleteDirective implements AfterViewInit, OnDestroy {
  private $el: any;
  private $selectize: any;
  private firstIndex = 0;
  private changing = false;

  constructor(private el: ElementRef, private control: NgControl) { }

  public static setList(control: AbstractControl, list: any): void {
    control['$list'] = list;
  }

  ngAfterViewInit(): void {
    this.$el = $(this.el.nativeElement);

    if (this.$el.is('[no-autocomplete]') || $isIE) {
      return;
    }

    this.control.control.valueChanges.subscribe(v => {
      const instance = this.getInstance();
      if (instance) {
        this.changing = true;
        instance.setValue(v);
        setTimeout(() => this.changing = false, 50);
      }
    });

    new MutationObserver((e) => {
      e.forEach(attr => {
        if (this.isLoaded() === false) {
          return;
        }

        this.onLoad();
      });
    }).observe(this.el.nativeElement, { attributes: true, attributeFilter: ['disabled'] });

    let eventId = null;

    const muntationCallback = () => {
      clearTimeout(eventId);
      eventId = setTimeout(() => this.onLoad(), 250);
    };

    new MutationObserver(muntationCallback).observe(this.el.nativeElement, { childList: true });
    muntationCallback();
  }

  private onLoad(): void {
    this.destroy();

    this.$selectize = this.$el.clone().insertAfter(this.$el.hide()).val(this.$el.val());

    const firstNgOption = this.$el.find('option[ng-reflect-ng-value]:first');
    if (firstNgOption.length) {
      const value = firstNgOption.val();
      // tslint:disable-next-line: radix
      this.firstIndex = parseInt(value.substring(0, value.indexOf(': Object')));
    }

    this.$selectize.selectize({
      onChange: () => {
        if (this.changing) {
          return;
        }

        let value = this.$selectize.val();
        if (value) {
          const pos = (value as string).indexOf(': Object');
          if (pos !== -1) {
            // tslint:disable-next-line: radix
            const index = parseInt(value.substring(0, pos)) - this.firstIndex;
            value = this.control.control['$list'][index];
          }
        }

        this.control.control.setValue(value);
        this.control.control.markAsDirty();
      }
    });

    if (this.$selectize.prop('disabled') === false && this.getInstance().order === 0) {
      setTimeout(() => this.onLoad(), 250);
    }
  }

  private getInstance() {
    if (!this.$selectize) {
      return null;
    }

    return this.$selectize[0].selectize;
  }

  private isLoaded(): boolean {
    return !!this.getInstance();
  }

  private destroy(): void {
    if (this.isLoaded()) {
      this.getInstance().destroy();
      this.$selectize.remove();
    }
  }

  ngOnDestroy(): void {
    delete this.control.control['$list'];
  }
}