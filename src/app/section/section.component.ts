import {Component, Input, OnInit} from '@angular/core';
import {AppModel} from '../app.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from '../app.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html'
})

export class SectionComponent implements OnInit {
  private _data = new BehaviorSubject<AppModel[]>([])
  // sections;
  // portals;
  category;

  @Input()
  set data(value) {
    this._data.next(value)
  }

  get data() {
    return this._data.getValue();
  }

  constructor(private portalService: AppService,
              private route: Router,
              private router: ActivatedRoute) {
  }

  ngOnInit() {

    this.router.paramMap
      .subscribe(
        params => {
          this._data
            .subscribe(x => {
              this.category = this.data[0].data.filter(data => data.type)
            })
        });
  }
}

