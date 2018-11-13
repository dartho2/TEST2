import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacebookService, InitParams } from 'ngx-facebook';
import { AppService } from '../app.service';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html'
})
export class PortalComponent implements OnInit, OnChanges {
  @Input()
  portals;
  portal;
  activeSection;
  initParams: InitParams = {
    xfbml: true,
    status: true,
    cookie: true,
    version: 'v3.1'
  };

  constructor(private router: ActivatedRoute, private portalService: AppService,
    public fb: FacebookService,
    private title: Title,
    private meta: Meta) {
  }

  isActiveSectionMainSection() {
    if (this.portal.sections.length === 0) {
      return true;
    }

    return this.portal.sections[0].name === this.activeSection.name;
  }


  ngOnInit() {
  
    this.portalService.getPortals().subscribe(x => {
      let seo = x
    });
    this.router.paramMap.subscribe(params => {
      this.fb.init(this.initParams);
      this.portal = this.portals.find(portal => portal.name === params.get('portal'));
      this.setCurrentSection(params.get('section'));
    });
      this.title.setTitle('Karma Zdrowia - ' + this.portal.label);
      this.meta.addTag({ name: "description", content: this.portal.description })
  }
  ngOnChanges() {

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
