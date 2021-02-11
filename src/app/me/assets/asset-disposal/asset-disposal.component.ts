import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AssetdisposalGridcolumnsComponent } from './assetdisposal-gridcolumns/assetdisposal-gridcolumns.component';

@Component({
  selector: 'app-asset-disposal',
  templateUrl: './asset-disposal.component.html',
  styleUrls: ['./asset-disposal.component.scss']
})
export class AssetDisposalComponent implements OnInit {

  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;
  public showEmpty: boolean = false;
  filterToggle = false;
  assets=[{cat:"Computers",seqnumber:"PC-0001",assnumber:"Asset-0001",assname:"Board",make:"Sample",model:"Sample",price:"$250.00",date:"12/08/2020",desc:"Testing",dealer:"Automobiles & Services",Status:true},
  {cat:"Automobiles",seqnumber:"AM-0002",assnumber:"Asset-0001",assname:"Board",make:"Sample",model:"Sample",price:"$250.00",date:"12/08/2020",desc:"Testing",dealer:"Automobiles & Services",Status:true},
  {cat:"Data Collectors",seqnumber:"DC-0001",assnumber:"Asset-0001",assname:"Board",make:"Sample",model:"Sample",price:"$250.00",date:"12/08/2020",desc:"Testing",dealer:"Automobiles & Services",Status:false},
  {cat:"GPS",seqnumber:"GPS-0001",assnumber:"Asset-0001",assname:"Board",make:"Sample",model:"Sample",price:"$250.00",date:"12/08/2020",desc:"Testing",dealer:"Automobiles & Services",Status:true},
  {cat:"Computers",seqnumber:"PC-0001",assnumber:"Asset-0001",assname:"Board",make:"Sample",model:"Sample",price:"$250.00",date:"12/08/2020",desc:"Testing",dealer:"Automobiles & Services",Status:true}]
  
  constructor(public dialog : MatDialog) { }
  
  ngOnInit() {

  }
  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container');
    if (side == 'right')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
   }
   
   openGridColumnsDialog(stat) {
    let dialogRef = this.dialog.open(AssetdisposalGridcolumnsComponent, {
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
}
