import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DndModule } from 'ngx-drag-drop';
import { SharedModule } from 'src/app/shared/shared.module';
import { DragDropModule } from 'primeng/primeng';
import { GanttModule, ResizeService, SortService, FilterService, SelectionService, ReorderService,
  EditService, DayMarkersService, ToolbarService } from '@syncfusion/ej2-angular-gantt';
import {ClientMetricsComponent} from './client-metrics/client-metrics.component';
import {ClientModulesanddevicesComponent} from './client-modulesanddevices/client-modulesanddevices.component';
import {ClientExceptionsComponent} from './client-exceptions/client-exceptions.component';

export const routes = [ 
  { path: '', redirectTo:'metrics'},
  { path: 'modules&devices', component: ClientModulesanddevicesComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'metrics', component: ClientMetricsComponent, data: { breadcrumb: 'Project Dashboard' } },
  {path:'exceptions',component:ClientExceptionsComponent,loadChildren:'./client-exceptions/client-exceptions.module#ClientExceptionsModule',data:{breadcrumb:'Project Dashboard'}}
]

@NgModule({
  declarations: [ClientMetricsComponent,ClientModulesanddevicesComponent,ClientExceptionsComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),GanttModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,DndModule,DragDropModule,MglTimelineModule
  ],
  providers: [ ResizeService, SortService, FilterService, SelectionService, ReorderService,
    EditService, DayMarkersService, ToolbarService],
})
export class ClientProjectDashboardModule { }
