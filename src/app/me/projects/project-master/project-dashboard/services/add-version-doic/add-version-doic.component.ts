import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-version-doic',
  templateUrl: './add-version-doic.component.html',
  styleUrls: ['./add-version-doic.component.scss']
})
export class AddVersionDoicComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddVersionDoicComponent>,@Inject(MAT_DIALOG_DATA) public user: number) { 
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
