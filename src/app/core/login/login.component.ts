import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';

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
    this.http.post<string>(url,this.loginObj)
    .subscribe((response=>{
      console.log(response)
      localStorage.setItem('token',response)
    }))
    // var s = this.http.post(url,this.loginObj,
    //   {responseType: 'text'}).subscribe((response:any)=>
    //   response.text);
    // console.log(s);
    // .subscribe((response: any) => {
    //   if(response.result){
    //     console.log('nice')
    //     this.router.navigateByUrl('/dashboard');
    //   }
    //   else{
    //     console.log('no bueno')
    //   }
    //   })
    }
}
