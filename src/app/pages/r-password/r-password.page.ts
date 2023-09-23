import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-r-password',
  templateUrl: './r-password.page.html',
  styleUrls: ['./r-password.page.scss'],
})
export class RPasswordPage implements OnInit {

  rContrasenaEmail = {
    email: "",
  }

  showAlert = false;

  constructor(private router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Se ha enviado un mensaje a: '+ this.rContrasenaEmail.email,
      message: 'Sigue las instrucciones en tu correo para recuperar la contraseña.',
      buttons: ['OK']
    });

    await alert.present();
  }

  email() {

    this.showAlert = true;
    if (this.showAlert) {
      this.presentAlert();
    }

    console.log(this.rContrasenaEmail)

    let emailEnviarLog: NavigationExtras = {
      queryParams: {
        name: this.rContrasenaEmail.email
      }
    }

    this.router.navigate(['/login', emailEnviarLog]);

  }
}
