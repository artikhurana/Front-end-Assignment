import {Component} from "@angular/core";;

@Component({
    selector: 'app-loader',
    moduleId: module.id,
    templateUrl: './loader.html',
    styleUrls: ['./loader.css'],
    inputs: ['loading']
})

export class Loader {
    public loading: boolean =  false;
}