import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  exports: [
    MatCardModule,
    MatSidenavModule
  ]
})
export class MaterialModule {

 }
