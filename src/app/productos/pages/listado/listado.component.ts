import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  constructor( private productosService: ProductosService ) { }

  ngOnInit(): void {
    this.productosService.getProductos()
        .subscribe( resp => console.log( resp ) );
  }

}
