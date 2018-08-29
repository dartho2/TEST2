import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators'

import { AppModel } from './app.model';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AppService
 {
    private portals: AppModel[] = [];
    // private portalsUpdated = new Subject<AppModel[]>();

    constructor(private _http: HttpClient, private router: Router) { }

    getPortals() {
        return this._http.get("https://yoga-server.herokuapp.com/api/portals")
    }
   


}