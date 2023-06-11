import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faCartPlus, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import { Observable, Subscription } from 'rxjs';

import { Cart, Item } from 'src/app/interfaces/cart';
import { Product } from 'src/app/interfaces/product';

import { CartService } from 'src/app/services/cart/cart.service';
import { FakestoreService } from 'src/app/services/fakestoreapi/fakestore.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css'],
})
export class ViewAllProductsComponent implements OnInit, OnDestroy {
  products: Product[] = []; //empty array of products

  searchText : any;

  //icons
  addToCartIcon = faCartPlus;
  searchIcon = faSearch;
  closeIcon = faTimes;

  //cart services function variables
  itemsInCart$: Observable<Item[]> | undefined;
  cart$: Observable<Cart[]> | undefined;

  constructor(
    private _cartService: CartService,
    private _fakeStoreService: FakestoreService,
    private router: Router
  ) {}

  ngOnInit() {
    this._fakeStoreService.getAll().subscribe((products: any) => {
      // console.table(products);
      this.products = products; //populate products array with data from api service
    });
  }

  //send product id the user wants to view to the product details page
  viewProductDetails(id: any) {
    // console.log(id);
    this.router.navigate(['view-product', id]);
  }
  
  

  ngOnDestroy() {
    // if(this.subscription) {
    //   this.subscription.unsubscribe();
    // }
  }
}
