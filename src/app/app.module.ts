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
import { FilterPipe } from './payage/filter.pipe';
import { FormsModule } from '@angular/forms';
import { Filter1Pipe } from './quotation/filter1.pipe';
import { Filter2Pipe } from './purord/filter2.pipe';


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
    DebitComponent,
    FilterPipe,
    Filter1Pipe,
    Filter2Pipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
