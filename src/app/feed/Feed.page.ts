import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

import {ServidorService} from '../services/servidor.service';


@Component({
  selector: 'app-Feed',
  templateUrl: 'Feed.page.html',
  styleUrls: ['Feed.page.scss']
})
export class FeedPage {


  public registros: any;
  public registrosSalvos: Array<{id: any, funcionario: any, observacao: String, img: String}>;

  constructor(public alertController: AlertController,
              public servidor: ServidorService) {

    
  }

  async ngOnInit() {
    this.registros = await this.showDataReg();
    this.registrosSalvos= [];
    
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Período de infestação: broca',
      subHeader: 'Funcionario: "fulano" 1 min ago',
      message: '"alerta selecionado pelo funcionario na pag 1"',
      buttons: ['Mais detalhes']
    });

    await alert.present();
  }


  showDataReg(){
    this.servidor.getDataPtyhon()
    .subscribe(
      data => { 
        this.registros = data;
        let tamanho = Object.keys(data).length;
        for(let i=0; i < tamanho; i++ ){
          
          this.registrosSalvos.push({
            id: data[i][0],
            funcionario: data[i][1],
            observacao: data[i][2],
            img: data[i][3],
            
          });
        
          this.registros = this.registrosSalvos;
        } }, err => console.log(err)
    );
   }



   click(){
     console.log(this.registrosSalvos)
   }


}
