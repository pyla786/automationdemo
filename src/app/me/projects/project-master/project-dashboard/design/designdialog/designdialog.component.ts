import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-designdialog',
  templateUrl: './designdialog.component.html',
  styleUrls: ['./designdialog.component.scss']
})
export class DesigndialogComponent implements OnInit {

  siteForm : FormGroup;
  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public doc: any ,public dialogRef: MatDialogRef<DesigndialogComponent>) { 
    this.createSiteDetails();
  }
  filesToUpload = [];

  ngOnInit() {

  }
  get streetAddress() { return this.siteForm.get('streetAddress'); }
  get Country() { return this.siteForm.get('Country'); }
  get filesSelect() { return this.siteForm.get('filesSelect'); }
  get City() { return this.siteForm.get('City'); }
  get jobTitle() { return this.siteForm.get('jobTitle'); }
  
  
  createSiteDetails() {
    this.siteForm = this.fb.group({
      jobTitle : new FormControl('' , [Validators.required]),
      streetAddress : new FormControl('' , [Validators.required ]),
      Country : new FormControl('' , [Validators.required]),
      filesSelect : new FormControl('',[Validators.required]),
      City : new FormControl('',[Validators.required]),
    })
  }
  handleFileSelect(event) {
    this.filesToUpload.push(event.target.files[0])
  }

  close(): void {
    this.dialogRef.close();
  }

}
