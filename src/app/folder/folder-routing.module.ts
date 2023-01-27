import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage,
  },
  {
    path: 'grafik',
    loadChildren: () => import('./grafik/grafik.module').then( m => m.GrafikPageModule)
  },
  {
    path: 'grafik-nastepny-dzien',
    loadChildren: () => import('./grafik-nastepny-dzien/grafik-nastepny-dzien.module').then( m => m.GrafikNastepnyDzienPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
