import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PerBasketComponent} from './per-basket/per-basket.component';
import { PerProductComponent} from './per-product/per-product.component'
import { ShopComponent } from './shop/shop.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    PerBasketComponent,
    PerProductComponent,
    ShopComponent,
    ProductListComponent,
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
        }
      ]
    }

    ])
  ]
})
export class ShopModule { }
