import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { ModalesComponent } from './modales/modales.component';
import { ModalDialogModule } from 'ngx-modal-dialog';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicioComponent,
    ModalesComponent
  ],
  imports: [
    BrowserModule,
    ModalDialogModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
