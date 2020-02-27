import { Component, Input, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'dialogue',
  templateUrl: './dialog.component.html',
  styleUrls: [ './dialog.component.css' ]
})
export class DialogComponent  {

   constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) {

    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
