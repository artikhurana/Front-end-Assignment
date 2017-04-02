import { Component, OnInit, ViewChild, ViewContainerRef, EventEmitter } from '@angular/core';
import { Jsonp, Response }  from '@angular/http';

@Component({
    selector: 'overlay',
    templateUrl: 'overlay.html',
    styleUrls: ['overlay.css'],
    outputs: ['response'],
    moduleId: module.id
})
export class Overlay implements OnInit {
  public submitted: boolean = false;
  public url = 'http://itunes.apple.com/search?term=jack&limit=4&callback=JSONP_CALLBACK';
    public response: EventEmitter<any>;
  private _jsonp: Jsonp;

  constructor(jsonp: Jsonp) {
        this._jsonp = jsonp;
        this.response = new EventEmitter<any>();
    }

  public ngOnInit() {
  }

  public ngAfterViewInit() {
        $('#artistSearch').modal({
            backdrop: true
        })
    }

   public search(form: any) {
       form.form.updateValueAndValidity();
       if (form.valid) {
           this._search(form);
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