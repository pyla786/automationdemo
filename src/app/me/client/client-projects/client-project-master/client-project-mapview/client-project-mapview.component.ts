import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-project-mapview',
  templateUrl: './client-project-mapview.component.html',
  styleUrls: ['./client-project-mapview.component.scss']
})
export class ClientProjectMapviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  lat:any;
  lng:any;
  
   
    public zoom: number = 5;
    public markingPoints = [{lat:17.3850 , lng:78.4867,label:'5-12007'},
    {lat:12.9716 , lng:77.5946,label:'A-023302'},
    {lat:16.3067 , lng:80.4365,label:'B-012322'},
    {lat:28.7041 , lng:77.1025,label:'C-323302'},
    {lat:13.0827 , lng:80.2707,label:'D-423302'}];
  
    
    
    onMouseOver(infoWindow, gm) {
      /* if (gm.lastOpen != null) {
          gm.lastOpen.close();
      } */
      gm.lastOpen = infoWindow;
      infoWindow.open();
    }
  
    onMouseOut(infoWindow, gm) {
      if (gm.lastOpen != null) {
        gm.lastOpen.close();
      }
    }

}
