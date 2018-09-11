import {Component, Input, OnInit} from '@angular/core';
import {AppModel} from '../../app.model';
import {AppService} from '../../app.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html'
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

  constructor(private portalService: AppService,
              private route: Router,
              private router: ActivatedRoute) {
  }

  ngOnInit() {
    this._data
      .subscribe(x => {
        this.textData = this.data
      })
    console.log("text decortac", this.textData)

  }

}
