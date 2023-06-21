import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllProductsComponent } from './pages/view-all-products/view-all-products.component';
import { ViewProductDetailsComponent } from './pages/view-product-details/view-product-details.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

const routes: Routes = [
   
  {path: '', component: ViewAllProductsComponent},
  {path: 'view-product/:id', component: ViewProductDetailsComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  
  {path: '**', redirectTo: '', pathMatch: 'full'}
  
  
  
 
 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
