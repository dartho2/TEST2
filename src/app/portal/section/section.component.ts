import {Component, Input, OnInit, OnChanges} from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html'
})

export class SectionComponent implements OnChanges {
  @Input()
  section;

  ngOnChanges() {
    $(document).ready(function(){
      $(this).scrollTop(0);
  });
  }
}

