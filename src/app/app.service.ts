import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppModel} from './app.model';
import {Observable} from 'rxjs';


@Injectable({providedIn: 'root'})
export class AppService {

  constructor(private _http: HttpClient) {
  }

  getPortals(): Observable<AppModel[]> {
    return this._http.get<AppModel[]>('https://yoga-server.herokuapp.com/api/portals');
  }

  setImages(result, portal) {
    const image = result.filter(data => data.name === portal);

    return image[0].image_top;
  }
}
