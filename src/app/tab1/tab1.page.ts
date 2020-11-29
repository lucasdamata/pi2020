import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { isNgTemplate } from '@angular/compiler';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

import {ServidorService} from '../services/servidor.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  alertController: any;
  
  page:any;

  public pragas: any;
  public pragasSearch: Array<{id: any,nome: any, img: String, combate: String}>;
  public pragasAll: Array<{id: any,nome: any, img: String, combate: String}>;

  
  constructor(
    public servidor: ServidorService,
    public navCtrl: NavController,
    private router: Router,
    private route: ActivatedRoute
 
    ) {
      this.page = this.route.queryParams.subscribe(params => {
        if (params && params.special) {
          this.page = JSON.parse(params.special);
        }
      }); 

   
  }

  async ngOnInit() {

    this.pragas = this.showDataReg(this.page);
    this.pragasSearch= [];
   
  }


//fazendo um teste

showDataReg(endpoint){
  this.servidor.getDataApi(endpoint)
  .subscribe(
    data => { 
      this.pragas = data;
      let tamanho = Object.keys(data).length;
      for(let i=0; i < tamanho; i++ ){
        
        this.pragasSearch.push({
          id: data[i][0],
          nome: data[i][1],
          img: data[i][2],
          combate: data[i][3]
          });
          
      
        this.pragas = this.pragasSearch;
      }
     }, err => console.log(err)
  );
 }

//pagina de detalhes
detalhe(praga:any) {
  let navigationExtras: NavigationExtras = {
    queryParams: {
      special: JSON.stringify(praga)
    }
  };
  this.router.navigate(['detalhes'], navigationExtras);
}

//barra de pesquisa
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
  
