import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

//material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { HomeComponent } from './home/home.component';
import { HomeNavComponent } from './home/home-nav/home-nav.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { PurchasingComponent } from './home/purchasing/purchasing.component';
import { BudgetsComponent } from './home/budgets/budgets.component';
import { ReportsComponent } from './home/reports/reports.component';
import { CreateOrderComponent } from './home/purchasing/create-order/create-order.component';
//material

import { environment } from '../environments/environment.prod';

//services
import { TransactionService } from './home/shared/transaction.service';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { QuotesComponent } from './home/dashboard/quotes/quotes.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeNavComponent,
    DashboardComponent,
    PurchasingComponent,
    BudgetsComponent,
    ReportsComponent,
    CreateOrderComponent,
    LoadingSpinnerComponent,
    QuotesComponent,
    AddQuoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
