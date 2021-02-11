import { Component, OnInit } from '@angular/core';
import { TreeService } from '../tree.service';
import { TreeNode } from 'primeng/components/common/api';


@Component({
  selector: 'app-client-modulesanddevices',
  templateUrl: './client-modulesanddevices.component.html',
  styleUrls: ['./client-modulesanddevices.component.scss']
})
export class ClientModulesanddevicesComponent implements OnInit {

  values:any = [
    {head:"31-10-2020 16:49:50",amperes:'32',voltage:'24',KW:'21',KVA:'23',power:'1',KWh:'2'},
    {head:"31-10-2020 16:49:50",amperes:'32',voltage:'24',KW:'21',KVA:'23',power:'1',KWh:'2'},
    {head:"31-10-2020 16:49:50",amperes:'32',voltage:'24',KW:'21',KVA:'23',power:'1',KWh:'2'},
    {head:"31-10-2020 16:49:50",amperes:'32',voltage:'24',KW:'21',KVA:'23',power:'1',KWh:'2'},
    {head:"31-10-2020 16:49:50",amperes:'32',voltage:'24',KW:'21',KVA:'23',power:'1',KWh:'2'},
  ]

  localData:any;

  constructor(public treeService : TreeService) { 
    this.localData = this.taskData;
  }

  isInception: boolean = true;
  isControl: boolean = false;
  isTests: boolean = false;
  isElectrical:boolean = false;
  isFire:boolean = false;
  myModel:boolean = true;
  sowInfo : any = false;
  sowName: any;
  taskName: any;
  noData: any;
  files: any = [];
  taskId: any = [];
  globalTaskId: number;
  selectedFile: any = [];
  isSite:any

  ngOnInit() {
    var data = this.treeService.getTreeJSON();
    this.files = data['data'];
    this.taskId = this.taskData.slice(-1);
    this.globalTaskId = this.taskId[0]['id'];
    this.selectedFile = this.files[0]['children'][0];
  }

  fnInception() {
    this.isInception = true;
    this.isControl = false;
    this.isTests = false;
    this.isElectrical = false;
    this.isFire = false
  }

  fnTest() {
    this.isInception = false;
    this.isControl = false;
    this.isTests = true;
    this.isElectrical = false;
    this.isFire = false
  }

  fnControl() {
    this.isInception = false;
    this.isControl = true;
    this.isTests = false;
    this.isElectrical = false;
    this.isFire = false
  }

  fnElectrical(){
    this.isInception = false;
    this.isControl = false;
    this.isTests = false;
    this.isElectrical = true;
    this.isFire = false
  }

