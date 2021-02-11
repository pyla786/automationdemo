import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-grid-columns-jobs',
  templateUrl: './grid-columns-jobs.component.html',
  styleUrls: ['./grid-columns-jobs.component.scss']
})
export class GridColumnsJobsComponent implements OnInit {

  constructor(public dilaogRef:MatDialogRef<GridColumnsJobsComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dilaogRef.close();
  }

}
