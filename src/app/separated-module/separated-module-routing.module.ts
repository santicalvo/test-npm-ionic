import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeparatedModulePage } from './separated-module.page';
import {Page1Component} from './page1/page1.component';
import {Page2Component} from './page2/page2.component';

const separatedRoutes: Routes = [
  {
    path: '',
    component: SeparatedModulePage
  },
  {
    path: 'page1',
    component: Page1Component
  },
  {
    path: 'page2',
    component: Page2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(separatedRoutes)],
  exports: [RouterModule],
})
export class SeparatedModulePageRoutingModule {}
