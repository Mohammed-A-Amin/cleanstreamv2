import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cleanup1Page } from './cleanup1.page';

const routes: Routes = [
  {
    path: '',
    component: Cleanup1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cleanup1PageRoutingModule {}
