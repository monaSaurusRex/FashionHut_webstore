import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import { Observable, Subscription } from 'rxjs';

import { Cart, Item } from 'src/app/interfaces/cart';
import { Product } from 'src/app/interfaces/product';

import { CartService } from 'src/app/services/cart/cart.service';
import { FakestoreService } from 'src/app/services/fakestoreapi/fakestore.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css'],
})
export class ViewAllProductsComponent implements OnInit, OnDestroy {
  products: Product[] = []; //empty array of products

  //ICONS
  addToCartIcon = faCartPlus;

  //cart services function variables
  itemsInCart$: Observable<Item[]> | undefined;
  cart$: Observable<Cart[]> | undefined;

  constructor(
    private _cartService: CartService,
    private _fakeStoreService: FakestoreService,
    private router: Router
  ) {}

  ngOnInit() {
    this._fakeStoreService.getAll().subscribe((products: any) => {
      // console.table(products);
      this.products = products; //populate products array with data from api service
    });
  }

  //send product id the user wants to view to the product details page
  viewProductDetails(id: any) {
    // console.log(id);
    this.router.navigate(['view-product', id]);
  }

  //add to cart button functionality on view all page
  addToCart(addedProduct: Product) {
    // console.log("Items in cart: ", this.itemsInCart)
    const quantity = 1;

    // assign properties for Item attributes to allow values in line 63 to be recognized
    type Item = {
      id: number;
      product: any;
      quantity: number;
    };

    if (addedProduct) {
      console.log(`Product added: ${addedProduct.id} - ${addedProduct.title}`);
      let cartItem: Item = { id: 0, product: addedProduct, quantity: quantity};

      this._cartService.createCartItem(cartItem);
    }
  }

  ngOnDestroy() {
    // if(this.subscription) {
    //   this.subscription.unsubscribe();
    // }
  }
}
