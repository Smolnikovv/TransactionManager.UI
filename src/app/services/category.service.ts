import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Category } from '../types/Category';
import { CreateCategory } from '../types/CreateCategory';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService{

  constructor(private http:HttpClient) {
    super();
   }
   getAll(){
    var url = this.baseUrl + 'category';
    return this.http.get<Category[]>(url);
   }
   getById(id:Number){
    var url = this.baseUrl + 'category/' + id;
    return this.http.get<Category>(url);
   }
   postCategory(category:CreateCategory): Observable<any>{
    var url = this.baseUrl + 'category';
    return this.http.post(url,category).pipe(
      map((response: any) => response),
      catchError((error: any) => throwError(error)
      ));
   }
}
