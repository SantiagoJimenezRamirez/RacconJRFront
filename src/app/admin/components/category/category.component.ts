import { Component } from '@angular/core';
import { TitleService } from '../../../service/title.service';
import { ProductsService } from '../../../service/products.service';
import Swal from 'sweetalert2';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { CategoryAddComponent } from "../category-add/category-add.component";

@Component({
  selector: 'app-category',
  imports: [CommonModule, MatTableModule, MatIconModule, MatMenuModule, CategoryAddComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
create = true;
  product:any;
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

  constructor(private _titleService: TitleService, private _productService: ProductsService){

  }
  ngOnInit(): void {
    this.title = this._titleService.getTitle()

  this._productService.getAll().subscribe({
    next: (response) =>{
      this.data = response.products
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
    this.product = element;
    this.create = false;
    this.isVisible = true;
  }
  
  deleteItem(element: any): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará el producto de forma permanente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this._productService.deleteProduct(element.id).subscribe({
          next: (response: any) => {
            console.log('Producto eliminado:', response);
            Swal.fire(
              '¡Eliminado!',
              'El producto ha sido eliminado con éxito.',
              'success'
            );
          },
          error: (err) => {
            console.error('Error al eliminar el producto:', err);
            Swal.fire(
              'Error',
              'Hubo un problema al eliminar el producto.',
              'error'
            );
          }
        });
      } else {
        Swal.fire(
          'Cancelado',
          'El producto no fue eliminado.',
          'info'
        );
      }
    });
  }
  
}
