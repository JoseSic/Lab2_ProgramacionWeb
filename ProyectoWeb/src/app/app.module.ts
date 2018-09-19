import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { ModalesComponent } from './modales/modales.component';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { VentanaNuevoComponent } from './ventana-nuevo/ventana-nuevo.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicioComponent,
    ModalesComponent,
    VentanaNuevoComponent
  ],
  imports: [
    BrowserModule,
    ModalDialogModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
