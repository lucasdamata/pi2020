import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, Http, RequestOptions } from '@angular/http';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LoadingController, ToastController} from '@ionic/angular';

import { AlertController } from '@ionic/angular';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  public pragas: Array<object> = [];
  page:string = "tab3";

  funcionario: String = '';
  observacao: String = '';
  img: String = '';
  local:any;
  lat:any;
  lng:any;
  

  capturedSnapURL:any;

  cameraOptions: CameraOptions = {
    quality: 20,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(public photoService: PhotoService,
    public camera: Camera,
    private http: HttpClient,
    public loadingController: LoadingController,
    public toastCtrl: ToastController,
    public alertController: AlertController,
    public route: ActivatedRoute,
    public router: Router,) {


      this.local = this.route.queryParams.subscribe(params => {
        if (params && params.special) {
          this.local = JSON.parse(params.special);
          this.lat = this.local.lat;
          this.lng = this.local.lng;
         
        }

      }); 

    // array estático, será substituido por consultas em banco
    this.pragas = [

      {
        "nome": "Diatraea saccharalis - Broca da Cana",
        "img": "https://www.agrolink.com.br/upload/problemas/Diatraea_saccharalis86.jpg",
        "nivel": " GRAVE",
        "combate": " liberação de parasitóides como a Cotesia flavipes. Não adotar medidas que causem desequilíbrio nas populações de parasitóides e predadores, sendo necessário racionalizar o uso de produtos químicos.",
        "pInfestação": "Março - outubro",
        "obs": " dificilmente combatida"
      },
      {
        "nome": "Mahanarva fimbriolata - Cigarrinha das Raízes",
        "img": "https://amtecagr.files.wordpress.com/2016/01/cigarrinha-das-raizes-cana-mahanarva-fimbriolata.jpg?w=1000",
        "nivel": "Médio",
        "combate": "aplicação do fungo Metarhizium anisopliae quando forem encontradas populações acima de 3 ninfas por metro linear.",
        "pInfestação": "junho-julho",
        "obs": "dificilmente combatida"
      },
      {
        "nome": "Migdolus fryanus - Migdolus",
        "img": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Migdolus_fryanus.jpg",
        "nivel": "GRAVE",
        "combate": "aplicação de inseticidas por ocasião do preparo do solo, em operação conjunta com a subsolagem (subsolador-aplicador) ou aração (arado de aiveca, com aplicador de inseticida), na época seca, quando se observa maior ocorrência de larvas nas camadas superficiais do solo.",
        "pInfestação": "Março - outubro",
        "obs": "dificilmente combatida"
      },
      {
        "nome": "Sphenophorus levis",
        "img": "https://gebio.com.br/site/wp-content/uploads/2019/08/gebio-2.jpg",
        "nivel": "GRAVE",
        "combate": "consiste na destruição antecipada das soqueiras com o erradicador de soqueiras. A seguir a área deverá ser mantida livre de plantas hospedeiras da praga e o próximo plantio deverá ser realizado o mais tarde possível.",
        "pInfestação": "junho-julho",
        "obs": "dificilmente combatida"
      },
      {
        "nome": "Broca Gigante",
        "img": "https://3.bp.blogspot.com/-AE6QozXekEQ/Ul_hPq13FJI/AAAAAAAAADM/mTSK1L-RSyU/s1600/Larva-da-Broca.jpg",
        "nivel": "Médio",
        "combate": "A termonebulização é uma técnica que consiste na transformação de um inseticida diluído em óleo em uma névoa e a sua aplicação no interior do formigueiro, utilizando equipamentos denominados termonebulizadores.",
        "pInfestação": "junho-julho",
        "obs": "dificilmente combatida"
      },
      {
        "nome": "Lagarta Elasmo",
        "img": "https://i.ytimg.com/vi/lWZ5coUvYkk/maxresdefault.jpg",
        "nivel": "Baixo",
        "combate": "uso de sementes com tratamento industrial, especialmente com a nova tecnologia Fortenza Duo, da Syngenta, é uma grande defesa contra essa praga. E traz um excelente resultado para o produtor.",
        "pInfestação": "Março - outubro",
        "obs": "dificilmente combatida"
      },
    ]
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
      "funcionario": this.funcionario,
      "observacao": this.observacao,
      "img": "ok"
    }
    this.http.post("http://127.0.0.1:5000/registros", postData, { headers: headers }).subscribe(res=> {

      console.log(res);

     }, error => {
     // this.presentAlert("não foi possível processar suas informações")
      console.log(error.status)
    });
}

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Aguarde, enviando dados...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }


}
