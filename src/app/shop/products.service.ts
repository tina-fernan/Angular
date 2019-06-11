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
 host = 'http://localhost3000/shop/products';
 
  constructor(private httpClient: HttpClient) { }

  getProducts() : Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.host);
  }
}
