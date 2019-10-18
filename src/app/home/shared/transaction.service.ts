import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { Budget } from '../models/budget.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  activeTransactions: Transaction[];
  budgets: Budget[];

  constructor() { 

  }


}
