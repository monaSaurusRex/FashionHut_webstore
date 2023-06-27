import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faCartPlus, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import { Observable, Subscription } from 'rxjs';

import { Cart, Item } from 'src/app/interfaces/cart';
import { Product } from 'src/app/interfaces/product';

import { CartService } from 'src/app/services/cart/cart.service';
import { SearchAndFilterService } from 'src/app/services/search-and-filter/search-and-filter.service';
import { StoreService } from 'src/app/services/store-api/store.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css'],
})
export class ViewAllProductsComponent implements OnInit, OnDestroy {
  products: Product[] = []; //empty array of products
  filteredProducts: Product[] = []; //
  searchValue : any;
  page: number= 1
  pageSize: number = 12 // number of products per page

  //icons
  addToCartIcon = faCartPlus;
  searchIcon = faSearch;
  closeIcon = faTimes;

  //cart services function variables
  itemsInCart$: Observable<Item[]> | undefined;
  cart$: Observable<Cart[]> | undefined;

  filteredProducts$: Observable<Product[]> | undefined;

  constructor(
    private _cartService: CartService,
    private _storeService: StoreService,
    private _searchFilterService: SearchAndFilterService,
    private router: Router
  ) {}

  ngOnInit() {
    this._storeService.getAll().subscribe((products: any) => {
      // console.table(products);
      this.products = products; //populate products array with data from api service
      this.filteredProducts = products; //filtered products will by default just contain all the products 
    });

  }

  //send product id the user wants to view to the product details page
  viewProductDetails(id: any) {
    // console.log(id);
    this.router.navigate(['view-product', id]);
  }
  //  // Get the products for the current page
  //  get pagedProducts(): Product[] {
  //   const startIndex = (this.p - 1) * this.pageSize;
  //   const endIndex = startIndex + this.pageSize;
  //   return this.products.slice(startIndex, endIndex);

  //  }

  // getProductsByCategory(){


  //   // getProductsByCategory(category: any)

  //   this._storeService.getAll().subscribe((products: any) => {
  //     // console.table(products);
  //     this.products = products; //populate products array with data from api service
  //   });

  //   this._searchFilterService.getSearchQuery().subscribe((value: string )=> {
  //     console.table(this.searchValue);
  //   });
  // }
  

  ngOnDestroy() {
    // if(this.subscription) {
    //   this.subscription.unsubscribe();
    // }
  }
}
