import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-field',
  templateUrl: './data-field.component.html',
  styleUrls: ['./data-field.component.scss']
})
export class DataFieldComponent implements OnInit {

  filterToggle: boolean = false;

  values:any = [
    {head:"31-10-2020 16:49:50",amperes:['A','32'],voltage:['V','24'],KW:['KW','21'],KVA:['KVA','23'],power:['Power Factor','1'],KWh:['KWh','2']},
    {head:"31-10-2020 16:49:50",amperes:['A','32'],voltage:['V','24'],KW:['KW','21'],KVA:['KVA','23'],power:['Power Factor','1'],KWh:['KWh','2']},
    {head:"31-10-2020 16:49:50",amperes:['A','32'],voltage:['V','24'],KW:['KW','21'],KVA:['KVA','23'],power:['Power Factor','1'],KWh:['KWh','2']},
    {head:"31-10-2020 16:49:50",amperes:['A','32'],voltage:['V','24'],KW:['KW','21'],KVA:['KVA','23'],power:['Power Factor','1'],KWh:['KWh','2']},
    {head:"31-10-2020 16:49:50",amperes:['A','32'],voltage:['V','24'],KW:['KW','21'],KVA:['KVA','23'],power:['Power Factor','1'],KWh:['KWh','2']},
    {head:"31-10-2020 16:49:50",amperes:['A','32'],voltage:['V','24'],KW:['KW','21'],KVA:['KVA','23'],power:['Power Factor','1'],KWh:['KWh','2']},
    {head:"31-10-2020 16:49:50",amperes:['A','32'],voltage:['V','24'],KW:['KW','21'],KVA:['KVA','23'],power:['Power Factor','1'],KWh:['KWh','2']},
    {head:"31-10-2020 16:49:50",amperes:['A','32'],voltage:['V','24'],KW:['KW','21'],KVA:['KVA','23'],power:['Power Factor','1'],KWh:['KWh','2']},
    {head:"31-10-2020 16:49:50",amperes:['A','32'],voltage:['V','24'],KW:['KW','21'],KVA:['KVA','23'],power:['Power Factor','1'],KWh:['KWh','2']},
    {head:"31-10-2020 16:49:50",amperes:['A','32'],voltage:['V','24'],KW:['KW','21'],KVA:['KVA','23'],power:['Power Factor','1'],KWh:['KWh','2']},
    {head:"31-10-2020 16:49:50",amperes:['A','32'],voltage:['V','24'],KW:['KW','21'],KVA:['KVA','23'],power:['Power Factor','1'],KWh:['KWh','2']},
    {head:"31-10-2020 16:49:50",amperes:['A','32'],voltage:['V','24'],KW:['KW','21'],KVA:['KVA','23'],power:['Power Factor','1'],KWh:['KWh','2']}
  ]

  constructor() { }

  ngOnInit() {
  }

}
