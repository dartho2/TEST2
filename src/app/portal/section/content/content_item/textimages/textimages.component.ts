import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-textimages',
  templateUrl: './textimages.component.html'
})
export class TextimagesComponent {
  @Input()
  data;
}
