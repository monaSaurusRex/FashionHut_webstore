import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllProductsComponent } from './pages/view-all-products/view-all-products.component';
import { ViewProductDetailsComponent } from './pages/view-product-details/view-product-details.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path: '', component: ViewAllProductsComponent},
  {path: 'view-product/:id', component: ViewProductDetailsComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
