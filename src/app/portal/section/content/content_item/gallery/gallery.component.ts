import {Component, Input, OnInit} from '@angular/core';
import baguetteBox from 'baguettebox.js';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input()
  data;
ngOnInit(){
  
  $(document).ready(function () {
    console.log("initial")
  baguetteBox.run('.tz-gallery', {
    
});
  });
}
}
