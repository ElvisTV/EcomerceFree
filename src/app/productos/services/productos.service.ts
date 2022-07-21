import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Producto } from '../interfaces/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private baseUrl: string = environment.baseUrl;

  private versionAPI: string = '/v1/curated';

  // get httpParams () {
  //   return new HttpParams()
  //     .set( 'page', '2' );
  // }

  get headers_ () {
    return new HttpHeaders()
      .set( 'Authorization', '563492ad6f91700001000001e8a350258b99436686f61ec1fe847cc6' );
  }

  constructor( private http: HttpClient ) { }  

  getProductos(): Observable<Producto[]> {
    // return this.http.get<Producto[]>(`${this.baseUrl}/v1/curated?page=2&per_page=40`, { headers: this.headers_  } );
    return this.http.get<Producto[]>(`${this.baseUrl}/v1/curated`, { headers: this.headers_  } );
  }

  getProductos_() : Observable<Producto> {
    return this.http.get<Producto>(`${this.baseUrl}/v1/curated`, { headers: this.headers_  })
  }
}
