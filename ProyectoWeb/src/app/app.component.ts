import { Component } from '@angular/core';
import {IMAGENES} from './mock-imagen'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imagenes = IMAGENES;
  title = 'ProyectoWeb';

  constructor(){
    localStorage.setItem("datos", JSON.stringify(this.imagenes))
  }
}
