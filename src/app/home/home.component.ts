import { Component, OnInit } from '@angular/core';

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
  private yogasSub: Subscription;

  constructor(public yogasService: AppService) { }

  ngOnInit() {

    this.yogasService.getPortals().subscribe((data: AppModel[]) => {
      this.portals = data;
    })
  }
}
