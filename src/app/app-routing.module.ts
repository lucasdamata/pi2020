import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'detalhes',
    loadChildren: () => import('./detalhes/detalhes.module').then( m => m.DetalhesPageModule)
  },
  {
    path: 'alerta',
    loadChildren: () => import('./alerta/alerta.module').then( m => m.AlertaPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'charts',
    loadChildren: () => import('./charts/charts.module').then( m => m.ChartsPageModule)
  },  {
    path: 'mapsdetail',
    loadChildren: () => import('./mapsdetail/mapsdetail.module').then( m => m.MapsdetailPageModule)
  },

 

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
