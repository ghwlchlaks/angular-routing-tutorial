import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

const routes : Routes = [
  {
    path: '', redirectTo:'/superheroes', pathMatch: 'full'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      enableTracing: false
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
