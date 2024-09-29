import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  termsConditions = false;
  form = new FormGroup({
    'username': new FormControl("", Validators.required),
    'password': new FormControl("", Validators.required),
    'fullName': new FormControl("", Validators.required),
    'email': new FormControl("", Validators.required),
    'checkbox': new FormControl("", Validators.required),

  })



  constructor(private route: Router,
    private _userService : UserService
  ){

  }

  onSubmit() {
    this._userService.register(this.form.value).subscribe({
      next: (response) => {
        Swal.fire({
          title: 'User created',
          text: response.msg,
          icon: 'success',
          confirmButtonText: 'Accept'
        })
      },
      error: (error) => {
        console.log(error)
        Swal.fire({
          title: 'something went wrong',
          text: error.error.msg,
          icon: 'error',
          confirmButtonText: 'Accept'
        })
      }
    });
  }

}
