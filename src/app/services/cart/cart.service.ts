import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, map } from 'rxjs';

import { Cart, Item } from 'src/app/interfaces/cart';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //behaviour subject object created for cart
  private cart$: BehaviorSubject<Cart>;
  private item$: BehaviorSubject<Item>;
  private product$: BehaviorSubject<Product>;

  constructor() {
    // initializes cart with default values
    this.cart$ = new BehaviorSubject<Cart>({
      id: 0,
      items: [],
      cartTotal: 0,
    });

    this.item$ = new BehaviorSubject<Item>({
      id: 0,
      product: [],
      quantity: 0,
    });

    this.product$ = new BehaviorSubject<Product>({
      id: 0,
      title: "",
      price: 0,
      description: "",
      category: "",
      image: "",
      rating: {
        rate: 0,
        count: 0,
      },
    });
  }

  getId(){ 

  }

  setId(lastValue: number) {

  }

  //add an item to cart
  createCartItem(addedItem: Item) {
    const cart = { ...this.cart$.value };

    console.log(addedItem);

  }

  //update a cart item
  setCartItems(cartItem: Cart) {
    this.cart$.next(cartItem);
  }

  // get list of items added to the cart
  getCartItems(): Observable<Item[]> {
    return this.cart$.pipe(
      map((cart: any) => cart.items) //map allows for the return of a specific property to emit by the Observable
    );
  }

  // get the total number of items within the cart
  getCartItemsCount(): Observable<any> {
    return this.cart$.pipe(
      map((cart) => {
        const count = cart.items
          .map((item) => item.quantity)
          .reduce((preVal, curVal) => preVal + curVal, 0);
        return count;
      })
    );
  }

  setItemQuantity(updateQuantity: number, updateItem: Item) {
    const cart = { ...this.cart$.value };
    cart.items = cart.items.map((item) => {
      item.quantity =
        item.id === updateItem.id ? +updateQuantity : item.quantity;
      return item;
    });
    this.setCartItems(cart);
  }

  getItemQuantity(): Observable<number> {
    const cart = { ...this.cart$.value };

    return this.item$.pipe(
      map((item: any) => item.quantity) //map allows for the return of a specific property to emit by
    );
  }

  setCartTotal(total: number) {
    this.cart$.pipe(
      map((cart: any) => (cart.cartTotal = total)) //set the cart total to the value passed to method
    );
  }

  getCartTotal(): Observable<number> {
    const product = { ...this.product$.value };

    return this.cart$.pipe(
      map((cart) => {
        const cartSubtotal = cart?.items
          .map((item) => item.quantity * product.price)
          .reduce((prevVal, currVal) => prevVal + currVal, 0);
        return cartSubtotal;
      })
    );
  }
}
