import { Component, OnInit,ViewContainerRef } from '@angular/core';
import {DatosService} from '../datos.service'
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import {Imagen} from '../imagen';
import { Guid } from "guid-typescript";

@Component({
  selector: 'app-ventana-nuevo',
  templateUrl: './ventana-nuevo.component.html',
  styleUrls: ['./ventana-nuevo.component.css']
})
export class VentanaNuevoComponent implements OnInit {
  pathImage: string;
  ImagenD: Imagen;
  Descripcion: string;
  titulo: string;
  constructor(private modalDialogService: ModalDialogService, private viewContainer: ViewContainerRef,public DataService: DatosService) { }

  ngOnInit() {
  }
  aleatorio(inferior,superior){ 
    var resAleatorio = Math.floor((Math.random() * (superior - inferior + 1)) + inferior);
   return String(resAleatorio);
  }

  ModaAgregar() {
    let unico: string;
    unico = Guid.raw()
    let img = this.aleatorio(5,30);
    this.ImagenD = {id:unico,imagen:img,descripcion:this.Descripcion, titulo:this.titulo}
    console.log(this.ImagenD);
    this.modalDialogService.openDialog(this.viewContainer, {
      title: 'Agregar',
      childComponent: SimpleModalComponent,
      settings: {
        closeButtonClass: 'close theme-icon-close'
      },
      data: {
        text: 'Agregado con Exito!'
      },
      actionButtons: [
        {
          text: 'Aceptar',
          buttonClass: 'btn btn-success',
          onAction: () => new Promise((resolve: any) => {
            resolve();
            this.DataService.addDatos(this.ImagenD);
            this.Descripcion="";
            this.titulo="";
            this.pathImage="";
          })
        }
      ]
    });
  }

}
