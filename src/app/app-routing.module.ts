import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChessComponent } from './chess/chess.component';
import { TaskComponent } from './task/task.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'chess' ,
   component: ChessComponent},{
     path:'task-manager',
     component: TaskComponent
   },
   {path:'welcome',
     component: WelcomeComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
