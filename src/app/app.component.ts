import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <button (mouseover)="save($event)">Guardar</button> `,
  styles: [``],
})
export class AppComponent {
  save(e) {
    console.log(e);
  }
}
