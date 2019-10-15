import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'test-page', loadChildren: './pages/test-page/test-page.module#TestPagePageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'botones', loadChildren: './pages/botones/botones.module#BotonesPageModule' },
  { path: 'iconos', loadChildren: './pages/iconos/iconos.module#IconosPageModule' },
  { path: 'entradatexto', loadChildren: './pages/entradatexto/entradatexto.module#EntradatextoPageModule' },
  { path: 'alertas', loadChildren: './pages/alertas/alertas.module#AlertasPageModule' },
  { path: 'badge', loadChildren: './pages/badge/badge.module#BadgePageModule' },
  { path: 'tarjetas', loadChildren: './pages/tarjetas/tarjetas.module#TarjetasPageModule' },
  { path: 'scroll', loadChildren: './pages/scroll/scroll.module#ScrollPageModule' },
  { path: 'avatar', loadChildren: './pages/avatar/avatar.module#AvatarPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
