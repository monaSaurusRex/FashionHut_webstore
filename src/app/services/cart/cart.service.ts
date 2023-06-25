import { Injectable } from '@angular/core';

import {
  BehaviorSubject,
  Observable,
  combineLatest,
  find,
  map,
  of,
  tap,
} from 'rxjs';

import { Cart, Item } from 'src/app/interfaces/cart';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //behaviour subject object created for cart
  private cart$: BehaviorSubject<Cart>;
  private items$: BehaviorSubject<Item>;
  private product$: BehaviorSubject<Product>;

  constructor() {
    // initializes cart with default values
    this.cart$ = new BehaviorSubject<Cart>({
      id: 0, //this.setUniqueId() when a new cart is created, it will automatically assign a sing
      items: [],
      cartTotal: 0,
    });

    this.items$ = new BehaviorSubject<Item>({
      id: 0,
      quantity: 0,
      productId: 0,
      productTitle: '',
      productPrice: 0,
      productCategory: '',
      productImageURL: '',
    });

    this.product$ = new BehaviorSubject<Product>({
      id: 0,
      title: '',
      price: 0,
      description: '',
      category: '',
      image: '',
    });
  }

  setUniqueId(): number {
    return Math.floor(Math.random() * Date.now());
  }

  //add an item to cart
  // addItemToCart(addedItem: Item) {
  //   const cart = { ...this.cart$.value };

  //   cart.items.push(addedItem);

  //   this.setCartItems(cart);
  // }

  addItemToCart(addedProduct: any, quantity: number) {
    const cart = { ...this.cart$.value };
    // console.log(`Product Added: ${addedProduct.title}  Qty: ${quantity}`)
    const productId = addedProduct.id;

    //check if a product has already been added to the cart
    const itemExists = cart.items.find(item => item.productId === productId);

    console.log(itemExists);

    if(itemExists){
      console.log(`Product Added:has already been added`);
      cart.items = this.addToItemQuantity(quantity, productId);

    }else{
      const newItem = {
        id: this.setUniqueId(),
        quantity: quantity,
        productId: addedProduct.id,
        productTitle: addedProduct.title,
        productPrice: addedProduct.price,
        productCategory: addedProduct.category,
        productImageURL: addedProduct.image, //imageUrl
      };
  
      cart.items.push(newItem);
    }

    this.cart$.next(cart);
  }

  // get list of items added to the cart
  getCartItems(): Observable<Item[]> {
    return this.cart$.pipe(map((cart) => cart.items));
  }

  setItemQuantity(updateQuantity: number, productId: number) {
    const cart = { ...this.cart$.value };
    cart.items = cart.items.map((item) => {
      item.quantity =
        item.productId === productId ? +updateQuantity : item.quantity;
      return item;
    });
    // this.setCartItems(cart);
    return cart.items;
  }

  
  addToItemQuantity(quantity: number, productId: number){
    const cart = { ...this.cart$.value };
    cart.items = cart.items.map((item) => {
      item.quantity =
        item.productId === productId ? item.quantity + quantity : item.quantity;
      return item;
    });
    // this.setCartItems(cart);
    return cart.items;
  }

  //update a cart item
  setCartItems(cartItem: Cart) {
    this.cart$.next(cartItem);
    // console.log(cartItem);
  }

  // get the total number of items within the cart based on item quantity
  // getCartItemsCount(): Observable<any> {
  //   return this.cart$.pipe(
  //     map((cart) => {
  //       const count = cart.items
  //         .map((item) => item.quantity)
  //         .reduce((preVal, curVal) => preVal + curVal, 0);
  //       return count;
  //     })
  //   );
  // }

  // get the total number of items within the cart based length of item array
  getCartItemsCount(): Observable<any> {
    return this.cart$.pipe(
      map((cart) => {
        const count = cart.items.length;
          // .map((item) => item.quantity)
          // .reduce((preVal, curVal) => preVal + curVal, 0);
        return count;
      })
    );
  }

  getItemQuantity(): Observable<number> {
    const cart = { ...this.cart$.value };

    return this.items$.pipe(map((item) => item.quantity));
  }

  // method to calculate subtotal for items in cart
  getSubtotal(): Observable<number> {

    return this.cart$.pipe(
      map((cart) => {
        const subtotal = cart?.items
          .map((item) => item.quantity * item.productPrice)
          .reduce((prevVal, currVal) => prevVal + currVal, 0);
        // console.log(`Cart Subtotal: ${subtotal}`);
        return subtotal;
      })
    );
  }

  getTotal(): Observable<number> {

    return this.cart$.pipe(
      map((cart) => {
        const total = cart?.items
          .map((item) => item.quantity * item.productPrice)
          .reduce((prevVal, currVal) => prevVal + currVal, 0);
        // console.log(`Cart Subtotal: ${total}`);
        return total + 100;
      })
    );
  }

  deleteItem(deleteItem: Item) {
    const cart = { ...this.cart$.value };
    cart.items = cart.items.filter((item) => deleteItem.id !== item.id);
    this.setCartItems(cart);
  }

  clearCart() {
    const cart = { ...this.cart$.value };
    cart.items = [];
    this.setCartItems(cart);
  }
}
