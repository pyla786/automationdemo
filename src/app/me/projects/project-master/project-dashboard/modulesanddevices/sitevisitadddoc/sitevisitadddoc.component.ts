import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SitevisitdialogComponent } from '../sitevisitdialog/sitevisitdialog.component';

@Component({
  selector: 'app-sitevisitadddoc',
  templateUrl: './sitevisitadddoc.component.html',
  styleUrls: ['./sitevisitadddoc.component.scss']
})
export class SitevisitadddocComponent implements OnInit {

  filesToUpload = [];
  teamForm: FormGroup;
  
  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public team: any ,public dialogRef: MatDialogRef<SitevisitdialogComponent>) { 
    this.createTeamDetails()
  }
  teams = [{is_selected:false,name:"sai"},
  {is_selected:false,name:"siva"},
  {is_selected:false,name:"nikhil"},
  {is_selected:false,name:"ram"},
  {is_selected:false,name:"akhil"},
  {is_selected:false,name:"navin"}]

  ngOnInit() {

  }
  get City() { return this.teamForm.get('City'); }
  
  createTeamDetails() {
    this.teamForm = this.fb.group({
      City : new FormControl('' , [Validators.required]),
    })
  }
  handleFileSelect(event) {
    this.filesToUpload.push(event.target.files[0])
  }
  close(): void {
    this.dialogRef.close();
  }
}
