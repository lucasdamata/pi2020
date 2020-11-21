import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { ServidorService } from '../services/servidor.service';




@Component({
  selector: 'app-detalhes-registro',
  templateUrl: './detalhes-registro.page.html',
  styleUrls: ['./detalhes-registro.page.scss'],
})
export class DetalhesRegistroPage implements OnInit {

  image:string = '';


  registro: any;
  teste: any;
  final: any;

  public praga: any;
  public pragasSearch: Array<{ id: any, nome: any, img: String, combate: String }>;
  public pragasAll: Array<{ id: any, nome: any, img: String, combate: String }>;



  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public servidor: ServidorService,
    public http: HttpClient

  ) {

    this.registro = this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.registro = JSON.parse(params.special);

      }
    });


    if(this.registro.pragaid == 2){
      this.image ="../../assets/"
    }




  }

  ngOnInit() {
   this.pragasSearch = [];
   this.showDataPragas();


  }

  showDataPragas() {
  this.servidor.getData()
      .subscribe(
        data => {
         
          this.praga = data;

          let i = this.registro.pragaid -1;
            this.pragasSearch.push({
              id: data[i]["id"],
              nome: data[i]["nome"],
              img: data[i]["img"],
              combate: data[i]["combate"],
            });


        }, err => console.log(err)
      );
  }






}
