import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-forgot-password',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent implements OnInit{
form = new FormGroup({
    'email': new FormControl("", Validators.email),
  })

  constructor(private router: Router,
    private _userService : UserService,
  ){

  }
  ngOnInit(): void {
    
  }

  onSubmit() {
    this._userService.resetPassword(this.form.get('email')?.value).subscribe({
      next: (response:any) => {
        Swal.fire({
          title: 'Succescfull',
          text: response.msg,
          icon: 'success',
          confirmButtonText: 'Aceptar'
        })
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

  goTo(route:string) {
    this.router.navigate([route]); // Redirige al inicio
  }
}
