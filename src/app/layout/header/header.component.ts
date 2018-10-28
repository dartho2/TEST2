import { Component, Input, OnInit } from '@angular/core';
import { PortalComponent } from '../../portal/portal.component';
declare var jquery: any;
declare var $: any;

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

  ngOnInit() {}

  onHiddenMe(){
    this.change();
  }
  
  change(){
    if($(".navbar-nav li a")){
      if (!$(this).parent().hasClass('dropdown'))
      $(".navbar-collapse").collapse('hide');
    }
  }
 

}