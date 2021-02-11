import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-driveurldialog',
  templateUrl: './driveurldialog.component.html',
  styleUrls: ['./driveurldialog.component.scss']
})
export class DriveurldialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public doc: any ,public dialogRef: MatDialogRef<DriveurldialogComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
