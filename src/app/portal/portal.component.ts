import {Component, Input, OnInit} from '@angular/core';
import {AppModel} from '../app.model';
import { ActivatedRoute} from '@angular/router';
import {AppService} from '../app.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
  private _data = new BehaviorSubject<AppModel[]>([]);
  portals;
  setImageData;

  @Input()
  set data(value) {
    this._data.next(value);
  }

  get data() {
    return this._data.getValue();
  }

  portalId: string;

  constructor(private portalService: AppService,
              private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.paramMap
      .subscribe(
        params => {
          const sectionId = params.get('section');
          this.portalId = params.get('portal');
          this._data
            .subscribe(x => {
              this.portals = this.portalCategory(this.data, this.portalId, sectionId);
            });

        });

  }

  portalCategory(data: AppModel[], portal, section) {
    const result = data.filter(data => data.name === portal);
    this.setImageData = this.portalService.setImages(result, portal);

    return result[0].sections.filter(sections => sections.name);
  }
}

