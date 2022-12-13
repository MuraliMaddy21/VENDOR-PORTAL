import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditDebitComponent } from './credit-debit/credit-debit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DebitComponent } from './debit/debit.component';
import { ErrorComponent } from './error/error.component';
import { GoodreceiptComponent } from './goodreceipt/goodreceipt.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { LoginComponent } from './login/login.component';
import { PayageComponent } from './payage/payage.component';
import { PurordComponent } from './purord/purord.component';
import { QuotationComponent } from './quotation/quotation.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'invoice',component:InvoiceComponent
  },
  {
    path:'credit',component:CreditDebitComponent
  },
  {
    path:'purord',component:PurordComponent
  },
  {
    path:'quotation',component:QuotationComponent
  },
  {
    path:'pa',component:PayageComponent
  },
  {
    path:'debit',component:DebitComponent
  },
  {
    path:'gr',component:GoodreceiptComponent
  },
  {
    path:'**',component:ErrorComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
