import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';

import { LocalizacaoPageRoutingModule } from './localizacao-routing.module';

import { LocalizacaoPage } from './localizacao.page';
const routes: Routes = [
  {
    path: '',
    component: LocalizacaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalizacaoPageRoutingModule, 
    RouterModule.forChild(routes)
  ],
  declarations: [LocalizacaoPage],
  providers: [Geolocation]
})
export class LocalizacaoPageModule {}
