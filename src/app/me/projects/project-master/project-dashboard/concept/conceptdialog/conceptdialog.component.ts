import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-conceptdialog',
  templateUrl: './conceptdialog.component.html',
  styleUrls: ['./conceptdialog.component.scss']
})
export class ConceptdialogComponent implements OnInit {

  conceptForm : FormGroup;

  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public concepts: any ,public dialogRef: MatDialogRef<ConceptdialogComponent>) { 
    this.createProjectDetails();
  }

  countries = [{'conuntry_id': 1,'conuntry_name': 'Construction'},
  {'conuntry_id': 2,'conuntry_name': 'Plumbing'},
  {'conuntry_id': 3,'conuntry_name': 'Earth Work'},
  ]
  
  States = [{'state_id': 1,'state_name': '1'},
  {'state_id': 2,'state_name': '2'},
  {'state_id': 3,'state_name': '3'},]

  
  ngOnInit() { 
  }
  get Country() { return this.conceptForm.get('Country'); }
  get State() { return this.conceptForm.get('State'); }
  get invoice() { return this.conceptForm.get('invoice'); }
  get streetAddress() { return this.conceptForm.get('streetAddress'); }
  get rate() { return this.conceptForm.get('rate'); }

  createProjectDetails() {
    this.conceptForm = this.fb.group({
      Country : new FormControl('' , [Validators.required]),
      State : new FormControl('',[Validators.required]),
      invoice : new FormControl('',[Validators.required]),
      streetAddress : new FormControl('',[Validators.required]),
      rate : new FormControl('',[Validators.required])
    })
  }

  close(): void {
    this.dialogRef.close();
  }

}
