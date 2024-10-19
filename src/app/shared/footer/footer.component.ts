import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  form = new FormGroup({
    'email': new FormControl("", Validators.required),
    'checkbox': new FormControl("", Validators.required)

  })
  constructor(){

  }

  onSubmit(){

  }
}
