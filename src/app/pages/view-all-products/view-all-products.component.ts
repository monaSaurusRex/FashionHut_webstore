import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faBars, faTimes, faUserAlt, faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit{
 
  cart = faShoppingCart;
  constructor (){}

 products: any [] = [];

  ngOnInit() {}     
  
}
