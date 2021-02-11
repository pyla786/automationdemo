import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { MatDialog, PageEvent } from '@angular/material';
import { FormControl } from '@angular/forms';
import { AddprojectDialogComponent } from '../addproject-dialog/addproject-dialog.component';
import { ProjectGridcolumnsComponent } from '../project-gridcolumns/project-gridcolumns.component';
import { AppSettings } from '../../../../app.settings';
import { Settings } from '../../../../app.settings.model';
import { LogisticsdialogComponent } from '../logisticsdialog/logisticsdialog.component';
import { GridColumnsProjectsComponent } from '../../grid-columns-projects/grid-columns-projects.component';

@Component({
  selector: 'app-project-gridview',
  templateUrl: './project-gridview.component.html',
  styleUrls: ['./project-gridview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectGridviewComponent implements OnInit {

  public single: any[];
  public multi: any[];
  public triple: any[];
  public showLegend = false;
  public gradient = false;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00']
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
  startendDate = new FormControl();
  startdueDate = new FormControl();
  activityDate = new FormControl();
  contactNumber = new FormControl();
  statu = new FormControl();
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;
  values = [
    { project: "065", projectName: "Triple effect evaporator followed by ATFD", clientName: "Biotherm Industries", projectType: "ZLDP", location: "Hyderabad", incharge: "Dhanraj", jobs: "56/75", start: "13-Dec-2020", setup: "13-Feb-2021", status: "Active", awarded: "2,50,000 Rs", invoiced: "1,50,000 Rs", due: "1,00,000 Rs" },
    { project: "054", projectName: "Triple effect evaporator with Thermo compressor followed by ATFD", clientName: "APex Ecotech Pvt Ltd", projectType: "BGS", location: "Bangalore", incharge: "Raj Kumar", jobs: "25/50", start: "12-Nov-2020", setup: "25-Dec-2020", status: "Inactive", awarded: "5,50,000 Rs", invoiced: "3,50,000 Rs", due: "2,00,000 Rs" },
    { project: "061", projectName: "Triple effect evaporator followed by ATFD", clientName: "Biotherm Industries", projectType: "ZLDP", location: "Hyderabad", incharge: "Dhanraj", jobs: "56/75", start: "13-Dec-2020", setup: "13-Feb-2021", status: "Active", awarded: "2,50,000 Rs", invoiced: "1,50,000 Rs", due: "1,00,000 Rs" },
    { project: "052", projectName: "Triple effect evaporator with Thermo compressor followed by ATFD", clientName: "APex Ecotech Pvt Ltd", projectType: "BGS", location: "Bangalore", incharge: "Raj Kumar", jobs: "25/50", start: "12-Nov-2020", setup: "25-Dec-2020", status: "On Hold", awarded: "5,50,000 Rs", invoiced: "3,50,000 Rs", due: "2,00,000 Rs" },



  ]

  constructor(public dialog: MatDialog, public appSettings: AppSettings) {
    const single = [
      {
        name: 'Amazon',
        value: 40
      },
      {
        name: 'Flipkart',
        value: 49
      },
      {
        name: 'E-Square',
        value: 36
      },
      {
        name: 'Stonefield',
        value: 52
      },
      {
        name: 'Bluedart',
        value: 27
      }
    ];
    const multi = [
      {
        name: '#0027',
        value: 35
      },
      {
        name: '#0023',
        value: 20
      },
      {
        name: '#0037',
        value: 94
      },
      {
        name: '#0012',
        value: 51
      },
      {
        name: '#0015',
        value: 28
      },
      {
        name: '#0017',
        value: 67
      },
      {
        name: '#0019',
        value: 82
      },
    ];
    const triple = [
      {
        name: 'India',
        value: 147
      },
      {
        name: 'Vietnam',
        value: 224
      },
      {
        name: 'Taiwan',
        value: 211
      },
      // {
      //   name: 'Connecticut',
      //   value: 132
      // },
      // {
      //   name: 'Texas',
      //   value: 90
      // },
      // {
      //   name: 'Florida',
      //   value: 55
      // },
      // {
      //   name: 'Washington',
      //   value: 298
      // },
      // {
      //   name: 'Arizona',
      //   value: 150
      // },
    ];
    this.settings = this.appSettings.settings;
    Object.assign(this, { single, multi, triple });
  }

  public onSelect(event) {
    console.log(event);
  }

  ngOnInit() {

  }

  openProjectDialog(stat) {
    let dialogRef = this.dialog.open(AddprojectDialogComponent, {
      data: stat,
      height: 'auto',
      width: '750px',
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe(prospects => {
      if (prospects == 'save') {

      }
    });
  }

  openLogisticsDialog(stat) {
    let dialogRef = this.dialog.open(LogisticsdialogComponent, {
      data: stat,
      height: 'auto',
      width: '750px',
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe(prospects => {
      if (prospects == 'save') {

      }
    });
  }

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
  fliterSearch() { }
  clearFilters() {
    this.contactName.setValue([]);
    this.clientName.setValue([]);
    this.jobTitle.setValue([]);
    this.startendDate.setValue([]);
    this.startdueDate.setValue([]);
    this.activityDate.setValue([]);
    this.contactNumber.setValue([]);
    this.statu.setValue([]);
    this.status_filter = '';
  }
  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container');
    if (side == 'right')
      ele.scrollLeft += 210;
    else
      ele.scrollLeft -= 210;
  }

  openGridColumnsDialog(stat) {
    let dialogRef = this.dialog.open(ProjectGridcolumnsComponent, {
      data: stat,
      height: 'auto',
      width: '600px',
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe(prospects => {
      if (prospects == 'save') {

      }
    });
  }

  openGridColumns() {
    this.dialog.open(ProjectGridcolumnsComponent, {
      width: "600px",
      height: "auto"
    })
  }
}
