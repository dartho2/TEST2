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
        $(this).closest('tr').find('td.table-o-a:not(:first-child)').removeAttr('value_test', 1).attr('value_test', 0);
        $(this).addClass('selected');
        $(this).attr('value_test', 1)
      });
      
      function update_counts() {
        var result = [];
        var thead = [];
       
        $('table tr').each(function () {
          $('td.table-o-a:not(:first-child)', this).each(function (index, val) {
            if (!result[index]) result[index] = 0;
            result[index] += parseInt($(this).attr("value_test"));
          });
        });
      
          $('thead[id="table-o-a"]').each(function () {
            $('th', this).each(function (index, val) {
            thead[index] = $(this).html()
            });
          });
  
        $(result, thead).each(function () {
        $('table tr').last().html('<td data-label='+ thead[0] +' class="result-test">Wynik</td>')
        .append($('<td data-label='+ thead[1]+ ' class="result-test">').append(result[0]))
        .append($('<td data-label='+ thead[2]+ ' class="result-test">').append(result[1]))
        .append($('<td data-label='+ thead[3]+ ' class="result-test">').append(result[2]))
        });
  
      }

      $('td.table-o-a:not(:first-child)').click(function () {  
        update_counts();
      });
      
    })
  }

}
