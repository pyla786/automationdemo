import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.scss']
})
export class TenderComponent implements OnInit {

  isInception: boolean = true;
  isControl: boolean = false;
  isTests: boolean = false;
  isContractor : boolean = false;
  filesToUpload = [];
  constructor() { }
  excavations= [{site:"Ceilings and Partitions",cat_name:"Specifications for suspended calcium silicate ceiling - heavy duty",Performed:"SQ. M",insecby:"6183",date:"10",result:"61830"},
  {site:"Ceilings and Partitions",cat_name:"Suspended gypsum ceiling",Performed:"SQ. M",insecby:"507",date:"10",result:"5070"}];
  ngOnInit() {

  }

  handleFileSelect(event) {
    this.filesToUpload.push(event.target.files[0])
  }

 fnInception() {
   console.log(true)
    this.isInception = true;
    this.isControl = false;
    this.isTests = false;
    this.isContractor = false;
  }

  fnTest() {
    this.isInception = false;
    this.isControl = false;
    this.isTests = true;
    this.isContractor = false;
  }

  fnControl() {
    this.isInception = false;
    this.isControl = true;
    this.isTests = false;
    this.isContractor = false;
  }
  fnContractor() {
    this.isInception = false;
    this.isControl = false;
    this.isTests = false;
    this.isContractor = true;
  }

}
