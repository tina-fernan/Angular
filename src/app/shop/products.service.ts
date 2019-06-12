import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product{
  id : number;
  name: string;
  code: string;
  price : number;

}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 host = 'http://localhost:3000/shop/products';
 
  constructor(private httpClient: HttpClient) { }

  getProducts() : Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.host);
  }
  getProduct(id:number):Observable<Product>{
    return this.httpClient.get<Product>(`${this.host}/${id}`);
  }

  addProduct(product:Product){
    return this.httpClient.post(this.host,product);
  }
  editProduct(product:Product){
    return this.httpClient.put(this.host,product);
  }
  deleteProduct(id:number){
    return this.httpClient.delete<Product>(`${this.host}/${id}`);
  }
}
