import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetallesPeliculasPage } from './detalles-peliculas.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesPeliculasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetallesPeliculasPage]
})
export class DetallesPeliculasPageModule {}
