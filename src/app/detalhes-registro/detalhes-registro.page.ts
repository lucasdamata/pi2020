import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { ServidorService } from '../services/servidor.service';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import { database } from 'firebase';




@Component({
  selector: 'app-detalhes-registro',
  templateUrl: './detalhes-registro.page.html',
  styleUrls: ['./detalhes-registro.page.scss'],
})
export class DetalhesRegistroPage implements OnInit {

  image:string = '';
  url = 'http://localhost/dados/banco.php';

  
  registro: any;
  final: any;
  teste:any;

  public praga: any;
  public pragasSearch: Array<{ id: any, nome: any, img: string, combate: String }>;
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


   this.final = this.http.get(this.url).subscribe(resp =>{
     this.final = resp[this.registro.pragaid -1];
    
   })

        
  }

  ngOnInit() {

  }



}
