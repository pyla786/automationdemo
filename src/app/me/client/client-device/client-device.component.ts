import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {OpenParametersDialogComponent} from './open-parameters-dialog/open-parameters-dialog.component';

@Component({
  selector: 'app-client-device',
  templateUrl: './client-device.component.html',
  styleUrls: ['./client-device.component.scss']
})
export class ClientDeviceComponent implements OnInit {

  public showEmpty: boolean = false;
  filterToggle = false;
  audit = [
  {id:"#0037",serialno:"84567892",type:"Temperature Sensors",make:"Siemens",model:"D-1234",client:"ABC Infra",project:"Test Project",module:"Test Module",date_installed:"01 - Jan - 2020",parameters:"5",data_field:"View",status:"Inactive"},
  {id:"#0027",serialno:"67542317",type:"Voltage Meter",make:"Siemens",model:"D-1234",client:"ABC Infra",project:"Test Project",module:"Test Module",date_installed:"03 - Jan - 2020",parameters:"5",data_field:"View",status:"Active"},
  {id:"#0023",serialno:"98753241",type:"Current Meter",make:"Siemens",model:"D-1234",client:"ABC Infra",project:"Test Project",module:"Test Module",date_installed:"05 - Jan - 2020",parameters:"5",data_field:"View",status:"Active"},
  // {id:"#0037",type:"Power Meter",make:"Siemens",model:"D-1234",client:"ABC Infra",project:"Test Project",module:"Test Module",date_installed:"08 - Jan - 2020",parameters:"5",data_field:"View",status:"Inactive"},
  // {id:"#0037",type:"Power Meter",make:"Siemens",model:"D-1234",client:"ABC Infra",project:"Test Project",module:"Test Module",date_installed:"09 - Jan - 2020",parameters:"5",data_field:"View",status:"Active"},
  ]

  constructor(public dialog : MatDialog) { }

  ngOnInit() {

  }

  public openCampaignDialog(Campaign) {
    const dialogRef = this.dialog.open(OpenParametersDialogComponent, {
      data: Campaign,
      height: 'auto',
      width: '900px',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(campaign => {
      if (campaign === 'save') {
        
      } else {
      }
    });
  }

  
}
