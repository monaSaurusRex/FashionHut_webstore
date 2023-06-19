import { Component, OnInit } from '@angular/core';

import { faCartPlus, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import { Observable } from 'rxjs';

import { Item } from 'src/app/interfaces/cart';
import { Product } from 'src/app/interfaces/product';

import { CartService } from 'src/app/services/cart/cart.service';
import { StoreService } from 'src/app/services/store-api/store.service';



@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.css'],
})
export class CartItemListComponent implements OnInit {
  // icons
  addToCartIcon = faCartPlus;
  increaseIcon = faPlus;
  decreaseIcon = faMinus;

  //cart services observable variable
  itemsInCart$: Observable<Item[]> | undefined;

  // quantity selector
  title = 'increment-decrement';
  productQuantity: number = 1;

  product!: Product;


  constructor(private _cartService: CartService, private _storeService: StoreService) {}

  ngOnInit() {
    this.itemsInCart$ = this._cartService.getCartItems();
  }

  quantity(value: string) {
    if (this.productQuantity < 20 && value == 'increase') {
      this.productQuantity += 1;
    } else if (this.productQuantity > 1 && value == 'decrease') {
      this.productQuantity -= 1;
    }
  }
}
