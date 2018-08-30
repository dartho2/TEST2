import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class AppService
 {

    constructor(private _http: HttpClient) { }

    getPortals() {
        return this._http.get("https://yoga-server.herokuapp.com/api/portals")
    }

}