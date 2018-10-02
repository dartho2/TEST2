import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-textimages',
  templateUrl: './textimages.component.html',
  styleUrls: ['./textimages.component.css']
})
export class TextimagesComponent {
  @Input()
  data;
}
