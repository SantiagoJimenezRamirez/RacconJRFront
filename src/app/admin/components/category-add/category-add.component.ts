import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ProductsService } from '../../../service/products.service';

@Component({
  selector: 'app-category-add',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.scss'
})
export class CategoryAddComponent {
 @Output() close = new EventEmitter<boolean>();
  @Output() save = new EventEmitter<any>();
  @Input() product:any;
  @Input() updateOrCreate = true;
  title = 'Agregar Cateogria'

  productForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private _productService: ProductsService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
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
    console.log(this.productForm.value)
    if (this.productForm.invalid) return;
  
    const formData = new FormData();
    Object.keys(this.productForm.controls).forEach(key => {
      formData.append(key, this.productForm.get(key)?.value);
    });
 
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }
  
    if (this.updateOrCreate) {
      this._productService.addProduct(formData).subscribe({
        next: (response: any) => {
          Swal.fire({
            title: 'Successful',
            text: response.msg,
            icon: 'success',
            confirmButtonText: 'Aceptar'
          }).then((result) => {
            if (result.isConfirmed) {
              this.save.emit(response.data);
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
      });
    } else {
      this._productService.editProduct(formData, this.product.id).subscribe({
        next: (response: any) => {
          Swal.fire({
            title: 'Successful',
            text: response.msg,
            icon: 'success',
            confirmButtonText: 'Aceptar'
          }).then((result) => {
            if (result.isConfirmed) {
              this.save.emit(response.data);
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
      });
    }
  }
  

  closeModal(): void {
    this.close.emit(false);
  }
}
