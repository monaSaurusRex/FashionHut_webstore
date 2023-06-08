import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faShoppingCart,
  faBars,
  faTimes,
  faUserAlt,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { FakestoreService } from 'src/app/services/fakestoreapi/fakestore.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css'],
})
export class ViewAllProductsComponent implements OnInit, OnDestroy {
  // dummy data to use


  // cartItems: any [] = [];
  products: Product[] = [];

  //icons
  cart = faShoppingCart;

  //cart services function variables
  itemsInCart: number = 0;
  subscription!: Subscription;

  constructor(
    private _cartService: CartService,
    private _fakeStoreService: FakestoreService,
    private router: Router
  ) {}

  ngOnInit() {
    // call getTotalItemsInCart function for cart services
    // this.subscription = this._cartService.getTotalItemsInCart().subscribe();
    this.subscription = this._cartService
      .getTotalItemsInCart()
      .subscribe((itemsInCart) => {
        this.itemsInCart = itemsInCart.totalItems;
      });
    // console.log(this.itemsInCart)

    this._fakeStoreService.getAll().subscribe((products: any) => {
      //arrow functions are already in the format of a promise
      console.table(products);
      this.products = products;
    });

  }

  //send product id to view details
  viewProductDetails(id: any) {
    console.log(id);
    this.router.navigate(['view-product', id]);
  }


  //add to cart button functionality on view all page
  addToCart(product: any) {
    // console.log(product)
    if (product) {
      this.itemsInCart++;
    }

    console.log(this.itemsInCart);
    let count = {
      totalItems: this.itemsInCart,
    };
    // console.log(this._cartService.getTotalItemsInCart());
    this._cartService.setTotalItemsInCart(count);
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
