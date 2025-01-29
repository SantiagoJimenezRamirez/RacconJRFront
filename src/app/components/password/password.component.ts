import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-password',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss'
})
export class PasswordComponent implements OnInit{
  passwordForm: FormGroup;
  showPassword = false;
  passwordsMatch = false;
  requirements = {
    lowercase: false,
    uppercase: false,
    number: false,
    length: false
  };

  constructor(private fb: FormBuilder) {
    this.passwordForm = this.fb.group({
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  validatePassword() {
    const password = this.passwordForm.get('newPassword')?.value || '';
    this.requirements.lowercase = /[a-z]/.test(password);
    this.requirements.uppercase = /[A-Z]/.test(password);
    this.requirements.number = /\d/.test(password);
    this.requirements.length = password.length >= 8;
    this.checkPasswordsMatch();
  }

  checkPasswordsMatch() {
    const newPassword = this.passwordForm.get('newPassword')?.value;
    const confirmPassword = this.passwordForm.get('confirmPassword')?.value;
    this.passwordsMatch = newPassword === confirmPassword;
  }

  onSubmit() {
    if (this.passwordForm.valid && this.passwordsMatch) {
      console.log('Contraseña cambiada exitosamente');
      // Aquí puedes llamar al servicio para realizar el cambio de contraseña
    }
  }
}