  fnFire(){
    this.isInception = false;
    this.isControl = false;
    this.isTests = false;
    this.isElectrical = false;
    this.isFire = true;
  }
  BudgetData =[
    {site:'71 Mearns Ct',sow:'SRPR',task:'Quote',   action:'CAD Drafting',planHour:8,jobCode:'Draft Engineer',rPh:65,estimate:520,status:true},
    {site:'71 Mearns Ct',sow:'SRPR',task:'Research',action:'Site Audit',planHour:10,jobCode:'Auditor',rPh:180,estimate:1800,status:true},
    {site:'71 Mearns Ct',sow:'SRPR',task:'Field',   action:'Initial Survey',planHour:16,jobCode:'Surveyor',rPh:150,estimate:2400,status:true},
    {site:'71 Mearns Ct',sow:'SRPR',task:'Calculations',action:'CAD Drafting',planHour:8,jobCode:'Draft Engineer',rPh:65,estimate:520,status:true},
    {site:'71 Mearns Ct',sow:'SRPR',task:'Drafting',    action:'Site Audit',planHour:10,jobCode:'Auditor',rPh:180,estimate:1800,status:true},
    {site:'71 Mearns Ct',sow:'SRPR',task:'QC',          action:'Initial Survey',planHour:16,jobCode:'Surveyor',rPh:150,estimate:2400,status:true},
    {site:'71 Mearns Ct',sow:'SRPR',task:'Management',action:'CAD Drafting',planHour:8,jobCode:'Draft Engineer',rPh:65,estimate:520,status:true},
    {site:'71 Mearns Ct',sow:'SRPR',task:'Admin',     action:'Site Audit',planHour:10,jobCode:'Auditor',rPh:180,estimate:1800,status:true},
    {site:'71 Mearns Ct',sow:'Reference Plan',task:'Quote',     action:'Initial Survey',planHour:16,jobCode:'Surveyor',rPh:150,estimate:2400,status:true},
    {site:'71 Mearns Ct',sow:'Reference Plan',task:'Research',    action:'CAD Drafting',planHour:8,jobCode:'Draft Engineer',rPh:65,estimate:520,status:true},
    {site:'71 Mearns Ct',sow:'Reference Plan',task:'Field',       action:'Site Audit',planHour:10,jobCode:'Auditor',rPh:180,estimate:1800,status:true},
    {site:'71 Mearns Ct',sow:'Reference Plan',task:'Calculations',action:'Initial Survey',planHour:16,jobCode:'Surveyor',rPh:150,estimate:2400,status:true},
    {site:'71 Mearns Ct',sow:'Reference Plan',task:'Drafting',   action:'CAD Drafting',planHour:8,jobCode:'Draft Engineer',rPh:65,estimate:520,status:true},
    {site:'71 Mearns Ct',sow:'Reference Plan',task:'QC',         action:'Site Audit',planHour:10,jobCode:'Auditor',rPh:180,estimate:1800,status:true},
    {site:'71 Mearns Ct',sow:'Reference Plan',task:'Management', action:'Initial Survey',planHour:16,jobCode:'Surveyor',rPh:150,estimate:2400,status:true},
    {site:'71 Mearns Ct',sow:'Reference Plan',task:'Admin',action:'CAD Drafting',planHour:8,jobCode:'Draft Engineer',rPh:65,estimate:520,status:true},
    {site:'City Homes',sow:'SRPR',task:'Quote',   action:'CAD Drafting',planHour:8,jobCode:'Draft Engineer',rPh:65,estimate:520,status:true},
    {site:'City Homes',sow:'SRPR',task:'Research',action:'Site Audit',planHour:10,jobCode:'Auditor',rPh:180,estimate:1800,status:true},
    {site:'City Homes',sow:'SRPR',task:'Field',   action:'Initial Survey',planHour:16,jobCode:'Surveyor',rPh:150,estimate:2400,status:true},
    {site:'City Homes',sow:'SRPR',task:'Calculations',action:'CAD Drafting',planHour:8,jobCode:'Draft Engineer',rPh:65,estimate:520,status:true},
    {site:'City Homes',sow:'SRPR',task:'Drafting',    action:'Site Audit',planHour:10,jobCode:'Auditor',rPh:180,estimate:1800,status:true},
    {site:'City Homes',sow:'SRPR',task:'QC',          action:'Initial Survey',planHour:16,jobCode:'Surveyor',rPh:150,estimate:2400,status:true},
    {site:'City Homes',sow:'SRPR',task:'Management',action:'CAD Drafting',planHour:8,jobCode:'Draft Engineer',rPh:65,estimate:520,status:true},
    {site:'City Homes',sow:'SRPR',task:'Admin',     action:'Site Audit',planHour:10,jobCode:'Auditor',rPh:180,estimate:1800,status:true},
    {site:'City Homes',sow:'Reference Plan',task:'Quote',     action:'Initial Survey',planHour:16,jobCode:'Surveyor',rPh:150,estimate:2400,status:true},
    {site:'City Homes',sow:'Reference Plan',task:'Research',    action:'CAD Drafting',planHour:8,jobCode:'Draft Engineer',rPh:65,estimate:520,status:true},
    {site:'City Homes',sow:'Reference Plan',task:'Field',       action:'Site Audit',planHour:10,jobCode:'Auditor',rPh:180,estimate:1800,status:true},
    {site:'City Homes',sow:'Reference Plan',task:'Calculations',action:'Initial Survey',planHour:16,jobCode:'Surveyor',rPh:150,estimate:2400,status:true},
    {site:'City Homes',sow:'Reference Plan',task:'Drafting',   action:'CAD Drafting',planHour:8,jobCode:'Draft Engineer',rPh:65,estimate:520,status:true},
    {site:'City Homes',sow:'Reference Plan',task:'QC',         action:'Site Audit',planHour:10,jobCode:'Auditor',rPh:180,estimate:1800,status:true},
    {site:'City Homes',sow:'Reference Plan',task:'Management', action:'Initial Survey',planHour:16,jobCode:'Surveyor',rPh:150,estimate:2400,status:true},
    {site:'City Homes',sow:'Reference Plan',task:'Admin',action:'CAD Drafting',planHour:8,jobCode:'Draft Engineer',rPh:65,estimate:520,status:true},
  
  ]

  newBudgetData =[
    {sow:'SRPR', Quote: 520, Research: 1800, Field: 2400, Calculations:520, Drafting: 1800, QC: 2400, Management: 520, Admin: 1800},
    {sow:'Reference Plan', Quote: 520, Research: 1800, Field: 2400, Calculations:520, Drafting: 1800, QC: 2400, Management: 520, Admin: 1800},
    {sow:'Topographic', Quote: 520, Research: 1800, Field: 2400, Calculations:520, Drafting: 1800, QC: 2400, Management: 520, Admin: 1800},
    {sow:'SRPR', Quote: 520, Research: 1800, Field: 2400, Calculations:520, Drafting: 1800, QC: 2400, Management: 520, Admin: 1800},
    {sow:'Reference Plan', Quote: 520, Research: 1800, Field: 2400, Calculations:520, Drafting: 1800, QC: 2400, Management: 520, Admin: 1800},
    {sow:'SRPR', Quote: 520, Research: 1800, Field: 2400, Calculations:520, Drafting: 1800, QC: 2400, Management: 520, Admin: 1800},
    {sow:'Reference Plan', Quote: 520, Research: 1800, Field: 2400, Calculations:520, Drafting: 1800, QC: 2400, Management: 520, Admin: 1800},
    {sow:'Topographic', Quote: 520, Research: 1800, Field: 2400, Calculations:520, Drafting: 1800, QC: 2400, Management: 520, Admin: 1800}
  ]

