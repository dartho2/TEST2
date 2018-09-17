import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-fb',
  templateUrl: './fb.component.html'
})
export class FbComponent {
  @Input()
  data;
}
