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
  sectionn: any;
  sectionId: string;
  sekcja: SectionModel[] = [];
  portals: AppModel[] = [];
  constructor(
    private portalService: AppService,
    private route: Router,
    private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe(
      params => {
              this.sectionId = params.get('section');
              this.portalId = params.get('portal');
              console.log("section>", this.sectionId , " and portal> ", this.portalId)
      }
    )
    this.portalService.getPortals()
    .subscribe((data: AppModel[]) => {
      
      this.portals = data.filter(data => data.name == this.portalId)
      this.sectionn = this.portals[0].sections.filter(sections => sections.name == this.sectionId);
    //  this.portalService.getSelection(portals, this.sectionId);
      // let sections s= this.portals.filter(section => section.sections.name == this.sectionId)
      // this.sectionn  = this.portals.filter(section => section === this.sectionId)
      console.log ("this portals zwraca => ", this.sectionn)
      // this.portalService.getSectionData(this.portals, this.sectionId)
      // this sekcja = this.portals.filter(this.portals.sections => sections.name == this.sectionId);
      // this.sections = this.portals.filter()
      // this.sections = [...this.portals]
      // console.log("this.sections =>",section)
      // console.log("this.portals", portals.sections)
      //this.sections = this.portals.filter(data => data[ this.portalId].sections["name"] === this.portalId)
      // perzechodzi do portalu
// this.sekcja = this.portals.filter(portals => portals.sections['name'] == this.sectionId)
     //this.sekcja = this.portals.filter(data[] == this.sectionId)
      //nie przechodzi sdo sekji
    
      //console.log(this.portals.sections['name'])
      // this.portals = this.portals.filter(this.portals['sections'])
      // console.log(this.portals[0].sections['name'])
      // this.sekcja = this.portals.filter(portals => this.portals[0].sections[0] == this.sectionId)
      // console.log(this.portals["sections"])
     
    //  console.log(this.portals[0].sections[0]["name"] == "lessons")
    })
    
    this.portalService.getPortals()
    .subscribe((portalsData: SectionModel[]) => {
      console.log("section data", portalsData)
    })

    
  }
  

}
