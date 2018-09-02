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
  pcategory: Sections[];

  @Input()
  set data(value) {
    this._data.next(value)
  }
  get data() {
    return this._data.getValue();

  }
  portalId: string;
  // sectiontext;
  // sectiongallery;
  // sectiontextimage;
  // sectiontype;
  // sectionn;
  // sectionId: string;
  // sekcja: SectionModel[] = [];
  // portals: AppModel[] = [];


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
          // let portal = this._data.filter(x => this._data.name == portalId)
          this._data
            .subscribe(x => {
            
              this.portals = this.portalCategory(this.data, this.portalId, sectionId)
            

            })

        });




    // this.router.paramMap
    // .subscribe(
    //   params => {
    //     this.sectionId = params.get('section');
    //     this.portalId = params.get('portal');
    //     this.portalService.getPortals()
    //       .subscribe((data: AppModel[]) => {
    //         this.portals = data.filter(data => data.name == this.portalId)
    //         this.sectionn = this.portals[0].sections.filter(sections => sections.name == this.sectionId);
    //         this.sectiontype = this.portalService.checkType(this.sectionn[0].data);
    //         this.sectiontext = this.sectionn[0].data.filter(sectionn => sectionn.type == 'text');
    //         this.sectiontextimage = this.sectionn[0].data.filter(sectionn => sectionn.type == 'text_and_image');
    //         this.sectiongallery = this.sectionn[0].data.filter(sectionn => sectionn.type == 'gallery');

    //       })
    //   });

  }
  portalCategory(data: AppModel[], portal, section) {
    const result = data.filter(data => data.name == portal)
    const resultSection = result[0].sections.filter(sections => sections.name)

    return resultSection




  }
}

