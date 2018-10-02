import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { PortalComponent } from '../../portal.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})

export class ContentComponent implements OnChanges {
  @Input()
  contentItems;

  constructor(public portals: PortalComponent) {
  }


  ngOnChanges(){
    
  }
}
