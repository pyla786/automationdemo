import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-testrecord-dialog',
  templateUrl: './testrecord-dialog.component.html',
  styleUrls: ['./testrecord-dialog.component.scss']
})
export class TestrecordDialogComponent implements OnInit {

  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public observations: any ,public dialogRef: MatDialogRef<TestrecordDialogComponent>) { 
    this.createProjectDetails();
  }

  observationForm: FormGroup;
  countries = [{'conuntry_id': 1,'conuntry_name': 'Site-01'},
  {'conuntry_id': 2,'conuntry_name': 'Site-02'},
  {'conuntry_id': 3,'conuntry_name': 'Site-03'},
  ]
  
  States = [{'state_id': 1,'state_name': 'Construction'},
  {'state_id': 2,'state_name': 'Plumbing'},
  {'state_id': 3,'state_name': 'Earth Work'},]

  test = [{'test_id': 1,'test_name': 'Compressive strength'},
  {'test_id': 2,'test_name': 'Slump clone'},
  ]
  filesToUpload = [];

  ngOnInit() {

  }
  get Country() { return this.observationForm.get('Country'); }
  get State() { return this.observationForm.get('State'); }
  get invoice() { return this.observationForm.get('invoice'); }
  get Test() { return this.observationForm.get('Test'); }
  get isPrimary() { return this.observationForm.get('isPrimary'); }
  get streetAddress() { return this.observationForm.get('streetAddress'); }
  get filesSelect() { return this.observationForm.get('filesSelect'); }

  createProjectDetails() {
    this.observationForm = this.fb.group({
      Country : new FormControl('' , [Validators.required]),
      State : new FormControl('',[Validators.required]),
      Test: new FormControl('',[Validators.required]),
      isPrimary : new FormControl('',[Validators.required]),
      streetAddress : new FormControl('',[Validators.required]),
      invoice : new FormControl('',[Validators.required]),
      filesSelect : new FormControl('',[Validators.required])
    })
  }

  handleFileSelect(event) {
    this.filesToUpload.push(event.target.files[0])
  }

  close(): void {
    this.dialogRef.close();
  }
}
