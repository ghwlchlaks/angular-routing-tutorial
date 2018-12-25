import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';

import { HeroesRoutingModule } from './heroes-routing.module';
@NgModule({
  declarations: [HeroDetailComponent, HeroListComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FormsModule
  ]
})
export class HeroesModule { }
