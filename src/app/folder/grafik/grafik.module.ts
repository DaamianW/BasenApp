import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrafikPageRoutingModule } from './grafik-routing.module';

import { GrafikPage } from './grafik.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrafikPageRoutingModule
  ],
  declarations: [GrafikPage]
})
export class GrafikPageModule {}
