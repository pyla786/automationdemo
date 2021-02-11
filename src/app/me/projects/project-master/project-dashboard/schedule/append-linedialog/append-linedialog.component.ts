import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-append-linedialog',
  templateUrl: './append-linedialog.component.html',
  styleUrls: ['./append-linedialog.component.scss']
})
export class AppendLinedialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AppendLinedialogComponent>,@Inject(MAT_DIALOG_DATA) public user: number) { 
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
