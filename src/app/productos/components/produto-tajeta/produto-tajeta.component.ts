import { Component, Input, OnInit } from '@angular/core';
import { Producto, Photo } from '../../interfaces/product.interface';

@Component({
  selector: 'app-produto-tajeta',
  templateUrl: './produto-tajeta.component.html',
  styles: [`
    .col {
      height: 100%;
    }
  `]
})
export class ProdutoTajetaComponent implements OnInit {

  @Input() producto!: Photo;

  constructor() { }

  ngOnInit(): void {
  }

}
