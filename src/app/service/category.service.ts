import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private router: Router) {}

  getAll():Observable<any>{
    return this.http.get(`${environment.apiUrl}/category/getAll`);
  }
  
  addProduct(product:any): Observable<any>{
    return this.http.post(`${environment.apiUrl}/category/add`, product);
  }

  editProduct(product:any, id:number): Observable<any>{
    return this.http.put(`${environment.apiUrl}/category/update/${id}`, product);
  }

  deleteProduct(id:number): Observable<any>{
    return this.http.delete(`${environment.apiUrl}/category/delete/${id}`);
  }
}
