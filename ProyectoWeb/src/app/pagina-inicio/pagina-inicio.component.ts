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
  ElementoSeleccionado(imagen:Imagen){
    this.seleccionado = imagen;
  }

  ModalEliminar(imagen: Imagen) {

    this.modalDialogService.openDialog(this.viewContainer, {
      title: 'Eliminar Elemento',
      childComponent: SimpleModalComponent,
      settings: {
        closeButtonClass: 'close theme-icon-close'
      },
      data: {
        text: '¿Desea Eliminar la Publicación?'
      },
      actionButtons: [
        {
          text: 'ELIMINAR',
          buttonClass: 'btn btn-danger',
          onAction: () => new Promise((resolve: any) => {
           
            this.DataService.removeDatos(imagen);
            this.ArregloDatos = this.DataService.getDatos();
            this.Ids = Object.keys(this.ArregloDatos);
            resolve();
          })
        }
      ]
    });
  }

  ModalEditar() {
    this.modalDialogService.openDialog(this.viewContainer, {
      title: 'Editar',
      childComponent: SimpleModalComponent,
      settings: {
        closeButtonClass: 'close theme-icon-close'
      },
      data: {
        text: 'Editado con exito'
      },
      actionButtons: [
        {
          text: 'Aceptar',
          buttonClass: 'btn btn-success',
          onAction: () => new Promise((resolve: any) => {
            resolve();
            this.seleccionado.descripcion = this.Descripcion
            this.seleccionado.titulo = this.Titulo;
            console.log(this.seleccionado);
            this.DataService.UpdateeDatos(this.seleccionado);
            this.Descripcion = "";
            this.Titulo = "";
          })
        }
      ]
    });
  }
  



}
