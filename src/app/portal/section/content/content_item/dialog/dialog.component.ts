import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { AppModel } from '../../../../../app.model';

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html'
})
export class DialogComponent {
  
  constructor(public dialogRef: MatDialogRef<AppModel>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
        
    }
}