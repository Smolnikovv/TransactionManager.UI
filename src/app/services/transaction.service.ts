import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../types/Transaction';
import { CreateTransaction } from '../types/CreateTransaction';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService extends BaseService {
  constructor(private http:HttpClient) {
    super();
  }
  getByUserId(userId:number){
    var url = this.baseUrl + 'transaction/userId/' + userId;
    return this.http.get<Transaction[]>(url);
  }
  getById(id:number){
    var url = this.baseUrl + 'transaction/' + id;
    return this.http.get<Transaction>(url);
  }
  postTransaction(transaction: CreateTransaction): Observable<any> {
    const url = this.baseUrl + 'transaction';
    return this.http.post(url, transaction).pipe(
      map((response: any) => response),
      catchError((error: any) => throwError(error))
    );
  }
}
