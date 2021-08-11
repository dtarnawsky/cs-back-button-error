import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThefirstPageRoutingModule } from './thefirst-routing.module';

import { ThefirstPage } from './thefirst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThefirstPageRoutingModule
  ],
  declarations: [ThefirstPage]
})
export class ThefirstPageModule {}
