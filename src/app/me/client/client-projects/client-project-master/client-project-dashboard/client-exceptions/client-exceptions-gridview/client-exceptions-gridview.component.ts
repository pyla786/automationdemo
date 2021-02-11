import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-exceptions-gridview',
  templateUrl: './client-exceptions-gridview.component.html',
  styleUrls: ['./client-exceptions-gridview.component.scss']
})
export class ClientExceptionsGridviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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

}
