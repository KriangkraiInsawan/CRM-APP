import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { DealFormComponent } from './deal-form/deal-form.component';



@NgModule({
  declarations: [ContactFormComponent, CustomerFormComponent, DealFormComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LeftFormModule { }
