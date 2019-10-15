import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'ejercicio01', loadChildren: './pages/ejercicio01/ejercicio01.module#Ejercicio01PageModule' },
  { path: 'ejercicio02', loadChildren: './pages/ejercicio02/ejercicio02.module#Ejercicio02PageModule' },
  { path: 'ejercicio03', loadChildren: './pages/ejercicio03/ejercicio03.module#Ejercicio03PageModule' },
  { path: 'ejercicio04', loadChildren: './pages/ejercicio04/ejercicio04.module#Ejercicio04PageModule' },
  { path: 'ejercicio05', loadChildren: './pages/ejercicio05/ejercicio05.module#Ejercicio05PageModule' },
  { path: 'ejercicio06', loadChildren: './pages/ejercicio06/ejercicio06.module#Ejercicio06PageModule' },
  { path: 'ejercicio07', loadChildren: './pages/ejercicio07/ejercicio07.module#Ejercicio07PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
