import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-job-management',
  templateUrl: './job-management.component.html',
  styleUrls: ['./job-management.component.scss']
})
export class JobManagementComponent implements OnInit {

  public popoverTitle1: string = 'Archive';
  public popoverMessage1: string = 'Do you want to archive this task? This action cannot be undone.';
  public popoverStatusTitle1: string = 'Confirm Change';
  public popoverStatusMessage1: string = 'Are you sure you want to change status.?';
  public cancelClicked1: boolean = false;

  pageEvent: PageEvent;
  public pageSize = 4;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle = false;

  values = [
    { "project": "03", "job": "03S0103", description: "Complete the Installation", engineer: "Mukesh", incharge: "Raj Kumar", work: "5", target: "15-Dec-2020", status: "In Progress", start: "1-Jan-2021 10:00 AM", issues: "5", completion: "3-Jan-2021 3:00 PM" },
    { "project": "02", "job": "02D0102", description: "Complete the Installation", engineer: "Adityesh", incharge: "Dhanraj", work: "5", target: "13-Dec-2020", status: "Done", start: "7-Jan-2021 12:30 PM", issues: "9", completion: "7-Jan-2021 6:00 PM" },
    { "project": "05", "job": "05P0103", description: "Complete the Installation", engineer: "Vijay", incharge: "Dhanraj", work: "5", target: "14-Dec-2020", status: "Delayed", start: "3-Jan-2021 11:00 AM", issues: "6", completion: "11-Jan-2021 4:00 PM" },
    { "project": "08", "job": "08M0104", description: "Complete the Installation", engineer: "Murali", incharge: "Raj Kumar", work: "5", target: "13-Dec-2020", status: "In Progress", start: "6-Jan-2021 3:00 PM", issues: "3", completion: "8-Jan-2021 8:00 PM" },
  ]

  constructor() { }

  ngOnInit() {
  }

}
