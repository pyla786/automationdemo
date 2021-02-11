import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-issue-dialog',
  templateUrl: './issue-dialog.component.html',
  styleUrls: ['./issue-dialog.component.scss']
})
export class IssueDialogComponent implements OnInit {

  constructor(public fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public project: any, public dialogRef: MatDialogRef<IssueDialogComponent>) {

  }

  Issues = [
    { issue_date: "7-Jan-2021", description: "Temperature Control", posted_by: "Suresh", status: "Open", date_resolved: "", resolved_by: "" },
    { issue_date: "7-Jan-2021", description: "Cistern issues", posted_by: "Mike", status: "Resolved", date_resolved: "23-Dec-2020", resolved_by: "Raj Kumar" },
    { issue_date: "10-Jan-2021", description: "Issue in Valves", posted_by: "COllin", status: "On Hold", date_resolved: "", resolved_by: "" },
    { issue_date: "12-Jan-2021", description: "Maintenance", posted_by: "Murali", status: "Resolved", date_resolved: "7-Jan-2021", resolved_by: "Dhanraj" },
    { issue_date: "17-Jan-2021", description: "Engineering", posted_by: "Praveen", status: "Open", date_resolved: "17-Dec-2020", resolved_by: "Vijay" },
  ]

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
