import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
//import { HEROES } from "../heroes_data";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero$ : Hero;

  constructor() { }

  ngOnInit() {
    this.hero$ ={"id" : 13, "name" : "test"}; 
  }

}
