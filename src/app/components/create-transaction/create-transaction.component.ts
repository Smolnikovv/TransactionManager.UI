import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction.service';
import { UserService } from 'src/app/services/user.service';
import { CreateTransaction } from 'src/app/types/CreateTransaction';
import { User } from 'src/app/types/User';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent {
  private user!: User
  constructor(
    private transactionService: TransactionService,
    private formBuilder: FormBuilder,
    private userService: UserService
  ){}
  form = this.formBuilder.group({
    name: '',
    amount: 0,
    userId: localStorage.getItem('userId') as unknown as number,
    categoryId: 1
  });
  getCategory(value:any){    
    this.form.controls['categoryId'].setValue(value);
  }
  onSubmit():void{
    const formData = this.form.value as CreateTransaction;
    this.userService.getById(formData.userId).subscribe(
      response => {
        this.user=response
      }
    )
    if(this.user.accountBalance<formData.amount)
    {
      this.transactionService.postTransaction(formData).subscribe(
        response => {
          console.log('Poprawnie',response);
        },
        error=>{
          console.error('SAD',error);
        });
        var newAccountBallance = this.user.accountBalance - formData.amount;
        this.userService.changeAccountBallance(newAccountBallance,this.user.id)
    }
    
  }
}
