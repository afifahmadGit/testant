import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { SharedModule } from "../shared/shared.module";
import { BestSellingComponent } from './best-selling/best-selling.component';
import { OffersComponent } from './offers/offers.component';
import { FeaturedComponent } from './featured/featured.component';

@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    MainContainerComponent,
    BestSellingComponent,
    OffersComponent,
    FeaturedComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
],
  exports: [
    MainComponent,
    HomeComponent,
    MainContainerComponent
  ]
})
export class HomeModule { }
