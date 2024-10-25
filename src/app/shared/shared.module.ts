import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { BrandsComponent } from './brands/brands.component';
import { ContactComponent } from './contact/contact.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SliderComponent } from './slider/slider.component';



@NgModule({
  declarations: [CategoriesComponent,WhyUsComponent, BrandsComponent, ContactComponent, SignUpComponent, SliderComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CategoriesComponent,
    WhyUsComponent
  ]
})
export class SharedModule { }
