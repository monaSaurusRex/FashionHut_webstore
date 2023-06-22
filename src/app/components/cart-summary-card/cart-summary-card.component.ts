import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/interfaces/cart';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { StoreService } from 'src/app/services/store-api/store.service';

@Component({
  selector: 'app-cart-summary-card',
  templateUrl: './cart-summary-card.component.html',
  styleUrls: ['./cart-summary-card.component.css']
})
export class CartSummaryCardComponent implements OnInit {

  cartItems$: Observable<Item[]> | undefined;
  cartItemProduct$: Observable<Product[]> | undefined;
  itemQuantity$: Observable<number> | undefined;
  cartItemsCount$: Observable<number> | undefined;
  subTotal$: Observable<number> | undefined;
  total$: Observable<number> | undefined;

  constructor(private _cartService: CartService, private _storeService: StoreService){}

  ngOnInit(){
    this.cartItems$ = this._cartService.getCartItems();
    this.itemQuantity$ = this._cartService.getItemQuantity(); //get the quantity of the cart item
    this.cartItemsCount$ = this._cartService.getCartItemsCount();
    this.subTotal$ = this._cartService.getSubtotal();
    this.total$ = this._cartService.getTotal();
      
  }

}
