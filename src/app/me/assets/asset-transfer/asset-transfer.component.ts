import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AssettransferGridcolumnsComponent } from './assettransfer-gridcolumns/assettransfer-gridcolumns.component';

@Component({
  selector: 'app-asset-transfer',
  templateUrl: './asset-transfer.component.html',
  styleUrls: ['./asset-transfer.component.scss']
})
export class AssetTransferComponent implements OnInit {

 
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;
  public showEmpty: boolean = false;
  filterToggle = false;
  assets=[{project:"P001",active:"",cat:"Computers",seqnumber:"PC-0001",assnumber:"Asset-0001",assname:"Board",make:"Sample",model:"Sample",price:"$250.00",date:"12/08/2020",desc:"Testing",dealer:"Automobiles & Services",Status:true},
  {project:"P002",active:"",cat:"Automobiles",seqnumber:"AM-0002",assnumber:"Asset-0001",assname:"Board",make:"Sample",model:"Sample",price:"$250.00",date:"12/08/2020",desc:"Testing",dealer:"Automobiles & Services",Status:true},
  {project:"P001",active:"",cat:"Data Collectors",seqnumber:"DC-0001",assnumber:"Asset-0001",assname:"Board",make:"Sample",model:"Sample",price:"$250.00",date:"12/08/2020",desc:"Testing",dealer:"Automobiles & Services",Status:false},
  {project:"P003",active:"",cat:"GPS",seqnumber:"GPS-0001",assnumber:"Asset-0001",assname:"Board",make:"Sample",model:"Sample",price:"$250.00",date:"12/08/2020",desc:"Testing",dealer:"Automobiles & Services",Status:true},
  {project:"P004",active:"",cat:"Computers",seqnumber:"PC-0001",assnumber:"Asset-0001",assname:"Board",make:"Sample",model:"Sample",price:"$250.00",date:"12/08/2020",desc:"Testing",dealer:"Automobiles & Services",Status:true}]
  
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
    let dialogRef = this.dialog.open(AssettransferGridcolumnsComponent, {
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
