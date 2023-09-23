import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isAlertOpen = false;
  public alertButtons = ['OK'];

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  private todo: FormGroup;
  validateUser: string = "";

  formLogin = {
    usuario: "",
    password: ""
  }

  datosReg: string = "";

  constructor(private router: Router, private storage: Storage, private formBuilder: FormBuilder, private rutaActiva : ActivatedRoute) { 

    this.rutaActiva.queryParams.subscribe(params =>{

      if(params['nameUsuario'])
      {
        this.datosReg = params['nameUsuario'];
      }
    })
    

    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['']
    });

  }

  async ngOnInit() {
    await this.storage.create();
  }

  login() {

    console.log(this.formLogin)

    let datosEnviar: NavigationExtras = {
      queryParams: {
        nameUsuario: this.formLogin.usuario
      }
    }

    this.router.navigate(['/home'], datosEnviar);

    //guardar info en el storage
    this.storage.set("usuario","Juan")
    this.storage.get("")

  }

}
