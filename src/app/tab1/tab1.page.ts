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
  public pragasSearch: Array<{id: any,nome: any, img: String, combate: String}>;
  public pragasAll: Array<{id: any,nome: any, img: String, combate: String}>;

  
  constructor(public servidor: ServidorService) {
   
  }

  async ngOnInit() {
    this.pragas = await this.showData();
    this.pragasSearch= [];
  }

  
   showData(){
    this.servidor.getData()
    .subscribe(
      data => {
        
        this.pragas = data;
        let tamanho = Object.keys(data).length;
        for(let i=0; i < tamanho; i++ ){
          this.pragasSearch.push({
            id: data[i]["id"],
            nome: data[i]["nome"],
            img: data[i]["img"],
            combate: data[i]["combate"]
          });
        
 
      
          this.pragasAll = this.pragasSearch;
        }  
      },
      err => console.log(err)
    );
   }

   onSearchTerm(ev: CustomEvent) {
    const val = ev.detail.value;

    if (val && val.trim() !== '') {
      this.pragasSearch = this.pragasAll.filter(term => {
        return term.nome.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
      })
    }else{
      this.pragasSearch = this.pragasAll;
    }
  }
  
}
  
