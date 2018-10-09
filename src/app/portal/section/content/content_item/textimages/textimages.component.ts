import {Component, Input} from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'app-textimages',
  templateUrl: './textimages.component.html',
  styleUrls: ['./textimages.component.css']
})
export class TextimagesComponent {
  constructor(public dialog: MatDialog) { }
  
  @Input()
  data;
  fileNameDialogRef: MatDialogRef<DialogComponent>;

  openDialog(data) {
console.log(data)
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {data: data, type_class: "image"}
  })
}
}
