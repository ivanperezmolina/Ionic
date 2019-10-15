import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'example01', loadChildren: './pages/example01/example01.module#Example01PageModule' },
  { path: 'example02', loadChildren: './pages/example02/example02.module#Example02PageModule' },
  { path: 'example03', loadChildren: './pages/example03/example03.module#Example03PageModule' },
  { path: 'example04', loadChildren: './pages/example04/example04.module#Example04PageModule' },
  { path: 'example05', loadChildren: './pages/example05/example05.module#Example05PageModule' },
  { path: 'example06', loadChildren: './pages/example06/example06.module#Example06PageModule' },
  { path: 'example07', loadChildren: './pages/example07/example07.module#Example07PageModule' },
  { path: 'example08', loadChildren: './pages/example08/example08.module#Example08PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
