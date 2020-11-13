import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapsdetailPage } from './mapsdetail.page';

const routes: Routes = [
  {
    path: '',
    component: MapsdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsdetailPageRoutingModule {}
