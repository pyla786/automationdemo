import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-action-item',
  templateUrl: './add-action-item.component.html',
  styleUrls: ['./add-action-item.component.scss']
})
export class AddActionItemComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddActionItemComponent>,@Inject(MAT_DIALOG_DATA) public user: number) { 
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
