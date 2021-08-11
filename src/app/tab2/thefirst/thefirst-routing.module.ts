import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThefirstPage } from './thefirst.page';

const routes: Routes = [
  {
    path: '',
    component: ThefirstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThefirstPageRoutingModule {}
