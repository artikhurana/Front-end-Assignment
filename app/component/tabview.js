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
var overlay_1 = require("./overlay/overlay");
var TabView = (function () {
    function TabView(componentFactoryResolver, jsonp) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.url = 'http://itunes.apple.com/search';
        this.childComponent = this.componentFactoryResolver.resolveComponentFactory(overlay_1.Overlay);
        this._jsonp = jsonp;
    }
    TabView.prototype.ngOnInit = function () {
    };
    TabView.prototype.selectTab = function (item) {
        if (this.activeItem) {
            this.activeItem.active = false;
        }
        item.active = true;
        this.activeItem = item;
        this.loadData(item.artistName);
    };
    TabView.prototype.onSubmitClick = function (event) {
        var _this = this;
        console.log('Hello');
        var cmpRef = this.target.createComponent(this.childComponent);
        cmpRef.instance['response'].subscribe(function (res) {
            console.log(res);
            _this.data = res.data;
        });
    };
    TabView.prototype.loadData = function (name) {
        var params = { 'limit': 1, 'callback': 'JSONP_CALLBACK', 'term': name };
        this._jsonp.get(this.url, {
            search: $.param(params)
        }).subscribe(function (res) {
            console.log(res);
        });
    };
    return TabView;
}());
__decorate([
    core_1.ViewChild('parent', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], TabView.prototype, "target", void 0);
TabView = __decorate([
    core_1.Component({
        selector: 'tabview',
        moduleId: module.id,
        templateUrl: './tabview.html',
        styleUrls: ['./tabview.css']
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver, http_1.Jsonp])
], TabView);
exports.TabView = TabView;
//# sourceMappingURL=tabview.js.map