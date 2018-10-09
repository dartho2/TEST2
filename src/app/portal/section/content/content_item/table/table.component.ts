import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { PortalComponent } from '../../../../portal.component';
import { DialogComponent } from '../dialog/dialog.component';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input()
  data;

  fileNameDialogRef: MatDialogRef<DialogComponent>;

  constructor(
    public dialog: MatDialog,
    public portals: PortalComponent) { }

  openDialog(nameClass) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { data: nameClass, type_class: "text" }
    })
  }

  getDataType() {
    if (!this.data) {
      return 'none';
    } else if (Array.isArray(this.data)) {
      return 'array'
    } else if (this.data.content) {
      return 'content'
    } else {
      return 'string'
    }
  }
  ngOnInit() {


    $(document).ready(function () {
      $('td.table-o-a:not(:first-child)').click(function () {
        $(this).closest('tr').find('td.table-o-a:not(:first-child)').removeClass('selected');
        $(this).closest('tr').find('td.table-o-a:not(:first-child)').removeAttr('data-value', 1);
        $(this).addClass('selected');
        $(this).attr('data-value_test', 1)
      });
    })
  }

}
