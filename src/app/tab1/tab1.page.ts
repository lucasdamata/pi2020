import { Component, OnInit } from '@angular/core';
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
export class Tab1Page implements OnInit {
  alertController: any;
  
  page:any;
  pragas:any;
  pragasAlho:any;
  teste:any;

  //public pragas: any;
  //public pragasSearch: Array<{id: any,nome: any, img: String, combate: String}>;
  //public pragasAll: Array<{id: any,nome: any, img: String, combate: String}>;

  
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


      this.pragas = [

        {
          "nome": "Diatraea saccharalis - Broca da Cana",
          "img": "../assets/pragas/pragasCana/broca.jpg",
          "nivel": " GRAVE",
          "combate": " liberação de parasitóides como a Cotesia flavipes. Não adotar medidas que causem desequilíbrio nas populações de parasitóides e predadores, sendo necessário racionalizar o uso de produtos químicos.",
          "pInfestação": "Março - outubro",
          "obs": " dificilmente combatida"
        },
        {
          "nome": "Mahanarva fimbriolata - Cigarrinha das Raízes",
          "img": "../assets/pragas/pragasCana/cigarrinha.jpg",
          "nivel": "Médio",
          "combate": "aplicação do fungo Metarhizium anisopliae quando forem encontradas populações acima de 3 ninfas por metro linear.",
          "pInfestação": "junho-julho",
          "obs": "dificilmente combatida"
        },
        {
          "nome": "Migdolus fryanus - Migdolus",
          "img": "../assets/pragas/pragasCana/migdolus.jpg",
          "nivel": "GRAVE",
          "combate": "aplicação de inseticidas por ocasião do preparo do solo, em operação conjunta com a subsolagem (subsolador-aplicador) ou aração (arado de aiveca, com aplicador de inseticida), na época seca, quando se observa maior ocorrência de larvas nas camadas superficiais do solo.",
          "pInfestação": "Março - outubro",
          "obs": "dificilmente combatida"
        },
        {
          "nome": "Sphenophorus levis",
          "img": "../assets/pragas/pragasCana/spheno.jpg",
          "nivel": "GRAVE",
          "combate": "consiste na destruição antecipada das soqueiras com o erradicador de soqueiras. A seguir a área deverá ser mantida livre de plantas hospedeiras da praga e o próximo plantio deverá ser realizado o mais tarde possível.",
          "pInfestação": "junho-julho",
          "obs": "dificilmente combatida"
        },
        {
          "nome": "Broca Gigante",
          "img": "../assets/pragas/pragasCana/brocaG.jpg",
          "nivel": "Médio",
          "combate": "A termonebulização é uma técnica que consiste na transformação de um inseticida diluído em óleo em uma névoa e a sua aplicação no interior do formigueiro, utilizando equipamentos denominados termonebulizadores.",
          "pInfestação": "junho-julho",
          "obs": "dificilmente combatida"
        },
        {
          "nome": "Lagarta Elasmo",
          "img": "../assets/pragas/pragasCana/lagarta.jpg",
          "nivel": "Baixo",
          "combate": "uso de sementes com tratamento industrial, especialmente com a nova tecnologia Fortenza Duo, da Syngenta, é uma grande defesa contra essa praga. E traz um excelente resultado para o produtor.",
          "pInfestação": "Março - outubro",
          "obs": "dificilmente combatida"
        },
      ]

      this.pragasAlho = [
        {
          "nome": "Ácaro Eriophyestulipae",
          "img": "../assets/pragas/pragasAlho/acaro.jpg",
          "nivel": " GRAVE",
          "combate": "Aplicação de acaricida em pulverizações ou em imersão nos bulbos antes do plantio.",
          "pInfestação": "Março - outubro",
          "obs": " dificilmente combatida"
        },
        {
          "nome": "Thrips Tabaci ",
          "img": "../assets/pragas/pragasAlho/trips.jpg",
          "nivel": " GRAVE",
          "combate": "Uma vez detectados, deve-se proceder à pulverização com inseticidas recomendados. Medidas preventivas também podem ser adotadas, como a implantação de barreiras quebravento, rotação de culturas, eliminação de plantas daninhas e manejo adequado da cultura, dentre outras.",
          "pInfestação": "Março - outubro",
          "obs": " dificilmente combatida"
        },
      
      ]
      
  }

  async ngOnInit() {

    //this.pragas = this.showDataReg(this.page);
    //this.pragasSearch= [];

    if(this.page == 'pragas'){
      this.teste = this.pragas;
    }else{
      this.teste = this.pragasAlho;
    }
   
  }

//fazendo um teste

/* showDataReg(endpoint){
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
          
      
        this.pragasAll = this.pragasSearch;
      }
     }, err => console.log(err)
  );
 } */

//pagina de detalhes
detalhe(praga:any) {
  let navigationExtras: NavigationExtras = {
    queryParams: {
      special: JSON.stringify(praga)
    }
  };
  this.router.navigate(['detalhes'], navigationExtras);
}

alerta(praga) {

  let navigationExtras: NavigationExtras = {
    queryParams: {
      special: JSON.stringify(praga)
    }
  };
  this.router.navigate(['alerta'], navigationExtras);
}
identificar(page){
  let navigationExtras: NavigationExtras = {
    queryParams: {
      special: JSON.stringify(page)
    }
  };
  this.router.navigate(['tabs/tab3'], navigationExtras);

}



/* //barra de pesquisa
   onSearchTerm(ev: CustomEvent) {
    const val = ev.detail.value;

    if (val && val.trim() !== '') {
      this.pragasSearch = this.pragasSearch.filter(term => {
        return term.nome.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
      })
    }else{
      this.pragasSearch = this.pragasAll;
    }
  } */
  
}
  
