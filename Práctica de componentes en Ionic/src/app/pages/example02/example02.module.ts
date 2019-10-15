import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Example02Page } from './example02.page';
import { RandomNumberComponent } from 'src/app/components/random-number/random-number.component';

const routes: Routes = [
  {
    path: '',
    component: Example02Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Example02Page,RandomNumberComponent]
})
export class Example02PageModule {}
