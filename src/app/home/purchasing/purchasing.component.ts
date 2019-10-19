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
  alert: string;
  yags: Date;
  category: string;
  location: string;
  budget: number;
  newTransaction: Transaction = {
    delivery_date: new Date,
    budget: 0,
    item_category: '',
    location: '',
    item_name: '',
    status: 'active'
  };
  itemName: string;

  cities: template[] = [
    {value: 'Makati-0', viewValue: 'Makati'},
    {value: 'Pateros-1', viewValue: 'Pateros'},
    {value: 'Quezon-2', viewValue: 'Quezon'},
    {value: 'Pasig-3', viewValue: 'Pasig'}
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
  
  saveTransaction(){
    //console.log(this.yags);
    
    this.newTransaction.delivery_date = this.yags;
    this.newTransaction.budget = this.budget;
    this.newTransaction.item_category = this.category;
    this.newTransaction.location = this.location;
    this.newTransaction.item_name = this.itemName;

    
    
    this.transactionServ.addTransaction(this.newTransaction);

    this.alert = 'transaction added!';
    
  }   

}
