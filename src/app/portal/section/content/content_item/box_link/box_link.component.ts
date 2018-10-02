import {Component, OnInit, Input} from '@angular/core';
import { PortalComponent } from '../../../../portal.component';

@Component({
  selector: 'app-box-link',
  templateUrl: './box_link.component.html',
  styleUrls: ['./box_link.component.css']
})
export class BoxLinkComponent implements OnInit {
  @Input()
  data;
  typeClasses;
  service = this.portals;
 
  constructor(public portals: PortalComponent) { }
  
  portalFilter(link) {
    this.typeClasses = this.portals.portal.sections.find(section => section.name === link)
     }
  ngOnInit() {
  }
}

