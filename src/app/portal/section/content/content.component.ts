import { Component, Input } from '@angular/core';
import { PortalComponent } from '../../portal.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})

export class ContentComponent  {
  @Input()
  contentItems;

  constructor(public portals: PortalComponent) {
  }

}
