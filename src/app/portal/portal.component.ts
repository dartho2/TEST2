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

  slider;
  hover;
  portal;
  activeSection;

  constructor(private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.portal = this.portals.find(portal => portal.name === params.get('portal'));
      this.setCurrentSection(params.get('section'));
      this.slider = params.get('section');
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