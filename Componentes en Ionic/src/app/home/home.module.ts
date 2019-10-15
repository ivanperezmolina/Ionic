import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { MalagaDescriptionComponent } from '../components/malaga-description/malaga-description.component';
import { MalagaImageComponent } from '../components/malaga-image/malaga-image.component';
import { MalagaInfoComponent } from '../components/malaga-info/malaga-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, MalagaDescriptionComponent,MalagaImageComponent,MalagaInfoComponent]
  //Declaramos aquí el componente, que esta en la clase del componente
})
export class HomePageModule {}
