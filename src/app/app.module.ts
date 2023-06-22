// MODULES
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule, Validators  } from '@angular/forms';
import { AppComponent } from './app.component';
// COMPONENTS
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchAndFilterComponent } from './components/search-and-filter/search-and-filter.component';
import { CartItemListComponent } from './components/cart-items-list/cart-item-list/cart-item-list.component';
import { RegisterComponent } from './components/register/register.component';
import { SubtotalComponent } from './components/subtotal/subtotal.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
// PAGES
import { ViewAllProductsComponent } from './pages/view-all-products/view-all-products.component';
import { ViewProductDetailsComponent } from './pages/view-product-details/view-product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
// SERVICES
import { UserService } from './services/userservice/user.service';
// PIPES
import { FilterPipe } from './services/filter/filter.pipe';
import { ModalComponentComponent } from './modal-component/modal-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewAllProductsComponent,
    SearchAndFilterComponent,
    FilterPipe,
    ViewProductDetailsComponent,
    RegisterComponent,
    LoginComponent,
    CheckoutComponent,
    CartItemListComponent,
    CartComponent,
    SubtotalComponent,
    ForgotPasswordComponent,
    ModalComponentComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxPaginationModule,
    FontAwesomeModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
