import { Component, OnInit, Inject } from '@angular/core';
// import { AddClientDialogComponent } from '../add-client-dialog/add-client-dialog.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { PageEvent, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import { AppSettings } from '../../../../../app.settings';
import { Settings } from '../../../../../app.settings.model';
import { AppendLinedialogComponent } from './append-linedialog/append-linedialog.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {



  public single: any[];
  public single1: any[];
  public multi: any[];
  public triple: any[];
  public showLegend = false;
  public gradient = false;
  public colorScheme = {
    domain: ['#2F3E9E', '#378D3B','#D22E2E' , '#0096A6', '#F47B00', '#606060']
  }; 
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;

  pageEvent: PageEvent;
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle = false;
  status = [{'status_id':'1','status_name':'Active'},
           {'status_id':'2','status_name':'Inactive'}]

  public status_filter = ""; 
  contactName = new FormControl();
  clientName = new FormControl();
  jobTitle = new FormControl();
  contactNumber = new FormControl();
  statu = new FormControl();
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;
  totalProjects = [
    {fat:"Electrical Control Cabinet (TAG22T3-100B)",clientname:'Formal Cutting (Culinary Leadership) - Go/NoGo Handoff', clienttype:'Developer', email:'abhi@gmail.com', phone:'9888459875', address:'D-46/2/1b', city:'Delhi', postal:'110056', contact:'2', quotes:'1', projects:'1', created:'2020-07-07', status:'true', is_selected:true , importance:"High",description:""},
    {fat:"Standard Work Procedures",clientname:'Kompass Key Step: Assortment Review / Alignment Meetings', clienttype:'Property Owner', email:'012amit@gmail.com', phone:'9882942885', address:'45/2/1c', city:'Hartana', postal:'215584', contact:'1', quotes:'1', projects:'3', created:'2020-07-07', status:'true', is_selected:false, importance:"Medium",description:""},
    {fat:"Materials Data Sheets",clientname:'RaRough P&L Build (Preliminary Recipe Baseline Cost)jesh', clienttype:'Architect', email:'rajesh12@gmail.com', phone:'9888736885', address:'C-120', city:'Delhi', postal:'110051', contact:'5', quotes:'2', projects:'5', created:'2020-07-07', status:'false',  is_selected:true, importance:"Low",description:""},
    {fat:"FAT Procedure",clientname:'Provide Estimated Forecast (Units/Store/Day)', clienttype:'Property Owner', email:'sameer90@gmail.com', phone:'9235452885', address:'C-13/ B-block', city:'Delhi', postal:'110036', contact:'1', quotes:'2', projects:'0', created:'2020-07-07', status:'true',  is_selected:true, importance:"High",description:""},
    {fat:"Standard Work Procedures",clientname:'Tags/Shelf Strips/Mapping', clienttype:'Property Owner', email:'012amit@gmail.com', phone:'9882942885', address:'45/2/1c', city:'Hartana', postal:'215584', contact:'1', quotes:'1', projects:'3', created:'2020-07-07', status:'true', is_selected:true, importance:"High",description:""},
    {fat:"FAT Procedure",clientname:'Provide Match Samples (to Culinary & CFT)', clienttype:'Architect', email:'rajesh12@gmail.com', phone:'9888736885', address:'C-120', city:'Delhi', postal:'110051', contact:'5', quotes:'2', projects:'5', created:'2020-07-07', status:'false',  is_selected:true, importance:"Low",description:""},
    {fat:"Electrical Control Cabinet (TAG22T3-100B)",clientname:'SaFormal Cutting (Culinary Leadership) - Go/NoGo Handoffmeer', clienttype:'Property Owner', email:'sameer90@gmail.com', phone:'9235452885', address:'C-13/ B-block', city:'Delhi', postal:'110036', contact:'1', quotes:'2', projects:'0', created:'2020-07-07', status:'true',  is_selected:false, importance:"Medium",description:""},
    {fat:"Materials Data Sheets",clientname:'Rough P&L Build (Preliminary Recipe Baseline Cost)', clienttype:'Property Owner', email:'012amit@gmail.com', phone:'9882942885', address:'45/2/1c', city:'Hartana', postal:'215584', contact:'1', quotes:'1', projects:'3', created:'2020-07-07', status:'true', is_selected:false, importance:"Low",description:""},
    {fat:"Standard Work Procedures",clientname:'Merchandiser Tasting (Category Mmgt)', clienttype:'Architect', email:'rajesh12@gmail.com', phone:'9888736885', address:'C-120', city:'Delhi', postal:'110051', contact:'5', quotes:'2', projects:'5', created:'2020-07-07', status:'false',  is_selected:true, importance:"Low",description:""},
    {fat:"Electrical Control Cabinet (TAG22T3-100B)",clientname:'Finalize Assortment', clienttype:'Property Owner', email:'sameer90@gmail.com', phone:'9235452885', address:'C-13/ B-block', city:'Delhi', postal:'110036', contact:'1', quotes:'2', projects:'0', created:'2020-07-07', status:'true',  is_selected:false, importance:"High",description:""},
  ];

  changeEvent(position,value) {
    this.totalProjects[position].is_selected = !value;
  }

  constructor(public dialog: MatDialog,public appSettings:AppSettings) {
     const single = [
      {
        name: 'Declined',
        value: 40
      },
      {
        name: 'Approved',
        value: 49
      },
      {
        name: 'Pending',
        value: 49
      },
      // {
      //   name: 'Gujarat',
      //   value: 36
      // },
      // {
      //   name: 'Delhi',
      //   value: 52
      // },
      // {
      //   name: 'Karnataka',
      //   value: 27
      // },
      // {
      //   name: 'Other',
      //   value: 10
      // }
    ];
    const single1 = [
      {
        name: 'High',
        value: 45
      },
      {
        name: 'Medium',
        value: 20
      },
      {
        name: 'Low',
        value: 8
      },
    ];
    const triple = [
      {
        name: 'New',
        value: 147
      },
      {
        name: 'Repeat',
        value: 224
      },
    ];
    this.settings = this.appSettings.settings; 
    Object.assign(this, {single,single1,triple}); 
   }

  ngOnInit() {

  }

  public onSelect(event) {
    console.log(event);
  }

  // openProjectDialog(stat){
  //   let dialogRef = this.dialog.open(AddClientDialogComponent, {
  //     data: stat,
  //     height: 'auto',
  //     width: '750px',
  //     autoFocus: false,
  //   });
    
  //   dialogRef.afterClosed().subscribe(prospects => {
  //     if(prospects == 'save') {
  
  //     }
  //   });
  // }

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

  openNewDialog(stat) {
    let dialogRef = this.dialog.open(AppendLinedialogComponent, {
      data: stat,
      height: 'auto',
      width: '600px',
    });
    
    dialogRef.afterClosed().subscribe(lead => {
      if (lead) {
        // (lead.id) ? this.updatelead(lead) : this.addlead(lead);
      }
    });
  }

}
