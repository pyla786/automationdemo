import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-scheduleorder-dialog',
  templateUrl: './scheduleorder-dialog.component.html',
  styleUrls: ['./scheduleorder-dialog.component.scss']
})
export class ScheduleorderDialogComponent implements OnInit {
  public showEmpty: boolean = false;
  site = [
    {name:"Parameter 1",value:"87kV",wupper:"89KV",wlower:"85KV",aupper:"91KV",alower:"83KV"}
  ]
  
  constructor(public dialogRef: MatDialogRef<ScheduleorderDialogComponent>) { }

  ngOnInit() {

  }

  close(): void {
    this.dialogRef.close();
  }

}
