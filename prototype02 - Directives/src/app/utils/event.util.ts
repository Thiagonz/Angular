import { AbstractControl } from '@angular/forms';

export abstract class EventUtil {
  public static genericKeyPress(regexp: RegExp, e: any) {
    if (e.key !== 'Backspace' && e.key !== 'Tab' && regexp.test(e.key) === false) {
      e.preventDefault();
    }
  }

  public static genericPasteEvent(regexp: RegExp, e: any, control: AbstractControl) {
    let pastedValue = (e.clipboardData || (window as any).clipboardData).getData('text');

    setTimeout(() => {
      let value = e.target.value as string,
        newPastedValue = '';

      const maxedLength = parseInt(e.target.getAttribute('maxlength'), 0) === value.length;

      if (maxedLength) {
        pastedValue = value;
      }

      for (let i = -1, s = pastedValue.length; ++i < s;) {
        const char = pastedValue.charAt(i);

        if (regexp.test(char)) {
          newPastedValue += char;
        }
      }

      if (maxedLength) {
        value = newPastedValue;
      } else {
        value = value.replace(pastedValue, newPastedValue);
      }

      control.setValue(value);
    });
  }
}
