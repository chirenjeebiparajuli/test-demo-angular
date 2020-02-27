import { Component, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}
import {DialogComponent} from '../../dialog/dialog.component';
@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.css' ]
})
export class CardComponent  {
  @Input() cards = '';
  constructor(public dialog: MatDialog) {}
  showProfile(item) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }
}
