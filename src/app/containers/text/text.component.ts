import { Component, OnInit, Input } from '@angular/core';
import { AppModel } from '../../app.model';
import { AppService } from '../../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SectionModel } from '../../section/section.model';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  
  portalId: string;
  sectiontext;
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
            console.log("section text" ,this.sectiontext)
            
          })
      });
  
      
    }
    
}
