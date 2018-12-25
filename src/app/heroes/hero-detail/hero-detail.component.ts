import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { Hero } from "../hero";
import { HEROES } from "../heroes_data";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero$ : Hero;
  heroes : Hero[];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.heroes = HEROES;
   }

  ngOnInit() {
    //this.hero$ ={"id" : 13, "name" : "test"}; 
    //get parameter 
    this.route.params.subscribe(params => 
        this.hero$ = this.heroes.find(hero => hero.id == +params.id)
    );
  }

  //뒤로가기 기능
  back(){
    this.router.navigate(['/superheroes'])
  }
}
