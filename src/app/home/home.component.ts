import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  activePortal;
  portals = [];
  spiner = false;

  constructor(private portalService: AppService,
    private router: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private title: Title,
    private meta: Meta) {
  }

  isActivePortalValid() {
    return this.portals.find(portal => portal.name === this.activePortal) != null;
  }

  ngOnInit() {
    
    this.router.paramMap.subscribe(params => this.activePortal = params.get('portal'));
    this.spinner.show();
    this.portalService.getPortals().subscribe(portals => {
      this.portals = portals
      if(this.isActivePortalValid() != true) {
         this.title.setTitle('Karma Zdrowia');
      this.meta.addTag({ name: "description", content: 'Treningi personalne, Gabinet P-DTR , Studio Jogi, Centrum Fitness, Doradztwo żywieniowe'})
      }
     
     
        this.spinner.hide()
        this.spiner = true;
      
    });

  }
}

