import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-review-dialog',
  templateUrl: './review-dialog.component.html',
  styleUrls: ['./review-dialog.component.scss']
})
export class ReviewDialogComponent implements OnInit {

  constructor(public fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public project: any, public dialogRef: MatDialogRef<ReviewDialogComponent>) {

  }

  remark = false;

  userType:any;

  reviews = [
    { review_date: "17-Dec-2020", comment: "Issue in Valves", review_by: "Naveen" },
    { review_date: "23-Dec-2020", comment: "-", review_by: "-" },
    { review_date: "17-Dec-2020", comment: "Temperature Control", review_by: "Collin" },
    { review_date: "7-Jan-2021", comment: "Maintenance", review_by: "Selvam" },
  ]

  ngOnInit() {
    this.userType = localStorage.getItem('userType');
  }

  close(): void {
    this.dialogRef.close();
  }

  changeRemark() {
    this.remark = !this.remark;
  }
}
