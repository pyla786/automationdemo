import { Component, OnInit, AfterViewInit, OnDestroy, ViewEncapsulation, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatDialog, PageEvent } from '@angular/material';
import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';
import { Router } from '@angular/router';
import { IssueDisDialogComponent } from './issue-dis-dialog/issue-dis-dialog.component';
import { ReviewDialogComponent } from '../clients/review-dialog/review-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {

  filterToggle: boolean = false;
  public single: any[];
  public singles: any[];
  public multi: any[];
  public active: any[];
  public due: any[];
  public issues: any[];
  public analytics: any[];
  public showLegend = true;
  public showLegends = false;
  public gradient = true;
  public showXAxis = true;
  public showYAxis = true;
  public showXAxisLabel = false;
  public xAxisLabel = 'Year';
  public showYAxisLabel = false;
  public yAxisLabel = 'Population';
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;
  public autoScale = true;

  constructor(
    public appSettings: AppSettings,
    public dialog: MatDialog,) {
    this.settings = this.appSettings.settings;
    const single = [
      {
        name: 'In Process',
        value: 30
      },
      {
        name: 'Delayed',
        value: 10
      },
      {
        name: 'Completed',
        value: 15
      },
      {
        name: 'On Hold',
        value: 12
      }
    ];
    const singles = [
      {
        name: 'Associate on Leave',
        value: 20
      },
      {
        name: 'Additional Material Requirements',
        value: 33
      },
      {
        name: 'Issue in the Installation plant',
        value: 21
      },
      {
        name: 'Material Issues',
        value: 18
      },

    ];
    const analytics = [
      {
        name: "Subscribed", series: [
          {
            name: 'January',
            value: 10
          },
          {
            name: 'February',
            value: 15
          },
          {
            name: 'March',
            value: 8
          },
          {
            name: 'April',
            value: 20
          },
          {
            name: 'May',
            value: 25
          },
          {
            name: 'June',
            value: 35
          },
          {
            name: 'July',
            value: 55
          },
          {
            name: 'August',
            value: 30
          },
          {
            name: 'September',
            value: 26
          },
          {
            name: 'October',
            value: 10
          },
          {
            name: 'November',
            value: 26
          },
          {
            name: 'December',
            value: 10
          }
        ]
      }
    ];

    this.active = [
      { project: "03S0103", task: "00 003", assigned: "Mukesh", start_date: '17-Dec-2020', finish_date: "1-Jan-2021" },
      { project: "07S0104", task: "00 007", assigned: "Raj Kumar", start_date: '23-Dec-2020', finish_date: "5-Jan-2021" },
      { project: "01S0105", task: "00 001", assigned: "Adityesh", start_date: '17-Dec-2020', finish_date: "7-Jan-2021" },
      { project: "05S0106", task: "00 005", assigned: "Dhanraj", start_date: '18-Dec-2020', finish_date: "9-Jan-2021" },
      { project: "03S0107", task: "00 006", assigned: "Vijay", start_date: '21-Dec-2020', finish_date: "10-Jan-2021" },
    ]

    this.due = [
      { project: "03S0109", task: "00 004", assigned: "Naveen", review_date: '17-Dec-2020' },
      { project: "07S0104", task: "00 008", assigned: "Mike", review_date: '21-Dec-2020' },
      { project: "01S0105", task: "00 002", assigned: "Collin", review_date: '23-Dec-2020' },
      { project: "02S0112", task: "00 009", assigned: "Selvam", review_date: '5-Jan-2021' },
      { project: "02S0113", task: "00 005", assigned: "Nikhil", review_date: '7-Jan-2021' },
    ]

    this.issues = [
      { project: "03S0103", task: "00 003", assigned: "Suresh", issue_description: 'Pressure Control', total_issue: 'Excessive schedule pressure  can cause an otherwise capable team to make mistakes that ultimately end up causing serious damage to a project. When a project is given an overly aggressive.' },
      { project: "07S0105", task: "00 007", assigned: "Dhanraj", issue_description: 'Issue in Valves', total_issue: ' For a control valve, a controller signal fails to trigger a direction change within this range, and additional output results in the valve overshooting its target. Deadband leads to increased dead time, creates load disturbance errors, increases oscillations in the control loop, and can damage pressure relief discs or vessels.' },
      { project: "01S0106", task: "00 001", assigned: "Murali", issue_description: 'Cisten Issues', total_issue: ' RWH does not have a long history of use in modern site design, but now that it is a topic of interest, many engineers and architects need to learn this multi-faceted new practice.' },
      { project: "09S0109", task: "00 009", assigned: "Praveen", issue_description: 'Temperature Control', total_issue: 'Temperature indication stays abnormally low but the process overheats.' },
      { project: "02S0119", task: "00 002", assigned: "Neeliesh", issue_description: 'Project Control', total_issue: 'RWH does not have a long history of use in modern site design, but now that it is a topic of interest, many engineers and architects need to learn this multi-faceted new practice.' },
    ]


    Object.assign(this, { single, singles, analytics });
  }

  public onSelect(event) {
    console.log(event);
  }
  conversations = [
    { lead_name: "Srinu", days: "Rs.3,00,000 -/-", color: false },
    { lead_name: "Raj", days: "Rs.2,95,000 -/-", color: false },
    { lead_name: "Navin", days: "Rs.2,90,000 -/-", color: true },
    { lead_name: "Shiva", days: "Rs.2,60,000 -/-", color: true },
    { lead_name: "Sai", days: "Rs.2,50,000 -/-", color: true },

  ]
  ngOnInit() {

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

  openIssuesDilog(issue) {
    let dialogRef = this.dialog.open(IssueDisDialogComponent, {
      data: issue,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }
}



