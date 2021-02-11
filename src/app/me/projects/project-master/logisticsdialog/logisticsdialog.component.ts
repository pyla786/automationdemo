import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-logisticsdialog',
  templateUrl: './logisticsdialog.component.html',
  styleUrls: ['./logisticsdialog.component.scss']
})
export class LogisticsdialogComponent implements OnInit {

  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public project: any ,public dialogRef: MatDialogRef<LogisticsdialogComponent>) { 
    
  }

  totalProjects = [
    {projectname:"Greenlands",subject:"Documents",shippedBy:"David",dateShipped:"2020-09-10",provider:"FedEx",reference:"10121457",status:"view",eta:"2020-10-21"},
    {projectname:"ITC Kakatiya",subject:"Fragile material",shippedBy:"Stokes",dateShipped:"2020-09-20",provider:"UPS inc.",reference:"10245787",status:"view",eta:"2020-10-21"},
    {projectname:"Taj Group",subject:"Confidential documents",shippedBy:"Woakes",dateShipped:"2020-09-25",provider:"Purolator",reference:"20154787",status:"view",eta:"2020-10-25"},
    {projectname:"Transreport",subject:"Documents",shippedBy:"Archer",dateShipped:"2020-09-26",provider:"OnTrac Inc.",reference:"23651474",status:"view",eta:"2020-10-29"},
    {projectname:"PermiShare",subject:"Fragile material",shippedBy:"Watson",dateShipped:"2020-09-26",provider:"Purolator",reference:"36214145",status:"view",eta:"2020-11-01"},
    {projectname:"Amazon",subject:"Documents",shippedBy:"smith",dateShipped:"2020-09-27",provider:"FedEx",reference:"32101210",status:"view",eta:"2020-11-15"},
    {projectname:"Big Basket",subject:"Fragile material",shippedBy:"Marsh",dateShipped:"2020-09-29",provider:"Purolator",reference:"41020121",status:"view",eta:"2020-11-18"},
    {projectname:"Denzo",subject:"Documents",shippedBy:"Curran",dateShipped:"2020-10-01",provider:"FedEx",reference:"52102225",status:"view",eta:"2020-11-21"},
    {projectname:"Swiggy",subject:"Fragile material",shippedBy:"Hussey",dateShipped:"2020-10-10",provider:"OnTrac Inc.",reference:"65414747",status:"view",eta:"2020-11-25"},
    {projectname:"Zomato",subject:"Documents",shippedBy:"Marshal",dateShipped:"2020-10-15",provider:"FedEx",reference:"74100250",status:"view",eta:"2020-11-28"},
  ]

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
