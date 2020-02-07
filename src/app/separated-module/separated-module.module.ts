import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeparatedModulePageRoutingModule } from './separated-module-routing.module';

import { SeparatedModulePage } from './separated-module.page';
import {Page1Component} from './page1/page1.component';
import {Page2Component} from './page2/page2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeparatedModulePageRoutingModule
  ],
  declarations: [SeparatedModulePage, Page1Component, Page2Component]
})
export class SeparatedModulePageModule {}
