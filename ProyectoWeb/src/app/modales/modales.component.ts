import { Component, ViewContainerRef,Input } from '@angular/core';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import {Imagen} from '../imagen';
import {DatosService} from '../datos.service'

@Component({
  selector: 'app-modales',
  templateUrl: './modales.component.html',
  styleUrls: ['./modales.component.css']
})
export class ModalesComponent {
  @Input() Seleccionado: Imagen;

  constructor(private modalDialogService: ModalDialogService, private viewContainer: ViewContainerRef,
    private DatosServicio:DatosService ) {
 
  }

  ModalEliminar() {
    console.log(this.Seleccionado);
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
            resolve();
            this.DatosServicio.removeDatos(this.Seleccionado);
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
            setTimeout(() => {
              resolve();
            }, 20);
          })
        }
      ]
    });
  }

  ModaAgregar() {
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
            setTimeout(() => {
              resolve();
            }, 20);
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
