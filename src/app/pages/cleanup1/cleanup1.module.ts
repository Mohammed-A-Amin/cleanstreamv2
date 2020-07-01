import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cleanup1PageRoutingModule } from './cleanup1-routing.module';

import { Cleanup1Page } from './cleanup1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cleanup1PageRoutingModule
  ],
  declarations: [Cleanup1Page]
})
export class Cleanup1PageModule {}
