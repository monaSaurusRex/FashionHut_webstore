import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  faArrowLeft,
  faCartPlus,
  faMinus,
  faPlus,
  faSearch,
  faShoppingCart,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import { Observable, Subscription } from 'rxjs';
import { Cart, Item } from 'src/app/interfaces/cart';

import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { StoreService } from 'src/app/services/store-api/store.service';

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.css'],
})
export class ViewProductDetailsComponent implements OnInit {
  // quantity selector
  title = 'increment-decrement';
  productQuantity: number = 1;

  // icons
  addToCartIcon = faCartPlus;
  increaseIcon = faPlus;
  decreaseIcon = faMinus;

  // product model variables
  id: any; //used to store the current product's id that is being viewed
  product!: Product;

  //
  itemsInCart$: Observable<Item[]> | undefined;

  subscription!: Subscription;

  constructor(
    private _storeService: StoreService,
    private route: ActivatedRoute,
    private router: Router,
    private _cartService: CartService
  ) {}

  ngOnInit(): void {
    // console.log((this.id = this.route.snapshot.params['id']));
    this.getProductDetails((this.id = this.route.snapshot.params['id']));
    
  }

  quantity(value: string) {
    if (this.productQuantity < 20 && value == 'increase') {
      this.productQuantity += 1;
    } else if (this.productQuantity > 1 && value == 'decrease') {
      this.productQuantity -= 1;
    }
  }

  getProductDetails(id: number) {
    this._storeService.getOneProduct(this.id).subscribe((data: any) => {
      // console.log('product:', data);
      this.product = data;
    });
  }

  //When item is added to the cart
  addToCart(addedProduct: any) {
  
    if (addedProduct) {
      // console.log(
      //   `Product added: ${addedProduct.id} - ${addedProduct.title} Qty: ${this.productQuantity} Price: ${addedProduct.price}`
      // );
      console.log(`Product Added: ${addedProduct.title}  Qty: ${this.productQuantity}`)
      this._cartService.addItemToCart(addedProduct, this.productQuantity);
      // this._cartService.addItemToCart(addedProduct, this.productQuantity);
    }
  }
}
