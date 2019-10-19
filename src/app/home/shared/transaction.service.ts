import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { Budget } from '../models/budget.model';
import { Location, ItemCategory } from '../models/arrays.model';
import { Observable } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  activeTransactions: Transaction[];
  receivedTransactions: Transaction[];
  budgets: Budget[];
  locations: Location[];
  budgetsO: Observable<Budget[]>;
  budgetCol: AngularFirestoreCollection<Budget>;
  transactionCol: AngularFirestoreCollection<Transaction>;
  loading = true;

  constructor(private afs: AngularFirestore) { 
    this.transactionCol = this.afs.collection('users/gIHQ7ONtv9uw4fsJzRni/transactions');

    this.budgetCol = this.afs.collection('users/gIHQ7ONtv9uw4fsJzRni/budgets', ref => ref.orderBy('name', 'desc'));
    this.budgetsO = this.budgetCol.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Budget;
        data.id = a.payload.doc.id;
        return data;
      }))
    );

    this.budgetsO.subscribe(budget => {
      this.budgets = budget;
      this.loading = false;
    });
  }

  addTransaction(transaction: Transaction){
    this.transactionCol.add(transaction);
  }

}
