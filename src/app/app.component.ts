import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button [style.borderColor]="isActive ? 'red' : 'blue'">Mi Boton</button>
  `,
  styles: [``],
})
export class AppComponent {
  isActive = false;
}
