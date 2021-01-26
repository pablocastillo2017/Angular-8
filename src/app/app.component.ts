import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isActive = true;
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

  getColor(hobby) {
    switch (hobby) {
      case 'Cantar':
        return 'red';
      case 'Saltar':
        return 'yellow';
      case 'Correr':
        return 'orange';
      case 'Cantar':
        return 'Cagar';
    }
  }
}
