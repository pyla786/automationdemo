import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageEvent } from '@angular/material';
import { AppSettings } from '../../../../../app.settings';
import { Settings } from '../../../../../app.settings.model';

@Component({
  selector: 'app-exceptions',
  templateUrl: './exceptions.component.html',
  styleUrls: ['./exceptions.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ExceptionsComponent implements OnInit {

  filterToggle: boolean = false;

  values:any = [
    {head:"31-10-2020 16:49:50",amperes:'38',voltage:'24',KW:'21',KVA:'29',power:'1',KWh:'2'},
    {head:"31-10-2020 16:49:50",amperes:'32',voltage:'24',KW:'21',KVA:'23',power:'1',KWh:'1'},
    {head:"31-10-2020 16:49:50",amperes:'32',voltage:'24',KW:'22',KVA:'23',power:'1',KWh:'2'},
    {head:"31-10-2020 16:49:50",amperes:'32',voltage:'24',KW:'21',KVA:'23',power:'1',KWh:'2'},
    {head:"31-10-2020 16:49:50",amperes:'34',voltage:'18',KW:'21',KVA:'23',power:'1',KWh:'4'},
    {head:"31-10-2020 16:49:50",amperes:'32',voltage:'24',KW:'19',KVA:'24',power:'1',KWh:'2'},
    {head:"31-10-2020 16:49:50",amperes:'32',voltage:'24',KW:'21',KVA:'23',power:'1',KWh:'2'},
    {head:"31-10-2020 16:49:50",amperes:'32',voltage:'20',KW:'21',KVA:'23',power:'2',KWh:'2'},
    {head:"31-10-2020 16:49:50",amperes:'32',voltage:'24',KW:'21',KVA:'26',power:'1',KWh:'2'},
    {head:"31-10-2020 16:49:50",amperes:'31',voltage:'24',KW:'21',KVA:'23',power:'1',KWh:'3'},
    {head:"31-10-2020 16:49:50",amperes:'32',voltage:'24',KW:'24',KVA:'23',power:'2',KWh:'2'},
    {head:"31-10-2020 16:49:50",amperes:'32',voltage:'24',KW:'27',KVA:'28',power:'1',KWh:'7'}
  ]

  

  ngOnInit() {
  }

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
  public yAxisLabel = 'Exceptions';
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
        name: 'On Time',
        value: 30
      },
      {
        name: 'In Process',
        value: 47
      },
      {
        name: 'Delayed',
        value: 20
      }
    ];
    const triple = [
      {
        name: 'Concept',
        value: 30
      },
      {
        name: 'Engineering',
        value: 47
      },
      {
        name: 'Design',
        value: 20
      },
      {
        name: 'Pilot',
        value: 25
      },
      {
        name: 'Production',
        value: 36
      }
    ];
    const multiTriple = [
      {
        name: 'Induction',
        value: 95
      },
      {
        name: 'Concept Development',
        value: 80
      },
      {
        name: 'Product Development',
        value: 92
      },
      {
        name: 'Kitchen Implementation',
        value: 68
      },
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
            value: 1
          },
          {
            name: '2',
            value: 2
          },
          {
            name: '3',
            value: 1
          },
          {
            name: '4',
            value: 4
          },
          {
            name: '5',
            value: 3
          },
          {
            name: '6',
            value: 4
          },
          {
            name: '7',
            value: 2
          },
          {
            name: '8',
            value: 3
          },
          {
            name: '9',
            value: 1
          },
          {
            name: '10',
            value: 4
          },
          {
            name: '11',
            value: 1
          },
          {
            name: '12',
            value: 3
          },
          {
            name: '13',
            value: 4
          },
          {
            name: '14',
            value: 2
          },
          {
            name: '15',
            value: 3
          },
          {
            name: '16',
            value: 1
          },
          {
            name: '17',
            value: 1
          },
          {
            name: '18',
            value: 4
          },
          {
            name: '19',
            value: 3
          },
          {
            name: '20',
            value: 2
          },
          {
            name: '21',
            value: 2
          },
          {
            name: '22',
            value: 1
          },
          {
            name: '23',
            value: 3
          },
          {
            name: '24',
            value: 4
          },
          {
            name: '25',
            value: 4
          },
          {
            name: '26',
            value: 3
          },
          {
            name: '27',
            value: 1
          },
          {
            name: '28',
            value: 4
          },
          {
            name: '29',
            value: 1
          },
          {
            name: '30',
            value: 3
          }
        ]
      },
      
    ];
    Object.assign(this, {single, multi,triple,multiTriple}); 
  }
  
  public onSelect(event) {
    console.log(event);
  }
  
  
}


