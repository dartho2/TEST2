import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppModel, Sections } from '../app.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppService } from '../app.service';
import { SectionModel } from '../section/section.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
  private _data = new BehaviorSubject<AppModel[]>([])
  portals;
  setImageData;
  style;
  // pcategory: Sections[];

  @Input()
  set data(value) {
    this._data.next(value)
    console.log("serrr data " ,  this._data)
  }
  get data() {
    return this._data.getValue();

  }
  portalId: string;

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
          this.portalId = params.get('portal');
          console.log("this_data ->", this._data)
          this._data
            .subscribe(x => {
            
              this.portals = this.portalCategory(this.data, this.portalId, sectionId)
              this.style = this.portalStyle(this.data, this.portalId)
              console.log("style",this.style)
            })

        });

  }
  portalCategory(data: AppModel[], portal, section) {
    const result = data.filter(data => data.name == portal)
    this.setImageData = this.portalService.setImages(result, portal);
    const resultSection = result[0].sections.filter(sections => sections.name)
    return resultSection

  }
  portalStyle(data: AppModel[], portal) {
    const result = data.filter(data => data.name == portal)
    return result

  }
  setColor(event) {
    console.log(event.type)
  }
  getColors(portalID) {
    const result = this.style.filter(data => data.name == portalID)
    // console.log("a",result)
    // const colors = result.filter(style => style.style.colors.primary == primary)
    // console.log(colors)
  return result[0].style.colors.primary
  }
}

