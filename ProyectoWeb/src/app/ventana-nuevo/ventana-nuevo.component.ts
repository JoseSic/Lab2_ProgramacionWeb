import { Component, OnInit,ViewContainerRef } from '@angular/core';
import {DatosService} from '../datos.service'
import {Datos2Service} from '../datos2.service'
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
  Descripcion: string;
  titulo: string;
  autor: string;
  lugar: string;
  contacto: string;
  constructor(private modalDialogService: ModalDialogService, private viewContainer: ViewContainerRef,public DataService: DatosService,
    public DataService2: Datos2Service) { }

  ngOnInit() {
  }
  aleatorio(inferior,superior){ 
    var resAleatorio = Math.floor((Math.random() * (superior - inferior + 1)) + inferior);
   return String(resAleatorio);
  }

  ModaAgregar() {
    let unico: string;
    let img = this.aleatorio(5,30);
    const ImagenD2 = {imagen:img,descripcion:this.Descripcion, titulo:this.titulo, autor:this.autor, lugar: this.lugar, 
      contacto: this.contacto}
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
            this.DataService2.addFoto(ImagenD2);
            this.Descripcion="";
            this.titulo="";
            this.pathImage="";
            this.autor = "";
            this.lugar="";
            this.contacto ="";
          })
        }
      ]
    });
  }

  openPromptModal() {
    this.modalDialogService.openDialog(this.viewContainer, {
      title: 'Dialog with action buttons',
      childComponent: SimpleModalComponent,
      data: {
        text: 'Not so simple modal dialog. Do you agree?\n(It will close on Yes, fail on No and do nothing on Site effect)'
      },
      settings: {
        closeButtonClass: 'close theme-icon-close'
      },
      actionButtons: [
        {
          text: 'Yes, close me!',
          buttonClass: 'btn btn-success',
          onAction: () => new Promise((resolve: any) => {
            setTimeout(() => {
              resolve();
            }, 20);
          })
        },
        {
          text: 'Side effect',
          buttonClass: 'btn btn-info',
          onAction: () => {
            alert('As you can see, I will not close this dialog');
          }
        },
        {
          text: 'No, fail closing!',
          buttonClass: 'btn btn-danger',
          onAction: () => new Promise((resolve: any, reject: any) => {
            setTimeout(() => {
              reject();
            }, 20);
          })
        }
      ]
    });
  }

}
