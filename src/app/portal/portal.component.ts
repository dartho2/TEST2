import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
  @Input()
  portals;
  hover;
  portal;
  activeSection;

  constructor(private router: ActivatedRoute) {
  }

  isActiveSectionMainSection() {
    if (this.portal.sections.length === 0) {
      return true;
    }

    console.log(this.portal.sections);
    console.log(this.activeSection);

    return this.portal.sections[0].name === this.activeSection.name;
  }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
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
