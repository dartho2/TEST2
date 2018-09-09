import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppModel } from '../app.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppService } from '../app.service';
import { HomeComponent } from '../home/home.component';
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
  hover;
  @Input()
  set portalData(value) {
    this._data.next(value)
  }
  get portalData() {
    return this._data.getValue();

  }

  constructor(
    private router: ActivatedRoute,
    private paramsPortal: HomeComponent) {
  }

  ngOnInit() {
    this.router.paramMap
    .subscribe(
      params => {
        // this.portalName = params.get('portal');
        // this.sectionName = params.get('section');
        this.portalName = this.paramsPortal.portalUrlName
        this.sectionName = this.paramsPortal.sectionUrlName
    this._data
      .subscribe(x => {
        const portal = this.portalData.filter(portal => portal.name == this.paramsPortal.portalUrlName)
        this.sectionData = portal[0].sections.filter(sections => this.paramsPortal.sectionUrlName)
        this.imageUrl = portal[0].image_top;
        this.portalColor = portal[0].style.colors.primary
      })
    });
  }
 }

