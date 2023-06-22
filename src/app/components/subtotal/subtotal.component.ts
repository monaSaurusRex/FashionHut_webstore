import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-subtotal',
  templateUrl: './subtotal.component.html',
  styleUrls: ['./subtotal.component.css']
})
export class SubtotalComponent implements OnInit {

  subTotal$: Observable<number> | undefined;

  constructor(private _cartService: CartService){
    this.subTotal$ = this._cartService.getSubtotal();
    console.log(this.subTotal$)
  }

  ngOnInit(){
      
  }

}
