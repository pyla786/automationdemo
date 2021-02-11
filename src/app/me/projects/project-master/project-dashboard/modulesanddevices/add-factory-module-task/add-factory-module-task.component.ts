import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-factory-module-task',
  templateUrl: './add-factory-module-task.component.html',
  styleUrls: ['./add-factory-module-task.component.scss']
})
export class AddFactoryModuleTaskComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddFactoryModuleTaskComponent>,@Inject(MAT_DIALOG_DATA) public user: number) { 
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
