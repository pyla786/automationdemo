import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addchecklist-dialog',
  templateUrl: './addchecklist-dialog.component.html',
  styleUrls: ['./addchecklist-dialog.component.scss']
})
export class AddchecklistDialogComponent implements OnInit {

  construction = [{branch_id:"1",branch_name:"Structure"},{branch_id:"1",branch_name:"Architecture"},{branch_id:"1",branch_name:"Plumbing"}]
  checklist = [{branch_id:"1",branch_name:"Fire Safety Checklist"},{branch_id:"1",branch_name:"Routine Inspection Checklist"},{branch_id:"1",branch_name:"Weekly site safety inspection checklist"}]
  frequency = [{branch_id:"1",branch_name:"1"},{branch_id:"1",branch_name:"2"},{branch_id:"1",branch_name:"3"}]

 constructor(public dialogRef: MatDialogRef<AddchecklistDialogComponent>) { }

  ngOnInit() {

  }

  close(): void {
    this.dialogRef.close();
  }


}
