import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-ol',
  templateUrl: './ol.component.html'
})
export class OlComponent {
  @Input()
  data;
  @Input()
  index;
  getDataType() {
    if (!this.data) {
      return 'none';
    } else if (Array.isArray(this.data)) {
      return 'array'
    } else if (this.data.content) {
      return 'content'
    } else {
      return 'string'
    }
  }
}
