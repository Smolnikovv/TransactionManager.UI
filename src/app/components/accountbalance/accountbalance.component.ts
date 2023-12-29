import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-accountbalance',
  templateUrl: './accountbalance.component.html',
  styleUrls: ['./accountbalance.component.css']
})
export class AccountbalanceComponent implements OnInit {
  accountBalance!:number
  constructor(private userService: UserService){}

  ngOnInit(): void {
    var userId = localStorage.getItem('userId') as unknown as number;
    this.userService.getById(userId).subscribe(
      response=>{
        this.accountBalance = response.accountBalance
      }
    )
  }

}
