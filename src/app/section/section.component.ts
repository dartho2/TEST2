import { Component, OnInit, OnChanges, SimpleChange, Input } from '@angular/core';
import { AppModel } from '../app.model';
import { AppService } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SectionModel } from './section.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
private _data = new  BehaviorSubject<AppModel[]>([])
dupa: AppModel[] = [];
  @Input() 
  set data(value){
    this._data.next(value)
  }
  get data(){
    
    return this._data.getValue();
    
  }
  
 
  constructor(
    private portalService: AppService,
    private route: Router,
    private router: ActivatedRoute) {
  }  
 
  ngOnInit() {
    this._data.subscribe(x => {
      this.dupa = this.data
      console.log(this.dupa)
    })
  

      
    }
    
}
