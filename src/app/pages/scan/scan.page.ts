import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  constructor(private router:Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  onClick()
  {
    this.router.navigate (['/scaneado'])
    //hacer aparecer la alerta
    this.presentAlert();
    
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Asistencia Registrada',
      subHeader: 'PGY4121, Desarrollo app Móviles, S1, 17/11/22',
      buttons: ['YES'],
    });

    await alert.present();
  }
}
