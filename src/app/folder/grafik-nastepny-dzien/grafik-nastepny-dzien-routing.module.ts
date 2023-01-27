import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrafikNastepnyDzienPage } from './grafik-nastepny-dzien.page';

const routes: Routes = [
  {
    path: '',
    component: GrafikNastepnyDzienPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrafikNastepnyDzienPageRoutingModule {}
