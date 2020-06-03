import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {EmailComposer} from '@ionic-native/email-composer/ngx';


import { IonicModule } from '@ionic/angular';

import { AlertaPageRoutingModule } from './alerta-routing.module';

import { AlertaPage } from './alerta.page';




@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AlertaPageRoutingModule,
 
  ],
  declarations: [AlertaPage],
  
  providers:[
    EmailComposer
  ]
})
export class AlertaPageModule {}
