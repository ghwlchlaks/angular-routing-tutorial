import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';

import { AppRoutingModule } from "./app-routing.module";
import {Router} from '@angular/router';
import { CrisCenterModule } from './cris-center/cris-center.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    AppRoutingModule,
    CrisCenterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router){
    
  }
 }
