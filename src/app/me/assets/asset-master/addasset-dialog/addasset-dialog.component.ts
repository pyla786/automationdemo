import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addasset-dialog',
  templateUrl: './addasset-dialog.component.html',
  styleUrls: ['./addasset-dialog.component.scss']
})
export class AddassetDialogComponent implements OnInit {
  projectForm: FormGroup;
  
  countries = [{'conuntry_id': 1,'conuntry_name': 'Asset - 01'},
  {'conuntry_id': 2,'conuntry_name': 'Asset - 02'},
  {'conuntry_id': 3,'conuntry_name': 'Asset - 03'},
  ]


  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public asset: any ,public dialogRef: MatDialogRef<AddassetDialogComponent>) { 
   
  }
  
  ngOnInit() {
  }
  close(): void {
      this.dialogRef.close();
    }
}
