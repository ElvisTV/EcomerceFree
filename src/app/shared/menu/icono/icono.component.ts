import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icono-menu',
  templateUrl: './icono.component.html',
  styleUrls: ['./icono.component.css']
})
export class IconoComponent implements OnInit {
  @Input() public nameTipo:any;
  tipo:string="";
  link:string="";
  estado:string="";
  codigoHtml:string="";
  buscar: string = '';
  constructor() { 
  }

  ngOnInit(): void {
    this.tipo = this.nameTipo[0];
    this.link = this.nameTipo[1];
    this.estado = this.nameTipo[2];
    this.codigoHtml = this.nameTipo[3];
  }

  escribir(){
      console.log(this.buscar);
  }

}
