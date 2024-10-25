import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { SharedModule } from '../shared/shared.module';
import { AntivirusCategoriesComponent } from './antivirus-categories/antivirus-categories.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    ProductListingComponent,
    AntivirusCategoriesComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
  ],
})
export class ProductsModule { }
