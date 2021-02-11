import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from './activity/activity.component';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DndModule } from 'ngx-drag-drop';
import { SharedModule } from 'src/app/shared/shared.module';
import { DragDropModule } from 'primeng/primeng';
import { OverviewComponent } from './overview/overview.component';
import { ModulesandDevicesComponent } from './modulesanddevices/modulesanddevices.component';
import { SitevisitdialogComponent } from './modulesanddevices/sitevisitdialog/sitevisitdialog.component';
import { SitevisitadddocComponent } from './modulesanddevices/sitevisitadddoc/sitevisitadddoc.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { ServicesComponent } from './services/services.component';
import { ConceptComponent } from './concept/concept.component';
import { ConceptdialogComponent } from './concept/conceptdialog/conceptdialog.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TenderComponent } from './tender/tender.component';
import { DesignComponent } from './design/design.component';
import { DesigndialogComponent } from './design/designdialog/designdialog.component';
import { DrawingsComponent } from './drawings/drawings.component';
import { DrawingdialogComponent } from './drawings/drawingdialog/drawingdialog.component';
import { ClosureComponent } from './closure/closure.component';
import { QualityDialogComponent } from './closure/quality-dialog/quality-dialog.component';
import { TestrecordDialogComponent } from './closure/testrecord-dialog/testrecord-dialog.component';
import { ConstructionComponent } from './construction/construction.component';
import { BudgetComponent } from './budget/budget.component';
import { AddsiteDialogComponent } from './budget/addsite-dialog/addsite-dialog.component';
import { MetricsComponent } from './metrics/metrics.component';
import { AddNotesInDesignComponent } from './design/add-notes-in-design/add-notes-in-design.component';
import { AddFactoryComponent } from './modulesanddevices/add-factory/add-factory.component';
import { AddFactoryModuleComponent } from './modulesanddevices/add-factory-module/add-factory-module.component';
import { AddFactoryModuleTaskComponent } from './modulesanddevices/add-factory-module-task/add-factory-module-task.component';
import { AddActionItemComponent } from './drawings/add-action-item/add-action-item.component';
import { AddActionIteComponent } from './drawings/add-action-ite/add-action-ite.component';
import { AppendLinedialogComponent } from './schedule/append-linedialog/append-linedialog.component';
import { AddDocInServiceComponent } from './services/add-doc-in-service/add-doc-in-service.component';
import { AddVersionDoicComponent } from './services/add-version-doic/add-version-doic.component';
import { DriveurldialogComponent } from './construction/driveurldialog/driveurldialog.component';
import { GanttModule, ResizeService, SortService, FilterService, SelectionService, ReorderService,
  EditService, DayMarkersService, ToolbarService } from '@syncfusion/ej2-angular-gantt';
import { GhantComponent } from './ghant/ghant.component';
import { AddPreviousComponent } from './services/add-previous/add-previous.component';
import { ExceptionsComponent } from './exceptions/exceptions.component';


export const routes = [ 
  { path: '', redirectTo:"metrics", pathMatch:'full' },
  { path: 'modules&devices', component: ModulesandDevicesComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'metrics', component: MetricsComponent, data: { breadcrumb: 'Project Dashboard' } },
  {path:'exceptions',component:ExceptionsComponent,loadChildren:'./exceptions/exceptions.module#ExceptionsModule',data:{breadcrumb:'Project Dashboard'}}
]

@NgModule({
  declarations: [ActivityComponent, OverviewComponent, ModulesandDevicesComponent, SitevisitdialogComponent, SitevisitadddocComponent, ServicesComponent, ConceptComponent,ConceptdialogComponent, ScheduleComponent, TenderComponent, DesignComponent, DesigndialogComponent, DrawingsComponent, DrawingdialogComponent, ClosureComponent,QualityDialogComponent,TestrecordDialogComponent, ConstructionComponent, BudgetComponent, AddsiteDialogComponent, MetricsComponent, AddNotesInDesignComponent, AddFactoryComponent, AddFactoryModuleComponent, AddFactoryModuleTaskComponent, AddActionItemComponent, AddActionIteComponent, AppendLinedialogComponent, AddDocInServiceComponent, AddVersionDoicComponent, DriveurldialogComponent, GhantComponent, AddPreviousComponent, ExceptionsComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),GanttModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,DndModule,DragDropModule,MglTimelineModule
  ],
  providers: [ ResizeService, SortService, FilterService, SelectionService, ReorderService,
    EditService, DayMarkersService, ToolbarService],
  entryComponents: [AddPreviousComponent,DriveurldialogComponent,AddVersionDoicComponent,AddDocInServiceComponent,AppendLinedialogComponent,AddActionItemComponent,AddFactoryModuleTaskComponent,AddFactoryModuleComponent,AddFactoryComponent,AddNotesInDesignComponent,DeleteConfirmDialogComponent,SitevisitdialogComponent,SitevisitadddocComponent,ConceptdialogComponent,DesigndialogComponent,DrawingdialogComponent,QualityDialogComponent,TestrecordDialogComponent,AddsiteDialogComponent]
})
export class ProjectDashboardModule { }
