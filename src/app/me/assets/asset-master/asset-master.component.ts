import { Component, OnInit } from '@angular/core';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { MatDialog } from '@angular/material';
import { AddassetGridcolumnsComponent } from './addasset-gridcolumns/addasset-gridcolumns.component';
import { AddassetDialogComponent } from './addasset-dialog/addasset-dialog.component';
import { AddassetmaintainenceDialogComponent } from './addassetmaintainence-dialog/addassetmaintainence-dialog.component';

@Component({
  selector: 'app-asset-master',
  templateUrl: './asset-master.component.html',
  styleUrls: ['./asset-master.component.scss']
})
export class AssetMasterComponent implements OnInit {
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;
  public showEmpty: boolean = false;
  filterToggle = false;

  constructor(public dialog : MatDialog) { }
  assets=[{cat:"Computers",seqnumber:"PC-0001",assnumber:"Asset-0001",assname:"Board",make:"Sample",model:"Sample",price:"$250.00",date:"12/08/2020",desc:"Testing",dealer:"Automobiles & Services",Status:true},
  {cat:"Automobiles",seqnumber:"AM-0002",assnumber:"Asset-0001",assname:"Board",make:"Sample",model:"Sample",price:"$250.00",date:"12/08/2020",desc:"Testing",dealer:"Automobiles & Services",Status:true},
  {cat:"Data Collectors",seqnumber:"DC-0001",assnumber:"Asset-0001",assname:"Board",make:"Sample",model:"Sample",price:"$250.00",date:"12/08/2020",desc:"Testing",dealer:"Automobiles & Services",Status:false},
  {cat:"GPS",seqnumber:"GPS-0001",assnumber:"Asset-0001",assname:"Board",make:"Sample",model:"Sample",price:"$250.00",date:"12/08/2020",desc:"Testing",dealer:"Automobiles & Services",Status:true},
  {cat:"Computers",seqnumber:"PC-0001",assnumber:"Asset-0001",assname:"Board",make:"Sample",model:"Sample",price:"$250.00",date:"12/08/2020",desc:"Testing",dealer:"Automobiles & Services",Status:true}]
  
  ngOnInit() {

  }

  public openCampaignDialog(Campaign) {
    const dialogRef = this.dialog.open(AddassetDialogComponent, {
      data: Campaign,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(campaign => {
      if (campaign === 'save') {
        
      } else {
      }
    });
  }

  openPopup(){
    let dialogRef = this.dialog.open(AddassetmaintainenceDialogComponent, {
      height: 'auto',
      width: '700px',
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe(prospects => {
      if (prospects == 'save') {
        
      }
    });
  }
  
  openGridColumnsDialog(stat) {
    let dialogRef = this.dialog.open(AddassetGridcolumnsComponent, {
      data: stat,
      height: 'auto',
      width: '600px',
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe(prospects => {
      if (prospects == 'save') {
        
      }
    });
  }
  
  dowloadBulkUploadCampaignTemplate(item) {}

   openDeleteDialog(value) {
    let dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      data: value,
      height: 'auto',
      width: 'auto',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
      if (value != null && value !== undefined) {
      
      }
    });
   }

   scrollGrid(side) {
    var ele = document.getElementById('grid-table-container');
    if (side == 'right')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
   }

}
