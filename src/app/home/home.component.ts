import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Subscription } from 'rxjs';
import { AppModel } from '../app.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  portalId;
  portal;
  portals: AppModel[] = []
  // private yogasSub: Subscription;
  public clickClose = "open";
  constructor(
    private portalService: AppService,
    private route: Router,
    private router: ActivatedRoute) {
  }

  myFunc() {
    if (this.clickClose == "close") {
      return this.clickClose = "open"
    } else {
      return this.clickClose = "close"
    }

  }
  exists(portalId) {
   const portal = this.portals.filter(data => data.name === portalId)
  if (portal.length > 0) {
    return true;
  } else {
    return false;
  }
  }


  ngOnInit() {

    this.portalService.getPortals()
      .subscribe((data: AppModel[]) => {
        this.portals = data;

        this.router.paramMap
          .subscribe(
            params => {
              this.portalId = params.get('portal');
              
            })


      }
      )
  }
}
