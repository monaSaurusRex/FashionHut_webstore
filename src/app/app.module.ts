// MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// COMPONENTS
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchAndFilterComponent } from './components/search-and-filter/search-and-filter.component';
import { CartItemListComponent } from './components/cart-items-list/cart-item-list/cart-item-list.component';
// PAGES
import { ViewAllProductsComponent } from './pages/view-all-products/view-all-products.component';
import { ViewProductDetailsComponent } from './pages/view-product-details/view-product-details.component';
import { CartComponent } from './pages/cart/cart.component';
// SERVICES

// PIPES
import { FilterPipe } from './services/filter/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewAllProductsComponent,
    SearchAndFilterComponent,
    FilterPipe,
    ViewProductDetailsComponent,
    CartItemListComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
