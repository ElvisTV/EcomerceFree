import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list'


@NgModule({
  exports: [
    MatCardModule,
    MatSidenavModule,
    MatGridListModule
  ]
})
export class MaterialModule {

 }
