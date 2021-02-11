import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
// import { AddClientDialogComponent } from '../add-client-dialog/add-client-dialog.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { PageEvent, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { ProjectsDialogComponent } from '../projects-dialog/projects-dialog.component';
import { AddClientDialogComponent } from '../add-client-dialog/add-client-dialog.component';
import { GridColumnsJobsComponent } from '../grid-columns-jobs/grid-columns-jobs.component';
import { IssueDialogComponent } from '../issue-dialog/issue-dialog.component';
import { ReviewDialogComponent } from '../review-dialog/review-dialog.component';
import { UploadExcelComponent } from '../upload-excel/upload-excel.component';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GridViewComponent implements OnInit {

  public popoverTitle1: string = 'Archive';
  public popoverMessage1: string = 'Do you want to archive this task? This action cannot be undone.';
  public popoverStatusTitle1: string = 'Confirm Change';
  public popoverStatusMessage1: string = 'Are you sure you want to change status.?';
  public cancelClicked1: boolean = false;

  public single: any[];
  public multi: any[];
  public triple: any[];
  public showLegend = false;
  public gradient = false;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;

  pageEvent: PageEvent;
  public pageSize = 4;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle = false;
  status = [{ 'status_id': '1', 'status_name': 'Active' },
  { 'status_id': '2', 'status_name': 'Inactive' }]

  public status_filter = "";
  contactName = new FormControl();
  clientName = new FormControl();
  jobTitle = new FormControl();
  contactNumber = new FormControl();
  statu = new FormControl();
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;
  values = [
    { "project": "03", "job": "03S0103", remark: 'Not up to mark', description: "Complete the Installation", engineer: "Mukesh", incharge: "Raj Kumar", work: "5", target: "15-Dec-2020", status: "In Progress", review: "1-Jan-2021", issues: "5", completion: "14-Dec-2020" },
    { "project": "02", "job": "02D0102", remark: 'Excellent', description: "Complete the Installation", engineer: "Adityesh", incharge: "Dhanraj", work: "5", target: "13-Dec-2020", status: "Done", review: "7-Jan-2021", issues: "9", completion: "12-Dec-2020" },
    { "project": "05", "job": "05P0103", remark: 'Poor', description: "Complete the Installation", engineer: "Vijay", incharge: "Dhanraj", work: "5", target: "14-Dec-2020", status: "Done", review: "3-Jan-2021", issues: "6", completion: "11-Dec-2020" },
    { "project": "08", "job": "08M0104", remark: 'Can do better', description: "Complete the Installation", engineer: "Murali", incharge: "Raj Kumar", work: "5", target: "13-Dec-2020", status: "In Progress", review: "6-Jan-2021", issues: "3", completion: "10-Dec-2020" },
  ]
  userType: string;

  constructor(public dialog: MatDialog, public appSettings: AppSettings) {
    this.userType = localStorage.getItem('userType');
    const single = [
      {
        name: 'Telangana',
        value: 40
      },
      {
        name: 'Haryana',
        value: 49
      },
      {
        name: 'Gujarat',
        value: 36
      },
      {
        name: 'Delhi',
        value: 52
      },
      {
        name: 'Karnataka',
        value: 27
      },
      {
        name: 'Other',
        value: 10
      }
    ];
    const multi = [
      {
        name: 'Mining',
        value: 35
      },
      {
        name: 'Shipping',
        value: 20
      },
      {
        name: 'Hospitality',
        value: 94
      },
    ];
    const triple = [
      {
        name: 'New',
        value: 147
      },
      {
        name: 'Repeat',
        value: 224
      },
    ];
    this.settings = this.appSettings.settings;
    Object.assign(this, { single, multi, triple });
  }

  ngOnInit() {
  }



  public onSelect(event) {
    console.log(event);
  }

  // openProjectDialog(stat){
  //   let dialogRef = this.dialog.open(AddClientDialogComponent, {
  //     data: stat,
  //     height: 'auto',
  //     width: '750px',
  //     autoFocus: false,
  //   });

  //   dialogRef.afterClosed().subscribe(prospects => {
  //     if(prospects == 'save') {

  //     }
  //   });
  // }

  openDeleteDialog(assets) {
    let dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      data: assets,
      height: 'auto',
      width: 'auto',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }

  openProjectsDilog(stat) {
    let dialogRef = this.dialog.open(ProjectsDialogComponent, {
      data: stat,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }

  openClientDialog(stat) {
    let dialogRef = this.dialog.open(AddClientDialogComponent, {
      data: stat,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }

  openGridColumn() {
    this.dialog.open(GridColumnsJobsComponent, {
      width: "600px",
      height: "auto"
    })
  }

  openReviewsDilog(review) {
    let dialogRef = this.dialog.open(ReviewDialogComponent, {
      data: review,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }

  uploadExcel() {
    let dialogRef = this.dialog.open(UploadExcelComponent, {
      data: {},
      height: 'auto',
      width: '450px',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }
  openIssuesDilog(issue) {
    let dialogRef = this.dialog.open(IssueDialogComponent, {
      data: issue,
      height: 'auto',
      width: '800px',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }

}
