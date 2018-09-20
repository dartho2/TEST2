import {Component, Input, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {PortalComponent} from '../../../../portal.component';
import {AppModel} from '../../../../../app.model';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input()
  data;
  typeClasses;
  section;
  types;
  service = this.portals;
  constructor(public portals: PortalComponent,
    public dialog: MatDialog) {
    
  }
  openDialog(nameClass) {
    this.types = this.service.portal.sections.filter(sections => sections.name === 'types_classes')
    const dialogRef = this.dialog.open(DialogContentBoxDialog, {
    data: {data: this.types, type_class: nameClass}
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  portalFilter(portal) {
    this.typeClasses = portal.sections.find(section => section.name === 'types_classes');
     }
  
 
  ngOnInit() {
  }
}
@Component({
  selector: 'app-box-dialog',
  templateUrl: 'box-dialog.html',
})
export class DialogContentBoxDialog {
  constructor(
    public dialogRef: MatDialogRef<BoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AppModel) {}
}

