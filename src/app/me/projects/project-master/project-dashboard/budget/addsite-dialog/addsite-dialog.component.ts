import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addsite-dialog',
  templateUrl: './addsite-dialog.component.html',
  styleUrls: ['./addsite-dialog.component.scss']
})
export class AddsiteDialogComponent implements OnInit {

  siteForm : FormGroup;

  countries = [{'conuntry_id': 1,'conuntry_name': 'Canada'},
  {'conuntry_id': 2,'conuntry_name': 'USA'},
  {'conuntry_id': 3,'conuntry_name': 'India'},
  {'conuntry_id': 4,'conuntry_name': 'Aus'},
  {'conuntry_id': 5,'conuntry_name': 'Belgium'},
  {'conuntry_id': 6,'conuntry_name': 'Iceland'}]

  States = [{'state_id': 1,'state_name': 'Albama'},
  {'state_id': 2,'state_name': 'Alaska'},
  {'state_id': 3,'state_name': 'Alberta'},
  {'state_id': 4,'state_name': 'Arizona'},
  {'state_id': 5,'state_name': 'British'},
  {'state_id': 6,'state_name': 'Columbia'}]

  Cities = [{'city_id': 1,'city_name': 'Port Blair'},
  {'city_id': 2,'city_name': 'Adivivaram'},
  {'city_id': 3,'city_name': 'Balapur'},
  {'city_id': 4,'city_name': 'Chidiga'},
  {'city_id': 5,'city_name': 'Darnakal'},
  {'city_id': 6,'city_name': 'Dasnapur'}]
 
  projects = [{'project_id': 1,'project_name': 'Construction'},
  {'project_id': 2,'project_name': 'Engineering'},
  {'project_id': 3,'project_name': 'Internal'},
  {'project_id': 4,'project_name': 'Legal'}]

  sites = [{site_id : "1" ,site_name:"Site-001" },
  {site_id : "2" ,site_name:"Site-002" },
  {site_id : "3" ,site_name:"Site-003" }]

  levels =[{'level_id': 1,'level_name': 'Level-001'},
  {'level_id': 2,'level_name': 'Level-002'},
  {'level_id': 3,'level_name': 'Level-003'}]

  jobcode = [
  { jobcode: "LPC1", rate: 55, status: true },
  { jobcode: "LPC2 Keeper", rate: 75, status: true },
  { jobcode: "EPC1", rate: 82, status: true },
  { jobcode: "EPC2", rate: 65, status: true },
  { jobcode: "CPC1", rate: 70, status: true },
  { jobcode: "CPC2", rate: 90, status: false },
  { jobcode: "OLS", rate: 50, status: true }

];

  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public doc: any ,public dialogRef: MatDialogRef<AddsiteDialogComponent>) { 
    this.createSiteDetails();
  }

  ngOnInit() {

  }

get streetAddress() { return this.siteForm.get('streetAddress'); }
get Country() { return this.siteForm.get('Country'); }
get State() { return this.siteForm.get('State'); }
get City() { return this.siteForm.get('City'); }
get jobTitle() { return this.siteForm.get('jobTitle'); }


createSiteDetails() {
  this.siteForm = this.fb.group({
    jobTitle : new FormControl('' , [Validators.required]),
    streetAddress : new FormControl('' , [Validators.required ]),
    Country : new FormControl('' , [Validators.required]),
    State : new FormControl('',[Validators.required]),
    City : new FormControl('',[Validators.required]),
  })
}

close(): void {
  this.dialogRef.close();
}

}
