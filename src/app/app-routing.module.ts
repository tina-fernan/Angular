import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChessComponent } from './chess/chess.component';
import { TaskComponent } from './task/task.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeroesComponent } from './heroes/heroes.component';
import { PerBasketComponent } from './shop/per-basket/per-basket.component';
import { PerProductComponent } from './shop/per-product/per-product.component';

const routes: Routes = [
  {path:'chess' ,
   component: ChessComponent},
   {
     path:'task-manager',
     component: TaskComponent
   },
   {path:'welcome',
     component: WelcomeComponent
   },
   {
     path: 'heroes',
     component: HeroesComponent
   }, {
    path: 'shop',
    loadChildren: './shop/shop.module#ShopModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
