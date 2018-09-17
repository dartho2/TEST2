import {Component, Input, OnInit} from '@angular/core';
import {PortalComponent} from '../../../../portal.component';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html'
})

export class TextComponent implements OnInit {
  @Input()
  data;
  constructor(private portal: PortalComponent) {}
  ngOnInit() {
  }
}

