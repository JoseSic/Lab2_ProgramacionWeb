import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { ModalesComponent } from './modales/modales.component';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { VentanaNuevoComponent } from './ventana-nuevo/ventana-nuevo.component';
import { AppRoutingModule } from './app-routing.module';
import { ToastServiceService } from './toast-service.service'

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
    AppRoutingModule,
    FormsModule
  ],
  providers: [ToastServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
