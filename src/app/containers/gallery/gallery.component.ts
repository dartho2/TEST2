import {Component, Input, OnInit} from '@angular/core';
import {AppModel} from '../../app.model';
import {AppService} from '../../app.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {
  private _data = new BehaviorSubject<AppModel[]>([])
  gallery;
  portals;

  @Input()
  set data(value) {
    this._data.next(value)
  }

  get data() {
    return this._data.getValue();
  }

  constructor(private portalService: AppService,
              private route: Router,
              private router: ActivatedRoute) {
  }

  ngOnInit() {
    this._data
      .subscribe(x => {
        this.gallery = this.data
      })
  }
}
