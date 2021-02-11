import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesComponent } from './devices/devices.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ScheduleorderDialogComponent } from './devices/scheduleorder-dialog/scheduleorder-dialog.component';
import {AddDeviceComponent} from './devices/addDevice/addDevice.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { AddchecklistDialogComponent } from './checklist/addchecklist-dialog/addchecklist-dialog.component';
import { DataFieldComponent } from './devices/data-field/data-field.component';
import { DatafieldCardviewComponent } from './devices/data-field/datafield-cardview/datafield-cardview.component';
import { DatafieldGridviewComponent } from './devices/data-field/datafield-gridview/datafield-gridview.component';
import {ChecklistComponent} from './checklist/checklist.component';

export const routes = [
  { path: '', component:DevicesComponent, pathMatch: 'full' },
  // {path:'datafield',redirectTo:'cardview', data:{breadcrumb:"Data Field"}},
  {path:'cardview',component:DatafieldCardviewComponent,data:{breadcrumb:"Data Field"}},
  {path:'gridview',component:DatafieldGridviewComponent,data:{breadcrumb:"Data Field"}}
];

@NgModule({
  declarations: [ ChecklistComponent, DevicesComponent,  ScheduleorderDialogComponent, AddchecklistDialogComponent,AddDeviceComponent, DataFieldComponent, DatafieldCardviewComponent, DatafieldGridviewComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  entryComponents:[ScheduleorderDialogComponent,DeleteConfirmDialogComponent,AddDeviceComponent,AddchecklistDialogComponent]
})
export class DeviceModule { }
