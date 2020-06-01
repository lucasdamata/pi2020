import { Component, OnInit, NgModule } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import {EmailComposer} from '@ionic-native/email-composer/ngx';



@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

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

  constructor(public photoService: PhotoService, private formBuilder: FormBuilder, private emailComposer: EmailComposer) { }
  
  public submit(){
    console.log(this.alertForm.value);
  }
  
  public send(){
    let email = {
      to: 'lucasmsilva@unipam.edu.br',
      cc: 'pi.d2gl@gmail.com',
      attachments: [],
      subject: 'Alerta',
      body: 'Funcionário: '+ this.alertForm.value.funcionario,
      isHtml: true
    };
    this.emailComposer.open(email);
  }

  ngOnInit() {
  }

}
