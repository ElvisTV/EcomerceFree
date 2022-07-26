import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrls: [
    './detalleproducto.component.css'
  ]
})
export class DetalleproductoComponent implements OnInit {
  nombreIcono:string = 'bi-whatsapp';
  marca:string = '-marca-';
  condicion:boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.marca = 'REPORTER';
  }

}
