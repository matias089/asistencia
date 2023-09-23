import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RPasswordPageRoutingModule } from './r-password-routing.module';

import { RPasswordPage } from './r-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RPasswordPageRoutingModule
  ],
  declarations: [RPasswordPage]
})
export class RPasswordPageModule {}
