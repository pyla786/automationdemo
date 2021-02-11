import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-doc-in-service',
  templateUrl: './add-doc-in-service.component.html',
  styleUrls: ['./add-doc-in-service.component.scss']
})
export class AddDocInServiceComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddDocInServiceComponent>,@Inject(MAT_DIALOG_DATA) public user: number) { 
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
