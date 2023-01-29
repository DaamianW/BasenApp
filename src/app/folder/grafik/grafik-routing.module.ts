import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrafikPage } from './grafik.page';

const routes: Routes = [
  {
    path: '',
    component: GrafikPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrafikPageRoutingModule {}
