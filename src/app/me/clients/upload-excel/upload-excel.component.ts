import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-upload-excel',
  templateUrl: './upload-excel.component.html',
  styleUrls: ['./upload-excel.component.scss']
})
export class UploadExcelComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UploadExcelComponent>, @Inject(MAT_DIALOG_DATA) public Issue: any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
