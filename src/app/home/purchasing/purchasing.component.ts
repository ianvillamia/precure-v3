import { Component, OnInit } from '@angular/core';

export interface City {
  value: string;
  viewValue: string;
}

export interface Supplier {
  value: string;
  viewValue: string;
}

export interface Budget {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-purchasing',
  templateUrl: './purchasing.component.html',
  styleUrls: ['./purchasing.component.scss']
})
export class PurchasingComponent implements OnInit {

  city: City[] = [
    {value: 'Makati-0', viewValue: 'Makati'},
    {value: 'Pateros-1', viewValue: 'Pateros'},
    {value: 'Quezon-2', viewValue: 'Quezon'},
    {value: 'Pasig-3', viewValue: 'Pasig'}
  ];

  office: Supplier[] = [
    {value: 'Amazon-0', viewValue: 'Makati-Office'},
    {value: 'Lazada-1', viewValue: 'Pateros-Office'},
    {value: 'Shopee-2', viewValue: 'Quezon-Office'},
    {value: 'Pasig-Office-3', viewValue: 'Pasig-Office'}
  ];

  budget: Budget[] = [
    {value: 'Amazon-0', viewValue: 'Makati-Office'},
    {value: 'Lazada-1', viewValue: 'Pateros-Office'},
    {value: 'Shopee-2', viewValue: 'Quezon-Office'},
    {value: 'Pasig-Office-3', viewValue: 'Pasig-Office'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
