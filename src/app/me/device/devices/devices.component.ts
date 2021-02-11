import { Component, OnInit } from '@angular/core';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { MatDialog } from '@angular/material';
import { ScheduleorderDialogComponent } from './scheduleorder-dialog/scheduleorder-dialog.component';
import {AddDeviceComponent} from './addDevice/addDevice.component';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
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
    const dialogRef = this.dialog.open(ScheduleorderDialogComponent, {
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

  public openAddDevice(Campaign) {
    const dialogRef = this.dialog.open(AddDeviceComponent, {
      data: Campaign,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(campaign => {
      if (campaign === 'save') {
        
      } else {
      }
    });
  }

  openDeleteDialog(value) {
   let dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
     data: value,
     height: 'auto',
     width: 'auto',
     autoFocus: false
   });
   dialogRef.afterClosed().subscribe(data => {
     if (value != null && value !== undefined) {
     
     }
   });
  }
  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container');
    if (side == 'right')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
   }
}
