import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../../../shared/menu/menu.component";
import { HeaderAdminComponent } from "../../../shared/header-admin/header-admin.component";
import { TitleService } from '../../../service/title.service';
import { ProductsAddComponent } from "../products-add/products-add.component";
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../../service/products.service';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-trasnsactions',
  standalone: true,
  imports: [MenuComponent, ProductsAddComponent, CommonModule, MatTableModule, MatIconModule, MatMenuModule],
  templateUrl: './trasnsactions.component.html',
  styleUrl: './trasnsactions.component.scss'
})
export class TrasnsactionsComponent implements OnInit {
onActionClick(_t29: any) {
throw new Error('Method not implemented.');
}
  data:any;
  isVisible= false;
  title = "";
  displayedColumns = [
    { original: 'id', display: 'ID' },
    { original: 'name', display: 'Producto' },
    { original: 'price', display: 'Precio' },
    { original: 'stock', display: 'Stock' },
    { original: 'description', display: 'Descripción' },
    { original: 'imagePath', display: 'Ruta Imagen' },
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

  editItem(element: any): void {
    console.log('Editar:', element);
    // Agrega lógica para editar
  }
  
  deleteItem(element: any): void {
    console.log('Eliminar:', element);
    // Agrega lógica para eliminar
  }
}
