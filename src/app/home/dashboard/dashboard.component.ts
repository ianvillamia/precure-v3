import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Transaction } from '../models/transaction.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  activeTransactions: Observable<Transaction[]>;
  transactionCol: AngularFirestoreCollection<Transaction>;


  //gIHQ7ONtv9uw4fsJzRni

  constructor(private afs: AngularFirestore) { 
    
  }

  ngOnInit() {

  }

}
