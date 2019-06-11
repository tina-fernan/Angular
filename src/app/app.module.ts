import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChessComponent } from './chess/chess.component';
import { TaskComponent } from './task/task.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './hero/hero.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskFormComponent } from './task-form/task-form.component';
import { SoudokuComponent } from './soudoku/soudoku.component';
import { GameComponent } from './game/game.component';
//import { PerBasketComponent } from './per-basket/per-basket.component';
//import { PerProductComponent } from './per-product/per-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ChessComponent,
    TaskComponent,
    WelcomeComponent,
    HeroesComponent,
    HeroComponent,
    TaskFormComponent,
    SoudokuComponent,
    GameComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
