import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, map, tap } from 'rxjs';

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
      id: this.setUniqueId(), //when a new cart is created, it will automatically assign a sing
      items: [],
      cartTotal: 0,
    });

    this.item$ = new BehaviorSubject<Item>({
      id: 0,
      productId: 0,
      quantity: 0,
    });

    this.product$ = new BehaviorSubject<Product>({
      id: 0,
      title: '',
      price: 0,
      description: '',
      category: '',
      image: '',
      rating: {
        rate: 0,
        count: 0,
      },
    });
  }

  setUniqueId(): number {
    return Math.floor(Math.random() * Date.now());
  }

  //add an item to cart
  createCartItem(addedItem: Item) {
    const cart = { ...this.cart$.value };

    cart.items.push(addedItem);

    this.setCartItems(cart);
  }

  //update a cart item
  setCartItems(cartItem: Cart) {
    this.cart$.next(cartItem);
    // console.log(cartItem);
  }

  // get list of items added to the cart
  getCartItems(): Observable<Item[]> {
    
    return this.cart$.pipe(
      tap((items) => console.log(items)),
      map((cart) => cart.items)
    );
    // return this.cart$.pipe(
    //   map((cart) => {  //map allows for the return of a specific property to emit by the Observable
    //     console.log(cart.items);
    //     return cart.items 
    //   })
    // );
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
        console.log(`Cart Subtotal: ${cartSubtotal}`);
        return cartSubtotal;
      })
    );
  }

  // method fot getting the product id of item added to the cart
  getItemProductId(): Observable<number> {
    return this.item$.pipe(
      map((item:any) => item.productId)
    );
  }

}
