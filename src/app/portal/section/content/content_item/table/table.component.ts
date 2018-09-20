import {Component, Input, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AppModel} from '../../../../../app.model'
import { PortalComponent } from '../../../../portal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input()
  data;
  types;
  service = this.portals;
  constructor(public dialog: MatDialog,
    public portals: PortalComponent) {}
  
  

  openDialog(nameClass) {
    this.types = this.service.portal.sections.filter(sections => sections.name === 'types_classes')
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
    data: {data: this.types, type_class: nameClass}
    });
    console.log(nameClass)
    console.log(this.service.portal)
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit() {
  }
}
@Component({
  selector: 'app-table-dialog',
  templateUrl: 'table-dialog.html',
})
export class DialogContentExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<TableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AppModel) {}
}
