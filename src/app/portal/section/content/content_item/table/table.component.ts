import {Component, Input} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

import {PortalComponent } from '../../../../portal.component';
import {DialogComponent} from '../dialog/dialog.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  {
  @Input()
  data;
  types;
  service = this.portals;
  fileNameDialogRef: MatDialogRef<DialogComponent>;
  
  constructor(public dialog: MatDialog,
    public portals: PortalComponent) { }
  
    openDialog(nameClass) {
      this.types = this.service.portal.sections.filter(sections => sections.name === 'types_classes')
      const dialogRef = this.dialog.open(DialogComponent, {
        data: {data: this.types, type_class: nameClass}
    })
  }
}
