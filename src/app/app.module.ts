import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CreditDebitComponent } from './credit-debit/credit-debit.component';
import { PayageComponent } from './payage/payage.component';
import { PurordComponent } from './purord/purord.component';
import { QuotationComponent } from './quotation/quotation.component';
import { GoodreceiptComponent } from './goodreceipt/goodreceipt.component';
import { ErrorComponent } from './error/error.component';
import { DebitComponent } from './debit/debit.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    InvoiceComponent,
    CreditDebitComponent,
    PayageComponent,
    PurordComponent,
    QuotationComponent,
    GoodreceiptComponent,
    ErrorComponent,
    DebitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
