import { Component, OnDestroy, OnInit } from '@angular/core';
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
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css'],
})
export class ViewAllProductsComponent implements OnInit, OnDestroy {
  // dummy data to use
  products = [
    { productName: 'Formal Jacket', price: 1000, imageURL: 'src/assets/stock_images/jacket'},
    { productName: 'Beige Coat', price: 2500, imageURL: 'src/assets/stock_images/jacket'},
    { productName: 'Casual Coat', price: 1500,imageURL: 'src/assets/stock_images/jacket'}
    // { productName: "Casual Coat", price: 1500, colour: {colourName: "Beige"}, imageURL: "src/assets/stock_images/jacket"}
  ];

  //icons
  cart = faShoppingCart;

  //cart services function variables
  itemsInCart: number = 0;
  subscription!: Subscription;

  // cartItems: any [] = [];

  constructor(private _cartService: CartService) {}

  ngOnInit() {
    // call getTotalItemsInCart function for cart services
    // this.subscription = this._cartService.getTotalItemsInCart().subscribe();
    this.subscription = this._cartService
      .getTotalItemsInCart()
      .subscribe((itemsInCart) => {
        this.itemsInCart = itemsInCart.totalItems;
      });
    console.log(this.itemsInCart)
  }

  addToCart(product: any) {
    
    
    // console.log(product)
    if(product) {
      this.itemsInCart++;
    }

    console.log(this.itemsInCart)
    let count = {
      totalItems: this.itemsInCart
    };

      console.log(this._cartService.getTotalItemsInCart())

    this._cartService.setTotalItemsInCart(count);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
