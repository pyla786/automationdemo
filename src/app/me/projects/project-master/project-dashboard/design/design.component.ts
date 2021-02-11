import { Component, OnInit } from '@angular/core';
import { DesigndialogComponent } from './designdialog/designdialog.component';
import { MatDialog } from '@angular/material';
import { AddNotesInDesignComponent } from './add-notes-in-design/add-notes-in-design.component';

@Component({
    selector: 'app-design',
    templateUrl: './design.component.html',
    styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {
    
    constructor(public dialog: MatDialog) { }
    
    public popoverTitle: string = 'Confirm Delete';
    public popoverMessage: string = 'Are you sure you want to delete this.?';
    public popoverStatusTitle: string = 'Confirm Status Change';
    public popoverStatusMessage: string = 'Are you sure you want to change status.?';
    public cancelClicked: boolean = false;
    
    coreModules = [{dno:"Design No: D-01",dname:"Design Name: Beam Layout"},{dno:"Design No: D-02",dname:"Design Name: Structure"},{dno:"Design No: D-03",dname:"Design Name: Beam layout"},{dno:"Design No: D-04",dname:"Design Name: Fire Fighting"},{dno:"Design No: D-05",dname:"Design Name: Plumbing"},{dno:"Design No: D-06",dname:"Design Name: Electrical"}
    ,{dno:"Design No: D-07",dname:"Design Name: Beam Layout"}]
    
    ngOnInit() {
        
    }
    
    openNotesDialog(add) {
        let dialogRef = this.dialog.open(AddNotesInDesignComponent, {
            data: add,
            height: 'auto',
            width: '600px',
            autoFocus:false
        });
        
        dialogRef.afterClosed().subscribe(lead => {
            if (lead) {
            }
        });
    }
    
    public openCoreDialog(lead) {
        let dialogRef = this.dialog.open(DesigndialogComponent, {
            data: lead,
            height: 'auto',
            width: '750px',
        });
        
        dialogRef.afterClosed().subscribe(lead => {
            if (lead) {
            }
        });
    }
    
}
