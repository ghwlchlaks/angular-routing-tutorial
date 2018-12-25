import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { CrisCenterComponent } from './cris-center/cris-center.component';
import { CrisCenterHomeComponent } from './cris-center-home/cris-center-home.component';
import { CrisDetailComponent } from './cris-detail/cris-detail.component';
import { CrisListComponent } from './cris-list/cris-list.component';

import { CrisCenterRoutingModule } from "./cris-center-routing.module";


@NgModule({
  declarations: [CrisCenterComponent, CrisCenterHomeComponent, CrisDetailComponent, CrisListComponent],
  imports: [
    CommonModule,
    CrisCenterRoutingModule,
    FormsModule
  ]
})
export class CrisCenterModule { }
