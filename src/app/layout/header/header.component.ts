import {Component, Input, OnInit} from '@angular/core';
import {PortalComponent} from '../../portal/portal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  portal;
  hover;
  service = this.portals;
  constructor(public portals: PortalComponent) {}

  ngOnInit() {
  }
}