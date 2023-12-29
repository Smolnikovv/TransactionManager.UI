import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from 'src/app/types/Transaction';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  constructor(private transactionService: TransactionService, private cdr: ChangeDetectorRef) {}

  ngOnInit():void{
    this.GetTransactions();
  }
  private GetTransactions():void{
    var userId = localStorage.getItem('userId') as unknown as number
    this.transactionService.getByUserId(userId).subscribe({
      next: response => 
      {
        this.transactions = response;
        this.cdr.detectChanges();
      }
    })
  }
}
