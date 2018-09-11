import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppModel } from '../app.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppService } from '../app.service';
import { SectionModel } from '../section/section.model';
import { BehaviorSubject } from 'rxjs';
import { renderComponent } from '@angular/core/src/render3';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
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

  constructor(
    private portalService: AppService,
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

