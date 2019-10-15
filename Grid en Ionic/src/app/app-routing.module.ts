import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'grid1', loadChildren: './pages/grid1/grid1.module#Grid1PageModule' },
  { path: 'grid2', loadChildren: './pages/grid2/grid2.module#Grid2PageModule' },
  { path: 'grid3', loadChildren: './pages/grid3/grid3.module#Grid3PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
