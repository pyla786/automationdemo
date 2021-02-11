import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageEvent } from '@angular/material';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from 'src/app/app.settings.model';

@Component({
  selector: 'app-client-metrics',
  templateUrl: './client-metrics.component.html',
  styleUrls: ['./client-metrics.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ClientMetricsComponent{

  pageEvent: PageEvent;
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;
  public single: any[];
  public multi: any[];
  public triple: any[];
  public multiTriple : any[];
  public autoScale = true;
  public showLegend = false;
  public showXAxis = true;
  public showYAxis = true;
  public showXAxisLabel = true;
  public xAxisLabel = 'Days';
  public showYAxisLabel = true;
  public yAxisLabel = 'Exceptions(%)';
  public gradient = false;
  public gradient2 = false;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  }; 
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;
  public showLegend2 = false
  
  constructor(public appSettings:AppSettings) {
    this.settings = this.appSettings.settings; 
    const single = [
      {
        name: 'H.T Transformers',
        value: 2
      },
      {
        name: 'Automatic Voltage Stabilizer',
        value: 3
      },
      {
        name: 'Switch-Gears',
        value: 2
      },
      {
        name:"Electric Panels",
        value:6
      }
    ];
    const triple = [
      {
        name: '#0027',
        value: 6
      },
      {
        name: '#0037',
        value: 4
      },
      {
        name: '#0023',
        value: 3
      },
      {
        name: '#0012',
        value: 5
      },
      {
        name: '#0019',
        value: 6
      }
    ];
    const multiTriple = [
      {
        name: 'Morning(4 A.M - 12 P.M)',
        value: 12
      },
      {
        name: 'Evening(12 P.M - 6 P.M)',
        value: 8
      },
      {
        name: 'Night(6 P.M - 11 P.M)',
        value: 9
      }
    ];
    // const multi = [
    //   {
    //     "name": "January",
    //     "value": 12
    //   },
    //   {
    //     "name": "February",
    //     "value": 9
    //   },
    
    //   {
    //     "name": "March",
    //     "value": 5
    //   },
    //   {
    //     "name": "April",
    //     "value": 9
    //   },
    //   {
    //     "name": "May",
    //     "value": 1
    //   },
    //   {
    //     "name": "june",
    //     "value": 11
    //   },
    //   {
    //     "name": "July",
    //     "value": 9
    //   },
    //   {
    //     "name": "August",
    //     "value": 2
    //   },
    //   {
    //     "name": "September",
    //     "value": 3
    //   },
    //   {
    //     "name": "October",
    //     "value": 8
    //   },
    //   {
    //     "name": "November",
    //     "value": 6
    //   },
    //   {
    //     "name": "December",
    //     "value": 10
    //   }
    
    
    
    // ];
    const multi = [
      {
        name: 'Exceptions',
        series: [
          {
            name: '1',
            value: 60
          },
          {
            name: '2',
            value: 20
          },
          {
            name: '3',
            value: 10
          },
          {
            name: '4',
            value: 40
          },
          {
            name: '5',
            value: 30
          },
          {
            name: '6',
            value: 90
          },
          {
            name: '7',
            value: 20
          },
          {
            name: '8',
            value: 10
          },
          {
            name: '9',
            value: 10
          },
          {
            name: '10',
            value: 90
          },
          {
            name: '11',
            value: 70
          },
          {
            name: '12',
            value: 30
          },
          {
            name: '13',
            value: 40
          },
          {
            name: '14',
            value: 20
          },
          {
            name: '15',
            value: 30
          },
          {
            name: '16',
            value: 10
          },
          {
            name: '17',
            value: 10
          },
          {
            name: '18',
            value: 40
          },
          {
            name: '19',
            value: 30
          },
          {
            name: '20',
            value: 20
          },
          {
            name: '21',
            value: 20
          },
          {
            name: '22',
            value: 10
          },
          {
            name: '23',
            value: 30
          },
          {
            name: '24',
            value: 40
          },
          {
            name: '25',
            value: 40
          },
          {
            name: '26',
            value: 30
          },
          {
            name: '27',
            value: 10
          },
          {
            name: '28',
            value: 40
          },
          {
            name: '29',
            value: 10
          },
          {
            name: '30',
            value: 30
          },
          {
            name:'31',
            value:40
          }
        ]
      },
      
    ];
    Object.assign(this, {single, multi,triple,multiTriple}); 
  }
  
  public onSelect(event) {
    console.log(event);
  }
  
  totalProjects = [
    {module:'H.T. Transformers',devices:'6',exceptions:'2',alerts:'3',lastexception:'12-11-2019 13:05:45',lastalert:'14-11-2019 14:14:12',activesince:'13-08-2019'},
    {module:'Automatic Voltage Stabiliser',devices:'8',exceptions:'3',alerts:'3',lastexception:'14-11-2019 13:05:45',lastalert:'18-11-2019 14:14:12',activesince:'23-08-2019'},
    {module:'Switch-Gears',devices:'12',exceptions:'2',alerts:'3',lastexception:'02-11-2019 13:05:45',lastalert:'11-11-2019 14:14:12',activesince:'01-08-2019'},
    {module:'Electric Panels',devices:'15',exceptions:'6',alerts:'3',lastexception:'10-11-2019 13:05:45',lastalert:'12-11-2019 14:14:12',activesince:'15-08-2019'}  
  ]
  
}
