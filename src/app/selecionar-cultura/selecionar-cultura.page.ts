import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-selecionar-cultura',
  templateUrl: './selecionar-cultura.page.html',
  styleUrls: ['./selecionar-cultura.page.scss'],
})
export class SelecionarCulturaPage implements OnInit {


cana:string= 'cana';  

  constructor(public route: ActivatedRoute,
              public router: Router,
              ) { }

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

  café(){
    this.router.navigate(['tabs/tab1']);
  }


  alho(){
    this.router.navigate(['tabs/tab1']);
  }


  abacate(){
    this.router.navigate(['tabs/tab1']);
  }


  beterraba(){
    this.router.navigate(['tabs/tab1']);
  }

  cenoura(){
    this.router.navigate(['tabs/tab1']);
  }


  repolho(){
    this.router.navigate(['tabs/tab1']);
  }

  detalhe(praga:any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(praga)
      }
    };
    this.router.navigate(['detalhes'], navigationExtras);
  }

}
