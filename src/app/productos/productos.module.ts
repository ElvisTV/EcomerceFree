import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { DetalleproductoComponent } from './pages/detalleproducto/detalleproducto.component';
import { ProdutoTajetaComponent } from './components/produto-tajeta/produto-tajeta.component';
import { ImagePipe } from './pipes/image.pipe';
import { IconoFlotanteComponent } from '../auth/icono-flotante/icono-flotante.component';


@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    ProductoComponent,
    HomeComponent,
    ListadoComponent,
    DetalleproductoComponent,
    ProdutoTajetaComponent,
    ImagePipe,
    IconoFlotanteComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }