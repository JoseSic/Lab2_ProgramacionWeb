import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoWeb';

  constructor(){
    /*localStorage.setItem("datos", JSON.stringify(this.imagenes))*/
  }
}
