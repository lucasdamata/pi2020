import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  praga: any;
  

  constructor(
    public photoService: PhotoService,
    public route: ActivatedRoute,
    public router: Router,
    public navParams: NavParams,
    public loadingController: LoadingController ) {

      this.praga = this.route.queryParams.subscribe(params => {
        if (params && params.special) {
          this.praga = JSON.parse(params.special);
        }
      }); 
      
    }
     

  ngOnInit() {
    
  }
  
  

}
