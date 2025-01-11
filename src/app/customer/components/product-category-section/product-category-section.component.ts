import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-category-section',
  imports: [CommonModule],
  templateUrl: './product-category-section.component.html',
  styleUrl: './product-category-section.component.scss'
})
export class ProductCategorySectionComponent {
  isDropdownOpen: boolean = false;
  isCategoriesOpen: boolean = false;
  selectedCategory: string = 'Categories';
  categories: string[] = ['Categoría 1', 'Categoría 2', 'Categoría 3', 'Categoría 4'];

    // Dropdown de Explore
    isExploreOpen: boolean = false;
    selectedExplore: string = 'Explorar';
    exploreItems: string[] = ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4'];
  
    toggleDropdown(type: string): void {
      if (type === 'categories') {
        this.isCategoriesOpen = !this.isCategoriesOpen;
        this.isExploreOpen = false; // Cierra el otro menú
      } else if (type === 'explore') {
        this.isExploreOpen = !this.isExploreOpen;
        this.isCategoriesOpen = false; // Cierra el otro menú
      }
    }
  
    selectCategory(category: string): void {
      this.selectedCategory = category;
      this.isCategoriesOpen = false; // Cierra el menú
    }
  
    selectExplore(item: string): void {
      this.selectedExplore = item;
      this.isExploreOpen = false; // Cierra el menú
    }
}
