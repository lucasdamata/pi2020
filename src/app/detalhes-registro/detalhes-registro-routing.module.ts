import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesRegistroPage } from './detalhes-registro.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesRegistroPageRoutingModule {}
