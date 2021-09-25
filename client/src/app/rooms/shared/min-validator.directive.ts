import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators} from '@angular/forms';
import {min} from 'rxjs/operators';

@Directive({
    selector: '[appMin]',
    providers: [{provide: NG_VALIDATORS, useExisting: MinValidatorDirective, multi: true}]
})
export class MinValidatorDirective implements Validator {

    @Input() appMin: number;

    validate(control: AbstractControl): ValidationErrors | null {
        if (control.value != null) {
            return control.value >= this.appMin ? null : {'min': true};
        }
        return null;
    }

}
