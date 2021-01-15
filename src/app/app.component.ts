import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [``],
})
export class AppComponent {
  persona = {
    nombre: 'Iron man',
    edad: 20,
  };
}
