import { Component, OnInit } from '@angular/core';
import { Location, ItemCategory } from '../models/arrays.model';
import { map, takeWhile } from 'rxjs/operators';
import { TransactionService } from '../shared/transaction.service';
import { Transaction } from '../models/transaction.model';
import { Observable } from 'rxjs';

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
  category: string;
  location: string;
  budget: string;

  cities: template[] = [
    {value: 'Makati-0', viewValue: 'Makati'},
    {value: 'Pateros-1', viewValue: 'Pateros'},
    {value: 'Quezon-2', viewValue: 'Quezon'},
    {value: 'Pasig-3', viewValue: 'Pasig'}
  ];

  budgets: template[] = [
    {value: 'Amazon-0', viewValue: 'Makati-Office'},
    {value: 'Lazada-1', viewValue: 'Pateros-Office'},
    {value: 'Shopee-2', viewValue: 'Quezon-Office'},
    {value: 'Pasig-Office-3', viewValue: 'Pasig-Office'}
  ];
  categories: template[] = [
    {value: 'Electronics', viewValue: 'Electronics'},
    {value: 'Hardware', viewValue: 'Hardware'},
    {value: 'Furniture', viewValue: 'Furniture'},
    {value: 'Dilbo Baggins', viewValue: 'Dilbo Baggins'}
  ];

  constructor(public transactionServ: TransactionService) {

   }

  ngOnInit() {

  }

}
