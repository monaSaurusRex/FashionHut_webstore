import { Component, OnInit } from '@angular/core';

import { faCartPlus, faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Observable } from 'rxjs';

import { Cart, Item } from 'src/app/interfaces/cart';
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
  removeIcon = faTrash;


  //cart services observable variable
  cartItems: Cart = {
    id: 0,
    items: [],
    cartTotal: 0
  };
  
  cartItems$: Observable<Item[]> | undefined;
  cartItemProduct$: Observable<Product[]> | undefined;
  itemQuantity$: Observable<number> | undefined;

  // quantity selector
  title = 'increment-decrement';
  productQuantity: number = 1;

  product!: Product;


  constructor(private _cartService: CartService, private _storeService: StoreService) {}

  ngOnInit() {
    this.cartItems$ = this._cartService.getCartItems();
    this.itemQuantity$ = this._cartService.getItemQuantity(); //get the quantity of the cart item
  }

  removeItem(item: Item) {
    this._cartService.deleteItem(item);
  }
}
