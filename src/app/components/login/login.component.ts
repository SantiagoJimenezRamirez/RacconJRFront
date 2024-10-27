import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    'username': new FormControl("", Validators.required),
    'password': new FormControl("", Validators.required)
  })

  constructor(private route: Router,
    private _userService : UserService,
  ){

  }
  ngOnInit(): void {
    
  }

  onSubmit() {
    this._userService.login(this.form.value).subscribe({
      next: (response) => {
        Swal.fire({
          title: 'Succescfull',
          text: response.msg,
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then((result) => {
          if (result.isConfirmed) {
            if (response.user.role === "ADMIN") {
              this.route.navigate(['/dashboard']); 
            } else {
              this.route.navigate(['/home']);
            }
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
