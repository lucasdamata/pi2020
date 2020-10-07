import { Component, OnInit, NgModule } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import {EmailComposer} from '@ionic-native/email-composer/ngx';


import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Headers, Http, RequestOptions} from '@angular/http';


@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {


  name: String ='';
  curso:String = '';


  


  get funcionario(){
    return this.alertForm.get('funcionario');
  }

  get infestacao(){
    return this.alertForm.get('infertacao');
  }

  get local(){
    return this.alertForm.get('local');
  }

  get observacao(){
    return this.alertForm.get('observacao');
  }

  public errorMessages = {
    funcionario: [
      {type: 'required', message: 'Preencha o seu nome'},
      {type: 'maxlength', message: 'Nome deverá ser válido'}
    ],
    infestacao: [
      {type: 'required', message: 'Infestação por metro quadrado'},
      {type: 'maxlength', message: 'inferstação deve ser descrita'}
    ],
    local: [
      {type: 'required', message: 'Preencha com latitude ou longitude'},
      {type: 'maxlength', message: 'Deverá ser preenchido corretamente para identificação da área'}
    ],
    observacao: [
      {type: 'required', message: 'Descreva corretamente'},
      {type: 'maxlength', message: 'Decrição para melhor conhecimento'}
    ]
  };
  
  
  
  

  alertForm = this.formBuilder.group({
    funcionario: [''],
    infestacao: [''],
    local: [''],
    observacao: ['']
  });

  constructor(public photoService: PhotoService,
              private formBuilder: FormBuilder, 
              private emailComposer: EmailComposer,
              private http: HttpClient) { }
  
  public submit(){
    console.log(this.alertForm.value);
  }

  public estilo = 'style="color:red"';
  
  public send(){
    let email = {
      to: 'lucasmsilva@unipam.edu.br',
      cc: 'pi.d2gl@gmail.com',
      attachments: [],
      subject: 'Alerta',
      body: '<b><h1>Alerta</h1><br>'+'Funcionário: '+ this.alertForm.value.funcionario + '<br>Nivel de infertação: '+ this.alertForm.value.infestacao + '<br>Localização: ' + this.alertForm.value.local + '<br>Observações: ' + this.alertForm.value.observacao,
      isHtml: true
    };
    this.emailComposer.open(email);
  }

 

  ngOnInit() {
  }



  sendPostRequest() {
    var headers: {
      "Access-Control-Allow-Origin": " http://127.0.0.1:5000/",
      "Accept": 'application/json',
      "Content-Type": "application/json"
    };

    let postData = {
            "nome": this.name,
            "curso": this.curso,        
    }

    this.http.post("http://127.0.0.1:5000/users", postData, {headers:headers})
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
  }



}
