import { Component, OnInit } from '@angular/core';
import { AppModel } from '../app.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppService } from '../app.service';
import { SectionModel } from '../section/section.model';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
  portalId: string;
  sectiontext;
  sectiongallery;
  sectiontextimage;
  sectiontype;
  sectionn;
  sectionId: string;
  sekcja: SectionModel[] = [];
  portals: AppModel[] = [];
  constructor(
    private portalService: AppService,
    private route: Router,
    private router: ActivatedRoute) {
  }  
  // istnieje(a) {
  //   return a= 1
  // }
  ngOnInit() {
    
    this.router.paramMap
    .subscribe(
      params => {
        this.sectionId = params.get('section');
        this.portalId = params.get('portal');
        this.portalService.getPortals()
          .subscribe((data: AppModel[]) => {
            this.portals = data.filter(data => data.name == this.portalId)
            this.sectionn = this.portals[0].sections.filter(sections => sections.name == this.sectionId);
            this.sectiontype = this.portalService.checkType(this.sectionn[0].data);
            this.sectiontext = this.sectionn[0].data.filter(sectionn => sectionn.type == 'text');
            this.sectiontextimage = this.sectionn[0].data.filter(sectionn => sectionn.type == 'text_and_image');
            this.sectiongallery = this.sectionn[0].data.filter(sectionn => sectionn.type == 'gallery');
            console.log("section text" ,this.sectiontext)
            console.log("sectionn" ,this.sectionn)
          })
      });
  
      
    }
}
