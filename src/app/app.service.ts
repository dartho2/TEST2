import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { AppModel } from './app.model';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AppService {
 
    constructor(private _http: HttpClient) { }

    getPortals() :Observable<AppModel[]> {
        return this._http.get<AppModel[]>("https://yoga-server.herokuapp.com/api/portals")
            // .pipe(map(data => data))
      
    }

    // setImages(result, portal) {
    //     const image = result.filter(data => data.name == portal)
        
    //     return image[0].image_top
    // }
    // checkType(portalsData) {
      
    //     return portalsData.map(portalsData => {
    //         switch (portalsData.type) {
    //             case 'text':
    //                 return portalsData
    //             case 'text_and_image':
    //                 return portalsData
    //             default:
    //                 return
    //         }
    //     })

    // }
    
  
    
}