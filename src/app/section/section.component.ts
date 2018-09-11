import {Component, Input, OnInit} from '@angular/core';
import {AppModel} from '../app.model';
import {ActivatedRoute} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html'
})

export class SectionComponent implements OnInit {
  private _data = new BehaviorSubject<AppModel[]>([]);
  category;

  @Input()
  set data(value) {
    this._data.next(value);
  }

  get data() {
    return this._data.getValue();
  }

  constructor(private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.paramMap
      .subscribe(
        () => {
          this._data.subscribe(() => {
            this.category = this.data[0].data.filter(data => data.type);
          });
        });
  }
}

