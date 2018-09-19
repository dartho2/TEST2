import {Component, Input, OnInit} from '@angular/core';
import {PortalComponent} from '../../../../portal.component';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input()
  data;
  typeClasses;
  section
  service = this.portals;
  constructor(public portals: PortalComponent) {
    
  }
  portalFilter(portal) {
    this.typeClasses = portal.sections.find(section => section.name === 'types_classes');
     }
  
 
  ngOnInit() {
    
    
  }
}
