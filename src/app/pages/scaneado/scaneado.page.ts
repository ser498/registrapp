import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-scaneado',
  templateUrl: './scaneado.page.html',
  styleUrls: ['./scaneado.page.scss'],
})
export class ScaneadoPage implements OnInit {

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Asistencia Registrada',
      subHeader: 'PGY4121, Desarrollo app Móviles, S1, 17/11/22',
      buttons: ['YES'],
    });

    await alert.present();
  }
  ngOnInit() {}

}
