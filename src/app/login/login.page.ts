import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {ServidorService} from '../services/servidor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  ir(){
    this.router.navigate(['selecionar-cultura'])
  }


}
