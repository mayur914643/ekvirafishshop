import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';

const Material = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatBadgeModule

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...Material
  ],
  exports: [
    ...Material
  ]

})
export class MatModule { }
