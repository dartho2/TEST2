import { Component, OnInit, Input } from '@angular/core';
import { AppModel } from '../../app.model';
import { AppService } from '../../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SectionModel } from '../../section/section.model';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  private _data = new BehaviorSubject<AppModel[]>([])
  textData;
  portals;

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
              this.textData = this.data
            })   
  }
}