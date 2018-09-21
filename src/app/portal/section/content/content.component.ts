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
    if (this.contentItems[0].shared) {
      let shared = this.portals.shared.filter(x => x.name === this.contentItems[0].shared);     
      this.contentItems = shared[0].data
      return [...this.contentItems]
    }
  }
}
