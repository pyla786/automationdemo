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
import { ClientExceptionsCardviewComponent } from './client-exceptions-cardview/client-exceptions-cardview.component';
import { ClientExceptionsGridviewComponent } from './client-exceptions-gridview/client-exceptions-gridview.component';

export const routes = [ 
    { path: '', redirectTo:'cardview'},
        {path:'cardview',component:ClientExceptionsCardviewComponent,data:{breadcrumb:"Project Dashboard"}},
        {path:'gridview',component:ClientExceptionsGridviewComponent,data:{breadcrumb:"Project Dashboard"}}
   
    
]

@NgModule({
  declarations: [ ClientExceptionsCardviewComponent, ClientExceptionsGridviewComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),GanttModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,DndModule,DragDropModule,MglTimelineModule
  ],
  providers: [ ResizeService, SortService, FilterService, SelectionService, ReorderService,
    EditService, DayMarkersService, ToolbarService],
})
export class ClientExceptionsModule { }
