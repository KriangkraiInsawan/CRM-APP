import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';



@NgModule({
  declarations: [ContactFormComponent, CustomerFormComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LeftFormModule { }
