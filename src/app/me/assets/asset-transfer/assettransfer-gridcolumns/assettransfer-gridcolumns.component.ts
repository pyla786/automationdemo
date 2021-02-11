import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-assettransfer-gridcolumns',
  templateUrl: './assettransfer-gridcolumns.component.html',
  styleUrls: ['./assettransfer-gridcolumns.component.scss']
})
export class AssettransferGridcolumnsComponent implements OnInit {

  gridColumnForm: FormGroup;
  
  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public project: any ,public dialogRef: MatDialogRef<AssettransferGridcolumnsComponent>) { 
    this.createGridColumnGroup();
  }


  ngOnInit() {
    this.gridColumnForm.controls['campaignName'].setValue(parseInt('1'));
    this.gridColumnForm.controls['Industry'].setValue(parseInt('1'));
    this.gridColumnForm.controls['Segment'].setValue(parseInt('1'));
    this.gridColumnForm.controls['Country'].setValue(parseInt('1'));
    this.gridColumnForm.controls['CampaignType'].setValue(parseInt('1'));
    this.gridColumnForm.controls['Solution'].setValue(parseInt('1'));
    this.gridColumnForm.controls['Checklist'].setValue(parseInt('1'));
    this.gridColumnForm.controls['LeadSample'].setValue(parseInt('1'));
    this.gridColumnForm.controls['EstimatedLeads'].setValue(parseInt('1'));
    this.gridColumnForm.controls['ActualLeads'].setValue(parseInt('1'));
  }
  
  createGridColumnGroup() {
    this.gridColumnForm = this.fb.group({
      campaignName : new FormControl(null),
      Industry : new FormControl(null),
      Segment : new FormControl(null),
      Country : new FormControl(null),
      CampaignType : new FormControl(null),
      Solution : new FormControl(null),
      Checklist : new FormControl(null),
      LeadSample : new FormControl(null),
      EstimatedLeads : new FormControl(null),
      ActualLeads : new FormControl(null),

    })
  }
  close(): void {
    this.dialogRef.close();
  }

  saveGridColumns() {
    this.dialogRef.close();
  }


}
