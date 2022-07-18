import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icono-flotante',
  templateUrl: './icono-flotante.component.html',
  styleUrls: [
    './icono-flotante.component.css'
  ]
})
export class IconoFlotanteComponent implements OnInit {
    @Input() public nombreIcono:any;
    constructor() { }

    ngOnInit(): void {
    }
}
