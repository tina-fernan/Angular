import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(private productsService:ProductsService,private router:Router) { }

  ngOnInit() {}

  async submit(product:Product){
  
     await  this.productsService.addProduct(product).toPromise();
     this.router.navigateByUrl('/shop/products');
     }

}