  taskData = [
    {id:"#0027",parameters:5,date:"12-10-2020",current:'32',voltage:'24',rating:'21',load:'23',power:'1',consumption:'2'},
    {id:"#0023",parameters:5,date:"12-10-2020",current:'32',voltage:'24',rating:'21',load:'23',power:'1',consumption:'2'},
    {id:"#0037",parameters:5,date:"12-10-2020",current:'32',voltage:'24',rating:'21',load:'23',power:'1',consumption:'2'},
    {id:"#0012",parameters:5,date:"12-10-2020",current:'32',voltage:'24',rating:'21',load:'23',power:'1',consumption:'2'},
    {id:"#0019",parameters:5,date:"12-10-2020",current:'32',voltage:'24',rating:'21',load:'23',power:'1',consumption:'2'},
    {id:"#0021",parameters:5,date:"12-10-2020",current:'32',voltage:'24',rating:'21',load:'23',power:'1',consumption:'2'},

  ]
// openAllAccordians(){
//   this.taskData.forEach(x=>x.selected = true);
// }
// closeAllAccordians(){
//   this.taskData.forEach(x=>x.selected = false);
// }






  
  // scrollActions(side) {
  //   this.taskData.forEach(element => {
  //     var ele = document.getElementById(element.id.toString());
  //     if(side == 'left')
  //     ele.scrollLeft += 190;
  //     else
  //     ele.scrollLeft -= 190;
  //   });
     
  //   }

  getTaskData(sowName, taksName){
  console.log('dddd')
  this.sowInfo = false;
  this.noData = true;
  setTimeout(() => {
    this.sowName = sowName;
    this.taskName = taksName;
    this.sowInfo = true;
  }, 100);

  }

  onTabClose(e) {
    console.log('closed')
    this.sowInfo = false;
    this.noData = false;
}

uploadedFiles: any[] = [];

onUpload(event) {
  for(let file of event.files) {
      this.uploadedFiles.push(file);
  }
}

private expandRecursive(node: TreeNode, isExpand: boolean) {
  node.expanded = isExpand;
  if (node.children) {
    node.children.forEach(childNode => {
      this.expandRecursive(childNode, isExpand);
    });
  }
}


expandAll() {
  this.files.forEach(node => {
    this.expandRecursive(node, true);
  });
}

collapseAll() {
  this.files.forEach(node => {
    this.expandRecursive(node, false);
  });
}



jobcode = [
  { jobcode: "LPC1", rate: 55, status: true },
  { jobcode: "LPC2 Keeper", rate: 75, status: true },
  { jobcode: "EPC1", rate: 82, status: true },
  { jobcode: "EPC2", rate: 65, status: true },
  { jobcode: "CPC1", rate: 70, status: true },
  { jobcode: "CPC2", rate: 90, status: false },
  { jobcode: "OLS", rate: 50, status: true }

];
JobCodes=["LPC1","LPC2","LPC3","EPC1","EPC2","EPC3","CPC1","CPC2","CPC3","OLS","EA","PA"]
ActionTypes = ["Quotes","Research","Field","Calcs","Drafting","Quality Control","Management","Admin"]
Sites=["71 Mearns / 249","71 Mearns Ct 20","20 Mearns Ct","Site 4"]
SOWs =["Reference Plan","Topographic","SRPR"]
Tasks=["Quote","Research","Field","Calculations","Drafting","QC","Management","Admin"]

filterToggle:boolean = false;
expenses =[
  {id:1, name:'Surveyor Search', rate:200, quantity:0, totals: 0}, 
  {id:2, name:'Mileage', rate:0.50, quantity:0, totals: 0}, 
  {id:3, name:'Bars/Spikes/Stakes', rate:25, quantity:0, totals: 0}, 
  {id:4, name:'Integration Fee', rate:500, quantity:0, totals: 0}, 
  {id:5, name:'RO Fee', rate:100, quantity:0, totals: 0}
]

totalBudget: number = 0;

hideChildModal(){
  
}

addExpenseItem(){
var expenseId = this.expenses.slice(-1);
var tempID = expenseId[0]['id'];
 tempID = tempID + 1;
this.expenses.push( {id:tempID, name:'', rate:null, quantity:0, totals: 0});
}

deleteExpenseItem(id){
this.expenses = this.expenses.filter(x=> x.id != id);
console.log(this.expenses);
}

}
