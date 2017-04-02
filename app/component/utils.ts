import { Injectable } from '@angular/core';

@Injectable()
export class Utils {

    /**
     * Method to override jquery params behaviour space as apple doesnt accept space as %2520
     *
     * @param {*} params
     * @returns {string}
     *
     * @memberOf Utils
     */
    public buildSubmitString(params: any): string {
        return decodeURIComponent(decodeURIComponent($.param(params)));
    };
})