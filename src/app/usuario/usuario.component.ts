import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  @Input('persona') lapersona;
  @Output() enviar = new EventEmitter();
  mensaje = 'yo soy componente hijo';
  constructor() {}

  ngOnInit(): void {}
  ejecutarEvento() {
    this.enviar.emit(this.mensaje);
  }
}
