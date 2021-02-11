import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Router } from '@angular/router';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from 'src/app/app.settings.model';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClientDashboardComponent implements OnInit {

  widgets: any;
  widget1SelectedYear = '2016';
  widget5SelectedDay = 'today';

  projects:object[]=[
      {project_id:1,project_code:'P12007'},
      {project_id:2,project_code:'P12009'},
      {project_id:3,project_code:'P12011'},
      {project_id:4,project_code:'P12012'},
      {project_id:5,project_code:'P12015'}
  ]
  

  // ngAfterViewInit(){
  //   this.elementRef.nativeElement.ownerDocument.body.style.background = '#fff !important';
  // }

 
 
  pageEvent: PageEvent;
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;
  public single: any[];
  public multi: any[];
  public triple: any[];
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
  public showLegend2 = false;

  ngOnInit() {
    this.widgets= {
      widget1: {
          chartType: 'line',
          datasets : {
              '2016': [
                  {
                      label: 'Sales',
                      data : [1.9, 3, 3.4, 2.2, 2.9, 3.9, 2.5, 3.8, 4.1, 3.8, 3.2, 2.9],
                      fill : 'start'

                  }
              ],
              '2017': [
                  {
                      label: 'Sales',
                      data : [2.2, 2.9, 3.9, 2.5, 3.8, 3.2, 2.9, 1.9, 3, 3.4, 4.1, 3.8],
                      fill : 'start'

                  }
              ],
              '2018': [
                  {
                      label: 'Sales',
                      data : [3.9, 2.5, 3.8, 4.1, 1.9, 3, 3.8, 3.2, 2.9, 3.4, 2.2, 2.9],
                      fill : 'start'

                  }
              ]

          },
          labels   : ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
          colors   : [
              {
                  borderColor              : '#42a5f5',
                  backgroundColor          : '#42a5f5',
                  pointBackgroundColor     : '#1e88e5',
                  pointHoverBackgroundColor: '#1e88e5',
                  pointBorderColor         : '#ffffff',
                  pointHoverBorderColor    : '#ffffff'
              }
          ],
          options  : {
              spanGaps           : false,
              legend             : {
                  display: false
              },
              maintainAspectRatio: false,
              layout             : {
                  padding: {
                      top  : 32,
                      left : 32,
                      right: 32
                  }
              },
              elements           : {
                  point: {
                      radius          : 4,
                      borderWidth     : 2,
                      hoverRadius     : 4,
                      hoverBorderWidth: 2
                  },
                  line : {
                      tension: 0
                  }
              },
              scales             : {
                  xAxes: [
                      {
                          gridLines: {
                              display       : false,
                              drawBorder    : false,
                              tickMarkLength: 18
                          },
                          ticks    : {
                              fontColor: '#ffffff'
                          }
                      }
                  ],
                  yAxes: [
                      {
                          display: false,
                          ticks  : {
                              min     : 1.5,
                              max     : 5,
                              stepSize: 0.5
                          }
                      }
                  ]
              },
              plugins            : {
                  filler      : {
                      propagate: false
                  },
                  xLabelsOnTop: {
                      active: true
                  }
              }
          }
      },
      widget2: {
          conversion: {
              value   : 492,
              ofTarget: 13
          },
          chartType : 'bar',
          datasets  : [
              {
                  label: 'Conversion',
                  data : [221, 428, 492, 471, 413, 344, 294]
              }
          ],
          labels    : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          colors    : [
              {
                  borderColor    : '#42a5f5',
                  backgroundColor: '#42a5f5'
              }
          ],
          options   : {
              spanGaps           : false,
              legend             : {
                  display: false
              },
              maintainAspectRatio: false,
              layout             : {
                  padding: {
                      top   : 24,
                      left  : 16,
                      right : 16,
                      bottom: 16
                  }
              },
              scales             : {
                  xAxes: [
                      {
                          display: false
                      }
                  ],
                  yAxes: [
                      {
                          display: false,
                          ticks  : {
                              min: 100,
                              max: 500
                          }
                      }
                  ]
              }
          }
      },
      widget3: {
          impressions: {
              value   : '87k',
              ofTarget: 12
          },
          chartType  : 'line',
          datasets   : [
              {
                  label: 'Impression',
                  data : [67000, 54000, 82000, 57000, 72000, 57000, 87000, 72000, 89000, 98700, 112000, 136000, 110000, 149000, 98000],
                  fill : false
              }
          ],
          labels     : ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6', 'Jan 7', 'Jan 8', 'Jan 9', 'Jan 10', 'Jan 11', 'Jan 12', 'Jan 13', 'Jan 14', 'Jan 15'],
          colors     : [
              {
                  borderColor: '#5c84f1'
              }
          ],
          options    : {
              spanGaps           : false,
              legend             : {
                  display: false
              },
              maintainAspectRatio: false,
              elements           : {
                  point: {
                      radius          : 2,
                      borderWidth     : 1,
                      hoverRadius     : 2,
                      hoverBorderWidth: 1
                  },
                  line : {
                      tension: 0
                  }
              },
              layout             : {
                  padding: {
                      top   : 24,
                      left  : 16,
                      right : 16,
                      bottom: 16
                  }
              },
              scales             : {
                  xAxes: [
                      {
                          display: false
                      }
                  ],
                  yAxes: [
                      {
                          display: false,
                          ticks  : {
                              // min: 100,
                              // max: 500
                          }
                      }
                  ]
              }
          }
      },
      widget4: {
          visits   : {
              value   : 882,
              ofTarget: -9
          },
          chartType: 'bar',
          datasets : [
              {
                  label: 'Visits',
                  data : [432, 428, 327, 363, 456, 267, 231]
              }
          ],
          labels   : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          colors   : [
              {
                  borderColor    : '#f44336',
                  backgroundColor: '#f44336'
              }
          ],
          options  : {
              spanGaps           : false,
              legend             : {
                  display: false
              },
              maintainAspectRatio: false,
              layout             : {
                  padding: {
                      top   : 24,
                      left  : 16,
                      right : 16,
                      bottom: 16
                  }
              },
              scales             : {
                  xAxes: [
                      {
                          display: false
                      }
                  ],
                  yAxes: [
                      {
                          display: false,
                          ticks  : {
                              min: 150,
                              max: 500
                          }
                      }
                  ]
              }
          }
      },
      widget5: {
          chartType: 'line',
          datasets : {
              'yesterday': [
                  {
                      label: 'Visitors',
                      data : [190, 300, 340, 220, 290, 390, 250, 380, 410, 380, 320, 290],
                      fill : 'start'

                  },
                  {
                      label: 'Page views',
                      data : [2200, 2900, 3900, 2500, 3800, 3200, 2900, 1900, 3000, 3400, 4100, 3800],
                      fill : 'start'
                  }
              ],
              'today'    : [
                  {
                      label: 'Energy Consumption',
                      data : [2.5, 3, 2.5, 1.5, 0.0, 1.0, 1.5, 1.0, 2.5, 2.0, 1.5, 2.0],
                      fill : 'start'
                  },
                  // {
                  //     label: 'Page Views',
                  //     data : [3000, 3400, 4100, 3800, 2200, 3200, 2900, 1900, 2900, 3900, 2500, 3800],
                  //     fill : 'start'

                  // }
              ]
          },
          labels   : ['15:26:36', '15:39:57', '15:53:08', '16:06:21', '16:19:31', '16:32:45', '16:45:58', '16:59:13', '17:20:03', '17:50:49', '18:04:27', '18:17:46'],
          colors   : [
              {
                  borderColor              : '#3949ab',
                  backgroundColor          : 'rgb(35, 61, 97)',
                  pointBackgroundColor     : '#3949ab',
                  pointHoverBackgroundColor: '#3949ab',
                  pointBorderColor         : '#ffffff',
                  pointHoverBorderColor    : '#ffffff'
              },
              {
                  borderColor              : 'rgba(30, 136, 229, 0.87)',
                  backgroundColor          : 'rgb(35, 61, 97)',
                  pointBackgroundColor     : 'rgba(30, 136, 229, 0.87)',
                  pointHoverBackgroundColor: 'rgba(30, 136, 229, 0.87)',
                  pointBorderColor         : '#ffffff',
                  pointHoverBorderColor    : '#ffffff'
              }
          ],
          options  : {
              spanGaps           : false,
              legend             : {
                  display: false
              },
              maintainAspectRatio: false,
              tooltips           : {
                  position : 'nearest',
                  mode     : 'index',
                  intersect: false
              },
              layout             : {
                  padding: {
                      left : 24,
                      right: 32
                  }
              },
              elements           : {
                  point: {
                      radius          : 4,
                      borderWidth     : 2,
                      hoverRadius     : 4,
                      hoverBorderWidth: 2
                  }
              },
              scales             : {
                  xAxes: [
                      {
                          gridLines: {
                              display: false
                          },
                          ticks    : {
                              fontColor: 'rgba(255,255,255,1)'
                          }
                      }
                  ],
                  yAxes: [
                      {
                          gridLines: {
                              tickMarkLength: 16
                          },
                          ticks    : {
                              stepSize: 0.5,
                              fontColor:'rgba(255,255,255,1)'
                          }
                      }
                  ]
              },
              plugins            : {
                  filler: {
                      propagate: false
                  }
              }
          }
      },
      widget6: {
          markers: [
              {
                  lat  : 52,
                  lng  : -73,
                  label: '120'
              },
              {
                  lat  : 37,
                  lng  : -104,
                  label: '498'
              },
              {
                  lat  : 21,
                  lng  : -7,
                  label: '443'
              },
              {
                  lat  : 55,
                  lng  : 75,
                  label: '332'
              },
              {
                  lat  : 51,
                  lng  : 7,
                  label: '50'
              },
              {
                  lat  : 31,
                  lng  : 12,
                  label: '221'
              },
              {
                  lat  : 45,
                  lng  : 44,
                  label: '455'
              },
              {
                  lat  : -26,
                  lng  : 134,
                  label: '231'
              },
              {
                  lat  : -9,
                  lng  : -60,
                  label: '67'
              },
              {
                  lat  : 33,
                  lng  : 104,
                  label: '665'
              }
          ],
          styles : [
              {
                  'featureType': 'administrative',
                  'elementType': 'labels.text.fill',
                  'stylers'    : [
                      {
                          'color': '#444444'
                      }
                  ]
              },
              {
                  'featureType': 'landscape',
                  'elementType': 'all',
                  'stylers'    : [
                      {
                          'color': '#f2f2f2'
                      }
                  ]
              },
              {
                  'featureType': 'poi',
                  'elementType': 'all',
                  'stylers'    : [
                      {
                          'visibility': 'off'
                      }
                  ]
              },
              {
                  'featureType': 'road',
                  'elementType': 'all',
                  'stylers'    : [
                      {
                          'saturation': -100
                      },
                      {
                          'lightness': 45
                      }
                  ]
              },
              {
                  'featureType': 'road.highway',
                  'elementType': 'all',
                  'stylers'    : [
                      {
                          'visibility': 'simplified'
                      }
                  ]
              },
              {
                  'featureType': 'road.arterial',
                  'elementType': 'labels.icon',
                  'stylers'    : [
                      {
                          'visibility': 'off'
                      }
                  ]
              },
              {
                  'featureType': 'transit',
                  'elementType': 'all',
                  'stylers'    : [
                      {
                          'visibility': 'off'
                      }
                  ]
              },
              {
                  'featureType': 'water',
                  'elementType': 'all',
                  'stylers'    : [
                      {
                          'color': '#039be5'
                      },
                      {
                          'visibility': 'on'
                      }
                  ]
              }
          ]
      },
      widget7: {
          scheme : {
              domain: ['#4867d2', '#5c84f1', '#89a9f4']
          },
          devices: [
              {
                  name  : 'Desktop',
                  value : 92.8,
                  change: -0.6
              },
              {
                  name  : 'Mobile',
                  value : 6.1,
                  change: 0.7
              },
              {
                  name  : 'Tablet',
                  value : 1.1,
                  change: 0.1
              }
          ]
      },
      widget8: {
          scheme : {
              domain: ['#5c84f1']
          },
          today  : '12,540',
          change : {
              value     : 321,
              percentage: 2.05
          },
          data   : [
              {
                  name  : 'Sales',
                  series: [
                      {
                          name : 'Jan 1',
                          value: 540
                      },
                      {
                          name : 'Jan 2',
                          value: 539
                      },
                      {
                          name : 'Jan 3',
                          value: 538
                      },
                      {
                          name : 'Jan 4',
                          value: 539
                      },
                      {
                          name : 'Jan 5',
                          value: 540
                      },
                      {
                          name : 'Jan 6',
                          value: 539
                      },
                      {
                          name : 'Jan 7',
                          value: 540
                      }
                  ]
              }
          ],
          dataMin: 538,
          dataMax: 541
      },
      widget9: {
          rows: [
              {
                  title     : 'Holiday Travel',
                  clicks    : 3621,
                  conversion: 90
              },
              {
                  title     : 'Get Away Deals',
                  clicks    : 703,
                  conversion: 7
              },
              {
                  title     : 'Airfare',
                  clicks    : 532,
                  conversion: 0
              },
              {
                  title     : 'Vacation',
                  clicks    : 201,
                  conversion: 8
              },
              {
                  title     : 'Hotels',
                  clicks    : 94,
                  conversion: 4
              }
          ]
      },
      widget10: {
        chartType: 'line',
        datasets : {
            'yesterday': [
                {
                    label: 'Visitors',
                    data : [190, 300, 340, 220, 290, 390, 250, 380, 410, 380, 320, 290],
                    fill : 'start'

                },
                {
                    label: 'Page views',
                    data : [2200, 2900, 3900, 2500, 3800, 3200, 2900, 1900, 3000, 3400, 4100, 3800],
                    fill : 'start'
                }
            ],
            'today'    : [
                {
                    label: 'Expenses',
                    data : [500,1000,800,700,900,600],
                    fill : 'start'
                },
                {
                    label: 'Income',
                    data : [500,1500,3000,1000,600,2000],
                    fill : 'start'

                }
            ]
        },
        labels   : ['21.01', '28.01', '04.02', '11.02', '18.02', '25.02'],
        colors   : [
            {
                borderColor              : 'red',
                backgroundColor          : 'rgb(47, 41, 77)',
                pointBackgroundColor     : '#3949ab',
                pointHoverBackgroundColor: '#3949ab',
                pointBorderColor         : '#ffffff',
                pointHoverBorderColor    : '#ffffff'
            },
            {
                borderColor              : 'green',
                backgroundColor          : 'rgb(35, 41, 75)',
                pointBackgroundColor     : 'rgba(30, 136, 229, 0.87)',
                pointHoverBackgroundColor: 'rgba(30, 136, 229, 0.87)',
                pointBorderColor         : '#ffffff',
                pointHoverBorderColor    : '#ffffff'
            }
        ],
        options  : {
            spanGaps           : false,
            legend             : {
                display: false
            },
            maintainAspectRatio: false,
            tooltips           : {
                position : 'nearest',
                mode     : 'index',
                intersect: false
            },
            layout             : {
                padding: {
                    left : 24,
                    right: 32
                }
            },
            elements           : {
                point: {
                    radius          : 4,
                    borderWidth     : 1,
                    hoverRadius     : 4,
                    hoverBorderWidth: 2
                }
            },
            scales             : {
                xAxes: [
                    {
                        gridLines: {
                            display: false
                        },
                        ticks    : {
                            fontColor: 'rgba(255,255,255,1)'
                        }
                    }
                ],
                yAxes: [
                    {
                        gridLines: {
                            tickMarkLength: 16
                        },
                        ticks    : {
                            stepSize: 500,
                            fontColor:'rgba(255,255,255,1)'
                        }
                    }
                ]
            },
            plugins            : {
                filler: {
                    propagate: false
                }
            }
        }
    }
  };
  }
  
  constructor(public appSettings:AppSettings,private router:Router) {
    this._registerCustomChartJSPlugin();
    this.settings = this.appSettings.settings; 
    const single = [
      {
        name: 'R',
        value: '2'
      },
      {
        name: 'Y',
        value: '3'
      },
      {
        name: 'B',
        value: '6'
      }
    ];
    const multi = [
      {
        name: 'Exceptions',
        series: [
          {
            name: 'hello',
            value: 6
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
            value: 9
          },
          {
            name: '7',
            value: 2
          },
          {
            name: '8',
            value: 10
          },
          {
            name: '9',
            value: 1
          },
          {
            name: '10',
            value: 9
          },
          {
            name: '11',
            value: 7
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
          },
          {
            name:'31',
            value:4
          }
        ]
      },
      
    ];
    const triple = [
      {
        name: 'Lights',
        value: 147
      },
      {
        name: 'H.V.A.C',
        value: 224
      },
      {
        name: 'Generator',
        value: 211
      },
      {
        name:'Electric Panels',
        value:150,
      },
      {
        name:'Other',
        value:230
      }
      
    ];
    Object.assign(this, {single, multi,triple}); 
  }
  private _registerCustomChartJSPlugin(): void
    {
        (window as any).Chart.plugins.register({
            afterDatasetsDraw: function(chart, easing): any {
                // Only activate the plugin if it's made available
                // in the options
                if (
                    !chart.options.plugins.xLabelsOnTop ||
                    (chart.options.plugins.xLabelsOnTop && chart.options.plugins.xLabelsOnTop.active === false)
                )
                {
                    return;
                }

                // To only draw at the end of animation, check for easing === 1
                const ctx = chart.ctx;

                chart.data.datasets.forEach(function(dataset, i): any {
                    const meta = chart.getDatasetMeta(i);
                    if ( !meta.hidden )
                    {
                        meta.data.forEach(function(element, index): any {

                            // Draw the text in black, with the specified font
                            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                            const fontSize = 13;
                            const fontStyle = 'normal';
                            const fontFamily = 'Roboto, Helvetica Neue, Arial';
                            ctx.font = (window as any).Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                            // Just naively convert to string for now
                            const dataString = dataset.data[index].toString() + 'k';

                            // Make sure alignment settings are correct
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            const padding = 15;
                            const startY = 24;
                            const position = element.tooltipPosition();
                            ctx.fillText(dataString, position.x, startY);

                            ctx.save();

                            ctx.beginPath();
                            ctx.setLineDash([5, 3]);
                            ctx.moveTo(position.x, startY + padding);
                            ctx.lineTo(position.x, position.y - padding);
                            ctx.strokeStyle = 'rgba(255,255,255,0.12)';
                            ctx.stroke();

                            ctx.restore();
                        });
                    }
                });
            }
        });
    }

  

}




