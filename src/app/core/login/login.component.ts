import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';
import { TokenResponse } from 'src/app/types/TokenResponse';
import { JwtHelperService } from '@auth0/angular-jwt';

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

  

  helper = new JwtHelperService();

  constructor(private http:HttpClient, private router: Router) {  
    super();
    if(localStorage.getItem('token') != null)
    {
      this.router.navigateByUrl('/dashboard');
    }  
  }

  onLogin(){
    console.log("test");
    
    var url = this.baseUrl + 'authorization/login'
    this.http.post<TokenResponse>(url,this.loginObj)
    .subscribe((response=>{
      if(response.code != -1){
        const decodedToken = this.helper.decodeToken(response.token);

        console.log(decodedToken);

        localStorage.setItem('token',response.token);
        localStorage.setItem('userId',decodedToken.UserId);
        localStorage.setItem('accountBalance', decodedToken.AccountBalance);
        console.log(localStorage.getItem('userId'));
        console.log(localStorage.getItem('accountBalance'));
        
        
        this.router.navigateByUrl('/dashboard');
      }
      else{
        alert("something went wrong");
      }
    }))
    }
}
