import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesRegistroPageRoutingModule } from './detalhes-registro-routing.module';

import { DetalhesRegistroPage } from './detalhes-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesRegistroPageRoutingModule
  ],
  declarations: [DetalhesRegistroPage]
})
export class DetalhesRegistroPageModule {}
