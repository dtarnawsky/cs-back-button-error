import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThesecondPage } from './thesecond.page';

const routes: Routes = [
  {
    path: '',
    component: ThesecondPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThesecondPageRoutingModule {}
