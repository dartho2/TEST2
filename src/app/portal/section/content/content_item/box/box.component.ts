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
  service = this.portals;
  constructor(public portals: PortalComponent) {}

  
  portalFilter(section) {
    this.typeClasses = section.find(section => section.name === 'types_classes');
  }
  ngOnInit() {
    
    
  }
}
