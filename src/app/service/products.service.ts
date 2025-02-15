import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from '../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient, private router: Router) {}

  getAll(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/product/getAll`).pipe(
      map((response: any) => {
        if (response.ok && response.products) {
          response.products = response.products.map((product: any) => ({
            ...product,
            categoryName: product.category?.name, // Añadimos categoryName al nivel superior
          }));
        }
        return response;
      })
    );
  }
  

  scrappingProduct(route:string){
    return this.http.post(`${environment.apiScrappUrl}/scrape_product`, {route});
  }
  
  addProduct(product:any): Observable<any>{
    return this.http.post(`${environment.apiUrl}/product/add`, product);
  }

  editProduct(product:any, id:number): Observable<any>{
    return this.http.put(`${environment.apiUrl}/product/update/${id}`, product);
  }

  deleteProduct(id:number): Observable<any>{
    return this.http.delete(`${environment.apiUrl}/product/delete/${id}`);
  }
}
