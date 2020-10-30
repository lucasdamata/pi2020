import { Component, OnInit, NgModule } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import {EmailComposer} from '@ionic-native/email-composer/ngx';


import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Headers, Http, RequestOptions} from '@angular/http';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {


  funcionario: String ='';
  observacao: String = '';



  
  
  alertForm = this.formBuilder.group({
    funcionario: [''],
    infestacao: [''],
    local: [''],
    observacao: ['']
  });

  constructor(public photoService: PhotoService,
              private formBuilder: FormBuilder, 
              private emailComposer: EmailComposer,
              private http: HttpClient,
              public loadingController: LoadingController,
              public camera: Camera) { }
  
 


 
  ngOnInit() {
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Enviando dados...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    
  }
    

  sendPostRequest() {
    this.presentLoading();
    var headers: {
      "Access-Control-Allow-Origin": " http://127.0.0.1:5000/registros",
      "Accept": 'application/json',
      "Content-Type": "application/json"
    };

    let postData = {
            "funcionario": this.funcionario,
            "observacao": this.observacao,
                   
    }

    this.http.post("http://127.0.0.1:5000/registros", postData, {headers:headers})
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });


  }



}
