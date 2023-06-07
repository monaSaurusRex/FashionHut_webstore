import { Component, OnInit } from '@angular/core';

import {
  faShoppingCart,
  faBars,
  faTimes,
  faUserAlt,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  //cart services function variable
  itemsInCart!: any;
  subscription!: Subscription;
  //icons
  cart = faShoppingCart;
  bars = faBars;
  close = faTimes;
  user = faUserAlt;
  search = faSearch;

  constructor(private _cartService: CartService) {
    // this.itemsInCart = this.subscription.
  }

  ngOnInit() {
    // call getTotalItemsInCart function for cart services
    this.subscription = this._cartService.getTotalItemsInCart().subscribe();

    this.subscription = this._cartService
      .getTotalItemsInCart()
      .subscribe((itemsInCart) => {
        this.itemsInCart = itemsInCart.totalItems;

        if(this.itemsInCart <= 0){
          this.itemsInCart = ""
        }


      });
    // this.itemsInCart = this.subscription;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
