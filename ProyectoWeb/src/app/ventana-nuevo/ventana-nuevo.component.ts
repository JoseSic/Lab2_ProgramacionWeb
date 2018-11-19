import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { DatosService } from '../datos.service'
import { Datos2Service } from '../datos2.service'
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { Imagen } from '../imagen';
import { Guid } from "guid-typescript";
import { ToastServiceService } from '../toast-service.service'

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
  selectedFile = null;
  constructor(private modalDialogService: ModalDialogService, private viewContainer: ViewContainerRef, public DataService: DatosService,
    public DataService2: Datos2Service, private TService: ToastServiceService) { }

  ngOnInit() {
  }
  aleatorio(inferior, superior) {
    var resAleatorio = Math.floor((Math.random() * (superior - inferior + 1)) + inferior);
    return String(resAleatorio);
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log(event);
    this.pathImage = event.target.files[0].name;


  }
  onUploadOutput(event) {
    console.log(event);
  }
  onUpload() {
    /*
    let ArregloDatos = {};
    
    this.DataService2.linkImage(this.selectedFile).then( result => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
    });
    */
  }
  ModaAgregar() {
    this.DataService2.linkImage(this.selectedFile).then(result => {
      var temp = String(result);
      const ImagenD2 = {
        imagen: temp, descripcion: this.Descripcion, titulo: this.titulo, autor: this.autor, lugar: this.lugar,
        contacto: this.contacto
      }
      this.Descripcion = "";
      this.titulo = "";
      this.pathImage = "";
      this.autor = "";
      this.lugar = "";
      this.contacto = "";
      
      this.DataService2.addFoto(ImagenD2).then(result => {
        this.TService.Success(String(result));
      }).catch((err) => {
        this.TService.Error(String(err));
      })

    }).catch((err) => {
      this.TService.Error(String(err));
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
