import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Budget } from '../models/budget.model';
import { TransactionService } from '../shared/transaction.service';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss']
})
export class BudgetsComponent implements OnInit {
  budgets: Observable<Budget[]>;
  budgetCol: AngularFirestoreCollection<Budget>;

  constructor(private afs: AngularFirestore, public transactionServ: TransactionService) { }

  ngOnInit() {
    this.budgetCol = this.afs.collection('users/gIHQ7ONtv9uw4fsJzRni/budgets', ref => ref.orderBy('name', 'desc'));
    this.budgets = this.budgetCol.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Budget;
        data.id = a.payload.doc.id;
        return data;
      }))
    );

    this.budgets.subscribe(budget => {
      this.transactionServ.budgets = budget;
    });
  }

}
