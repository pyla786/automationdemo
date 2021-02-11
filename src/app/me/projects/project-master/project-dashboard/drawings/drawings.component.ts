import { Component, OnInit, Inject } from '@angular/core';
// import { AddClientDialogComponent } from '../add-client-dialog/add-client-dialog.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { PageEvent, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import { AppSettings } from '../../../../../app.settings';
import { Settings } from '../../../../../app.settings.model';
import { AddActionItemComponent } from './add-action-item/add-action-item.component';

@Component({
  selector: 'app-drawings',
  templateUrl: './drawings.component.html',
  styleUrls: ['./drawings.component.scss']
})
export class DrawingsComponent implements OnInit {
  
  
  public single: any[];
  public single2: any[];
  public single3: any[];
  public multi: any[];
  public triple: any[];
  public showXAxis = true;
  public showYAxis = true;
  public showXAxisLabel = true;
  public xAxisLabel = 'Weeks';
  public showYAxisLabel = true;
  public yAxisLabel = 'Progress';
  public showLegend = false;
  public gradient = false;
  public gradient2 = false;
  public colorScheme = {
    domain: ['#2F3E9E', '#378D3B','#D22E2E' , '#0096A6', '#F47B00', '#606060']
  }; 
  public colorScheme2 = {
    domain: [ '#0096A6', '#F47B00', '#606060','#2F3E9E', '#378D3B','#D22E2E']
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
    {clientname:'Formal Cutting (Culinary Leadership) - Go/NoGo Handoff', clienttype:'Developer', email:'abhi@gmail.com', phone:'9888459875', address:'D-46/2/1b', city:'Delhi', postal:'110056', contact:'2', quotes:'1', projects:'1', created:'2020-07-07', status:'true', is_selected:true , importance:"High" , acd:"2020-09-10",person:"Warner",statusComp:"Completed",loggedBy:"Stokes",loggedDate:"2020-08-24",targetDate:"2020-10-24"},
    {clientname:'Kompass Key Step: Assortment Review / Alignment Meetings', clienttype:'Property Owner', email:'012amit@gmail.com', phone:'9882942885', address:'45/2/1c', city:'Hartana', postal:'215584', contact:'1', quotes:'1', projects:'3', created:'2020-07-07', status:'true', is_selected:false , importance:"Low" , acd:"2020-09-25",person:"David",statusComp:"In Process",loggedBy:"Williamson",loggedDate:"2020-08-29",targetDate:"2020-10-11"},
    {clientname:'RaRough P&L Build (Preliminary Recipe Baseline Cost)jesh', clienttype:'Architect', email:'rajesh12@gmail.com', phone:'9888736885', address:'C-120', city:'Delhi', postal:'110051', contact:'5', quotes:'2', projects:'5', created:'2020-07-07', status:'false',  is_selected:false , importance:"High" , acd:"2020-09-29",person:"Smith",statusComp:"Pending",loggedBy:"Cottrel",loggedDate:"2020-09-10",targetDate:"2020-10-15"},
    {clientname:'Provide Estimated Forecast (Units/Store/Day)', clienttype:'Property Owner', email:'sameer90@gmail.com', phone:'9235452885', address:'C-13/ B-block', city:'Delhi', postal:'110036', contact:'1', quotes:'2', projects:'0', created:'2020-07-07', status:'true',  is_selected:false , importance:"Medium" , acd:"2020-09-30",person:"Warner",statusComp:"In Process",loggedBy:"Gayle",loggedDate:"2020-09-16",targetDate:"2020-10-19"},
    {clientname:'Tags/Shelf Strips/Mapping', clienttype:'Property Owner', email:'012amit@gmail.com', phone:'9882942885', address:'45/2/1c', city:'Hartana', postal:'215584', contact:'1', quotes:'1', projects:'3', created:'2020-07-07', status:'true', is_selected:true , importance:"Medium" , acd:"2020-10-10",person:"Williamson",statusComp:"Completed",loggedBy:"Dave",loggedDate:"2020-09-20",targetDate:"2020-10-22"},
    {clientname:'Provide Match Samples (to Culinary & CFT)', clienttype:'Architect', email:'rajesh12@gmail.com', phone:'9888736885', address:'C-120', city:'Delhi', postal:'110051', contact:'5', quotes:'2', projects:'5', created:'2020-07-07', status:'false',  is_selected:false , importance:"High" , acd:"2020-10-12",person:"Warner",statusComp:"In Process",loggedBy:"Guptil",loggedDate:"2020-09-22",targetDate:"2020-10-29"},
    {clientname:'SaFormal Cutting (Culinary Leadership) - Go/NoGo Handoffmeer', clienttype:'Property Owner', email:'sameer90@gmail.com', phone:'9235452885', address:'C-13/ B-block', city:'Delhi', postal:'110036', contact:'1', quotes:'2', projects:'0', created:'2020-07-07', status:'true',  is_selected:false , importance:"Low" , acd:"2020-10-15",person:"David",statusComp:"Pending",loggedBy:"Neesham",loggedDate:"2020-09-26",targetDate:"2020-11-01"},
    {clientname:'Rough P&L Build (Preliminary Recipe Baseline Cost)', clienttype:'Property Owner', email:'012amit@gmail.com', phone:'9882942885', address:'45/2/1c', city:'Hartana', postal:'215584', contact:'1', quotes:'1', projects:'3', created:'2020-07-07', status:'true', is_selected:false , importance:"High" , acd:"2020-10-19",person:"Warner",statusComp:"In Process",loggedBy:"Latham",loggedDate:"2020-10-01",targetDate:"2020-11-25"},
    {clientname:'Merchandiser Tasting (Category Mmgt)', clienttype:'Architect', email:'rajesh12@gmail.com', phone:'9888736885', address:'C-120', city:'Delhi', postal:'110051', contact:'5', quotes:'2', projects:'5', created:'2020-07-07', status:'false',  is_selected:true , importance:"Medium" , acd:"2020-10-21",person:"Smith",statusComp:"Completed",loggedBy:"Woakes",loggedDate:"2020-10-05",targetDate:"2020-12-15"},
    {clientname:'Finalize Assortment', clienttype:'Property Owner', email:'sameer90@gmail.com', phone:'9235452885', address:'C-13/ B-block', city:'Delhi', postal:'110036', contact:'1', quotes:'2', projects:'0', created:'2020-07-07', status:'true',  is_selected:false , importance:"Low" , acd:"2020-10-25 ",person:"Steve",statusComp:"Pending",loggedBy:"Cummins",loggedDate:"2020-10-10",targetDate:"2020-12-28"},
  ];
  
  constructor(public dialog: MatDialog,public appSettings:AppSettings) {
    const single = [
      {
        name: 'Completed',
        value: 40
      },
      {
        name: 'Process',
        value: 49
      },
      {
        name: 'Pending',
        value: 30
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
    const single2 = [
      {
        name: 'High',
        value: 15
      },
      {
        name: 'Medium',
        value: 10
      },
      {
        name: 'Low',
        value: 5
      },
    ];
    const single3 = [
      {
        name: 'W21',
        value: 30
      },
      {
        name: 'W22',
        value: 28
      },
      {
        name: 'W23',
        value: 12
      },
      {
        name: 'W24',
        value: 22
      },
      {
        name: 'W25',
        value: 8
      },
    ];
    const multi = [
      {
        name: 'Mining',
        value: 35
      },
      {
        name: 'Shipping',
        value: 20
      },
      {
        name: 'Hospitality',
        value: 94
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
    Object.assign(this, {single,multi,triple,single2,single3}); 
  }
  
  ngOnInit() {
    
  }
  
  openNewDialog(stat) {
    let dialogRef = this.dialog.open(AddActionItemComponent, {
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
  
}
