import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { DragDropModule } from 'primeng/primeng';
import { DndModule } from 'ngx-drag-drop';
import { DragulaService } from 'ng2-dragula';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { ClientProjectMasterComponent } from './client-projects/client-project-master/client-project-master.component';

export const routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {path:'dashboard',loadChildren:'./client-dashboard/client-dashboard.module#ClientDashboardModule',data:{breadcrumb:"Dashboard"}},
    {path:'devices',loadChildren:'./client-device/client-device.module#ClientDeviceModule',data:{breadcrumb:"Devices"}},
    {path:'projects',loadChildren:'./client-projects/client-projects.module#ClientProjectsModule',data:{breadcrumb:"Projects"}},
    {path:'user',loadChildren:'./user/user.module#UserModule',data:{breadcrumb:"User"}}

  ];

// @NgModule({
//   declarations: [ClientProjectMasterComponent, ClientProjectGridviewComponent, ClientProjectMapviewComponent, ClientProjectDashboardComponent, ClientMetricsComponent, ClientExceptionsComponent, ClientModulesanddevicesComponent],
//   imports: [
//     CommonModule,NgxChartsModule,RouterModule.forChild(routes),
//     SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
//     OwlDateTimeModule,OwlNativeDateTimeModule,DndModule,DragDropModule,MglTimelineModule
//   ],
//   providers: [AlertService,DragulaService],
// })
export class ProjectsModule { }

