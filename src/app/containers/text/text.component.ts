import {Component, Input, OnInit} from '@angular/core';
import {AppModel} from '../../app.model';
import {BehaviorSubject} from 'rxjs';


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html'
})
export class TextComponent implements OnInit {
  private _data = new BehaviorSubject<AppModel[]>([]);
  textData;
  portals;

  @Input()
  set data(value) {
    this._data.next(value);
  }

  get data() {
    return this._data.getValue();
  }

  ngOnInit() {
    this._data
      .subscribe(x => {
        this.textData = this.data;
      });

  }

}
