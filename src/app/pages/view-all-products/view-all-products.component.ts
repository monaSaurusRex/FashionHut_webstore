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

  products = [
    { productName: "Formal Jacket", price: 1000, imageURL: "assets/images/Jacket.png"},
    { productName: "Beige Coat", price: 2500, imageURL: "assets/images/Jacket.png"},
    { productName: "Casual Coat", price: 1500, imageURL: "assets/images/Jacket.png"},
    // { productName: "Casual Coat", price: 1500, colour: {colourName: "Beige"}, imageURL: "src/assets/stock_images/jacket"}
    { productName: "Formal Jacket", price: 1000, imageURL: "assets/images/Jacket.png"},
    { productName: "Beige Coat", price: 2500, imageURL: "assets/images/Jacket.png"},
    { productName: "Casual Coat", price: 1500, imageURL: "assets/images/Jacket.png"},
    { productName: "Formal Jacket", price: 1000, imageURL: "assets/images/Jacket.png"},
    { productName: "Beige Coat", price: 2500, imageURL: "assets/images/Jacket.png"},
    { productName: "Casual Coat", price: 1500, imageURL: "assets/images/Jacket.png"},

  ];


  ngOnInit() {}     
  
}
