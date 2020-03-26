import { Injectable } from '@angular/core';
import { Data } from './MockData';
import { Product } from './Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api = 'https://5e79aefa17314d0016133349.mockapi.io/products';
  products = Data;
  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.api);
  }
  getProduct(id): Observable<Product>{
    return this.http.get<Product>(`${this.api}/${id}`);
    // return this.products.find(product => product.id == id);
  }
  removeProduct(id):Observable<Product> {
    return this.http.delete<Product>(`${this.api}/${id}`);
    // return this.products.filter(product => product.id !== id);
  }
    addProduct(product): Observable<Product>{
    return this.http.post<Product>(`${this.api}`, product);
  
    // const newProduct = { id: 5, ...product};
    // this.products.push(newProduct);
    // console.log(this.products)
  }
  updateProduct(product){
     return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }
}