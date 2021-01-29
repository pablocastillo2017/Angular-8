import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resumir',
})
export class ResumirPipe implements PipeTransform {
  transform(valor: string, limite?: any) {
    if (!valor) {
      return null;
    }

    let cantidadLmite = limite ? limite : 40;
    return valor.substr(0, cantidadLmite) + '....';
  }
}
