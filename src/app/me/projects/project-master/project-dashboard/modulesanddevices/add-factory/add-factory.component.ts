import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-factory',
  templateUrl: './add-factory.component.html',
  styleUrls: ['./add-factory.component.scss']
})
export class AddFactoryComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddFactoryComponent>,@Inject(MAT_DIALOG_DATA) public user: number) { 
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
