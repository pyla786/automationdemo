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
import { ClientProjectMasterComponent } from './client-project-master/client-project-master.component';
import { ClientProjectGridviewComponent } from './client-project-master/client-project-gridview/client-project-gridview.component';
import { ClientProjectMapviewComponent } from './client-project-master/client-project-mapview/client-project-mapview.component';
import { ClientProjectDashboardComponent } from './client-project-master/client-project-dashboard/client-project-dashboard.component';
import { ClientMetricsComponent } from './client-project-master/client-project-dashboard/client-metrics/client-metrics.component';
import { ClientExceptionsComponent } from './client-project-master/client-project-dashboard/client-exceptions/client-exceptions.component';
import { ClientModulesanddevicesComponent } from './client-project-master/client-project-dashboard/client-modulesanddevices/client-modulesanddevices.component';
import { MglTimelineModule } from 'angular-mgl-timeline';

export const routes = [
  { path: '', redirectTo: 'gridview', pathMatch: 'full' },
  { path: 'gridview', component: ClientProjectGridviewComponent, data: {breadcrumb: "Projects",description: "This screen allows to add and manage projects details and their contacts. Screen comes with an ability where admin can view the details in the form of grid or map and does allows the admin to query and view the data in the grid view section."} },
  { path: 'mapview', component: ClientProjectMapviewComponent, data: { breadcrumb: 'Projects',description: "This screen allows to add and manage projects details and their contacts. Screen comes with an ability where admin can view the details in the form of grid or map and does allows the admin to query and view the data in the grid view section."} },
  { path: 'project-dashboard',component:ClientProjectDashboardComponent,loadChildren: './client-project-master/client-project-dashboard/client-project-dashboard.module#ClientProjectDashboardModule', data: { breadcrumb: 'Project Dashboard' } },
];

@NgModule({
  declarations: [ClientProjectMasterComponent, ClientProjectGridviewComponent, ClientProjectMapviewComponent, ClientProjectDashboardComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,DndModule,DragDropModule,MglTimelineModule
  ],
  providers: [AlertService,DragulaService],
})

export class ClientProjectsModule { }

