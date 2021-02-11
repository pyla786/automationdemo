import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-factory-module',
  templateUrl: './add-factory-module.component.html',
  styleUrls: ['./add-factory-module.component.scss']
})
export class AddFactoryModuleComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddFactoryModuleComponent>,@Inject(MAT_DIALOG_DATA) public user: number) { 
    console.log(this.user);
   }

  
  ngOnInit() {
    
  }

  close(): void {
    this.dialogRef.close();
  }

  saveStep() {
    this.dialogRef.close();
  }

}
