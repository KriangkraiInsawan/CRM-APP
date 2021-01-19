import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Layout1Component } from './layout/layout1/layout1.component';
import { ProgressbarComponent } from './layout/progressbar/progressbar.component';

@NgModule({
  declarations: [
    AppComponent,
    Layout1Component,
    ProgressbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
