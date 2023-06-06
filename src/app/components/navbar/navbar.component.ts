import { Component, OnInit } from '@angular/core';

import {
  faShoppingCart,
  faBars,
  faTimes,
  faUserAlt,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  //cart services function variable
  itemsInCart!: number;
  subscription!: Subscription;
  //icons
  cart = faShoppingCart;
  bars = faBars;
  close = faTimes;
  user = faUserAlt;
  search = faSearch;

  constructor(private _cartService: CartService) {
  }

  ngOnInit() {
    // call getTotalItemsInCart function for cart services
    this.subscription = this._cartService.getTotalItemsInCart().subscribe();

    

    // this.itemsInCart = this.subscription;
  }



  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
