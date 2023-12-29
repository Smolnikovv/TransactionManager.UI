import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';
import { TokenResponse } from 'src/app/types/TokenResponse';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from 'src/app/services/user.service';
import { CreateUser } from 'src/app/types/CreateUser';

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
  registerObj:any ={
    "name":"",
    "password":""
  }
  

  helper = new JwtHelperService();

  constructor(private http:HttpClient, private router: Router,private userService: UserService) {  
    super();
    if(localStorage.getItem('token') != null)
    {
      this.router.navigateByUrl('/dashboard');
    }  
  }

  onLogin(){
    
    var url = this.baseUrl + 'authorization/login'
    this.http.post<TokenResponse>(url,this.loginObj)
    .subscribe((response=>{
      if(response.code != -1){
        const decodedToken = this.helper.decodeToken(response.token);

        localStorage.setItem('token',response.token);
        localStorage.setItem('userId',decodedToken.UserId);
        localStorage.setItem('accountBalance', decodedToken.AccountBalance);
        
        
        this.router.navigateByUrl('/dashboard');
      }
      else{
        alert("something went wrong");
      }
    }))
    }
    onRegister(){
      var user: CreateUser = this.registerObj;
      var id:number;
      this.userService.postUser(user).subscribe((response =>{
        id=response;
        if(id !=0 )
        {
          alert("User created");
        }
        else
        {
          alert("something went wrong");
        }
      }))
    }
}
