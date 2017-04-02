import { Component, OnInit, ViewChild, ViewContainerRef, EventEmitter } from '@angular/core';
import { Jsonp, Response } from '@angular/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../custom-validtor/validator';

@Component({
    selector: 'overlay',
    templateUrl: 'overlay.html',
    outputs: ['response'],
    moduleId: module.id
})
export class Overlay implements OnInit {
    public myForm: FormGroup; // our model driven form
    public submitted: boolean = false;
    public url = 'http://itunes.apple.com/search?term=jack&limit=4&callback=JSONP_CALLBACK';
    public events: any;
    public response: EventEmitter<any>;
    private _jsonp: Jsonp;

    constructor(jsonp: Jsonp) {
        this._jsonp = jsonp;
        this.response = new EventEmitter<any>();
    }

    public ngOnInit() {
        this.myForm = new FormGroup({
            name: new FormControl('', [<any>Validators.required, CustomValidators.nameValidator]),
            tracks: new FormControl('', [<any>Validators.required, CustomValidators.trackValidator])
        });
    }

    public ngAfterViewInit() {
        $('#artistSearch').modal({
            backdrop: true
        })
    }

    public getControlValidity(controlName: string): boolean {
        let control = this.myForm.controls[controlName];

        return control.valid;
    }

    public search() {
        this.myForm.updateValueAndValidity();
        if (this.myForm.valid) {
            this._search(this.myForm);
            this.closeModal();
        }
    }

    public closeModal() {
        $('#artistSearch').modal('hide')
    }

    private _search(form: any) {
        let val = form.value;
        this._jsonp.get(this.url, { method: 'Get' })
            .map((res) => {
                return res.json().results;
            })
            .subscribe(data => {
                console.log(data);
                this.response.emit({
                    data: data
                })

            }, (error) => {
                $().alert(error);
                this.response.emit({
                    error: error
                })
            });
    }
}