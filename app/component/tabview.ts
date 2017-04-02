import {Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from "@angular/core";
import { Http, Response, Jsonp }  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Overlay} from './overlay/overlay';

@Component({
    selector: 'tabview',
    moduleId: module.id,
    templateUrl: './tabview.html',
    styleUrls: ['./tabview.css']
})

export class TabView implements OnInit{
    @ViewChild('parent', {read: ViewContainerRef})
    public target: ViewContainerRef;
    public data: any;
    public childComponent: any;
    public activeItem: any;
    public url = 'http://itunes.apple.com/search';
    private _jsonp: Jsonp;

    constructor(private componentFactoryResolver: ComponentFactoryResolver, jsonp: Jsonp) {
         this.childComponent = this.componentFactoryResolver.resolveComponentFactory(Overlay);
         this._jsonp = jsonp;
    }

    public ngOnInit() {

    }

    public selectTab(item: any) {
        if (this.activeItem) {
            this.activeItem.active = false;
        }
        item.active = true;
        this.activeItem = item;
        this.loadData(item.artistName);
    }

    public onSubmitClick(event: any) {
        console.log('Hello');
        let cmpRef = this.target.createComponent(this.childComponent);
        cmpRef.instance['response'].subscribe((res: any) => {
            console.log(res);
            this.data = res.data;
        });
    }

    public loadData(name: string) {
        let params = {'limit': 1, 'callback': 'JSONP_CALLBACK', 'term': name};
        this._jsonp.get(this.url, {
            search: $.param(params)
        }).subscribe(res => {
            console.log(res);
        })
    }
}