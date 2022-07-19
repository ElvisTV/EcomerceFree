import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { DetalleproductoComponent } from './pages/detalleproducto/detalleproducto.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, // componente padre
    children: [ //componente hijos
      {
        path: 'listado',
        component: ListadoComponent
      },
      {
        path: 'agregar',
        component: AgregarComponent
      },
      {
        path: 'editar/:id',
        component: AgregarComponent
      },
      {
        path: 'buscar',
        component: BuscarComponent
      },
      {
        path: ':id',
        component: ProductoComponent
      },
      {
        path: 'detalleproducto',
        component: DetalleproductoComponent
      },
      {
        path: '**',
        redirectTo: 'listado'
      }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class ProductosRoutingModule { }
