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
    var user!:User;
    const formData = this.form.value as CreateTransaction;
    this.userService.getById(formData.userId).subscribe(
      response => {
        user = response
        if(user.accountBalance > formData.amount)
        {
          this.transactionService.postTransaction(formData).subscribe(
            response => {
              console.log('Poprawnie',response);
            },
            error=>{
              console.error('Błąd',error);
            });
            user.accountBalance = user.accountBalance - formData.amount;
            console.log(user);
            this.userService.changeAccountBalance(user, user.id).subscribe(
              response => {
                alert("dodano tranzakcje");
                window.location.reload()
              },
              error => {
                console.error('Błąd podczas aktualizacji stanu konta', error);
              }
            );
        }
      }
    )
    
  }
}
