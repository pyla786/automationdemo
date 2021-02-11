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
import { ProjectMasterComponent } from './project-master/project-master.component';
import { ProjectGridviewComponent } from './project-master/project-gridview/project-gridview.component';
import { ProjectKanbanviewComponent } from './project-master/project-kanbanview/project-kanbanview.component';
import { ProjectMapviewComponent } from './project-master/project-mapview/project-mapview.component';
import { AddprojectDialogComponent } from './project-master/addproject-dialog/addproject-dialog.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { ProjectGridcolumnsComponent } from './project-master/project-gridcolumns/project-gridcolumns.component';
import { ProjectDashboardComponent } from './project-master/project-dashboard/project-dashboard.component';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { LogisticsdialogComponent } from './project-master/logisticsdialog/logisticsdialog.component';
import { GridColumnsProjectsComponent } from './grid-columns-projects/grid-columns-projects.component';

export const routes = [
  { path: '', redirectTo: 'gridview', pathMatch: 'full' },
  { path: 'gridview', component: ProjectGridviewComponent },
  { path: 'mapview', component: ProjectMapviewComponent },
  // { path: 'kanbanview', component: ProjectKanbanviewComponent, data: { breadcrumb: 'Projects',description: "This screen allows to add and manage projects details and their contacts. Screen comes with an ability where admin can view the details in the form of grid or map and does allows the admin to query and view the data in the grid view section."}},
  { path: 'project-dashboard', component: ProjectDashboardComponent, loadChildren: './project-master/project-dashboard/project-dashboard.module#ProjectDashboardModule', data: { breadcrumb: 'Project Dashboard' } },
];

@NgModule({
  declarations: [ProjectMasterComponent,ProjectGridviewComponent,ProjectKanbanviewComponent,ProjectMapviewComponent, AddprojectDialogComponent, ProjectGridcolumnsComponent, ProjectDashboardComponent, LogisticsdialogComponent, GridColumnsProjectsComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,DndModule,DragDropModule,MglTimelineModule
  ],
  providers: [AlertService,DragulaService],
  entryComponents: [LogisticsdialogComponent,DeleteConfirmDialogComponent,AddprojectDialogComponent,ProjectGridcolumnsComponent,GridColumnsProjectsComponent]
})
export class ProjectsModule { }

