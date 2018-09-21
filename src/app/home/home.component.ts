import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppService} from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  activePortal;
  portals = [];
  shared = [];


  constructor(private portalService: AppService,
              private router: ActivatedRoute) {
  }

  isActivePortalValid() {
    return this.portals.find(portal => portal.name === this.activePortal) != null;
  }

  ngOnInit() {
    this.router.paramMap.subscribe(params => this.activePortal = params.get('portal'));
    this.portalService.getPortals().subscribe(portals => this.portals = portals);
    this.portalService.getShared().subscribe(shared => this.shared = shared);;
  }
}

