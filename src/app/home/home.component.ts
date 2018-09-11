import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Subscription } from 'rxjs';
import { AppModel } from '../app.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  portalName;
  portal;
  portalsData: AppModel[] = [];

  // private yogasSub: Subscription;
  public clickClose = "open";
  constructor(
    private portalService: AppService,
    private route: Router,
    private router: ActivatedRoute) { }

  myFunc() {
    if (this.clickClose == "close") {
      return this.clickClose = "open"
    } else {
      return this.clickClose = "close"
    }

  };

  exists(portalName) {
    const portal = this.portalsData.filter(portal => portal.name === portalName)
    if (portal.length > 0) {
      return true;
    } else {
      return false;
    }
  };


  ngOnInit() {

    this.router.paramMap
      .subscribe(
        params => {
          this.portalName = params.get('portal');
        });

    this.portalService.getPortals()
      .subscribe(data => this.portalsData = data
      );
  }
}

