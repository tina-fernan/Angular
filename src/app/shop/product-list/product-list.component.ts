import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$ : Observable<Product[]>;

  constructor(private productsService : ProductsService) { }

  ngOnInit() {
    this.products$= this.productsService.getProducts();
  }

}
