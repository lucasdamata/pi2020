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

  public coords: Array<{lat: -18.5872582,lng: -46.514674899999996}>;
  
  latitude:String = "";


  sliderOne: any;

  slideOptsOne = {
    initialSlide: 1,
    slidesPerView: 1,
    autoplay: true
  };


  public registros: any;
  public registrosSalvos: Array<{id: any, nome: any, 
    observacao: String, img: String,
    fazenda:string,
    setor:string,
    talhao:string,
    variedade:string,
     latitude:String, longitude:String}>;


  
  constructor(public alertController: AlertController,
              public servidor: ServidorService,
              private router: Router,
              private route: ActivatedRoute ) {

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

    
  }

  async ngOnInit() {
    
    this.registros = await this.showDataReg();
    this.registrosSalvos= [];
    
    
  }

  doRefresh(event) {
    this.registrosSalvos= [];
    this.showDataReg();

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
            
          });
        
          this.registros = this.registrosSalvos;
        }
       }, err => console.log(err)
    );
   }

   

   gotodetail(lat,lng){

    let loc:any = {lat:lat, lng:lng};

    let navigationExtras: NavigationExtras = {
      queryParams: {
        special:JSON.stringify(loc)
      }
    };
    this.router.navigate(['mapsdetail'], navigationExtras);
    console.log(navigationExtras);

   }



   teste(lat){
     console.log(lat);
   }


}
