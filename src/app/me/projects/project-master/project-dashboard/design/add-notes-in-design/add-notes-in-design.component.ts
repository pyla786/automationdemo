import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-notes-in-design',
  templateUrl: './add-notes-in-design.component.html',
  styleUrls: ['./add-notes-in-design.component.scss']
})
export class AddNotesInDesignComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public doc: any ,public dialogRef: MatDialogRef<AddNotesInDesignComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
