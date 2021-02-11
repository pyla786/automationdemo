import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-open-parameters-dialog',
  templateUrl: './open-parameters-dialog.component.html',
  styleUrls: ['./open-parameters-dialog.component.scss']
})
export class OpenParametersDialogComponent implements OnInit {

  public showEmpty: boolean = false;
  site = [
    {name:"Parameter 1",value:"87kV",wupper:"89KV",wlower:"85KV",aupper:"91KV",alower:"83KV"}
  ]

  constructor(public dialogRef: MatDialogRef<OpenParametersDialogComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }


}
