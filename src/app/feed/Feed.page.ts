import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-Feed',
  templateUrl: 'Feed.page.html',
  styleUrls: ['Feed.page.scss']
})
export class FeedPage {

  constructor(public alertController: AlertController) {}

  today = Date.now();

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Período de infestação: broca',
      subHeader: 'Funcionario: "fulano" 1 min ago',
      message: '"alerta selecionado pelo funcionario na pag 1"',
      buttons: ['Mais detalhes']
    });

    await alert.present();
  }

}
