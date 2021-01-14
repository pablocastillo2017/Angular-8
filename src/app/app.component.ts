import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <button [class.activo]="isActive">Mi Boton</button> `,
  styles: [
    `
      .activo {
        background: green;
      }
    `,
  ],
})
export class AppComponent {
  isActive = true;
}
