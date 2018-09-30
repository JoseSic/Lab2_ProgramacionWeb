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
  

}
