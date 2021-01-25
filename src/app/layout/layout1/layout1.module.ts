import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout1Component } from './layout1.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProgressbarModule } from '../progressbar/progressbar.module';


@NgModule({
  declarations: [Layout1Component],
  imports: [
    CommonModule,
    SharedModule,
    ProgressbarModule
  ],
  exports:[Layout1Component]
})
export class Layout1Module { }
