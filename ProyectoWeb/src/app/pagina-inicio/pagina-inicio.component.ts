import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {
  imagenes2 = [];
  constructor() {
    this.imagenes2 = JSON.parse(localStorage.getItem("datos"));
    console.log(this.imagenes2);
   }

  ngOnInit() {
  }

}
