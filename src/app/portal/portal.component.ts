import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppModel } from '../app.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppService } from '../app.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
  private _data = new BehaviorSubject<AppModel[]>([])

  hover;
  //
  portalName;
  portalColor;
  imagePortal;
  sectionData;
  sectionsData;

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
          const sectionName = params.get('section');
          this.portalName = params.get('portal');
          this._data
            .subscribe(x => {
              const portal = this.data.filter(data => data.name == this.portalName)
              this.sectionsData = portal[0].sections.filter(sections => sections.name)
              this.sectionData = portal[0].sections.filter(sections => sections.name == sectionName)
              this.portalColor = portal[0].style.colors.primary
              this.imagePortal = portal[0].image_top
            })

        });

  }
}

