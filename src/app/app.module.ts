import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { FormsModule } from '@angular/forms';
import { UsuarioComponent } from './usuario/usuario.component';
import { CambiarColorDirective } from './cambiar-color.directive';
import { ResumirPipe } from './resumir.pipe';
import { NuevoPipe } from './nuevo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    UsuarioComponent,
    CambiarColorDirective,
    ResumirPipe,
    NuevoPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
