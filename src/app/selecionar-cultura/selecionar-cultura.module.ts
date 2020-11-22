import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecionarCulturaPageRoutingModule } from './selecionar-cultura-routing.module';

import { SelecionarCulturaPage } from './selecionar-cultura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecionarCulturaPageRoutingModule
  ],
  declarations: [SelecionarCulturaPage]
})
export class SelecionarCulturaPageModule {}
