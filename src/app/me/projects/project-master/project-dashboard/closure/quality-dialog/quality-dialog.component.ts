import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-quality-dialog',
  templateUrl: './quality-dialog.component.html',
  styleUrls: ['./quality-dialog.component.scss']
})
export class QualityDialogComponent implements OnInit {

  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public observations: any ,public dialogRef: MatDialogRef<QualityDialogComponent>) { 
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

  ngOnInit() {

  }

  get Country() { return this.observationForm.get('Country'); }
  get State() { return this.observationForm.get('State'); }
  get invoice() { return this.observationForm.get('invoice'); }

  createProjectDetails() {
    this.observationForm = this.fb.group({
      Country : new FormControl('' , [Validators.required]),
      State : new FormControl('',[Validators.required]),
      invoice : new FormControl('',[Validators.required])
    })
  }

  close(): void {
    this.dialogRef.close();
  }
}
