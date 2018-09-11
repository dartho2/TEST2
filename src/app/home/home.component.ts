import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppService} from '../app.service';
import {AppModel} from '../app.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  portalName;
  portal;
  portalsData: AppModel[] = [];


  constructor(private portalService: AppService,
              private router: ActivatedRoute) {
  }

  exists(portalName) {
    const portal = this.portalsData.filter(portal => portal.name === portalName);
    return portal.length > 0;
  }


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

