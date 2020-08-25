import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { isNgTemplate } from '@angular/compiler';

import {ServidorService} from '../services/servidor.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  alertController: any;

  public pragas: any;
  public allPragas: Array<any> = [];
 
  
  constructor(public servidor: ServidorService) {}

  async ngOnInit() {
    this.pragas = await this.showData();
  }

  
   showData(){
    this.servidor.getData()
    .subscribe(
      data => this.pragas = data,
      err => console.log(err)
    );
   }

   onSearchTerm(ev: CustomEvent) {
    const val = ev.detail.value;

    if (val && val.trim() !== '') {
      this.pragas = this.pragas.filter(term => {
        return term.nome.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
      });
    }
  }
  
}
  
