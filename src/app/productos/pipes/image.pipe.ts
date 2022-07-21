import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../interfaces/product.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(producto: Photo): string {
    if ( !producto.id ){
      return 'assets/not-found/no-image.png'
    } else {
      return producto.src.original
    }
  }

}
