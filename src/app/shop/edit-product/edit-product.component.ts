import { Component, OnInit } from '@angular/core';

import { Route, ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductsService, Product } from '../products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
 product:Product;
  constructor(private route:ActivatedRoute,
    private productsService:ProductsService,private router:Router) { }

 async ngOnInit() {
    const id=this.route.snapshot.params.id;
     this.product= await this.productsService.getProduct(id).toPromise();

  }
 async edit(product:Product){
    await  this.productsService.editProduct(product).toPromise();
     this.router.navigateByUrl('/shop/products');

  }
  async remove(id:number){
   await this.productsService.deleteProduct(id).toPromise();
   this.router.navigateByUrl('/shop/products');
  }

}
