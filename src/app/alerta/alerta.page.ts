import { Component, OnInit, NgModule } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailComposer } from '@ionic-native/email-composer/ngx';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, Http, RequestOptions } from '@angular/http';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';




@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {


  nome: any;


  funcionario: String = '';
  observacao: String = '';
  fazenda: String = '';
  setor: String = '';
  talhao: string = '';
  variedade: string = '';
  latitude: string = '';
  longitude: string = '';
  praga: string = "";

  public fgroup: FormGroup;

  page: any;
  route: any;

  capturedSnapURL: any;

  cameraOptions: CameraOptions = {
    quality: 20,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  constructor(public photoService: PhotoService,
    private formBuilder: FormBuilder,
    private emailComposer: EmailComposer,
    private http: HttpClient,
    public loadingController: LoadingController,
    public camera: Camera,
    public fbuilder: FormBuilder,
    public router: Router) {

    this.page = this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.page = JSON.parse(params.special);
      }
    });

    this.fgroup = this.fbuilder.group({
      'funcionario': [this.funcionario, Validators.compose([
        Validators.required
      ])],

      'fazenda': [this.fazenda, Validators.compose([
        Validators.required
      ])],
      'setor': [this.setor, Validators.compose([
        Validators.required
      ])],
      'talhao': [this.talhao, Validators.compose([
        Validators.required
      ])],
      'variedade': [this.variedade, Validators.compose([
        Validators.required
      ])],
      'observacao': [this.observacao, Validators.compose([
        Validators.required
      ])],
      'latitude': [this.latitude, Validators.compose([
        Validators.required,

      ])],
      'longitude': [this.longitude, Validators.compose([
        Validators.required
      ])],
      'praga': [this.praga, Validators.compose([
        Validators.required
      ])],

    });
    this.fgroup.controls['latitude'].disable();
    this.fgroup.controls['longitude'].disable();
  }





  ngOnInit() {
    console.log(this.page)
  }



  takePicture() {
    this.camera.getPicture(this.cameraOptions).then((imageData) => {

      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.capturedSnapURL = base64Image;
    }, (err) => {
      console.log(err);
      // Handle error
    });
  }
  sendPostRequest() {

    const headers = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Access-Control-Allow-Origin', 'http://localhost:8100')
      .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      .set('Access-Control-Allow-Headers', 'Content-Type')
      .set('responseType', 'text');


    let postData = {
      "funcionario": this.fgroup.value.funcionario,
      "observacao": this.fgroup.value.observacao,
      "img": "teste",
      "fazenda": this.fgroup.value.fazenda,
      "setor": this.fgroup.value.setor,
      "talhao": this.fgroup.value.talhao,
      "variedade": this.fgroup.value.variedade,
      "latitude": this.fgroup.value.funcionario,
      "longitude": this.fgroup.value.funcionario
    }


    this.http.post("http://127.0.0.1:5000/registros", postData, { headers: headers }).subscribe(res => {

      this.presentLoading('Aguarde, enviando e processando dados...');
      this.fgroup.reset();
      this.router.navigate(['tabs/Feed']);

    }, error => {
      this.presentLoading("Algo deu errado, tente novamente")
      console.log(error);
    });
  }

  async presentLoading(msg) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: msg,
      duration: 3000
    });

    await loading.present();
    console.log('Loading dismissed!');
  }



}







