import { Component, OnInit } from '@angular/core';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { AddsiteDialogComponent } from './addsite-dialog/addsite-dialog.component';
import { TreeService } from '../tree.service';
import { MatDialog } from '@angular/material';
import { TreeNode } from 'primeng/components/common/api';


@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  myModel:boolean = true;
  sowInfo : any = false;
  addButton : any = false;
  sowName: any;
  taskName: any;
  noData: any;
  files: any = [];
  taskId: any = [];
  globalTaskId: number;
  selectedFile: any = [];
  isSite:any

  constructor(public treeService : TreeService, public dialog: MatDialog) { }

  ngOnInit() {
    var data = this.treeService.getTreeJSON();
    this.files = data['data'];
    this.taskId = this.taskData.slice(-1);
    this.globalTaskId = this.taskId[0]['id'];
    this.selectedFile = this.files[0]['children'][0];
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

  taskData = [{ id: 1, name: 'Quote', Data: [{ id: 1, rate: 0, quantity: 0, totals: 0 ,actionName:'CAD Drafting'},{ id: 2, rate: 0, quantity: 0, totals: 0 ,actionName:'Site Audit'},{ id: 3, rate: 0, quantity: 0, totals: 0 ,actionName:'Initial Survey'}], budgetHours: 0, budgetFee: 0, selected: false , button : false },
  { id: 2, name: 'Research', Data: [{ id: 1, rate: 0, quantity: 0, totals: 0 ,actionName:'CAD Drafting'},{ id: 2, rate: 0, quantity: 0, totals: 0 ,actionName:'Site Audit'},{ id: 3, rate: 0, quantity: 0, totals: 0 ,actionName:'Initial Survey'}], budgetHours: 0, budgetFee: 0 , selected: false, button : false},
  { id: 3, name: 'Field', Data: [{ id: 1, rate: 0, quantity: 0, totals: 0 ,actionName:'CAD Drafting'},{ id: 2, rate: 0, quantity: 0, totals: 0 ,actionName:'Site Audit'},{ id: 3, rate: 0, quantity: 0, totals: 0 ,actionName:'Initial Survey'}], budgetHours: 0, budgetFee: 0 , selected: false, button : false},
  { id: 4, name: 'Drafting', Data: [{ id: 1, rate: 0, quantity: 0, totals: 0 ,actionName:'CAD Drafting'},{ id: 2, rate: 0, quantity: 0, totals: 0 ,actionName:'Site Audit'},{ id: 3, rate: 0, quantity: 0, totals: 0 ,actionName:'Initial Survey'}], budgetHours: 0, budgetFee: 0 , selected: false, button : false},
  { id: 5, name: 'QC', Data: [{ id: 1, rate: 0, quantity: 0, totals: 0 ,actionName:'CAD Drafting'},{ id: 2, rate: 0, quantity: 0, totals: 0 ,actionName:'Site Audit'},{ id: 3, rate: 0, quantity: 0, totals: 0 ,actionName:'Initial Survey'}], budgetHours: 0, budgetFee: 0 , selected: false, button : false},
  { id: 6, name: 'Management', Data: [{ id: 1, rate: 0, quantity: 0, totals: 0 ,actionName:'CAD Drafting'},{ id: 2, rate: 0, quantity: 0, totals: 0 ,actionName:'Site Audit'},{ id: 3, rate: 0, quantity: 0, totals: 0 ,actionName:'Initial Survey'}], budgetHours: 0, budgetFee: 0 , selected: false, button : false},
  { id: 7, name: 'Admin', Data: [{ id: 1, rate: 0, quantity: 0, totals: 0 ,actionName:'CAD Drafting'},{ id: 2, rate: 0, quantity: 0, totals: 0 ,actionName:'Site Audit'},{ id: 3, rate: 0, quantity: 0, totals: 0 ,actionName:'Initial Survey'}], budgetHours: 0, budgetFee: 0 , selected: false, button : false},
]
openAllAccordians(){
  this.taskData.forEach(x=>x.selected = true);
  this.taskData.forEach(x=>x.button = true);
}
closeAllAccordians(){
  this.taskData.forEach(x=>x.selected = false);
  this.taskData.forEach(x=>x.button = true);
}
  
  scrollActions(side) {
    this.taskData.forEach(element => {
      var ele = document.getElementById(element.id.toString());
      if(side == 'left')
      ele.scrollLeft += 190;
      else
      ele.scrollLeft -= 190;
    });
     
    }
    public openSiteDialog(lead) {
      let dialogRef = this.dialog.open(AddsiteDialogComponent, {
          data: lead,
          height: 'auto',
          width: '750px',
      });
  
      dialogRef.afterClosed().subscribe(lead => {
          if (lead) {
          }
      });
  }

  getTaskData(sowName, taksName){
  this.sowInfo = false;
  this.noData = true;
  setTimeout(() => {
    this.sowName = sowName;
    this.taskName = taksName;
    this.sowInfo = true;
  }, 100);

  }

  onTabClose(e) {
   this.taskData[e.index]["selected"] = false;
}
onTabOpen(e) {
  this.taskData[e.index]["selected"] = true;
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

openDeleteDialog(assets) {
  let dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
    data: assets,
    height: 'auto',
    width: 'auto',
    autoFocus: false
  });
  
  dialogRef.afterClosed().subscribe(data => {
    if (data != null && data !== undefined) {
    }
  });
}
}
