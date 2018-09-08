import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppModel } from '../app.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppService } from '../app.service';
import { PortalService } from '../portal/portal.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
  private _data = new BehaviorSubject<AppModel[]>([])
  sectionData;
  portalColor;
  imageUrl;
  sectionName;
  portalName;
  // style;
  // hover;
  
  @Input()
  set portalData(value) {
    this._data.next(value)
  }
  get portalData() {
    return this._data.getValue();

  }

  constructor(
    private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.paramMap
      .subscribe(
        params => {
          this.sectionName = params.get('section');
          this.portalName = params.get('portal');
          this._data
            .subscribe(x => {
              const portal = this.portalData.filter(data => data.name == this.portalName)
              this.sectionData = portal[0].sections.filter(sections => sections.name)
              // const section = this.sectionData.filter(data => data.name == this.sectionName)
              this.imageUrl = portal[0].image_top;
              this.portalColor = portal[0].style.colors.primary
            })

        });
  }

}

