import { Pipe, PipeTransform } from '@angular/core';
import { usuario } from '../usuario';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  usuarios: usuario[];

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultPosts = [];
    for (const usuarios of value) {
      if (usuarios.email.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(usuarios);
      };
    };
    return resultPosts;
  }


}
