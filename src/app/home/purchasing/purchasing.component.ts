import { Component, OnInit } from '@angular/core';

import { Transaction } from '../models/transaction.model';

export interface template {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-purchasing',
  templateUrl: './purchasing.component.html',
  styleUrls: ['./purchasing.component.scss']
})
export class PurchasingComponent implements OnInit {
  newTransaction: Transaction;
  city: template[] = [
    {value: 'Makati-0', viewValue: 'Makati'},
    {value: 'Pateros-1', viewValue: 'Pateros'},
    {value: 'Quezon-2', viewValue: 'Quezon'},
    {value: 'Pasig-3', viewValue: 'Pasig'}
  ];

  office: template[] = [
    {value: 'Amazon-0', viewValue: 'Makati-Office'},
    {value: 'Lazada-1', viewValue: 'Pateros-Office'},
    {value: 'Shopee-2', viewValue: 'Quezon-Office'},
    {value: 'Pasig-Office-3', viewValue: 'Pasig-Office'}
  ];

  budget: template[] = [
    {value: 'Amazon-0', viewValue: 'Makati-Office'},
    {value: 'Lazada-1', viewValue: 'Pateros-Office'},
    {value: 'Shopee-2', viewValue: 'Quezon-Office'},
    {value: 'Pasig-Office-3', viewValue: 'Pasig-Office'}
  ];
  category: template[] = [
    {value: 'Electronics', viewValue: 'Makati-Office'},
    {value: 'Hardware', viewValue: 'Pateros-Office'},
    {value: 'Shopee-2', viewValue: 'Quezon-Office'},
    {value: 'Pasig-Office-3', viewValue: 'Pasig-Office'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
