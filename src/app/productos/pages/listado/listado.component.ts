import { Component, OnInit } from '@angular/core';
import { Producto, Photo } from '../../interfaces/product.interface';
import { ProductosService } from '../../services/productos.service';
import { tap } from 'rxjs';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
    mat-card {
      margin-top: 20px;
    }
  `]
})
export class ListadoComponent implements OnInit {
 
  objetoInfo! : Producto;

  productos: Photo[] = [];

  constructor( private productosService: ProductosService ) { }

  ngOnInit(): void {
   
    this.productosService.getProductos_()
        .subscribe( (objeto) => {
          this.objetoInfo = objeto;
          this.productos = this.objetoInfo.photos;
          // console.log( this.objetoInfo.photos[0].id )
          
        } );
                            
  }
 
}
