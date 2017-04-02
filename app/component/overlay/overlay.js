"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var validator_1 = require("../custom-validtor/validator");
var Overlay = (function () {
    function Overlay(jsonp) {
        this.submitted = false;
        this.url = 'http://itunes.apple.com/search?term=jack&limit=4&callback=JSONP_CALLBACK';
        this._jsonp = jsonp;
        this.response = new core_1.EventEmitter();
    }
    Overlay.prototype.ngOnInit = function () {
        this.myForm = new forms_1.FormGroup({
            name: new forms_1.FormControl('', [forms_1.Validators.required, validator_1.CustomValidators.nameValidator]),
            tracks: new forms_1.FormControl('', [forms_1.Validators.required, validator_1.CustomValidators.trackValidator])
        });
    };
    Overlay.prototype.ngAfterViewInit = function () {
        $('#artistSearch').modal({
            backdrop: true
        });
    };
    Overlay.prototype.getControlValidity = function (controlName) {
        var control = this.myForm.controls[controlName];
        return control.valid;
    };
    Overlay.prototype.search = function () {
        this.myForm.updateValueAndValidity();
        if (this.myForm.valid) {
            this._search(this.myForm);
            this.closeModal();
        }
    };
    Overlay.prototype.closeModal = function () {
        $('#artistSearch').modal('hide');
    };
    Overlay.prototype._search = function (form) {
        var _this = this;
        var val = form.value;
        this._jsonp.get(this.url, { method: 'Get' })
            .map(function (res) {
            return res.json().results;
        })
            .subscribe(function (data) {
            console.log(data);
            _this.response.emit({
                data: data
            });
        }, function (error) {
            $().alert(error);
            _this.response.emit({
                error: error
            });
        });
    };
    return Overlay;
}());
Overlay = __decorate([
    core_1.Component({
        selector: 'overlay',
        templateUrl: 'overlay.html',
        outputs: ['response'],
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [http_1.Jsonp])
], Overlay);
exports.Overlay = Overlay;
//# sourceMappingURL=overlay.js.map