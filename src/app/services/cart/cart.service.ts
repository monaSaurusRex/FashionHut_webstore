import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from 'src/app/interfaces/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //creates an instance of the Cart object/interface
  private _cart = new BehaviorSubject<Cart>({
    id: 0,
    items: [],
    totalItems: 0,
    cartTotal: 0
  });

  //set an observable for the cart
  private _cart$ = this._cart.asObservable();

  constructor() {}

  // gets the current total items in the cart
  getTotalItemsInCart(): Observable<Cart> {
    console.log(this._cart);
    return this._cart$;
    
  }

  // sets the total items in the cart
  // setTotalItemsInCart(lastVal: Cart) {
  //   return this._cart.next(lastVal);
  // }
  setTotalItemsInCart(lastVal: Cart) {
    return this._cart.next(lastVal);
  }
}
