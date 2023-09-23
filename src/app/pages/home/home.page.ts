import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  mensaje: string = "";

  constructor(private rutaActiva : ActivatedRoute) {

    this.rutaActiva.queryParams.subscribe(params =>{

      if(params['nameUsuario'])
      {
        this.mensaje = params['nameUsuario'];
      }
    })
  }

  accionDelBoton() {
    // Aquí puedes agregar el código para manejar la acción del botón
  }

}
