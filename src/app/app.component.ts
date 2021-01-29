import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  curso = {
    titulo: 'Curso De Angular',
    estudiantes: '20398',
    rating: 50.983,
    precio: 50,
    fechaDeLanzamiento: Date.now(),
  };
}
