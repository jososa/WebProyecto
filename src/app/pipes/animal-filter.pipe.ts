import { Pipe, PipeTransform } from '@angular/core';
import { animal } from '../animal';

@Pipe({
  name: 'filter'
})
export class animalFilterPipe implements PipeTransform {

  transform(animales: animal[], filterPost: string): animal[] {
    if (!animales || !filterPost){
      return animales;
    } 
    return animales.filter(animal=>animal.tipo.toLowerCase().indexOf(filterPost.toLocaleLowerCase()) !== -1);
  }


}
