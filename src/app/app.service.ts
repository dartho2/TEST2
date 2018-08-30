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

    constructor(private _http: HttpClient, private router: Router) { }

    getPortals() {
        return this._http.get("https://yoga-server.herokuapp.com/api/portals")
    }
    getSelection(portalData, secID) {
        console.log("portaldata", portalData)
       let portals = portalData[0].sections.filter(sections => sections.name == secID);
       console.log("wynik portals", portals)
       console.log("portaldata wynik 2", portalData)
      }


}