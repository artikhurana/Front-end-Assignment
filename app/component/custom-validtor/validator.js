"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomValidators = (function () {
    function CustomValidators() {
    }
    return CustomValidators;
}());
CustomValidators.nameValidator = {
    validate: function (control) {
        var val = control.value, result = {
            message: '',
            valid: true
        };
        if (val.toLowerCase() !== 'jack') {
            result.valid = false;
            result.message = 'Name should be Jack only...';
        }
        else {
            result = null;
        }
        return result;
    }
};
CustomValidators.trackValidator = {
    validate: function (control) {
        var val = Number(control.value), result = {
            message: '',
            valid: true
        };
        if (val !== 4) {
            result.valid = false;
            result.message = 'Track should be 4 only...';
        }
        else {
            result = null;
        }
        return result;
    }
};
exports.CustomValidators = CustomValidators;
//# sourceMappingURL=validator.js.map