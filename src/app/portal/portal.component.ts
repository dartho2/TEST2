import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FacebookService, InitParams} from 'ngx-facebook';
@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html'
})
export class PortalComponent implements OnInit {
  @Input()
  portals;
  hover;
  portal;
  activeSection;
  initParams: InitParams = {
    xfbml: true,
    status: true, 
    cookie: true,
    version: 'v3.1'
  };

  constructor(private router: ActivatedRoute,
    public fb: FacebookService) {

    //  initParams: InitParams = {
    //   xfbml: true,
    //   status: true, 
    //   cookie: true,
    //   version: 'v3.1'
    // };

    

  }

  isActiveSectionMainSection() {
    if (this.portal.sections.length === 0) {
      return true;
    }

    return this.portal.sections[0].name === this.activeSection.name;
  }
  
  
  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      console.log("FB connect")
      this.fb.init(this.initParams);
      this.portal = this.portals.find(portal => portal.name === params.get('portal'));
      this.setCurrentSection(params.get('section'));
    });
  }

  private setCurrentSection(sectionName) {
    if (this.portal && this.portal.sections.length > 0) {
      this.activeSection = this.portal.sections.find(section => section.name === sectionName);
      if (!this.activeSection) {
        this.activeSection = this.portal.sections[0];
      }
    }
  }
}
