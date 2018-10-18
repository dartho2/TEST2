import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  constructor(private spinner: NgxSpinnerService) { }

  title = 'TEST2';
  ngOnInit(){
  //   this.spinner.show();
  //   setTimeout(() => {
  //     this.spinner.hide();
  // }, 5000);
  }
}
