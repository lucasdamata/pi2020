import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, Http, RequestOptions } from '@angular/http';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {





  public pragas: Array<object> = [];

  funcionario: String = '';
  observacao: String = '';
  img: String = '';

  capturedSnapURL:string;

  cameraOptions: CameraOptions = {
    quality: 20,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(public photoService: PhotoService,
    public camera: Camera,
    private http: HttpClient,
    public loadingController: LoadingController) {

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

  /*
    sendPostRequest() {
      var headers: {
        "Access-Control-Allow-Origin": " *",
        "Accept": 'application/json',
        "Content-Type": "application/json"
        
      };
  
      let postData = {
              "funcionario": this.funcionario,
              "observacao": this.observacao,
                     
      }
  
      this.http.post(" http://1b561a10c73a.ngrok.io/registros", postData, {headers:headers})
        .subscribe(data => {
          console.log(data['_body']);
         }, error => {
          console.log(error);
        });
    }
    */

  

   takePicture() {
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
      // this.camera.DestinationType.FILE_URI gives file URI saved in local
      // this.camera.DestinationType.DATA_URL gives base64 URI
      
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.capturedSnapURL = base64Image;
    }, (err) => {
      
      console.log(err);
      // Handle error
    });
  }
  

  sendPostRequest() {
    let postData = {
      "funcionario": this.funcionario,
      "observacao": this.observacao,
      "img": this.capturedSnapURL

    }

    this.http.post(" https://0790f836db3a.ngrok.io/registros", postData).subscribe((res: any) => {
      console.log(res);
    })
    this.presentLoading()


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
