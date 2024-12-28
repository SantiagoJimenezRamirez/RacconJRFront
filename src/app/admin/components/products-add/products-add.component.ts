import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../../service/products.service';
import Swal from 'sweetalert2';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-products-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './products-add.component.html',
  styleUrl: './products-add.component.scss'
})
export class ProductsAddComponent implements OnInit{

  @Output() close = new EventEmitter<boolean>();
  @Output() save = new EventEmitter<any>();
  @Input() product:any;
  @Input() updateOrCreate = true;
  title = 'Agregar Producto'

  productForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private _productService: ProductsService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      imagePath: [''],
    });
  }
  ngOnInit(): void {
    if(!this.updateOrCreate){

      this.productForm.patchValue(this.product);

      this.title = "Editar Producto"
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.[0]) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit(): void {
    console.log(this.product)
    if(this.updateOrCreate){
      this._productService.addProduct(this.productForm.value).subscribe({
        next: (response: any) => {
          Swal.fire({
            title: 'Succescfull',
            text: response.msg,
            icon: 'success',
            confirmButtonText: 'Aceptar'
          }).then((result) => {
            if (result.isConfirmed) {
  
            }
          });
        },
        error: (e) => {
          Swal.fire({
            title: 'Error',
            text: e.error.msg,
            icon: 'error',
            confirmButtonText: 'Reintentar'
          });
        }
      })
    }else{
      
      this._productService.editProduct(this.productForm.value, this.product.id).subscribe({
        next: (response: any) => {
          Swal.fire({
            title: 'Succescfull',
            text: response.msg,
            icon: 'success',
            confirmButtonText: 'Aceptar'
          }).then((result) => {
            if (result.isConfirmed) {
  
            }
          });
        },
        error: (e) => {
          Swal.fire({
            title: 'Error',
            text: e.error.msg,
            icon: 'error',
            confirmButtonText: 'Reintentar'
          });
        }
      })
    }
    }

  closeModal(): void {
    this.close.emit(false);
  }
}
