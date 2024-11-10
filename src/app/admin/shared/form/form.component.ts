import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  productForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private _productService: ProductService) {
    // Definimos el formulario reactivo
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  // Capturar el archivo de imagen seleccionado
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  // Manejar el envío del formulario
  onSubmit(): void {
    if (this.productForm.valid) {
      const formData = new FormData();
      
      // Añadimos los valores al FormData
      formData.append('name', this.productForm.get('name')?.value);
      formData.append('price', this.productForm.get('price')?.value);
      formData.append('stock', this.productForm.get('stock')?.value);
      formData.append('description', this.productForm.get('description')?.value);
      
      // Añadimos la imagen si se ha seleccionado
      if (this.selectedFile) {
        formData.append('image', this.selectedFile);
      }

      // Aquí puedes enviar `formData` al servicio HTTP para guardarlo en el servidor
      this._productService.addProduct(this.productForm.value).subscribe({
        next(response) {
          console.log(response)
        },error(err) {
          console.log(err)
        },
      })
    } else {
      console.log('Formulario inválido');
    }
  }
}
