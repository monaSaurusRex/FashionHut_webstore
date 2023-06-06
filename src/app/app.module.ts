import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ViewAllProductsComponent } from './pages/view-all-products/view-all-products.component';
import { SearchAndFilterComponent } from './components/search-and-filter/search-and-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewAllProductsComponent,
    SearchAndFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
