import { Component, Input, OnInit } from '@angular/core';
import { Producto, Photo } from '../../interfaces/product.interface';

@Component({
  selector: 'app-produto-tajeta',
  templateUrl: './produto-tajeta.component.html',
  styles: [`
    mat-card {
      margin-top: 20px;
      width: 300px;
    }
  `]
})
export class ProdutoTajetaComponent implements OnInit {

  @Input() producto!: Photo;

  constructor() { }

  ngOnInit(): void {
  }

}
