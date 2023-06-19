import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllProductsComponent } from './pages/view-all-products/view-all-products.component';
import { ViewProductDetailsComponent } from './pages/view-product-details/view-product-details.component';
import { CheckoutComponent } from './pages/checkout/checkout/checkout.component';

const routes: Routes = [
  {path: '', component: ViewAllProductsComponent},
  {path: 'view-product/:id', component: ViewProductDetailsComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
