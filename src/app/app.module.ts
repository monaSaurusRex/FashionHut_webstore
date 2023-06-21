// import { NgxPaginationModule } from 'ngx-pagination';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ViewAllProductsComponent } from './pages/view-all-products/view-all-products.component';
import { SearchAndFilterComponent } from './components/search-and-filter/search-and-filter.component';
import { ViewProductDetailsComponent } from './pages/view-product-details/view-product-details.component';
import { UserService } from './services/userservice/user.service';
import { FilterPipe } from './services/filter/filter.pipe';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ModalComponentComponent } from './modal-component/modal-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewAllProductsComponent,
    SearchAndFilterComponent,
    FilterPipe,
    ViewProductDetailsComponent,
    ForgotPasswordComponent,
    ModalComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
