import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionsheetpgPage } from './actionsheetpg.page';

const routes: Routes = [
  {
    path: '',
    component: ActionsheetpgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionsheetpgPageRoutingModule {}
