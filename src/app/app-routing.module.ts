import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChessComponent } from './chess/chess.component';
import { TaskComponent } from './task/task.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SoudokuComponent } from './soudoku/soudoku.component';
import { PerBasketComponent } from './per-basket/per-basket.component';

const routes: Routes = [
  {path:'chess' ,
   component: ChessComponent},{
     path:'task-manager',
     component: TaskComponent
   },
   {path:'welcome',
     component: WelcomeComponent
   },
   {
     path: 'heroes',
     component: HeroesComponent
   },{
     path: 'soudoku',
     component:SoudokuComponent
   },{
     path: 'per-basket',
    component : PerBasketComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
