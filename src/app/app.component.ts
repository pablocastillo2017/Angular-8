import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hola-mundo';
  nombre = 'Pablo';

  getNombre() {
    return this.title + 'Mi nombre es: ' + this.nombre;
  }
}
