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
import { ExceptionsCardviewComponent } from './exceptions-cardview/exceptions-cardview.component';
import { ExceptionsGridviewComponent } from './exceptions-gridview/exceptions-gridview.component';


export const routes = [ 
  { path: '', redirectTo:"cardview", pathMatch:'full' },
  { path: 'cardview', component: ExceptionsCardviewComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'gridview', component: ExceptionsGridviewComponent, data: { breadcrumb: 'Project Dashboard' } },
]

@NgModule({
  declarations: [ExceptionsCardviewComponent, ExceptionsGridviewComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),GanttModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,DndModule,DragDropModule,MglTimelineModule
  ],
  providers: [ ResizeService, SortService, FilterService, SelectionService, ReorderService,
    EditService, DayMarkersService, ToolbarService],
})
export class ExceptionsModule { }
