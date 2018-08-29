import { Component, OnInit } from '@angular/core';
import { AppModel } from '../app.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppService } from '../app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
  portalId: string;
  portals: AppModel[] = []
  constructor(
    private portalService: AppService,
    private route: Router,
    private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe(
      params => {
              this.portalId = params.get('portal');
              console.log("portal>", this.portalId)
      }
    )
    this.portalService.getPortals()
    .subscribe((data: AppModel[]) => {
      
      this.portals = data.filter(data => data['name'] == this.portalId);
      console.log(this.portals)
    })
        
  }

}
