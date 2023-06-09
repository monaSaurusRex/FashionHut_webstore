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
  productquantity: number = 1;

  cart = faShoppingCart;
  addToCartIcon = faCartPlus;
  increase = faPlus;
  decrease = faMinus;
  close = faTimes;
  back = faArrowLeft;

  id: any;
  product!: Product;
  
  itemsInCart: number = 0;
  subscription!: Subscription;
  

  constructor(private _fakeStoreService: FakestoreService, private route: ActivatedRoute, private router: Router, private _cartService:CartService) {}

  ngOnInit(): void{
    console.log(this.id = this.route.snapshot.params['id']);
    this.getProductDetails(this.id = this.route.snapshot.params['id']);

    this.subscription = this._cartService
      .getTotalItemsInCart()
      .subscribe((itemsInCart) => {
        this.itemsInCart = itemsInCart.totalItems;
      });
  }


  quantity(value: string) {
    if (this.productquantity < 20 && value == 'max') {
      this.productquantity += 1;
    } else if (this.productquantity > 1 && value == 'min') {
      this.productquantity -= 1;
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
      if(this.productquantity>=2){ //if the quantity selector is more than the default quantity
        this.itemsInCart += this.productquantity;
      }
      else{
        this.itemsInCart++;
      }

    }

    console.log("Items in cart: ", this.itemsInCart);
    let count = {
      totalItems: this.itemsInCart,
    };
    // console.log(this._cartService.getTotalItemsInCart());
    this._cartService.setTotalItemsInCart(count);
  }

  
}
