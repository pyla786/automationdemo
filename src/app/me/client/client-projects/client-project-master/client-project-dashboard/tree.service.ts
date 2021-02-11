import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TreeService {
  
  constructor(private http: HttpClient) { 
    
    this.treeData = {
      "data": [
        {
          "label": "H.T Transformers",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-clipboard cs-blue",
          "collapsedIcon": "fa fa-clipboard cs-blue",
          "selectable": false,
          "expanded": true,
          "children": [{
            "label": "Main MCCB",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-folder-open dark-blue",
            "collapsedIcon": "fa fa-folder dark-blue",
            "selectable": true,
            "expanded": true,
            // "children":[{
            //   "label": "Brief",
            //   "data": "Documents Folder",
            //   "expandedIcon": "fa fa-briefcase red",
            //   "collapsedIcon": "fa fa-briefcase red",
            //   "selectable": true,
            // }]
          },
          {
            "label": "Lights",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-folder-open dark-blue",
            "collapsedIcon": "fa fa-folder dark-blue",
            "selectable": true,
            "expanded": false,
            // "children":[{
            //   "label": "Brief",
            //   "data": "Documents Folder",
            //   "expandedIcon": "fa fa-briefcase red",
            //   "collapsedIcon": "fa fa-briefcase red",
            //   "selectable": true,
            // }]
          },
          {
            "label": "Generator",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-folder-open dark-blue",
            "collapsedIcon": "fa fa-folder dark-blue",
            "selectable": true,
            "expanded": false,
            // "children":[{
            //   "label": "Brief",
            //   "data": "Documents Folder",
            //   "expandedIcon": "fa fa-briefcase red",
            //   "collapsedIcon": "fa fa-briefcase red",
            //   "selectable": true,
            // }]
          },
          {
            "label": "H.V.A.C",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-folder-open dark-blue",
            "collapsedIcon": "fa fa-folder dark-blue",
            "selectable": true,
            "expanded": false,
            // "children":[{
            //   "label": "Brief",
            //   "data": "Documents Folder",
            //   "expandedIcon": "fa fa-briefcase red",
            //   "collapsedIcon": "fa fa-briefcase red",
            //   "selectable": true,
            // }]
          }
        ]
      },
      {
        "label": "Automatic Volatge Stablilizer",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-clipboard cs-blue",
        "collapsedIcon": "fa fa-clipboard cs-blue",
        "selectable": false,
        "expanded": false,
        "children": [{
          "label": "Main MCCB",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-folder-open dark-blue",
          "collapsedIcon": "fa fa-folder dark-blue",
          "selectable": true,
          "expanded": false,
          // "children":[{
          //   "label": "Brief",
          //   "data": "Documents Folder",
          //   "expandedIcon": "fa fa-briefcase red",
          //   "collapsedIcon": "fa fa-briefcase red",
          //   "selectable": true,
          // }]
        },
        {
          "label": "Lights",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-folder-open dark-blue",
          "collapsedIcon": "fa fa-folder dark-blue",
          "selectable": true,
          "expanded": false,
          // "children":[{
          //   "label": "Brief",
          //   "data": "Documents Folder",
          //   "expandedIcon": "fa fa-briefcase red",
          //   "collapsedIcon": "fa fa-briefcase red",
          //   "selectable": true,
          // }]
        },
        {
          "label": "Generator",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-folder-open dark-blue",
          "collapsedIcon": "fa fa-folder dark-blue",
          "selectable": true,
          "expanded": false,
          // "children":[{
          //   "label": "Brief",
          //   "data": "Documents Folder",
          //   "expandedIcon": "fa fa-briefcase red",
          //   "collapsedIcon": "fa fa-briefcase red",
          //   "selectable": true,
          // }]
        },
        {
          "label": "H.V.A.C",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-folder-open dark-blue",
          "collapsedIcon": "fa fa-folder dark-blue",
          "selectable": true,
          "expanded": false,
          // "children":[{
          //   "label": "Brief",
          //   "data": "Documents Folder",
          //   "expandedIcon": "fa fa-briefcase red",
          //   "collapsedIcon": "fa fa-briefcase red",
          //   "selectable": true,
          // }]
        }
      ]
    },{
      "label": "Switch-Gears",
      "data": "Documents Folder",
      "expandedIcon": "fa fa-clipboard cs-blue",
      "collapsedIcon": "fa fa-clipboard cs-blue",
      "selectable": false,
      "expanded": false,
      "children": [{
        "label": "Main MCCB",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-folder-open dark-blue",
        "collapsedIcon": "fa fa-folder dark-blue",
        "selectable": true,
        "expanded": false,
        // "children":[{
        //   "label": "Brief",
        //   "data": "Documents Folder",
        //   "expandedIcon": "fa fa-briefcase red",
        //   "collapsedIcon": "fa fa-briefcase red",
        //   "selectable": true,
        // }]
      },
      {
        "label": "Lights",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-folder-open dark-blue",
        "collapsedIcon": "fa fa-folder dark-blue",
        "selectable": true,
        "expanded": false,
        // "children":[{
        //   "label": "Brief",
        //   "data": "Documents Folder",
        //   "expandedIcon": "fa fa-briefcase red",
        //   "collapsedIcon": "fa fa-briefcase red",
        //   "selectable": true,
        // }]
      },
      {
        "label": "Generator",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-folder-open dark-blue",
        "collapsedIcon": "fa fa-folder dark-blue",
        "selectable": true,
        "expanded": false,
        // "children":[{
        //   "label": "Brief",
        //   "data": "Documents Folder",
        //   "expandedIcon": "fa fa-briefcase red",
        //   "collapsedIcon": "fa fa-briefcase red",
        //   "selectable": true,
        // }]
      },
      {
        "label": "H.V.A.C",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-folder-open dark-blue",
        "collapsedIcon": "fa fa-folder dark-blue",
        "selectable": true,
        "expanded": false,
        // "children":[{
        //   "label": "Brief",
        //   "data": "Documents Folder",
        //   "expandedIcon": "fa fa-briefcase red",
        //   "collapsedIcon": "fa fa-briefcase red",
        //   "selectable": true,
        // }]
      }
    ]
  },{
    "label": "Electric Panels",
    "data": "Documents Folder",
    "expandedIcon": "fa fa-clipboard cs-blue",
    "collapsedIcon": "fa fa-clipboard cs-blue",
    "selectable": false,
    "expanded": false,
    "children": [{
      "label": "Main MCCB",
      "data": "Documents Folder",
      "expandedIcon": "fa fa-folder-open dark-blue",
      "collapsedIcon": "fa fa-folder dark-blue",
      "selectable": true,
      "expanded": false,
      // "children":[{
      //   "label": "Brief",
      //   "data": "Documents Folder",
      //   "expandedIcon": "fa fa-briefcase red",
      //   "collapsedIcon": "fa fa-briefcase red",
      //   "selectable": true,
      // }]
    },
    {
      "label": "Lights",
      "data": "Documents Folder",
      "expandedIcon": "fa fa-folder-open dark-blue",
      "collapsedIcon": "fa fa-folder dark-blue",
      "selectable": true,
      "expanded": false,
      // "children":[{
      //   "label": "Brief",
      //   "data": "Documents Folder",
      //   "expandedIcon": "fa fa-briefcase red",
      //   "collapsedIcon": "fa fa-briefcase red",
      //   "selectable": true,
      // }]
    },
    {
      "label": "Generator",
      "data": "Documents Folder",
      "expandedIcon": "fa fa-folder-open dark-blue",
      "collapsedIcon": "fa fa-folder dark-blue",
      "selectable": true,
      "expanded": false,
      // "children":[{
      //   "label": "Brief",
      //   "data": "Documents Folder",
      //   "expandedIcon": "fa fa-briefcase red",
      //   "collapsedIcon": "fa fa-briefcase red",
      //   "selectable": true,
      // }]
    },
    {
      "label": "H.V.A.C",
      "data": "Documents Folder",
      "expandedIcon": "fa fa-folder-open dark-blue",
      "collapsedIcon": "fa fa-folder dark-blue",
      "selectable": true,
      "expanded": false,
      // "children":[{
      //   "label": "Brief",
      //   "data": "Documents Folder",
      //   "expandedIcon": "fa fa-briefcase red",
      //   "collapsedIcon": "fa fa-briefcase red",
      //   "selectable": true,
      // }]
    }
  ]
},
]
}
}
treeData: any;

public getTreeJSON() {
  return this.treeData;
}
}
