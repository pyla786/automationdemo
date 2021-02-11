import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-previous',
  templateUrl: './add-previous.component.html',
  styleUrls: ['./add-previous.component.scss']
})
export class AddPreviousComponent implements OnInit {

  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public project: any ,public dialogRef: MatDialogRef<AddPreviousComponent>) { 
    
  }

  totalProjects = [
    {docTytle:"Culinary Build (Recipe  Card)",des:"Document for updated Indation process",verNum:"2.3",preVer:"8",curVer:"",Rem:"Verified By Mr.Stokes"},
    {docTytle:"Provide Estimated Forecast (Units/Store/Day)",des:"Lastest forecast report from head office",verNum:"1.2",preVer:"6",curVer:"",Rem:"Latest Document"},
    {docTytle:"NFP / Labels",des:"NFP lables for shippings",verNum:"2.5",preVer:"10",curVer:"",Rem:"Needs verification"},
    {docTytle:"RFP & Analysis ",des:"RPF analysis for shipments through public sector",verNum:"3.8",preVer:"14",curVer:"",Rem:"-"},
    {docTytle:"Finalize Assortment",des:"Assortment sheet for FFL Shipments",verNum:"1.1",preVer:"5",curVer:"",Rem:"Verified by Mr.David"},
    {docTytle:"Provide Match Samples (to Culinary & CFT)",des:"Match sample report from government",verNum:"2.9",preVer:"10",curVer:"",Rem:"Needs verification"},
    {docTytle:"Shelf Life Testing",des:"Testing protocols for shipments through air",verNum:"3.2",preVer:"8",curVer:"",Rem:"-"},
    {docTytle:"Finalize Assortment",des:"NFP lables for shippings",verNum:"4.7",preVer:"19",curVer:"",Rem:"Needs verification"},
    {docTytle:"Merchandiser Tasting (Category Mmgt)",des:"Branding costs for shipments through hospitality",verNum:"5.1",preVer:"22",curVer:"",Rem:"Verified by Mr.Warner"},
    {docTytle:"Secure Ingredient Source & Costs",des:"Shipment ingredient cost details",verNum:"6.9",preVer:"20",curVer:"",Rem:"-"},
  ]

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
