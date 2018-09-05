import {Component, OnInit, Injectable} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppService} from '../app.service';
import {AppModel} from '../app.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  portalId;
  portal;
  data;
  portals: AppModel[] = [];
  public clickClose = 'open';

  constructor(private portalService: AppService,
              private router: ActivatedRoute) {
  }

  myFunc() {
    this.clickClose = this.clickClose === 'close' ? 'open' : 'close';
  }

  exists(portalId) {
    return this.portals.filter(data => data.name === portalId).length > 0;
  }


  ngOnInit() {

    this.router.paramMap
      .subscribe(
        params => {
          this.portalId = params.get
          ('portal');

        });


    this.portalService.getPortals()
      .subscribe(data => this.portals = data);
  }
}

