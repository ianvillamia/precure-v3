import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

import { TransactionService } from '../shared/transaction.service';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss']
})
export class BudgetsComponent implements OnInit {
  

  constructor(public transactionServ: TransactionService) { }

  ngOnInit() {
    
  }

}
