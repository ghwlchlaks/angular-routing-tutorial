import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { CrisCenterComponent } from "./cris-center/cris-center.component";
import { CrisCenterHomeComponent } from "./cris-center-home/cris-center-home.component";
import { CrisDetailComponent } from "./cris-detail/cris-detail.component";
import { CrisListComponent } from "./cris-list/cris-list.component";

const routes : Routes = [
  {
    path: '',
    component : CrisCenterComponent,
    children : [
      {
        path : '',
        component : CrisListComponent,
        children : [
          {
            path : ':id',
            component : CrisDetailComponent
          },
          {
            path: '',
            component : CrisCenterHomeComponent
          }
        ]
      } 
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})
export class CrisCenterRoutingModule { }
