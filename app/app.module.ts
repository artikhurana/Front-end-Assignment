import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { TabView, Overlay, Loader, Utils} from './component/component';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'jquery';
import 'bootstrap';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [Utils],
    entryComponents: [TabView, Overlay, Loader],
    declarations: [TabView, Overlay, Loader],
    bootstrap: [TabView]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);