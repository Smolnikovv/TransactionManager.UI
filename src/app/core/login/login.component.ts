import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';
import { TokenResponse } from 'src/app/types/TokenResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseService {
  loginObj: any ={
    "name":"",
    "password":""
  }

  constructor(private http:HttpClient, private router: Router) {            
    super();
  }
  onLogin(){
    var url = this.baseUrl + 'authorization/login'
    this.http.post<TokenResponse>(url,this.loginObj)
    .subscribe((response=>{
      console.log(response);
      if(response.code != -1){
        localStorage.setItem('token',response.token);
        console.log(localStorage.getItem('token'));
        this.router.navigateByUrl('/dashboard');
      }
      else{
        alert("something went wrong");
      }
    }))
    }
}
