import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <br />
    <input type="text" (keyup.enter)="onKeyUp()" />
  `,
  styles: [``],
})
export class AppComponent {
  onKeyUp() {
    console.log('Presiono el Enter');
  }
}
