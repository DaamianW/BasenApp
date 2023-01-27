import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrafikNastepnyDzienPageRoutingModule } from './grafik-nastepny-dzien-routing.module';

import { GrafikNastepnyDzienPage } from './grafik-nastepny-dzien.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrafikNastepnyDzienPageRoutingModule
  ],
  declarations: [GrafikNastepnyDzienPage]
})
export class GrafikNastepnyDzienPageModule {}
