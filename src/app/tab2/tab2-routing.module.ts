import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AndroidBackButtonGuard } from '../core/android-back-button.guard';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'thefirst',
    loadChildren: () => import('./thefirst/thefirst.module').then( m => m.ThefirstPageModule)
  },
  {
    path: 'thesecond',
    loadChildren: () => import('./thesecond/thesecond.module').then( m => m.ThesecondPageModule),
    canActivate: [AndroidBackButtonGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
