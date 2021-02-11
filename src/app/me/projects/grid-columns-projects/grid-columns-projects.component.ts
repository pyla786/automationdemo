import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-grid-columns-projects',
  templateUrl: './grid-columns-projects.component.html',
  styleUrls: ['./grid-columns-projects.component.scss']
})
export class GridColumnsProjectsComponent implements OnInit {

  constructor(public dilaogRef:MatDialogRef<GridColumnsProjectsComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dilaogRef.close();
  }

}
