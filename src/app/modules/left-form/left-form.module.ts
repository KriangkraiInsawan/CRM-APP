import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactFormComponent } from './contact-form/contact-form.component';



@NgModule({
  declarations: [ContactFormComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LeftFormModule { }
