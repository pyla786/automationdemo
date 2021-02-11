import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-datafield-cardview',
  templateUrl: './client-datafield-cardview.component.html',
  styleUrls: ['./client-datafield-cardview.component.scss']
})
export class ClientDatafieldCardviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  filterToggle: boolean = false;

  values:any = [
    {head:"31-10-2020 16:49:50",amperes:'32',voltage:'24',KW:'21',KVA:'23',power:'1',KWh:'2'},
    {head:"31-10-2020 16:49:50",amperes:'32',voltage:'24',KW:'21',KVA:'23',power:'1',KWh:'2'},
    {head:"31-10-2020 16:49:50",amperes:'32',voltage:'24',KW:'21',KVA:'23',power:'1',KWh:'2'},
    {head:"31-10-2020 16:49:50",amperes:'32',voltage:'24',KW:'21',KVA:'23',power:'1',KWh:'2'},
    {head:"31-10-2020 16:49:50",amperes:'32',voltage:'24',KW:'21',KVA:'23',power:'1',KWh:'2'},
    {head:"31-10-2020 16:49:50",amperes:'32',voltage:'24',KW:'21',KVA:'23',power:'1',KWh:'2'},
    {head:"31-10-2020 16:49:50",amperes:'32',voltage:'24',KW:'21',KVA:'23',power:'1',KWh:'2'},
    {head:"31-10-2020 16:49:50",amperes:'32',voltage:'24',KW:'21',KVA:'23',power:'1',KWh:'2'},
    {head:"31-10-2020 16:49:50",amperes:'32',voltage:'24',KW:'21',KVA:'23',power:'1',KWh:'2'},
    {head:"31-10-2020 16:49:50",amperes:'32',voltage:'24',KW:'21',KVA:'23',power:'1',KWh:'2'},
    {head:"31-10-2020 16:49:50",amperes:'32',voltage:'24',KW:'21',KVA:'23',power:'1',KWh:'2'},
    {head:"31-10-2020 16:49:50",amperes:'32',voltage:'24',KW:'21',KVA:'23',power:'1',KWh:'2'}
  ]

}
