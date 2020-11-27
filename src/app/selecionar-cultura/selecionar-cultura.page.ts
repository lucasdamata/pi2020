import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-selecionar-cultura',
  templateUrl: './selecionar-cultura.page.html',
  styleUrls: ['./selecionar-cultura.page.scss'],
})
export class SelecionarCulturaPage implements OnInit {

  constructor(public route: ActivatedRoute,
              public router: Router,
              ) { }

  ngOnInit() {
  }


  cana(){
    this.router.navigate(['tabs/tab1']);
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



}
