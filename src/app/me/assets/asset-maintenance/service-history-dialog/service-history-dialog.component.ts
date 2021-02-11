import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-service-history-dialog',
  templateUrl: './service-history-dialog.component.html',
  styleUrls: ['./service-history-dialog.component.scss']
})
export class ServiceHistoryDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ServiceHistoryDialogComponent>) { }

  ngOnInit() {

  }

  close(): void {
    this.dialogRef.close();
  }
}
