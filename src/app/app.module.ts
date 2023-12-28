import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransactiondetailsComponent } from './components/transactiondetails/transactiondetails.component';
import { CategoryComponent } from './components/category/category.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateTransactionComponent } from './components/create-transaction/create-transaction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatecategoryComponent } from './components/createcategory/createcategory.component';
import { LoginComponent } from './core/login/login.component';
import { LayoutComponent } from './core/layout/layout.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    TransactionsComponent,
    TransactiondetailsComponent,
    CreateTransactionComponent,
    CreatecategoryComponent,
    LoginComponent,
    LayoutComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
