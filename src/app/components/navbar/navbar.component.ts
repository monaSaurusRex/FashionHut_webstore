import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, Subscription } from 'rxjs';

import {
  faShoppingCart,
  faBars,
  faTimes,
  faUserAlt,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

import { CartService } from 'src/app/services/cart/cart.service';

import { Cart, Item } from 'src/app/interfaces/cart';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  //cart services function variables
  itemsInCart$: Observable<Item[]> | undefined;
  cartItemsCount$: Observable<number> | undefined;
  cartTotal$: Observable<number> | undefined;

  //ICONS
  cartIcon = faShoppingCart;
  barsIcon = faBars;
  closeIcon = faTimes;
  userIcon = faUserAlt;
  searchIcon = faSearch;
  

  constructor(private _cartService: CartService, private router: Router) {}

  

  ngOnInit() {
    this.itemsInCart$ = this._cartService.getCartItems();
    this.cartItemsCount$ = this._cartService.getCartItemsCount();
    console.log(`TOTAL ITEMS IN CART: ${this._cartService.getCartItemsCount()}`)
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
  
}
