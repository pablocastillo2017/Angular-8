import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [``],
})
export class AppComponent {
  personas = [
    {
      id: 1,
      nombre: 'Pablo',
      edad: 20,
      hobby: 'Cantar',
    },
    {
      id: 2,
      nombre: 'Papo',
      edad: 33,
      hobby: 'Saltar',
    },
    {
      id: 3,
      nombre: 'Hector',
      edad: 46,
      hobby: 'Correr',
    },
    {
      id: 4,
      nombre: 'Nitro',
      edad: 59,
      hobby: 'Cagar',
    },
  ];
}
