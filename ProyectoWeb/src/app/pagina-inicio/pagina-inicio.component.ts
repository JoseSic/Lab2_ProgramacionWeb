import { Component,ViewContainerRef, OnInit } from '@angular/core';
import {DatosService} from '../datos.service'
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import {Imagen} from '../imagen';
@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {
  ArregloDatos = {};
  Ids;
  seleccionado: Imagen;
  Descripcion: string;
  Titulo: string;
  constructor(private modalDialogService: ModalDialogService, private viewContainer: ViewContainerRef,public DataService: DatosService) {
   }

  ngOnInit() {
    this.ArregloDatos = this.DataService.getDatos();
    this.Ids = Object.keys(this.ArregloDatos);
  }

  



}
