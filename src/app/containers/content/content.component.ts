import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppModel } from '../../app.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppService } from '../../app.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})

export class ContentComponent implements OnInit {
  private _data = new BehaviorSubject<AppModel[]>([])
  sections= [];
  portals;
  galleryData;
  textData;
  imageData;

  @Input()
  set data(value) {
    this._data.next(value)
  }
  get data() {
    return this._data.getValue();
  }

  constructor(
    private portalService: AppService,
    private route: Router,
    private router: ActivatedRoute) {
  }

  ngOnInit() {


          this._data
            .subscribe(x => {
              this.sections = this.data
              this.galleryData = this.data.filter(type => type.type == 'gallery')
              this.textData = this.data.filter(type => type.type == 'text')
              this.imageData = this.data.filter(type => type.type == 'text_and_image')
            })
  }


}
