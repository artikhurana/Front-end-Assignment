import { FormControl, Validator} from '@angular/forms';

export class CustomValidators {
    public static nameValidator: Validator = {
        validate: (control: FormControl) => {
            let val: string = control.value,
                result: any = {
                    message: '',
                    valid: true
                };

            if (val.toLowerCase() !== 'jack') {
                result.valid = false;
                result.message = 'Name should be Jack only...';
            } else {
                result = null;
            }

            return result;
        }
    }

    public static trackValidator: Validator = {
        validate: (control: FormControl) => {
            let val: number = Number(control.value),
                result: any = {
                    message: '',
                    valid: true
                };

            if (val !== 4) {
                result.valid = false;
                result.message = 'Track should be 4 only...';
            } else {
                result = null;
            }

            return result;
        }
    }
}
