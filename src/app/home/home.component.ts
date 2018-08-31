import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Subscription } from 'rxjs';
import { AppModel } from '../app.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  portals: AppModel[] = []
  // private yogasSub: Subscription;
  public clickClose = "open";
  constructor(
              public portalService: AppService,
              private router: Router) { }
              myFunc() {
                if (this.clickClose =="close")
                { 
                  return this.clickClose = "open"
                } else {
                  return this.clickClose = "close"
                }
        
              }

  ngOnInit() {

    this.portalService.getPortals()
    .subscribe((data: AppModel[]) => {
      
      this.portals = data;
     
    })
  
  }
}
