import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-textimageslist',
  templateUrl: './textimageslist.component.html'
})
export class TextimageslistComponent {
  @Input()
  data;
}
