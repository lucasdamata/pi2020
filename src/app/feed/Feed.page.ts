import { Component, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';


import {ServidorService} from '../services/servidor.service';




@Component({
  selector: 'app-Feed',
  templateUrl: 'Feed.page.html',
  styleUrls: ['Feed.page.scss']
})
export class FeedPage {

  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  
  
  public onlineOffline: boolean = navigator.onLine;
  sliderOne: any;

  slideOptsOne = {
    initialSlide: 1,
    slidesPerView: 1,
    autoplay: true
  };

  public pragas: any;
  public pragasSearch: Array<{id: any,nome: any, img: String, combate: String}>;
  public pragasAll: Array<{id: any,nome: any, img: String, combate: String}>;



  public registros: any;
  public registrosSalvos: Array<{id: any,
    nome: any, 
    observacao: String, img: String,
    fazenda:string,
    setor:string,
    talhao:string,
    variedade:string,
    latitude:String, longitude:String,
    pragaid:string}>;


  
  constructor(public alertController: AlertController,
              public servidor: ServidorService,
              private router: Router,
              private route: ActivatedRoute,) {

                this.sliderOne =
                {
                  isBeginningSlide: true,
                  isEndSlide: false,
                  slidesItems: [
                    {
                      id: 1
                    },
                    {
                      id: 2
                    },
                    {
                      id: 3
                    },
                    {
                      id: 4
                    },
                  ]
                };


                if (!navigator.onLine) {
                  alert("Esse recurso necessita de internet!");
                  }
               
  }

  async ngOnInit() {
    
    this.registros = this.showDataReg();
    this.registrosSalvos= [];
   // this.showDataPragas();

  }

  doRefresh(event) {
    this.registrosSalvos= [];
    this.showDataReg();

    if (!navigator.onLine) {
      alert("É necessario uma conexão para carregar...");
      }

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 3000);

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
            nome: data[i][1],
            observacao: data[i][2],
            img: data[i][3],
            fazenda: data[i][4],
            setor: data[i][5],
            talhao: data[i][6],
            variedade: data[i][7],
            latitude: data[i][8],
            longitude: data[i][9],
            pragaid: data[i][10],
            
          });
        
          this.registros = this.registrosSalvos;
        }
       }, err => console.log(err)
    );
   }


/* showDataPragas(){
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
            combate: data[i]["combate"],
          });
        
          this.pragasAll = this.pragasSearch;
        } }, err => console.log(err)
    );
   } */
   positionDetail(lat,lng){
    let loc:any = {lat:lat, lng:lng};
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special:JSON.stringify(loc)
      }
    };
    this.router.navigate(['mapsdetail'], navigationExtras);
    console.log(navigationExtras);

   }


   regDetail(funcionario, pragaId,id,fazenda,talhao,setor,observacao,variedade){
     
    let payload = {
      funcionario:funcionario,
      id: id,
      observacao: observacao,
      fazenda: fazenda,
      setor: setor,
      talhao: talhao,
      variedade: variedade,
      pragaid: pragaId,
    }
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special:JSON.stringify(payload)
      }
    };
    this.router.navigate(['detalhes-registro'], navigationExtras);
    console.log(navigationExtras);

   }


}
