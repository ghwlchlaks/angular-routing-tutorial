import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { HEROES } from "../heroes_data";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes$ : Hero[];
  selectedId : number;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.heroes$ = HEROES
  }

}
