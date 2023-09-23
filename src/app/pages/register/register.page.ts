import { Component, OnInit } from '@angular/core';
import { getName } from 'ionicons/dist/types/components/icon/utils';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formRegister = {
    nombre: "",
    apellido: "",
    nameUsuario: "",
    password: ""
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  register() {

    console.log(this.formRegister)

    let datosEnviarLog: NavigationExtras = {
      queryParams: {
        name: this.formRegister.nombre,
        lastName: this.formRegister.apellido,
        usuario: this.formRegister.nameUsuario,
        password: this.formRegister.password
      }
    }

    this.router.navigate(['/login', datosEnviarLog]);

  }

}
