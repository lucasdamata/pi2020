import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecionarCulturaPage } from './selecionar-cultura.page';

const routes: Routes = [
  {
    path: '',
    component: SelecionarCulturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecionarCulturaPageRoutingModule {}
