import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class AppService {

    constructor(private _http: HttpClient) { }

    getPortals() {
        return this._http.get("https://yoga-server.herokuapp.com/api/portals")
    }
    checkType(portalsData) {
        console.log(portalsData)
        return portalsData.map(portalsData => {
            switch (portalsData.type) {
                case 'text':
                    return portalsData
                case 'text_and_image':
                    return portalsData
                default:
                    return portalsData
            }
        })

    }
    
  
    
}