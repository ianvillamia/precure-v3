import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Transaction } from '../models/transaction.model';
import { TransactionService } from '../shared/transaction.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  activeTransactions: Observable<Transaction[]>;
  transactionCol: AngularFirestoreCollection<Transaction>;
  //gIHQ7ONtv9uw4fsJzRni

  constructor(private afs: AngularFirestore, public transactionServ: TransactionService) { 
    
  }

  ngOnInit() {
    this.transactionCol = this.afs.collection('users/gIHQ7ONtv9uw4fsJzRni/transactions', ref => ref.where('status', '==', 'active').orderBy('delivery_date', 'desc'));
    this.activeTransactions = this.transactionCol.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Transaction;
        data.id = a.payload.doc.id;
        return data;
      }))
    );

    this.activeTransactions.subscribe(transactions => {
      this.transactionServ.activeTransactions = transactions;
      //console.log(transactions);
    });
  }

}
