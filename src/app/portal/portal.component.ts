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
        
            })

        });

  }
  portalCategory(data: AppModel[], portal, section) {
    const result = data.filter(data => data.name == portal)
    console.log(result)
    const resultSection = result[0].sections.filter(sections => sections.name)
    

    return resultSection




  }
}

