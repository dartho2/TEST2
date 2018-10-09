import {Component, Input} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {PortalComponent } from '../../../../portal.component';
import {DialogComponent} from '../dialog/dialog.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input()
  data;

  fileNameDialogRef: MatDialogRef<DialogComponent>;
  
  constructor(
    public dialog: MatDialog,
    public portals: PortalComponent) { }
  
    openDialog(nameClass) {
      const dialogRef = this.dialog.open(DialogComponent, {
        data: {data: nameClass, type_class: "text"}
    })
  }
  getDataType() {
      if (!this.data) {
        return 'none';
      } else if (Array.isArray(this.data)){
        return 'array'
      } else if (this.data.content) {
        return 'content'
      } else {
        return 'string'
      } 
  }
}
