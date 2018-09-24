import {Component, OnInit, Input} from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { PortalComponent } from '../../../../portal.component';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input()
  data;
  typeClasses;
  service = this.portals;
  fileNameDialogRef: MatDialogRef<DialogComponent>;
  
  constructor(public dialog: MatDialog,
    public portals: PortalComponent) { }
  
    openDialog(nameClass) {
      let types = this.service.portal.sections.filter(sections => sections.name === this.data.data[0].shared)
      // let types = this.portals.shared.filter(sections => sections.name === this.data.data[0].shared)
      const dialogRef = this.dialog.open(DialogComponent, {
        data: {data: types, type_class: nameClass}
    })
  }
  portalFilter(portal) {
    this.typeClasses = portal.sections.find(section => section.name === this.data.data[0].shared);
     }
  ngOnInit() {
  }
}

