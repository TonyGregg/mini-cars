import { Directive } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appRestictedCarName]'
})
export class RestictedCarNameDirective {

  constructor() { }
}
/** A car's name can't match the given regular expression */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    const forbiddenName = 'restricted';
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}
