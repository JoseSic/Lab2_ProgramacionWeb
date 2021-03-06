import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { DatosService } from '../datos.service'
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { Imagen } from '../imagen';
import { Datos2Service } from '../datos2.service'
import { ToastServiceService } from '../toast-service.service'
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
  autor: string;
  lugar: string;
  contacto: string;
  constructor(private modalDialogService: ModalDialogService, private viewContainer: ViewContainerRef, public DataService: DatosService,
    public DataService2: Datos2Service, private TService: ToastServiceService) {
  }

  ngOnInit() {
    this.getAll();
    /*this.ArregloDatos =  this.DataService.getDatos();
    this.Ids = Object.keys(this.ArregloDatos);*/
  }

  getAll(): void {
    this.DataService2.getAllGaleria().then(result => {
      this.ArregloDatos = result;
      this.Ids = Object.keys(this.ArregloDatos);
    }).catch((err) => {
      console.log(err);
    });
  }


  ElementoSeleccionado(imagen: Imagen) {
    this.seleccionado = imagen;
    this.Descripcion = imagen.descripcion;
    this.Titulo = imagen.titulo;
    this.autor = imagen.autor;
    this.lugar = imagen.lugar;
    this.contacto = imagen.contacto;
  }

  ModalEliminar(imagen: Imagen) {
    console.log(imagen);
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
          text: 'Cancelar',
          buttonClass: 'btn btn-secondary',
          onAction: () => new Promise((resolve: any) => {
            setTimeout(() => {
              resolve();
            }, 20);
          })
        },
        {
          text: 'Eliminar',
          buttonClass: 'btn btn-danger',
          onAction: () => new Promise((resolve: any) => {
            this.DataService2.removeFoto(imagen).then(result => {
              this.TService.Success(String(result));
              this.getAll();
            }).catch((err) => {
              this.TService.Error(String(err));
            });
            resolve();
          })
        }
      ]
    });
  }

  ModalEditar() {

    console.log(this.seleccionado);
    this.seleccionado.descripcion = this.Descripcion
    this.seleccionado.titulo = this.Titulo;
    this.seleccionado.lugar = this.lugar;
    this.seleccionado.autor = this.autor;
    this.seleccionado.contacto = this.contacto;
    const ImagenD2 = {
      imagen: this.seleccionado.imagen, descripcion: this.Descripcion, titulo: this.Titulo, autor: this.autor, lugar: this.lugar,
      contacto: this.contacto
    }
    this.DataService2.updateFoto(this.seleccionado._id, ImagenD2).then(result => {
      this.TService.Success(String(result));
      this.Descripcion = "";
      this.Titulo = "";
      this.autor = "";
      this.lugar = "";
      this.contacto = "";
      this.getAll(); 
    }).catch((err) => {
      this.TService.Error(String(err));
    });
    //this.DataService.UpdateeDatos(this.seleccionado);
  }




}
