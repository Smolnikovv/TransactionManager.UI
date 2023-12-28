import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/types/Category';
import { Output, EventEmitter } from '@angular/core';

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
  @Output() emiter = new EventEmitter<number>();

  onSelectChange(event: Event): void {
    const selectedValue = Number((event.target as HTMLSelectElement).value);
  this.sendId(selectedValue);
  }

  sendId(value: number): void {
    this.emiter.emit(value);
  }
}
