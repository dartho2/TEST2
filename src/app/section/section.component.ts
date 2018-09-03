import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppModel, Sections } from '../app.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppService } from '../app.service';
import { SectionModel } from '../section/section.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})

export class SectionComponent implements OnInit {
  private _data = new BehaviorSubject<AppModel[]>([])
  sections;
  portals;

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
          const sectionId = params.get('section');
          console.log("this_data ->", this._data)
          this._data
            .subscribe(x => {
              this.sections = this.sectionCategory(this.data, sectionId)
            })
        });
  }

  sectionCategory(data: AppModel[], section) {
    const result = data.filter(data => data.name == section)
    console.log(result)
    return result
  }
}
