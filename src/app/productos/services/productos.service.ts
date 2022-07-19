import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private http: HttpClient ) { }  

  getProductos() {
    return this.http.get('https://api.pexels.com/v1/curated?page=2&per_page=40');
  }
}
