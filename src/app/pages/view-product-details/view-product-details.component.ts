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
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { FakestoreService } from 'src/app/services/fakestoreapi/fakestore.service';

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.css'],
})
export class ViewProductDetailsComponent implements OnInit {
  title = 'increment-decrement';
  productQuantity: number = 1;

  addToCartIcon = faCartPlus;;
  increaseIcon = faPlus;
  decreaseIcon = faMinus;

  id: any;
  product!: Product;

  itemsInCart: number = 0;
  subscription!: Subscription;

  constructor(
    private _fakeStoreService: FakestoreService,
    private route: ActivatedRoute,
    private router: Router,
    private _cartService: CartService
  ) {}

  ngOnInit(): void {
    console.log((this.id = this.route.snapshot.params['id']));
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
    this._fakeStoreService.getOneProduct(this.id).subscribe((data: any) => {
      // console.log('product:', data);
      this.product = data;
    });
  }

  addToCart(product: any) {
    // console.log(product)
    if (product) {
      if (this.productQuantity >= 2) {
        //if the quantity selector is more than the default quantity
        this.itemsInCart += this.productQuantity;
      } else {
        this.itemsInCart++;
      }
    }

    console.log('Items in cart: ', this.itemsInCart);
    let count = {
      totalItems: this.itemsInCart,
    };
    // console.log(this._cartService.getTotalItemsInCart());
    // this._cartService.setTotalItemsInCart(count);
  }
}
