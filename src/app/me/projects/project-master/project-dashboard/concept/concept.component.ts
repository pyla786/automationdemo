import { Component, OnInit } from '@angular/core';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { ConceptdialogComponent } from './conceptdialog/conceptdialog.component';
import { MatDialog, PageEvent } from '@angular/material';
import { projectNewData } from './data';

@Component({
  selector: 'app-concept',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.scss']
})
export class ConceptComponent implements OnInit {
  
  public data: object[];
  public taskSettings: object;
  public labelSettings: object;
  public projectStartDate: Date;
  public projectEndDate: Date;
  public ngOnInit(): void {
      this.data = projectNewData;
      this.taskSettings = {
          id: 'TaskID',
          name: 'TaskName',
          startDate: 'StartDate',
          endDate: 'EndDate',
          duration: 'Duration',
          progress: 'Progress',
          dependency: 'Predecessor',
          child: 'subtasks'
      };
      this.projectStartDate = new Date('03/24/2019');
      this.projectEndDate = new Date('07/06/2019');
      this.labelSettings = {
          leftLabel: 'TaskName',
      };
  }
}
