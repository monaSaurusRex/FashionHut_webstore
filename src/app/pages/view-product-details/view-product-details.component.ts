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
import { Product } from 'src/app/interfaces/product';
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
  addToCart = faCartPlus;
  increase = faPlus;
  decrease = faMinus;
  close = faTimes;
  back = faArrowLeft;

  id: any;
  product!: Product;

  

  constructor(private _fakeStoreService: FakestoreService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void{
    console.log(this.id = this.route.snapshot.params['id']);
    this.getProductDetails(this.id = this.route.snapshot.params['id']);
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
      console.log('product:', data);
      this.product = data;
    });
  }

  
}
