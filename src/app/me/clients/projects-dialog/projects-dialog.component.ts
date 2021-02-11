import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-projects-dialog',
  templateUrl: './projects-dialog.component.html',
  styleUrls: ['./projects-dialog.component.scss']
})
export class ProjectsDialogComponent implements OnInit {

  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public project: any ,public dialogRef: MatDialogRef<ProjectsDialogComponent>) { 
    
  }

  totalProjects = [
    {projectid:"#0027",subject:"Documents",shippedBy:"David",dateShipped:"2020-09-10",provider:"FedEx",reference:"10121457",status:"view",eta:"2020-10-21",exceptions:"2",devices:"5"},
    {projectid:"#0023",subject:"Fragile material",shippedBy:"Stokes",dateShipped:"2020-09-20",provider:"UPS inc.",reference:"10245787",status:"view",eta:"2020-10-21",exceptions:"3",devices:"6"},
    {projectid:"#0037",subject:"Confidential documents",shippedBy:"Woakes",dateShipped:"2020-09-25",provider:"Purolator",reference:"20154787",status:"view",eta:"2020-10-25",exceptions:"6",devices:"12"},
    {projectid:"#0012",subject:"Documents",shippedBy:"Archer",dateShipped:"2020-09-26",provider:"OnTrac Inc.",reference:"23651474",status:"view",eta:"2020-10-29",exceptions:"3",devices:"14"},
    {projectid:"#0019",subject:"Fragile material",shippedBy:"Watson",dateShipped:"2020-09-26",provider:"Purolator",reference:"36214145",status:"view",eta:"2020-11-01",exceptions:"5",devices:"8"},
    ]

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
