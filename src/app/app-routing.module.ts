import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// import * as foreign from 'foreign_module';
// import { ForeignModule } from 'foreign_module';
// console.log(foreign);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'separated-module',
    loadChildren: () => import('./separated-module/separated-module.module').then( m => m.SeparatedModulePageModule)
  },
  {
    path: 'foreign-module',
    loadChildren: () => import('./separated-module/separated-module.module').then( m => m.SeparatedModulePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
