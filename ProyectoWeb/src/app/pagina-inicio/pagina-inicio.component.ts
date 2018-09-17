import { Component, OnInit } from '@angular/core';
import {IMAGENES} from '../mock-imagen'
@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {
  imagenes = IMAGENES;
  constructor() { }

  ngOnInit() {
  }

}
