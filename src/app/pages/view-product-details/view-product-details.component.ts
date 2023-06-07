import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faCartPlus, faMinus, faPlus, faSearch, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.css'],
})
export class ViewProductDetailsComponent implements OnInit{
  title = 'increment-decrement';
  productquantity:number=1;
  constructor(){}
  ngOnInit(): void {
      
  }
  quantity(value:string){
    if(this.productquantity < 20 && value == "max" ){
      this.productquantity +=1;
    }else if(this.productquantity>1 && value =="min"){
      this.productquantity -=1;
    }
    
    }

  

  cart = faShoppingCart;
  addToCart = faCartPlus;
  increase = faPlus;
  decrease = faMinus;
  close = faTimes;
  back = faArrowLeft;




}
