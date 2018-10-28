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
  constructor(public portals: PortalComponent) { }

  ngOnInit() {
    this.change();
  }
  onHiddenMe(){
    this.change();
  }
  change(){
    $(document).ready(function () {
    $(".navbar-nav li a").click(function (event) {
      if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
    })
  });
  }
 

}