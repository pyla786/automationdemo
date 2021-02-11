import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-project-gridcolumns',
  templateUrl: './project-gridcolumns.component.html',
  styleUrls: ['./project-gridcolumns.component.scss']
})
export class ProjectGridcolumnsComponent implements OnInit {

  gridColumnForm: FormGroup;

  constructor(public fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public project: any, public dialogRef: MatDialogRef<ProjectGridcolumnsComponent>) {
    this.createGridColumnGroup();
  }


  ngOnInit() {
    this.gridColumnForm.controls['campaignName'].setValue(parseInt('1'));
    this.gridColumnForm.controls['Industry'].setValue(parseInt('1'));
    this.gridColumnForm.controls['Segment'].setValue(parseInt('1'));
    this.gridColumnForm.controls['Country'].setValue(parseInt('1'));
    // this.gridColumnForm.controls['BD'].setValue(parseInt(this.grids[0].grid_columns.split('')[4]));
    this.gridColumnForm.controls['CampaignType'].setValue(parseInt('1'));
    this.gridColumnForm.controls['Solution'].setValue(parseInt('1'));
    this.gridColumnForm.controls['Checklist'].setValue(parseInt('1'));
    this.gridColumnForm.controls['LeadSample'].setValue(parseInt('1'));
    this.gridColumnForm.controls['EstimatedLeads'].setValue(parseInt('1'));
    this.gridColumnForm.controls['ActualLeads'].setValue(parseInt('1'));
    this.gridColumnForm.controls['ResearchLeads'].setValue(parseInt('1'));
    this.gridColumnForm.controls['WarmLeads'].setValue(parseInt('1'));
    this.gridColumnForm.controls['HotLeads'].setValue(parseInt('1'));
    this.gridColumnForm.controls['Meetings'].setValue(parseInt('1'));
    this.gridColumnForm.controls['Prospects'].setValue(parseInt('1'));
  }

  createGridColumnGroup() {
    this.gridColumnForm = this.fb.group({
      campaignName: new FormControl(null),
      Industry: new FormControl(null),
      Segment: new FormControl(null),
      Country: new FormControl(null),
      BD: new FormControl(null),
      CampaignType: new FormControl(null),
      Solution: new FormControl(null),
      Checklist: new FormControl(null),
      LeadSample: new FormControl(null),
      EstimatedLeads: new FormControl(null),
      ActualLeads: new FormControl(null),
      ResearchLeads: new FormControl(null),
      WarmLeads: new FormControl(null),
      HotLeads: new FormControl(null),
      Meetings: new FormControl(null),
      Prospects: new FormControl(null),
      // LastUpdated : new FormControl(null),
      // StartDate : new FormControl(null),
      // FinishDate : new FormControl(null)
    })
  }
  close(): void {
    this.dialogRef.close();
  }

  saveGridColumns() {
    this.dialogRef.close();
  }
}
