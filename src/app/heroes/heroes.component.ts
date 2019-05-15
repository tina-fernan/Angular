import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroesService } from '../heroes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes$ : Observable < Array<Hero>>;
  selectedHero : Hero;
 hero : Hero= {id:1 , name:'Windstom'};
  constructor( private heroService : HeroesService) { }

  ngOnInit() {
  this.heroes$ = this.heroService.getHeroes();

  }
  selectHero( hero : Hero ){
    this.selectedHero=hero;
  }

}
