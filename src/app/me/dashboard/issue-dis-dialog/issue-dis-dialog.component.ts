import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-issue-dis-dialog',
  templateUrl: './issue-dis-dialog.component.html',
  styleUrls: ['./issue-dis-dialog.component.scss']
})
export class IssueDisDialogComponent implements OnInit {

  constructor(public fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public issue: any, public dialogRef: MatDialogRef<IssueDisDialogComponent>) {

  }



  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
