import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction.service';
import { CreateTransaction } from 'src/app/types/CreateTransaction';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent {
  private userId = 1
  constructor(
    private transactionService: TransactionService,
    private formBuilder: FormBuilder
  ){}
  form = this.formBuilder.group({
    name: '',
    amount: 0,
    userId: this.userId,
    categoryId: 1
  });
  getCategory(value:any){    
    this.form.controls['categoryId'].setValue(value);
  }
  onSubmit():void{
    const formData = this.form.value as CreateTransaction;
    this.transactionService.postTransaction(formData).subscribe(
      response => {
        console.log('Poprawnie',response);
      },
      error=>{
        console.error('SAD',error);
      });
  }
}
