import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ContactComponent } from './shared/contact/contact.component';
import { SignUpComponent } from './shared/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }, // Lazy load ProductsModule
  { path : "contact", component:ContactComponent},
  { path : "sign-up", component:SignUpComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
