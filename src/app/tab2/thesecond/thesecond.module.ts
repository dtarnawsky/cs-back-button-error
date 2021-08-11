import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThesecondPageRoutingModule } from './thesecond-routing.module';

import { ThesecondPage } from './thesecond.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThesecondPageRoutingModule
  ],
  declarations: [ThesecondPage]
})
export class ThesecondPageModule {}
