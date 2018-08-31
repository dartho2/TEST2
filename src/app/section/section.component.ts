import { Component, OnInit } from '@angular/core';
import { AppModel } from '../app.model';
import { AppService } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SectionModel } from './section.model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  portalId: string;
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
            console.log("section type" ,this.sectiontype)
          })
      });
  }
}
