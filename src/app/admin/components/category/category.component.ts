import { Component } from '@angular/core';
import { TitleService } from '../../../service/title.service';
import { ProductsService } from '../../../service/products.service';
import Swal from 'sweetalert2';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { CategoryAddComponent } from "../category-add/category-add.component";
import { CategoryService } from '../../../service/category.service';

@Component({
  selector: 'app-category',
  imports: [CommonModule, MatTableModule, MatIconModule, MatMenuModule, CategoryAddComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
create = true;
  category:any;
  data:any;
  isVisible= false;
  title = "";
  displayedColumns = [
    { original: 'id', display: 'ID' },
    { original: 'name', display: 'Nombre' },
    { original: 'description', display: 'Descripción' },
  ];
  // Incluye "acciones" al inicio
  columnKeys = ['acciones', ...this.displayedColumns.map(col => col.original)];

  constructor(private _titleService: TitleService, private _categoryService: CategoryService){

  }
  ngOnInit(): void {
    this.title = this._titleService.getTitle()

  this._categoryService.getAll().subscribe({
    next: (response) =>{
      this.data = response
    }
  })
  }

  reciveEmit(event:boolean){
    this.isVisible = event;
  }

  addProduct(){
    this.create = true;
    this.isVisible = true;
  }

  editItem(element: any): void {
    console.log(element)
    this.category = element;
    this.create = false;
    this.isVisible = true;
  }
  
  deleteItem(element: any): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará la Categoria de forma permanente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this._categoryService.deleteCategory(element.id).subscribe({
          next: (response: any) => {
            console.log('Producto eliminado:', response);
            Swal.fire(
              '¡Eliminado!',
              'La Categoria ha sido eliminado con éxito.',
              'success'
            );
          },
          error: (err) => {
            console.error('Error al eliminar la Categoria:', err);
            Swal.fire(
              'Error',
              'Hubo un problema al eliminar la Categoria.',
              'error'
            );
          }
        });
      } else {
        Swal.fire(
          'Cancelado',
          'La Categoria no fue eliminada.',
          'info'
        );
      }
    });
  }
  
}
