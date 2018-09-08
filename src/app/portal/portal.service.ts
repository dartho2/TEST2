import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { AppModel } from '../app.model';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class PortalService {
  constructor(private _http: HttpClient) { }
}