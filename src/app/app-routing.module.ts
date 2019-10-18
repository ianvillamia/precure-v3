import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './home/dashboard/dashboard.component'
import { PurchasingComponent } from './home/purchasing/purchasing.component'
import { BudgetsComponent } from './home/budgets/budgets.component'
import { ReportsComponent } from './home/reports/reports.component'
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, children:[
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path:'dashboard', component: DashboardComponent},
    {path:'purchase-order', component: PurchasingComponent},
    {path:'budget', component: BudgetsComponent},
    {path:'report', component: ReportsComponent}
  ]}
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
