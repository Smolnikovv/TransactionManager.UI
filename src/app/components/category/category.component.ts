import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/types/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService : CategoryService) {}

  ngOnInit(): void {
  this.GetCategories();
  }
  private GetCategories(): void{
    this.categoryService.getAll().subscribe({
      next: response => this.categories = response
    })
  }
}
