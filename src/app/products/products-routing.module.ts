import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListingComponent } from './product-listing/product-listing.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent, // Main component for products
    children: [
      { path: '',  component: ProductListingComponent }, // Route for product details by ID
      { path: ':id', component: ProductDetailsComponent }, // Route for product details by ID
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Use forChild for feature modules
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
