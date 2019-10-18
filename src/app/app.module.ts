import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
