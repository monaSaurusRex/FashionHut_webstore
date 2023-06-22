import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/interfaces/cart';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { StoreService } from 'src/app/services/store-api/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartItems$: Observable<Item[]> | undefined;
  cartItemProduct$: Observable<Product[]> | undefined;
  itemQuantity$: Observable<number> | undefined;
  cartItemsCount$: Observable<number> | undefined;
  subTotal$: Observable<number> | undefined;

  constructor(private _cartService: CartService, private _storeService: StoreService){}

  ngOnInit(){
    this.cartItems$ = this._cartService.getCartItems();
    this.itemQuantity$ = this._cartService.getItemQuantity(); //get the quantity of the cart item
    this.cartItemsCount$ = this._cartService.getCartItemsCount();
    this.subTotal$ = this._cartService.getSubtotal();
      
  }

}
