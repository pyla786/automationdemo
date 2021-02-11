import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addDevice',
  templateUrl: './addDevice.component.html',
  styleUrls: ['./addDevice.component.scss']
})
export class AddDeviceComponent implements OnInit {
  public showEmpty: boolean = false;
  
  
  constructor(public dialogRef: MatDialogRef<AddDeviceComponent>) { }

  ngOnInit() {

  }

  close(): void {
    this.dialogRef.close();
  }

}
