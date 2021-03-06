import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Layout1Module } from './layout/layout1/layout1.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './app.interceptor';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeDbService } from './fake-db/fake-db.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,


    Layout1Module,

    InMemoryWebApiModule.forRoot(FakeDbService, {
      delay             : 0,
      passThruUnknownUrl: true
  }),

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass:AppInterceptor,multi:true},
    {provide:MAT_DATE_LOCALE,useValue:'en-GB'}
     /**
     * เปิด ErrorHandler เมื่อ Deploy app ขึ้น Prroduction environment
     * ปิด ErrorHandler เมืออยู่ระหว่าง Development เพื่อ debug error
     */
    // { provide: ErrorHandler, useClass: AppErrorHandler },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
