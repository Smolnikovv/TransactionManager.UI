import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { CreateCategory } from 'src/app/types/CreateCategory';

@Component({
  selector: 'app-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.css']
})
export class CreatecategoryComponent {
  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder){}
    form = this.formBuilder.group({
      name:'',
    })
  onSubmit():void{
    const formData = this.form.value as CreateCategory;
    this.categoryService.postCategory(formData).subscribe(
      respons => {
        this.form.reset();
      },
      error =>{
        console.error("bad request",error)
      }
    )
  }
}
