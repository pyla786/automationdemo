import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {ClientDeviceComponent} from './client-device.component';
import {ClientDatafieldCardviewComponent} from './data-field/client-datafield-cardview/client-datafield-cardview.component'
import {ClientDatafieldGridviewComponent} from './data-field/client-datafield-gridview/client-datafield-gridview.component';
import { OpenParametersDialogComponent } from './open-parameters-dialog/open-parameters-dialog.component';

export const routes = [
  { path: '', component:ClientDeviceComponent, pathMatch: 'full' },
  {path:'cardview',component:ClientDatafieldCardviewComponent,data:{breadcrumb:"Data Field"}},
  {path:'gridview',component:ClientDatafieldGridviewComponent,data:{breadcrumb:"Data Field"}}
];

@NgModule({
  declarations: [ ClientDeviceComponent,ClientDatafieldCardviewComponent,ClientDatafieldGridviewComponent, OpenParametersDialogComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  entryComponents:[OpenParametersDialogComponent]
})
export class ClientDeviceModule { }
