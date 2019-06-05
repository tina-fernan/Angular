import { Component, OnInit } from '@angular/core';
import { MapperService } from '../mapper.service';
import { purchases } from '../purchases';
import { Branch } from '../types';


@Component({
  selector: 'app-per-basket',
  templateUrl: './per-basket.component.html',
  styleUrls: ['./per-basket.component.scss']
})
export class PerBasketComponent implements OnInit {
 branches : Branch[];
  constructor(private mapper : MapperService) { }

  ngOnInit() {
    this.branches = this.mapper.mapToBranches(purchases);
  }

}
