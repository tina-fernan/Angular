import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService, Product } from '../products.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Input() product:Product;
  @Output() save = new EventEmitter<Product>();
  form : FormGroup;
  constructor(private formBilder: FormBuilder,private productsService:ProductsService,private router : Router) { }

  ngOnInit() {
    this.form = this.formBilder.group({
      id:[''],
      name:[''],
      code:[''],
      price:['']

    });
    this.form.patchValue(this.product);
  }
async submit(){
  this.save.emit(this.form.value);
   if(this.form.valid){
   await  this.productsService.addProduct(this.form.value).toPromise();
   this.router.navigateByUrl('/shop/products');
   }
 }
}
