import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { TabView, Overlay} from './component/component';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'jquery';
import 'bootstrap';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        FormsModule
    ],
    entryComponents: [TabView, Overlay],
    declarations: [TabView, Overlay],
    bootstrap: [TabView]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);