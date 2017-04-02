import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from "@angular/core";
import { Http, Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Overlay } from './overlay/overlay';
import { Utils } from './utils';
import {ArtistDetail} from './artist-details';

@Component({
    selector: 'tabview',
    moduleId: module.id,
    templateUrl: './tabview.html',
    styleUrls: ['./tabview.css']
})

export class TabView implements OnInit {
    @ViewChild('parent', { read: ViewContainerRef })
    public target: ViewContainerRef;
    public data: any;
    public childComponent: any;
    public activeItem: any;
    public url = 'http://itunes.apple.com/search';
    public loader: boolean = false;
    public artistDetail: ArtistDetail;
    private _jsonp: Jsonp;
    private _utils: Utils;

    constructor(private componentFactoryResolver: ComponentFactoryResolver, jsonp: Jsonp,
        utils: Utils) {
        this.childComponent = this.componentFactoryResolver.resolveComponentFactory(Overlay);
        this._jsonp = jsonp;
        this._utils = utils;
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
        this.clearTab();
        cmpRef.instance['response'].subscribe((res: any) => {
            console.log(res);
            this.data = res.data;
            if (this.data.length > 0) {
                this.selectTab(this.data[0]);
            }

        });
    }

    public loadData(name: string) {
        let params = {
            'limit': 1,
            'callback': 'JSONP_CALLBACK',
            'term': encodeURIComponent(name)
        };
        this.loader = true;
        this._jsonp.get(this.url, {
            search: this._utils.buildSubmitString(params)
        }).subscribe(res => {
            let result = res.json().results[0];
            this.loader = false;
            console.log(res);
            this.artistDetail = new ArtistDetail();
            this.artistDetail.collectionName = result.artistName;
            this.artistDetail.description = result.longDescription;
            this.artistDetail.image = result.artworkUrl100;
            this.artistDetail.previewURL = result.previewUrl;
            this.artistDetail.price = result.trackPrice;
            this.artistDetail.trackName = result.trackName;
        })
    }

    public clearTab() {
        this.data = [];
        this.artistDetail = null;
    }
}