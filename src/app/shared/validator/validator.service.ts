// Aquí estarán validaciones usarán información proveniente de algunos servicios
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApellidoPattern : string = '([a-zA-A]+) ([a-zA-Z]+)';
  public emailPattern          : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }
}
