import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class AppService {
 
    constructor(private _http: HttpClient) { }

    getPortals() {
        return this._http.get("https://yoga-server.herokuapp.com/api/portals")
            .pipe(map(data => data))
      
    }


    checkType(portalsData) {
      
        return portalsData.map(portalsData => {
            switch (portalsData.type) {
                case 'text':
                    return portalsData
                case 'text_and_image':
                    return portalsData
                default:
                    return
            }
        })

    }
    
  
    
}