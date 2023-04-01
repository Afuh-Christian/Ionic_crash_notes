import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionsheetpgPageRoutingModule } from './actionsheetpg-routing.module';

import { ActionsheetpgPage } from './actionsheetpg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionsheetpgPageRoutingModule
  ],
  declarations: [ActionsheetpgPage]
})
export class ActionsheetpgPageModule {}
