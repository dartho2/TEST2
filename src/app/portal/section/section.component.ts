import {Component, Input, OnInit, OnChanges} from '@angular/core';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html'
})

export class SectionComponent implements OnInit, OnChanges {
  @Input()
  section;

  ngOnInit() {
    
  }
  ngOnChanges() {
    $(document).ready(function(){
      $(this).scrollTop(0);
      console.log('up')
  });
  }
}

