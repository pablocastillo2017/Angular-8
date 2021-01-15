import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <br />
    <input type="text" (keyup.enter)="onKeyUp(nombre.value)" #nombre />
  `,
  styles: [``],
})
export class AppComponent {
  onKeyUp(usuario) {
    console.log(usuario);
  }
}
