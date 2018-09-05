import { Component, Input, OnInit } from '@angular/core';
import { AppModel } from '../app.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html'
})

export class SectionComponent implements OnInit {
  private _data = new BehaviorSubject<AppModel[]>([])
  sections;
  portals;
  category: AppModel[] = [];

  @Input()
  set data(value) {
    this._data.next(value)
  }
  get data() {
    return this._data.getValue();
  }

  constructor(private router: ActivatedRoute) {
  }

  ngOnInit() {

    this.router.paramMap
      .subscribe(
        params => {
          const sectionId = params.get('section');
          this._data
            .subscribe(x => {
              this.sections = this.sectionCategory(this.data, sectionId);
              this.category = this.sectionType(this.data);

            });
        });
  }

  sectionCategory(data: AppModel[], section) {
    const result = data.filter(data => data.name === section);

    return result[0].data.filter(data => data.type);
  }
  sectionType() {
    return this.sections[0].data.filter(data => data.type);
  }
}
