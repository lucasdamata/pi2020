import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import {ServidorService} from '../services/servidor.service';

@Component({
  selector: 'app-detalhes-registro',
  templateUrl: './detalhes-registro.page.html',
  styleUrls: ['./detalhes-registro.page.scss'],
})
export class DetalhesRegistroPage implements OnInit {

  
  registro:any;
  teste:any;
  final:any;

  public praga: any;
  public pragasSearch: Array<{id: any,nome: any, img: String, combate: String}>;
  public pragasAll: Array<{id: any,nome: any, img: String, combate: String}>;


  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public servidor: ServidorService,
  ) {

    this.registro = this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.registro = JSON.parse(params.special);
        
      }
    }); 


    this.teste = this.servidor.getData().subscribe( data =>{
      this.final = data[this.registro.pragaId -1];
    }, err => console.log(err)
    ); 



   }


  ngOnInit() {

    this.pragasSearch= []; 
   
  }

 
   
}
