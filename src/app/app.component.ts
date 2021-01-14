import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <img [src]="imagenURL" />
    <button [disabled]="botonStatus">Mi boton</button>
  `,
  styles: [''],
})
export class AppComponent {
  imagenURL = 'http://lorempixel.com/400/200';
  botonStatus = false;
}
