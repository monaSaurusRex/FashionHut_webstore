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
import { StoreService } from 'src/app/services/store-api/store.service';

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
    private _storeService: StoreService,
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
    this._storeService.getOneProduct(this.id).subscribe((data: any) => {
      // console.log('product:', data);
      this.product = data;
    });
  }

  //When item is added to the cart
  addToCart(addedProduct: Product) {

    // assign properties for Item attributes to allow values in line 63 to be recognized
    type Item = {
      id: number;
      product: any;
      quantity: number;
    };

    if (addedProduct) {
      console.log(`Product added: ${addedProduct.id} - ${addedProduct.title} Qty: ${this.productQuantity}`);
      let cartItem: Item = { id: 0, product: addedProduct, quantity: this.productQuantity};

      this._cartService.createCartItem(cartItem);
    }
  }
}
