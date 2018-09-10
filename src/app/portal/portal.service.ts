import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { AppModel } from '../app.model';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class PortalService {
 
    setImageData;
    style;
    constructor(private _http: HttpClient) { }

  
    portalCategory(data: AppModel[], portal, section) {
        const result = data.filter(data => data.name == portal)
        this.setImageData = this.setImages(result, portal);
        const resultSection = result[0].sections.filter(sections => sections.name)
        return resultSection
    
      }
      portalStyle(data: AppModel[], portal) {
        const result = data.filter(data => data.name == portal)
        return result
      }
    
      getColors(portalName) {
        console.log(portalName)
        const result = this.style.filter(portalData => portalData.name == portalName)
        return result[0].style.colors.primary
      }
      setImages(result, portal) {
        const image = result.filter(data => data.name == portal)
        
        return image[0].image_top
    }
    
  
    
}