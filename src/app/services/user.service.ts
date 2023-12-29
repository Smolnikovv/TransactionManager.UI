import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/User';
import { CreateUser } from '../types/CreateUser';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(private http: HttpClient) { 
    super();
  }
  getById(id:number){
    var url = this.baseUrl + 'user/' + id;
    return this.http.get<User>(url);
  }
  postUser(user:CreateUser){
    var url = this.baseUrl + 'user';
    this.http.post(url,user);
  }
  changeAccountBallance(amount: number, id: number){
    var url = this.baseUrl + 'user/' + id;
    this.http.put(url,"accountBallance:"+amount);
  }
}
