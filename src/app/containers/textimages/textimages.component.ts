import {Component, Input, OnInit} from '@angular/core';
import {AppModel} from '../../app.model';
import {BehaviorSubject} from 'rxjs';


@Component({
  selector: 'app-textimages',
  templateUrl: './textimages.component.html'
})
export class TextimagesComponent implements OnInit {
  private _data = new BehaviorSubject<AppModel[]>([]);
  textimages;
  portals;

  @Input()
  set data(value) {
    this._data.next(value);
  }

  get data() {
    return this._data.getValue();
  }

  constructor() {
  }

  ngOnInit() {
    this._data
      .subscribe(x => {
        this.textimages = this.data;
      });
  }
}
