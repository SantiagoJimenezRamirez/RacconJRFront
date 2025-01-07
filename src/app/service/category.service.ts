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
  
  addCategory(product:any): Observable<any>{
    return this.http.post(`${environment.apiUrl}/category/add`, product);
  }

  editCategory(product:any, id:number): Observable<any>{
    return this.http.put(`${environment.apiUrl}/category/update/${id}`, product);
  }

  deleteCategory(id:number): Observable<any>{
    return this.http.delete(`${environment.apiUrl}/category/delete/${id}`);
  }
}
