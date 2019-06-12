import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PerBasketComponent} from './per-basket/per-basket.component';
import { PerProductComponent} from './per-product/per-product.component'
import { ShopComponent } from './shop/shop.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    PerBasketComponent,
    PerProductComponent,
    ShopComponent,
    ProductListComponent,
    ProductFormComponent,
    EditProductComponent,
    AddProductComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '',
      component: ShopComponent,
      children : [
        {
          path: 'per-basket',
          component: PerBasketComponent
        },
        {
          path: 'per-product',
          component: PerProductComponent
        },{
          path: 'products',
          component: ProductListComponent
        },{
          path: 'add-product',
          component : AddProductComponent
        },{
          path : 'edit-product/:id',
          component : EditProductComponent
        }
      ]
    }

    ])
  ]
})
export class ShopModule { }
