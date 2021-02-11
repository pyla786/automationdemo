import { Component, OnInit } from '@angular/core';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { AddchecklistDialogComponent } from './addchecklist-dialog/addchecklist-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {
  
  public showEmpty: boolean = false;
  filterToggle = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;

  audit = [{checklistname:"General Safety Checklist",constructionsubcategory:"Structure",frequency:"Bi Annually",status:false,questions:"View(10)"},
  {checklistname:"Electrical Fire Safety Checklist",constructionsubcategory:"Electrical",frequency:"Annually",status:true,questions:"View(8)"},
  {checklistname:"Maintenance Checklist",constructionsubcategory:"Plumbing",frequency:"Bi Annually",status:false,questions:"View(2)"},
  {checklistname:"Safety Checklist",constructionsubcategory:"Architecture",frequency:"Monthly",status:true,questions:"View(6)"},
  {checklistname:"Equipment Maintenance Checklist",constructionsubcategory:"Structure",frequency:"Annually",status:false,questions:"View(4)"}]

  constructor(public dialog : MatDialog) { }

  ngOnInit() {

  }

  public openCampaignDialog(Campaign) {
    const dialogRef = this.dialog.open(AddchecklistDialogComponent, {
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
