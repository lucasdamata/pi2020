import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapsdetailPageRoutingModule } from './mapsdetail-routing.module';

import { MapsdetailPage } from './mapsdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapsdetailPageRoutingModule
  ],
  declarations: [MapsdetailPage]
})
export class MapsdetailPageModule {}
