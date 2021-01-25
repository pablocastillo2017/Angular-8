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
    },
    {
      id: 2,
      nombre: 'Papo',
      edad: 33,
    },
    {
      id: 3,
      nombre: 'Hector',
      edad: 46,
    },
    {
      id: 4,
      nombre: 'Nitro',
      edad: 59,
    },
  ];
}
