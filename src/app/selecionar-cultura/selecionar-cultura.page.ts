import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

import { ServidorService } from '../services/servidor.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-selecionar-cultura',
  templateUrl: './selecionar-cultura.page.html',
  styleUrls: ['./selecionar-cultura.page.scss'],
})
export class SelecionarCulturaPage implements OnInit {
  
  data = Date.now()
  lat:any;
  lng:any;
  cidade:any;
 

  cana:string = 'pragas';
  alho:string = "pragasAlho"

  constructor(public route: ActivatedRoute,
              public router: Router,
              public servidor: ServidorService,
              private geolocation: Geolocation
              ) {


    this.cidade = this.geolocation.getCurrentPosition().then(resp=>{
       this.lat = resp.coords.latitude;
        this.lng = resp.coords.longitude;

       this.cidade = this.servidor.getLocationApi(this.lat, this.lng).subscribe(resp=>{
        
        this.cidade = resp;
        
        })
              
     })
   
  }

  ngOnInit() {

 
  }


  canaPage(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.cana)
      }
    };
    this.router.navigate(['tabs/tab1'], navigationExtras);
  }

  alhoPage(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.alho)
      }
    };
    this.router.navigate(['tabs/tab1'], navigationExtras);
  }



}
