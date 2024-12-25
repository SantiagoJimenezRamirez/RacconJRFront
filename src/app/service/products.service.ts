import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient, private router: Router) {}

  getAll():Observable<any>{
    return this.http.get(`${environment.apiUrl}/product/getAll`);
  }
  
  addProduct(product:any): Observable<any>{
    return this.http.post(`${environment.apiUrl}/product/add`, product);
  }
}
