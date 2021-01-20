import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout1Component } from './layout1.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [Layout1Component],
  imports: [
    CommonModule,
    SharedModule,
    MatProgressBarModule
  ],
  exports:[Layout1Component]
})
export class Layout1Module { }
