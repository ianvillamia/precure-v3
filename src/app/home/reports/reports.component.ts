import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Transaction } from '../models/transaction.model';
import { TransactionService } from '../shared/transaction.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  receivedTransactions: Observable<Transaction[]>;
  transactionCol: AngularFirestoreCollection<Transaction>;
  loading = true
  //gIHQ7ONtv9uw4fsJzRni

  constructor(private afs: AngularFirestore, public transactionServ: TransactionService) { 
    
  }

  ngOnInit() {
    this.transactionCol = this.afs.collection('users/gIHQ7ONtv9uw4fsJzRni/transactions', ref => ref.orderBy('delivery_date', 'desc'));
    this.receivedTransactions = this.transactionCol.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Transaction;
        data.id = a.payload.doc.id;
        return data;
      }))
    );

    this.receivedTransactions.subscribe(transactions => {
      this.transactionServ.receivedTransactions = transactions;
      this.loading = false;
      //console.log(transactions);
    });
  }

}
