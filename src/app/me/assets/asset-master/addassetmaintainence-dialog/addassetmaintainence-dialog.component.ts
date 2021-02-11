import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addassetmaintainence-dialog',
  templateUrl: './addassetmaintainence-dialog.component.html',
  styleUrls: ['./addassetmaintainence-dialog.component.scss']
})
export class AddassetmaintainenceDialogComponent implements OnInit {
  
  countries = [{'conuntry_id': 1,'conuntry_name': 'Disposal'},
  {'conuntry_id': 2,'conuntry_name': 'Transfer'},
  {'conuntry_id': 3,'conuntry_name': 'Maintenance'},
  ]
  project = [{'project_id': 1,'project_name': 'P001'},
  {'project_id': 2,'project_name': 'P002'},
  {'project_id': 3,'project_name': 'P003'},
  ]
  providers = [{'provider_id': 1,'provider_name': 'Test Provider -1'},
  {'provider_id': 2,'provider_name': 'Test Provider -2'},
  {'provider_id': 3,'provider_name': 'Test Provider -3'},
  ]
  public isDisposal : boolean = false;
  public isTransfer : boolean = false;
  public isMaintenance: boolean = false;

  filesToUpload = [];
  maintanenceForm :FormGroup;
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<AddassetmaintainenceDialogComponent>) {
    this.createUserForm()
   }
 

  ngOnInit() {

  }

  get catType() { return this.maintanenceForm.get('catType'); }

    createUserForm() {
    this.maintanenceForm = this.fb.group({
      catType: new FormControl('', [Validators.required]),
    });
  }
  close(): void {
    this.dialogRef.close();
  }

  handleFileSelect(event) {
    this.filesToUpload.push(event.target.files[0])
  }

  checkCat(id){
   if(id == 1){
     this.isDisposal = true;
     this.isTransfer = false;
     this.isMaintenance = false;
   }else if(id == 2){
     this.isDisposal = false;
     this.isTransfer = true;
     this.isMaintenance = false;
   }else{
    this.isDisposal = false;
    this.isTransfer = false;
    this.isMaintenance = true;
   }
 }
}
