import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../types/Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService extends BaseService {
  private url = this.baseUrl + 'transaction';
  constructor(private http:HttpClient) {
    super();
  }
  getByUserId(userId:number){
    var responseUrl = this.url + '/userId/' + userId;
    return this.http.get<Transaction[]>(responseUrl);
  }
  getById(id:number){
    var responseUrl = this.url + '/' + id;
    return this.http.get<Transaction>(responseUrl);
  }
  postTransaction(){
    
  }
}
