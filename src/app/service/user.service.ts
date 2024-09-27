import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) {}

  register(user: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/user/create`, user);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/user/login`, user);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  findUserById(id: any): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/user/${id}`); // Cambié la URL para incluir el ID como parámetro
}


  isLoggedIn() {
    return localStorage.getItem('token');
  }
}
