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
    path:'',component:LoginComponent,title:'Login'
  },
  {
    path:'dashboard',component:DashboardComponent,title:'Dashboard'
  },
  {
    path:'invoice',component:InvoiceComponent,title:'Invoice'
  },
  {
    path:'credit',component:CreditDebitComponent,title:'Credit'
  },
  {
    path:'purord',component:PurordComponent,title:'Purchase-Order'
  },
  {
    path:'quotation',component:QuotationComponent,title:'Quotation'
  },
  {
    path:'pa',component:PayageComponent,title:'Payment-Aging'
  },
  {
    path:'debit',component:DebitComponent,title:'Debit'
  },
  {
    path:'gr',component:GoodreceiptComponent,title:'Goods-Receipt'
  },
  {
    path:'**',component:ErrorComponent,title:'Error-Page'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
