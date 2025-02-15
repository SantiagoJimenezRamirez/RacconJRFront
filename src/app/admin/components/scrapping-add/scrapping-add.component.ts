import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../../service/products.service';

@Component({
  selector: 'app-scrapping-add',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './scrapping-add.component.html',
  styleUrl: './scrapping-add.component.scss'
})
export class ScrappingAddComponent {
  @Output() data: EventEmitter<any> = new EventEmitter();

  urlForm: FormGroup;
  title: string = 'Agregar URL';

  constructor(private fb: FormBuilder,
    private _productService: ProductsService
  ) {
    this.urlForm = this.fb.group({
      url: ['', [Validators.required, Validators.pattern('https?://.+')]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.urlForm.valid) {
      const url = this.urlForm.value.url;
      console.log('URL enviada:', url);
      this._productService.scrappingProduct(url).subscribe({
        next: (response:any) => {
          console.log(response)
        },
        error: (error:any) => {
          console.log(error)
        }
      })
      // this.closeModal();
    }
  }

  closeModal(): void {
    this.data.emit({
      isVisible:false
    })
  }
}
