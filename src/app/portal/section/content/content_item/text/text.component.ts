import {Component, Input, OnInit} from '@angular/core';
import {PortalComponent} from '../../../../portal.component';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})

export class TextComponent implements OnInit {
  @Input()
  data;
  portals = this.portal;
  constructor(public portal: PortalComponent) {}
  ngOnInit() {
  }
}

