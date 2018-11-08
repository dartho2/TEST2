import {Component, Input} from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { PortalComponent } from '../../../../portal.component';

@Component({
  selector: 'app-textimages',
  templateUrl: './textimages.component.html',
  styleUrls: ['./textimages.component.css']
})
export class TextimagesComponent {
  constructor(public dialog: MatDialog,
    public portals: PortalComponent) { }
  
  
  @Input()
  data;
  fileNameDialogRef: MatDialogRef<DialogComponent>;

  openDialog(data) {
console.log(data)
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {data: data, type_class: "image"}
  })
}
// NEW
openDialogImage(data) {
  console.log(data)
      const dialogRef = this.dialog.open(DialogComponent, {
        data: {data, type_class: "referencje"}
    })
  }
// NEW END
}
