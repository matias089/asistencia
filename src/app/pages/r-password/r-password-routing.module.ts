import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RPasswordPage } from './r-password.page';

const routes: Routes = [
  {
    path: '',
    component: RPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RPasswordPageRoutingModule {}
