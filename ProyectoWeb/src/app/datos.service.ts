import { Injectable } from '@angular/core';
import {Imagen} from './imagen';
import {IMAGENES} from './mock-imagen';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  imagenPrueba= IMAGENES;
  ArregloDatos = {};
  constructor() { 
    this.ArregloDatos = {};
    ;
  }
/*
  getDatos (): {} {
    if (localStorage.getItem("ArregloDatos")=== null){
      this.ArregloDatos[this.imagenPrueba[0].id] = this.imagenPrueba[0];
      this.ArregloDatos[this.imagenPrueba[1].id] = this.imagenPrueba[1];
      localStorage.setItem("ArregloDatos", JSON.stringify(this.ArregloDatos))
    }else{
      this.ArregloDatos =  JSON.parse(localStorage.getItem("ArregloDatos"));
    }
    return this.ArregloDatos;
  }

  addDatos(imagen: Imagen): void{
    this.ArregloDatos[imagen.id] = imagen;
    let datos
    if (localStorage.getItem("ArregloDatos")=== null){
      datos = {};
      datos[imagen.id]=imagen;
      localStorage.setItem("ArregloDatos", JSON.stringify(datos))
    }else{
      datos=  JSON.parse(localStorage.getItem("ArregloDatos"));
      datos[imagen.id] = imagen;
      localStorage.setItem("ArregloDatos", JSON.stringify(datos))
    }
  }

  removeDatos(imagen:Imagen): void{
    let ImagenId = imagen.id;
    delete this.ArregloDatos[ImagenId];
    localStorage.setItem("ArregloDatos", JSON.stringify(this.ArregloDatos))
  }

  UpdateeDatos(imagen:Imagen): void{
    this.ArregloDatos[imagen.id]= imagen;
    localStorage.setItem("ArregloDatos", JSON.stringify(this.ArregloDatos))
  }*/
}
