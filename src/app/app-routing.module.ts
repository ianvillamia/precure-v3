import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './home/dashboard/dashboard.component'
import { PurchasingComponent } from './home/purchasing/purchasing.component'
import { BudgetsComponent } from './home/budgets/budgets.component'
import { ReportsComponent } from './home/reports/reports.component'
import { HomeComponent } from './home/home.component';
import { QuotesComponent } from './home/dashboard/quotes/quotes.component';
import {AddQuoteComponent} from './add-quote/add-quote.component';
const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, children:[
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path:'dashboard', component: DashboardComponent, children:[
      {path:'quotes', component: QuotesComponent},
    ]},

    {path:'purchase-order', component: PurchasingComponent},
    {path:'budget', component: BudgetsComponent},
    {path:'report', component: ReportsComponent},
    {path: 'dashboard/:id', component: QuotesComponent}
  ]},
  {path:'add-quote',component:AddQuoteComponent}
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
