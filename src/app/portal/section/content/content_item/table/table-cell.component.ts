import {Component, Input} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {PortalComponent } from '../../../../portal.component';
import {DialogComponent} from '../dialog/dialog.component';


@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
})
export class TableCellComponent {
  @Input()
  data;

  fileNameDialogRef: MatDialogRef<DialogComponent>;
  
  constructor(
    public dialog: MatDialog,
    public portals: PortalComponent) { }
  
    openDialog(nameClass) {
      let types = this.portals.portal.sections.filter(sections => sections.name === this.data.class_shared)
      const dialogRef = this.dialog.open(DialogComponent, {
        data: {data: types, type_class: nameClass}
    })
  }
}
