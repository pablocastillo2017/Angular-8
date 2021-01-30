import { Component } from '@angular/core';
import { UsuarioService } from './usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  personas: any = [];
  constructor() {
    let usuario = new UsuarioService();

    this.personas = usuario.getUsuarios();
  }
}
